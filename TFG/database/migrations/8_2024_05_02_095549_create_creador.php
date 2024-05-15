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
        Schema::create('creador', function (Blueprint $table) {
            $table->id();
            $table->string("nombre_empresa");
            $table->string("logo");
            $table->string("tipo");
            $table->unsignedBigInteger("id_evento");
            $table->foreign("id_evento")->references("id")->on("eventos");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creador');
    }
};
