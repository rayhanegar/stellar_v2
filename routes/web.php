<?php

use App\Http\Controllers\JournalController;
use App\Http\Controllers\SnapController; 
use App\Http\Controllers\ProfileController;
use App\Models\Journal;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Carbon\Carbon;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $date = Carbon::now()->format('D, F j');
    $user = Auth::user();
    $todayJournals = Journal::where('user_id', $user->id)
                            ->whereDate('created_at', Carbon::today())
                            ->latest()
                            ->get();

    return Inertia::render('Dashboard', [
        'user' => $user,
        'date' => $date,
        'todayJournals' => $todayJournals,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('journals', JournalController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);


Route::resource('snaps', SnapController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']); 

Route::get('/reflections', function () {
    return Inertia::render('Reflections', [
       'user' => Auth::user(), 
    ]);
})->middleware(['auth', 'verified'])->name('reflections');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
