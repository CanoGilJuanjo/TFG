<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;

class ControllerUsuario extends Controller
{
    public function index()
    {
        return view("index");
    }

    public function find(string $id)
    {
        $usuarios = Usuario::find($id);
        return $usuarios;
    }
}
