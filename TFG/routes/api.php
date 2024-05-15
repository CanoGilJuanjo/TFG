<?php
use App\Http\Controllers\ControllerEvento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SchemaController;
use App\Http\Controllers\GenericCollectionController;

Route::get('/eventos',[ControllerEvento::class, 'getAll']);

Route::get('/evento/{id}',[ControllerEvento::class, 'show']);