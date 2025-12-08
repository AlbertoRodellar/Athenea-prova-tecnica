<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PacientController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Hello world
Route::get('/hello', function () {
    return response()->json(['message' => 'Hello, World!']);
});

// Pacients routes
Route::apiResource('pacients', PacientController::class);