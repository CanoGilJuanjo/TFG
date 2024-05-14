<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    public function carrito() 
    {
        return $this->hasOne(Carrito::class);
    }

    public function subscripciones() 
    {
        return $this->hasOne(Subscripciones::class);
    }
}
