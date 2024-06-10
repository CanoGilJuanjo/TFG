<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class EntradasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */


    public function run(): void
    {
        DB::table("entradas")->insert([
            [
                "id" => 2,
                "titulo_evento" => 'Plácido Domingo',
                "foto_evento" => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1epB7W80tYF4czQqAbpcVFtNwk2RrMciL2B5cgKZ1VA&s=10',
                "cantidad" => 1.00,
                "precio_total" => 30.00,
                "qr" => 'qr',
                "fecha_inicio" => '2024-03-10',
                "fecha_fin" => '2024-03-12',
                "id_usuario" => 1,
                "id_evento" => 15,
                "id_carrito" => 1,
                "created_at" => NULL,
                "updated_at" => NULL,
            ],
            [
                "id" => 3,
                "titulo_evento" => 'K2',
                "foto_evento" => 'https://www.despedidastemptation.com/wp-content/uploads/las-mejores-discotecas-de-malaga-discoteca-k2-malaga.jpeg',
                "cantidad" => 1.00,
                "precio_total" => 25.00,
                "qr" => 'qr',
                "fecha_inicio" => '2024-07-10',
                "fecha_fin" => '2024-07-10',
                "id_usuario" => 1,
                "id_evento" => 2,
                "id_carrito" => 2,
                "created_at" => NULL,
                "updated_at" => NULL,
            ],
            [
                "id" => 1,
                "titulo_evento" => 'Juanes',
                "foto_evento" => 'https://mmalaga.es/wp-content/uploads/2024/03/juanes.jpg',
                "cantidad" => 1.00,
                "precio_total" => 30.00,
                "qr" => 'qr',
                "fecha_inicio" => '2024-06-30',
                "fecha_fin" => '2024-06-30',
                "id_usuario" => 1,
                "id_evento" => 9,
                "id_carrito" => 1,
                "created_at" => NULL,
                "updated_at" => NULL,
            ],
        ]);
    }
}
