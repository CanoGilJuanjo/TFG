<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    use HasFactory;

    public $table = "eventos";

    public $fillable = ["id", "titulo", "descripcion", "qr","precio", "fecha_inicio", "fecha_fin", "foto","localizacion", "latitud","longitud","valoracion", "boost","created_at","updated_at"];    
}
