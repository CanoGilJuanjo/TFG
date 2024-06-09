<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("usuarios")->insert([
            [
                "id" => 1, 
                "nombre" => 'Admin', 
                "apellidos" => 'System', 
                "contrasena" => '$2y$10$rggeQ9a6s.bZh8QYyXElA.X.gLkRyQn4JWWoNVw.iI5wqTM1lqn5e',
                "edad" => 68,
                "localizacion" => 'Espana',
                "email" => 'AdministradorDellSystem@gmail.com',
                "nivel" => 0,
                "telefono" => 123456789,
                "created_at" => null,
                "updated_at" => null,
            ],
            [
                "id" => 2, 
                "nombre" => 'Historico', 
                "apellidos" => 'Historial', 
                "contrasena" => '$2y$10$rjhOiiXDmH/ruJ5RYjVCxu8HvPAmv3n6WmaqOF2aJGknj8C9fsd.O',
                "edad" => 1,
                "localizacion" => 'Espana',
                "email" => 'Historico@gmail.com',
                "nivel" => 0,
                "telefono" => 987654321,
                "created_at" => null,
                "updated_at" => null,
            ],
        ]);
    }
}
