<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Subscripciones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ControllerSubscripciones extends Controller
{
    public function insert($id, $tipo_subscripcion, $fecha_inicio, $fecha_fin, $id_usuario)
    {
        $subscripciones = DB::insert('insert into subscripciones values (?, ?, ?, ?, ?)', [$id, $tipo_subscripcion, $fecha_inicio, $fecha_fin, $id_usuario]);
        return response()->json($subscripciones);
    }
}
