<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControllerEvento;
use App\Http\Controllers\ControllerEntrada;
use App\Http\Controllers\ControllerUsuario;
use App\Http\Controllers\ControllerPrecio;
use Illuminate\Http\Request;
use App\Http\Controllers\SchemaController;
use App\Http\Controllers\GenericCollectionController;

Route::get('/', function () {
    return view('index');
});

Route::get('/eventos', function () {
    return view('Eventos');
});

Route::get('/contactos', function () {
    return view('Contactos');
});

Route::get('/crearcuenta', function () {
    return view('CrearCuenta');
});
Route::get('/iniciarsesion', function () {
    return view('IniciarSesion');
});
Route::get('/perfil', function () {
    return view('Perfil');
});

Route::get('/evento/{id}',function() {
    return view("evento");
});

Route::get("/temp", function () {
    return view("temp");   
});

Route::get("/temp2", function () {
    return view("temp2");   
});

Route::get("/temp3", function () {
    return view("temp3");   
});

Route::get("/carritoCompra", function () {
    return view("carrito");   
});

Route::get("/api/lista",[ControllerEvento::class, 'get_all']);

Route::get('/api/evento/{id}',[ControllerEvento::class, 'show']);

Route::get('/api/usuario/{id}',[ControllerUsuario::class, 'find']);

Route::get('/api/entradas',[ControllerEntrada::class, 'get_all']);

Route::get('/api/entradas/{id_usuario}',[ControllerEntrada::class, 'show']);

Route::get('/api/precios',[ControllerPrecio::class, 'get_all']);

Route::get('/api/eventoentrada/{id_usuario}',[ControllerEntrada::class, 'find']);