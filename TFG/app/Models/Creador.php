<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Creador extends Model
{
    use HasFactory;

    public function eventos() 
    {
        return $this->hasMany(Eventos::class);
    }
}
