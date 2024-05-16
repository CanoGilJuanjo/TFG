<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;

class ControllerUsuario extends Controller
{
    public function store(Request $request)
    {
        $usuario = new Usuario;
        $usuario -> nombre = $request -> input("nombre");
        $usuario -> apellidos = $request -> input("apellidos");
        $usuario -> contrasena = $request -> input("contrasena");
        $usuario -> edad = $request -> input("edad");
        $usuario -> email = $request -> input("email");
        $usuario -> localizacion = "España";
        $usuario -> nivel = 0;
        $usuario -> telefono = $request -> input("telefono");
        $usuario -> save();

        return redirect("/");
    }

    public function find(string $id)
    {
        $usuarios = Usuario::find($id);
        return $usuarios;
    }
}
