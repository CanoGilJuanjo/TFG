<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carrito extends Model
{
    use HasFactory;

    public function usuario() 
    {
        return $this->hasOne(Usuario::class);
    }

    public function plan()
    {
        return $this->hasMany(Plan::class);
    }

    public function entradas() 
    {
        return $this->hasMany(Entradas::class);
    }
}
