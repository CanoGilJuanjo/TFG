<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/eventos', function () {
    return view('Eventos');
});

Route::get('/contactos', function () {
    return view('Contactos');
Route::get('/crearcuenta', function () {
    return view('CrearCuenta');
});
Route::get('/iniciarsesion', function () {
    return view('IniciarSesion');
});
Route::get('/perfil', function () {
    return view('Perfil');
});
