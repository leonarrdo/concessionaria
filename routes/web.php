<?php

use App\Http\Controllers\ManufacturerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VehicleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('vehicle')->middleware(['auth', 'verified'])->group(function () {

    Route::get('/insert', function () {
        return Inertia::render('Vehicle/VehicleInsert', [
        ]);
    })->name('vehicle.insert');

    Route::get('/delete', function () {
        return Inertia::render('Vehicle/VehicleDelete', [
        ]);
    })->name('vehicle.delete');

    Route::post('/insert', [VehicleController::class, 'store'])->name('vehicle.store');

    Route::post('/delete/{id}', [VehicleController::class, 'destroy']);
});

Route::prefix('vehicle')->get('/', [VehicleController::class, 'index']);

Route::prefix('manufacturer')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [ManufacturerController::class, 'index']);
});

require __DIR__.'/auth.php';
