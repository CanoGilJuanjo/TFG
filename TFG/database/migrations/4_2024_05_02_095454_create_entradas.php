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
        Schema::create('entradas', function (Blueprint $table) {
            $table->id();
            $table->decimal("cantidad");
            $table->decimal("precio_total");
            $table->string("qr");
            $table->date("fecha_inicio");
            $table->date("fecha_fin");
            $table->unsignedBigInteger("id_usuario");
            $table->unsignedBigInteger("id_evento");
            $table->unsignedBigInteger("id_carrito");
            $table->foreign("id_usuario")->references("id")->on("usuarios");
            $table->foreign("id_evento")->references("id")->on("eventos");
            $table->foreign("id_carrito")->references("id")->on("carrito");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entradas');
    }
};
