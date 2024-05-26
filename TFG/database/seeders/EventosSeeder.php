<?php

namespace Database\Seeders;
use Iluminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class EventosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        DB::table("eventos")->insert([
            ["id"=>1,"titulo"=>"Rosse","descripcion"=>"Vive la fiesta con Rosse, las mejores canciones del momento","qr"=>"","precio"=>20.99,"fecha_inicio"=>"2024-06-01","fecha_fin"=>"2024-06-01","foto"=>"https://festgra.com/wp-content/uploads/2019/11/rosse-vip-club-malaga-discoteca-fiesta-grande-.jpg","localizacion"=>"Cmo de S. Rafael, 93, Carretera de Cádiz, 29006 Málaga","latitud"=>-4.452977837449125,"longitud"=>36.705325241571266,"valoracion"=>2,"boost"=>"Rosse","created_at"=>date('Y-m-d h:i:m'),"updated_at"=>date('Y-m-d h:i:m')],
            ["id"=>2,"titulo"=>"K2","descripcion"=>"Fiesta, musica, alcohol y mucha diversion, ¿Piensas perderte esta experiencia?","qr"=>"","precio"=>15.60,"fecha_inicio"=>"2024-07-10","fecha_fin"=>"2024-07-10","foto"=>"https://www.despedidastemptation.com/wp-content/uploads/las-mejores-discotecas-de-malaga-discoteca-k2-malaga.jpeg","localizacion"=>"Av. de Isaac Peral, 43, Carretera de Cádiz, 29004 Málaga","latitud"=>-4.45980,"longitud"=>36.69199,"valoracion"=>4,"boost"=>"K2","created_at"=>date('Y-m-d h:i:m'),"updated_at"=>date('Y-m-d h:i:m')],
            ["id"=>3,"titulo"=>"Jaleo","descripcion"=>"","qr"=>"","precio"=>10.00,"fecha_inicio"=>"2024-08-20","fecha_fin"=>"2024-08-25","foto"=>"https://www.malagasesale.com/wp-content/uploads/118829019_1161885664194724_8206743658028533995_n.jpg","localizacion"=>"","latitud"=>-4.467372525282044,"longitud"=>36.7206645409886,"valoracion"=>3,"boost"=>"Jaleo SL","created_at"=>date('Y-m-d h:i:m'),"updated_at"=>date('Y-m-d h:i:m')],
            ["id"=>4,"titulo"=>"Reggaeton Beach Festival","descripcion"=>"","qr"=>"","precio"=>25.9,"fecha_inicio"=>"2024-09-15","fecha_fin"=>"2024-09-20","foto"=>"https://estaticos.esmadrid.com/cdn/farfuture/QolHHrrdfMkVx4nFCXdEi-ubWooDOs5CDOhPiFNXKGw/mtime:1700572835/sites/default/files/eventos/eventos/reggaeton_beach_festival_1.jpg","localizacion"=>"Playa Playazo Rio Seco, Nerja.","latitud"=>-3.899700635574178,"longitud"=>36.743705673722474,"valoracion"=>5,"boost"=>"Ayuntamiento de Nerja","created_at"=>date('Y-m-d h:i:m'),"updated_at"=>date('Y-m-d h:i:m')],
            ["id"=>5,"titulo"=>"Puro Latino","descripcion"=>"Con el invitado especial Chirs como DJ en esta sesión de musica, con un ambiente insuperable y todo lo que te imaginas, estamos preparados para la fiesta.","qr"=>"","precio"=>25.9,"fecha_inicio"=>"2024-06-19","fecha_fin"=>"2024-06-20","foto"=>"https://www.diariodecadiz.es/2023/10/05/noticias-provincia-cadiz/imagen-edicion-Puro-Latino-Puerto_1836126899_194089312_667x375.jpg","localizacion"=>"","latitud"=>-4.513778091549178,"longitud"=>36.62069832234932,"valoracion"=>3,"boost"=>"Ayuntamiento de Nerja","created_at"=>date('Y-m-d h:i:m'),"updated_at"=>date('Y-m-d h:i:m')],
            ["id"=>6,"titulo"=>"Concierto sergio dalma","descripcion"=>"","qr"=>"","precio"=>60.50,"fecha_inicio"=>"2024-06-28","fecha_fin"=>"2024-06-28","foto"=>"https://cdn-p.smehost.net/sites/ac8769d0b5a24f4caa78aab9d5fa4c47/wp-content/uploads/2023/11/Web-baja.jpg","localizacion"=>"Auditorio Municipal Cortijo de Torres, C. Paquiro, 9 Málaga","latitud"=>-4.467003353505538,"longitud"=>36.698957703793404,"valoracion"=>5,"boost"=>"Eternidad Producciones AIE. - V0169968","created_at"=>date('Y-m-d h:i:m'),"updated_at"=>date('Y-m-d h:i:m')],
            ["id"=>7,"titulo"=>"QUEENS OF THE STONE AGE","descripcion"=>"Queens of the Stone Age, la mítica banda de rock aclamada a nivel mundial, hará parada en Fuengirola dentro de su extensa gira internacional. Con su inconfundible sonido y una carrera musical repleta de éxitos, el próximo 23 de Junio de 2024, el grupo liderado por Josh Hommes desembarcará en la ciudad malagueña con su imponente y enérgico directo, además, no estarán solos, pues estarán acompañados por una banda telonera aún por desvelar pero que promete una gran sorpresa. ","qr"=>"","precio"=>55,"fecha_inicio"=>"2024-06-23","fecha_fin"=>"2024-06-23","foto"=>"https://dynamicmedia.livenationinternational.com/a/w/m/08a8b2b6-ccff-4af5-8b46-c2dad7ac1a97.jpg","localizacion"=>"Marenostrum fuengirola","latitud"=>-4.629283998715305,"longitud"=>36.523582965453144,"valoracion"=>4,"boost"=>"Ayuntamiento de fuengirola","created_at"=>date('Y-m-d h:i:m'),"updated_at"=>date('Y-m-d h:i:m')],
            ["id"=>8,"titulo"=>"Concierto Rozalén en Málaga","descripcion"=>"","qr"=>"","precio"=>49.50,"fecha_inicio"=>"2024-06-15","fecha_fin"=>"2024-06-15","foto"=>"https://malagadecultura.com/wp-content/uploads/2023/12/Rozalen.jpg","localizacion"=>"Plaza de Toros de la Malagueta, P.º Reding, 20, Málaga-Este, 29016 Málaga","latitud"=>36.720365398572675,"longitud"=>-4.410775949056343,"valoracion"=>3,"boost"=>"","created_at"=>date('Y-m-d h:i:m'),"updated_at"=>date('Y-m-d h:i:m')],
        ]);
    }
}