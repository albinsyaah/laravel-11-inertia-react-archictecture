<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    sleep(1);
    return Inertia::render('Home' , ['name' => 'lah']);
});

Route::resource('posts', PostController::class);

