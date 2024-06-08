<?php

namespace App\Http\Controllers;

use App\Models\Snap;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
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
        $query = Snap::with('user:id')->latest();

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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'url' => 'required|max:50', // VARCHAR(50)
            'title' => 'required|max:20', // TEXT type
        ]);

        $request->user()->journals()->create($validated);

        return redirect(route('snaps.index'));   
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
    public function update(Request $request, Snap $snap)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Snap $snap)
    {
        //
    }
}
