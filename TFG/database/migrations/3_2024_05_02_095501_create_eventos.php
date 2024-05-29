<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('eventos', function (Blueprint $table) {
            $table->id();
            $table->string("titulo", 500);
            $table->string("descripcion", 500);
            $table->string("qr", 500);
            $table->decimal("precio");
            $table->date("fecha_inicio");
            $table->date("fecha_fin");
            $table->string("foto", 500);
            $table->string("localizacion", 500);
            $table->decimal("latitud");
            $table->decimal("longitud");
            $table->integer("valoracion");
            $table->string("boost", 500);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eventos');
    }
};