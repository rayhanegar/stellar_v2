<?php

namespace App\Http\Controllers;

use App\Models\Snap;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SnapController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $user = Auth::user();
        $query = Snap::where('user_id', $user->id)->latest();

        if ($request->input('filter') === 'today') {
            $query->whereDate('created_at', now()->toDateString());
        }

        $snaps = $query->paginate(5)->through(function ($snap) {
            return [
                'id' => $snap->id,
                'url' => $snap->url,
                'title' => $snap->title,
                'created_at' => $snap->created_at->format('d/m/Y'),
                'user' => $snap->user,
            ];
        });

        return Inertia::render('Snaps/Index', [
            'snaps' => $snaps,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('snaps.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'url' => 'required|image|file|max:4096', // Ensure 'url' is a valid image file
            'title' => 'required|max:20',
        ]);

        // Store the image in the 'posted-snaps' directory
        $imagePath = $request->file('url')->store('snap-images');

        // Create a new Snap record in the database
        $snap = $request->user()->snaps()->create([
            'url' => 'storage/' . $imagePath, // Store the image path in the database
            'title' => $validated['title'], // Use the validated title from the request
        ]);

        // Check if the Snap was created successfully
        if ($snap) {
            // Redirect to the index page with a success message
            return redirect()->route('snaps.index')->with('success', 'Snap created successfully');
        } else {
            // If Snap creation fails, redirect back with an error message
            return back()->withErrors('Failed to create Snap');
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(Snap $snap)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Snap $snap)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Snap $snap): RedirectResponse
    {
        Gate::authorize('update', $snap);

        $validated = $request->validate([
            'url' => 'required|image|file|max:4096',
            'title' => 'required|max:20',
        ]);

        $snap->update($validated);

        return redirect(route('snaps.index'));  // Make sure the route name is correct
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Snap $snap): RedirectResponse
    {
        Gate::authorize('delete', $snap);

        $snap->delete();

        return redirect(route('snaps.index'));
    }

}
