<?php

use Illuminate\Support\Facades\Route;

Route::get('/greet', function () {
    return view('greeting');
});
