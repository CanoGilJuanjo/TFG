<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/Eventos', function () {
    return view('Eventos');
});

Route::get('/Admin', function () {
     return view('Admin');
 });
