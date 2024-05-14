<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Eventos;
use Illuminate\Http\Request;

class ControllerEvento extends Controller
{
    public function getAll()
    {
        $eventos = Eventos::all();
        return response()->json($eventos);
    }

    public function show(string $id)
    {
        $evento = Eventos::find($id);
        return $evento;
    }
}
