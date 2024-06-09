<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Entradas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ControllerEntrada extends Controller
{
    public function get_all()
    {
        $entradas = Entradas::all();
        return response()->json($entradas);
    }

    public function show(string $id_usuario)
    {
        $entradas = DB::select('select * from entradas where id_usuario = ?', [$id_usuario]);
        return response()->json($entradas);
    }

    public function find(string $id_usuario)
    {
        $entradas = DB::select('select id_evento from entradas where id_usuario = ?', [$id_usuario]);
        return response()->json($entradas);
    }

    public function delete(string $titulo) 
    {
        $entradas = DB::delete('delete from entradas where titulo_evento = ?', [$titulo]);
        return response()->json($entradas);
    }
}
