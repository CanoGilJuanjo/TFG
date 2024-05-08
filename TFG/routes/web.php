<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/Eventos', function () {
    return view('Eventos');
});
Route::get('/Mapa', function () {
    return view('MapaGeolocalizacion');
});
Route::get('/CrearCuenta', function () {
    return view('CrearCuenta');
});
Route::get('/IniciarSesion', function () {
    return view('IniciarSesion');
});
Route::get('/Perfil', function () {
    return view('Perfil');
});