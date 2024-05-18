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
            $table->increments("id");
            $table->string("titulo");
            $table->string("descripcion");
            $table->string("qr");
            $table->decimal("precio");
            $table->date("fecha_inicio");
            $table->date("fecha_fin");
            $table->string("foto");
            $table->string("localizacion");
            $table->decimal("latitud");
            $table->decimal("longitud");
            $table->integer("valoracion");
            $table->string("boost");
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