<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entradas extends Model
{
    use HasFactory;

    public function carrito() 
    {
        return $this->belongsTo(Carrito::class);
    }

    public function eventos() 
    {
        return $this->hasOne(Eventos::class);
    }
}
