<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControllerEvento;
use App\Http\Controllers\ControllerUsuario;
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
Route::get("/planes",function(){
    return view("Planes");
});

Route::get("/api/lista",[ControllerEvento::class, 'get_all']);

Route::get('/api/evento/{id}',[ControllerEvento::class, 'show']);

Route::get('/api/usuario/{id}',[ControllerUsuario::class, 'find']);

Route::get('/evento/{id}',function(){return view("evento");});
