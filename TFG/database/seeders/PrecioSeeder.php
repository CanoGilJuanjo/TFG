<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class PrecioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("precios")->insert([
            [
                "precio" => 55.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 1
            ],
            [
                "precio" => 35.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" =>1
            ],
            [
                "precio" => 45.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 2
            ],
            [
                "precio" => 25.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 2
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 3
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 3
            ],
            [
                "precio" => 55.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 4
            ],
            [
                "precio" => 35.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 4
            ],
            [
                "precio" => 40.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 5
            ],
            [
                "precio" => 20.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 5
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 6
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 6
            ],
            [
                "precio" => 55.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 7
            ],
            [
                "precio" => 35.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 7
            ],
            [
                "precio" => 45.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 8
            ],
            [
                "precio" => 25.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 8
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 9
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 9
            ],
            [
                "precio" => 55.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 10
            ],
            [
                "precio" => 35.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 10
            ],
            /* [
                "precio" => 40.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 11
            ],
            [
                "precio" => 20.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 11
            ] ,*/
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 12
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 12
            ],
            [
                "precio" => 55.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 13
            ],
            [
                "precio" => 35.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 13
            ],
            [
                "precio" => 45.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 14
            ],
            [
                "precio" => 25.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 14
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 15
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 15
            ],
            [
                "precio" => 55.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 16
            ],
            [
                "precio" => 35.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 16
            ],
            [
                "precio" => 40.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 17
            ],
            [
                "precio" => 20.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 17
            ],
            [
                "precio" => 0.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 18
            ],
            [
                "precio" => 5.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 18
            ],
            [
                "precio" => 55.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 19
            ],
            [
                "precio" => 35.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 19
            ],
            [
                "precio" => 45.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 20
            ],
            [
                "precio" => 25.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 20
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 21
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 21
            ],
            [
                "precio" => 55.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 22
            ],
            [
                "precio" => 35.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 22
            ],
            [
                "precio" => 40.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 23
            ],
            [
                "precio" => 20.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 23
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 24
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 24
            ],
            [
                "precio" => 55.00, 
                "descripcion" => 'Acceso VIP a todas las zonas y 1 consumición', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 25
            ],
            [
                "precio" => 35.00, 
                "descripcion" => 'Acceso general, sin consumición', 
                "tipo_precio" => 'General', 
                "id_evento" => 25
            ],

            [
                "precio" => 0, 
                "descripcion" => 'Accesogeneral', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 26
            ],
            [
                "precio" => 20.00, 
                "descripcion" => 'Acceso general, guia', 
                "tipo_precio" => 'General', 
                "id_evento" => 26
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 27
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 27
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 28
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 28
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 29
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 29
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 30
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 30
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 31
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 31
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 31
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 31
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 32
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 32
            ],
            [
                "precio" => 50.00, 
                "descripcion" => 'Acceso VIP a todas las zonas, pulsera, y 2 consumiciones', 
                "tipo_precio" => 'VIP', 
                "id_evento" => 33
            ],
            [
                "precio" => 30.00, 
                "descripcion" => 'Acceso general, una consumición incluida', 
                "tipo_precio" => 'General', 
                "id_evento" => 33
            ]
        ]);
    }
}