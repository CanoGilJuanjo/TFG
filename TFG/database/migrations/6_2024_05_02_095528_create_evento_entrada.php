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
        Schema::create('evento_entrada', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("id_evento");
            $table->unsignedBigInteger("id_entrada");
            $table->foreign("id_evento")->references("id")->on("eventos");
            $table->foreign("id_entrada")->references("id")->on("entradas");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evento_entrada');
    }
};
