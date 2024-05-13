<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/Eventos', function () {
    return view('Eventos');
});

Route::get('/contactos', function () {
    return view('Contactos');
});
