<?php

namespace App\Http\Controllers;

use App\Models\Journal;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Gate;
// use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response;

class JournalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $query = Journal::with('user:id')->latest();

        if ($request->input('filter') === 'today') {
            $query->whereDate('created_at', now()->toDateString());
        }

        $journals = $query->paginate(5)->through(function ($journal) {
            return [
                'id' => $journal->id,
                'title' => $journal->title,
                'content' => $journal->content,
                'created_at' => $journal->created_at->format('d/m/Y'),
                'user' => $journal->user,
            ];
        });

        return Inertia::render('Journals/Index', [
            'journals' => $journals,
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
            'title' => 'required|max:50', // VARCHAR(50)
            'content' => 'required', // TEXT type
        ]);

        $request->user()->journals()->create($validated);

        return redirect(route('journals.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Journal $journal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Journal $journal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Journal $journal): RedirectResponse
    {
        Gate::authorize('update', $journal);

        $validated = $request->validate([
            'title' => 'required|max:50',
            'content' => 'required',
        ]);

        $journal->update($validated);

        return redirect(route('journals.index'));  // Make sure the route name is correct
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Journal $journal): RedirectResponse
    {
        Gate::authorize('delete', $journal);

        $journal->delete(); 

        return redirect(route('journals.index')); 
    }
}
