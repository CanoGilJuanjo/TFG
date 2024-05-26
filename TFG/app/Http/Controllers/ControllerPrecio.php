<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Precios;
use Illuminate\Http\Request;

class ControllerPrecio extends Controller
{
    public function get_all()
    {
        $precios = Precios::all();
        return response()->json($precios);
    }
}
