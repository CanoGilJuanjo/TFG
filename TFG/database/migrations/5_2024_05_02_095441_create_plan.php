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
        Schema::create('plan', function (Blueprint $table) {
            $table->id();
            $table->decimal("precio_total");
            $table->date("fecha_inicio");
            $table->date("fecha_fin");
            $table->unsignedBigInteger("id_entrada");
            $table->unsignedBigInteger("id_carrito");
            $table->foreign("id_entrada")->references("id")->on("entradas");
            $table->foreign("id_carrito")->references("id")->on("carrito");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan');
    }
};