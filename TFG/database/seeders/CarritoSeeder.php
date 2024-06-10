<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class CarritoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("carrito")->insert([
            [
                "id" => 1,
                "precio_total" => 0.00,
                "id_usuario" => 1,
                "created_at" => NULL,
                "updated_at" => NULL,
            ],
            [
                "id" => 2,
                "precio_total" => 0.00,
                "id_usuario" => 2,
                "created_at" => NULL,
                "updated_at" => NULL,
            ],
        ]);
    }
}
