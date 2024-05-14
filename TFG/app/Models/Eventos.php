<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    use HasFactory;

    protected $table = "eventos";

    protected $fillable = ["id", "titulo", "descripcion", "qr", "fecha_inicio", "fecha_fin", "foto", "localizacion", "boost"];

    
}
