<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            [
                "id"=>1,
                "titulo"=>"Rosse",
                "descripcion"=>"Vive la fiesta con Rosse, las mejores canciones del momento",
                "qr"=>"",
                "precio"=>20.99,
                "fecha_inicio"=>"2024-06-01",
                "fecha_fin"=>"2024-06-01",
                "foto"=>"https://festgra.com/wp-content/uploads/2019/11/rosse-vip-club-malaga-discoteca-fiesta-grande-.jpg",
                "localizacion"=>"Cmo de S. Rafael, 93, Carretera de Cádiz, 29006 Málaga",
                "latitud"=>-4.452977837449125,
                "longitud"=>36.705325241571266,
                "valoracion"=>2,
                "boost"=>"Rosse"
            ],
            ["id"=>2,"titulo"=>"K2","descripcion"=>"Fiesta, musica, alcohol y mucha diversion, ¿Piensas perderte esta experiencia?","qr"=>"","precio"=>15.60,"fecha_inicio"=>"2024-07-10","fecha_fin"=>"2024-07-10","foto"=>"https://www.despedidastemptation.com/wp-content/uploads/las-mejores-discotecas-de-malaga-discoteca-k2-malaga.jpeg","localizacion"=>"Av. de Isaac Peral, 43, Carretera de Cádiz, 29004 Málaga","latitud"=>-4.45980,"longitud"=>36.69199,"valoracion"=>4,"boost"=>"K2"],
            ["id"=>3,"titulo"=>"Jaleo","descripcion"=>"","qr"=>"","precio"=>10.00,"fecha_inicio"=>"2024-08-20","fecha_fin"=>"2024-08-25","foto"=>"https://www.malagasesale.com/wp-content/uploads/118829019_1161885664194724_8206743658028533995_n.jpg","localizacion"=>"","latitud"=>-4.467372525282044,"longitud"=>36.7206645409886,"valoracion"=>3,"boost"=>"Jaleo SL"],
            ["id"=>4,"titulo"=>"Reggaeton Beach Festival","descripcion"=>"","qr"=>"","precio"=>25.9,"fecha_inicio"=>"2024-09-15","fecha_fin"=>"2024-09-20","foto"=>"https://estaticos.esmadrid.com/cdn/farfuture/QolHHrrdfMkVx4nFCXdEi-ubWooDOs5CDOhPiFNXKGw/mtime:1700572835/sites/default/files/eventos/eventos/reggaeton_beach_festival_1.jpg","localizacion"=>"Playa Playazo Rio Seco, Nerja.","latitud"=>-3.899700635574178,"longitud"=>36.743705673722474,"valoracion"=>5,"boost"=>"Ayuntamiento de Nerja"],
            ["id"=>5,"titulo"=>"Puro Latino","descripcion"=>"Con el invitado especial Chirs como DJ en esta sesión de musica, con un ambiente insuperable y todo lo que te imaginas, estamos preparados para la fiesta.","qr"=>"","precio"=>25.90,"fecha_inicio"=>"2024-06-19","fecha_fin"=>"2024-06-20","foto"=>"https://www.diariodecadiz.es/2023/10/05/noticias-provincia-cadiz/imagen-edicion-Puro-Latino-Puerto_1836126899_194089312_667x375.jpg","localizacion"=>"","latitud"=>-4.513778091549178,"longitud"=>36.62069832234932,"valoracion"=>3,"boost"=>"Ayuntamiento de Nerja"],
            ["id"=>6,"titulo"=>"Concierto sergio dalma","descripcion"=>"","qr"=>"","precio"=>60.50,"fecha_inicio"=>"2024-06-28","fecha_fin"=>"2024-06-28","foto"=>"https://cdn-p.smehost.net/sites/ac8769d0b5a24f4caa78aab9d5fa4c47/wp-content/uploads/2023/11/Web-baja.jpg","localizacion"=>"Auditorio Municipal Cortijo de Torres, C. Paquiro, 9 Málaga","latitud"=>-4.467003353505538,"longitud"=>36.698957703793404,"valoracion"=>5,"boost"=>"Eternidad Producciones AIE. - V0169968"],
            ["id"=>7,"titulo"=>"QUEENS OF THE STONE AGE","descripcion"=>"Queens of the Stone Age, la mítica banda de rock aclamada a nivel mundial, hará parada en Fuengirola dentro de su extensa gira internacional. Con su inconfundible sonido y una carrera musical repleta de éxitos, el próximo 23 de Junio de 2024, el grupo liderado por Josh Hommes desembarcará en la ciudad malagueña con su imponente y enérgico directo, además, no estarán solos, pues estarán acompañados por una banda telonera aún por desvelar pero que promete una gran sorpresa. ","qr"=>"","precio"=>55.00,"fecha_inicio"=>"2024-06-23","fecha_fin"=>"2024-06-23","foto"=>"https://dynamicmedia.livenationinternational.com/a/w/m/08a8b2b6-ccff-4af5-8b46-c2dad7ac1a97.jpg","localizacion"=>"Marenostrum fuengirola","latitud"=>-4.629283998715305,"longitud"=>36.523582965453144,"valoracion"=>4,"boost"=>"Ayuntamiento de fuengirola"],
            ["id"=>8,"titulo"=>"Concierto Rozalén en Málaga","descripcion"=>"","qr"=>"","precio"=>49.50,"fecha_inicio"=>"2024-06-15","fecha_fin"=>"2024-06-15","foto"=>"https://malagadecultura.com/wp-content/uploads/2023/12/Rozalen.jpg","localizacion"=>"Plaza de Toros de la Malagueta, P.º Reding, 20, Málaga-Este, 29016 Málaga","latitud"=>-4.410775949056343,"longitud"=>36.720365398572675,"valoracion"=>3,"boost"=>""],
            [
                "id" => 9,
                "titulo"=>"Juanes",
                "descripcion"=>"Con 4 Grammys guardados en una maleta junto con millones de éxitos mundiales desde la Camisa Negra hasta A Dios le Pido o Nada Valgo sin tu Amor, aterriza Juanes en Málaga el próximo 30 de junio para ponerle su melodía única a una velada de verano que va a ser inolvidable.",
                "qr"=>"",
                "precio"=>42.50,
                "fecha_inicio"=>"2024-06-30",
                "fecha_fin"=>"2024-06-30",
                "foto"=>"https://mmalaga.es/wp-content/uploads/2024/03/juanes.jpg",
                "localizacion"=>"Málaga Forum",
                "latitud"=>-4.487509593922004,
                "longitud"=>36.69115055913355,
                "valoracion"=>4,
                "boost"=>"Yamaha",
            ],
            [
                "id"=>10,
                "titulo"=>"India Martínez",
                "descripcion"=>"Compra tus entradas para el evento de India Martínez que se va a celebrar en el Auditorio Municipal de Cortijo de Torres.",
                "qr"=>"",
                "precio"=>38.50,
                "fecha_inicio"=>"2024-06-15",
                "fecha_fin"=>"2024-06-15",
                "foto"=>"https://d2cyzdatssrhg7.cloudfront.net/export/sites/default/ets/.content/products/img/00-000894F.jpg?__locale=es",
                "localizacion"=>"Auditorio Municipal Cortijo de Torres",
                "latitud"=>-4.466977771960777,
                "longitud"=>36.698947085147076,
                "valoracion"=>3,
                "boost"=>"Eternidad Producciones AIE - V01699685",
            ],
            [
                "id"=>12,
                "titulo" => "Feria del Libro",
                "descripcion" => "Feria con presencia de autores y editoriales",
                "qr" => "QR1234567891",
                "precio" => 35.00,
                "fecha_inicio" => "2024-08-10",
                "fecha_fin" => "2024-08-14",
                "foto" => "https://ferialibromalaga.com/wp-content/uploads/2023/04/logo_web-03.svg",
                "localizacion" => "Parque de Málaga",
                "latitud" => 36.719444,
                "longitud" => -4.42,
                "valoracion" => 4,
                "boost" => "Literatura y Cultura"
            ],
            [
                "id"=>13,
                "titulo" => "Sohail Jazz Festival",
                "descripcion" => "Festival de Jazz con una artista internacional",
                "qr" => "QR1234567892",
                "precio" => 45.00,
                "fecha_inicio" => "2024-09-01",
                "fecha_fin" => "2024-09-03",
                "foto" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0bzFH0XwWYFAs9xJA-1U2f0Lz6DW8U4KEWFG6SYVFdgzcJvXqlrc6LOFHQ&s=10",
                "localizacion" => "Teatro Cervantes",
                "latitud" => 36.722556,
                "longitud" => -4.419391,
                "valoracion" => 5,
                "boost" => "Jazz y Música"
            ],
            [
                "id"=>14,
                "titulo" => "Exposición de Arte Moderno",
                "descripcion" => "Exposición de obras de arte moderno",
                "qr" => "QR1234567893",
                "precio" => 25.00,
                "fecha_inicio" => "2024-09-10",
                "fecha_fin" => "2024-09-15",
                "foto" => "https://poble-espanyol.com/wp-content/uploads/2023/01/Poble-Espanyol-Exposicion-barcelona.jpg",
                "localizacion" => "Centro de Arte Contemporáneo de Málaga",
                "latitud" => 36.717351,
                "longitud" => -4.423661,
                "valoracion" => 4,
                "boost" => "Arte y Cultura"
            ],
            [
                "id"=>15,
                "titulo" => "Festival de Cine",
                "descripcion" => "Festival de cine con proyecciones y premios",
                "qr" => "QR1234567895",
                "precio" => 30.00,
                "fecha_inicio" => "2024-10-15",
                "fecha_fin" => "2024-10-18",
                "foto" => "https://festivaldemalaga.com/data/uploads/sliders/4156a1ba7cc41691ee4d3eccc5b41157.jpg",
                "localizacion" => "Cine Albéniz",
                "latitud" => 36.721458,
                "longitud" => -4.416324,
                "valoracion" => 4,
                "boost" => "Cine y Cultura"
            ],
            [
                "id"=>16,
                "titulo" => "Plácido Domingo",
                "descripcion" => "Concierto de ópera con cantantes internacionales",
                "qr" => "QR1234567906",
                "precio" => 60.00,
                "fecha_inicio" => "2024-03-10",
                "fecha_fin" => "2024-03-12",
                "foto" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1epB7W80tYF4czQqAbpcVFtNwk2RrMciL2B5cgKZ1VA&s=10",
                "localizacion" => "Teatro Cervantes",
                "latitud" => 36.722556,
                "longitud" => -4.419391,
                "valoracion" => 5,
                "boost" => "Ópera y Música"
            ],
            [
                "id"=>17,
                "titulo" => "Festival de Teatro",
                "descripcion" => "Festival de teatro con actuaciones de compañías internacionales",
                "qr" => "QR1234567908",
                "precio" => 35.00,
                "fecha_inicio" => "2024-05-10",
                "fecha_fin" => "2024-05-15",
                "foto" => "https://www.teatrocervantes.com/public/images/content/ciclos/371295784f354afc9207894dfcb60ec5.jpg",
                "localizacion" => "Teatro Cervantes",
                "latitud" => 36.722556,
                "longitud" => -4.419391,
                "valoracion" => 4,
                "boost" => "Teatro y Cultura"
            ],
            [
                "id"=>18,
                "titulo" => "Caos",
                "descripcion" => "Espectáculo de contraste, que no acepta el desorden de la vida como un obstáculo, sino como una oportunidad.",
                "qr" => "QR1234567909",
                "precio" => 20.00,
                "fecha_inicio" => "2024-06-10",
                "fecha_fin" => "2024-06-15",
                "foto" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWU7ttWGx8xrtdqur4I1Y3GNhEKlN8R81xjnlDILUdrA&s",
                "localizacion" => "Plaza de la Constitución",
                "latitud" => 36.721944,
                "longitud" => -4.416944,
                "valoracion" => 4,
                "boost" => "Gastronomía y Cultura"
            ],
            [
                "id"=>19,
                "titulo" => "Sobre arte urbano",
                "descripcion" => "Festival de arte urbano con intervenciones en espacios públicos",
                "qr" => "QR1234567910",
                "precio" => 0.00,
                "fecha_inicio" => "2024-07-10",
                "fecha_fin" => "2024-07-15",
                "foto" => "https://festivaldemalaga.com/maf/Content/Source/img/actividades/20230202173653_mharras1080x1080_ins.jpg",
                "localizacion" => "Barrio de Soho",
                "latitud" => 36.720,
                "longitud" => -4.420,
                "valoracion" => 4,
                "boost" => "Arte Urbano y Cultura"
            ],
            [
                "id"=>20,
                "titulo" => "Sala Leblon",
                "descripcion" => "Fiestas, diversión y mucho más en Sala Leblon",
                "qr" => "QR1234567907",
                "precio" => 25.00,
                "fecha_inicio" => "2024-04-10",
                "fecha_fin" => "2024-04-15",
                "foto" => "https://s3.ppllstatics.com/diariosur/www/pre2017/multimedia/prensa/noticias/200807/24/fotos/024D4UL-SOC-P1_1.jpg",
                "localizacion" => "C/ Juan Gris, 5",
                "latitud" => 36.723889,
                "longitud" => -4.4175,
                "valoracion" => 4,
                "boost" => "Artesanía y Cultura"
            ],
            [
                "id"=>21,
                "titulo" => "Pablo López",
                "descripcion" => "Concierto de pop con artistas del momento",
                "qr" => "QR1234567896",
                "precio" => 55.00,
                "fecha_inicio" => "2024-11-01",
                "fecha_fin" => "2024-11-01",
                "foto" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUdmVx0A-di2R6hZ5RszjMn_0aS7Q_97-FslvPR13GoIOFkjh9kO78sogg2A&s=10",
                "localizacion" => "Palacio de Deportes José María Martín Carpena",
                "latitud" => 36.675421,
                "longitud" => -4.499307,
                "valoracion" => 5,
                "boost" => "Pop y Música"
            ],
            [
                "id"=>22,
                "titulo" => "Feria de Gastronomía",
                "descripcion" => "Feria con los mejores chefs y degustaciones",
                "qr" => "QR1234567897",
                "precio" => 35.00,
                "fecha_inicio" => "2024-11-10",
                "fecha_fin" => "2024-11-13",
                "foto" => "https://www.thegourmetjournal.com/wp-content/uploads/2021/05/Aceite-de-Oliva-Virgen-Extra-de-Malaga.jpg",
                "localizacion" => "Palacio de Ferias y Congresos de Málaga",
                "latitud" => 36.715,
                "longitud" => -4.473,
                "valoracion" => 4,
                "boost" => "Gastronomía y Cultura"
            ],
            [
                "id"=>23,
                "titulo" => "Música / XII Málaga Clásica.
                Resonancias del espíritu",
                "descripcion" => "Festival con las mejores orquestas de música clásica",
                "qr" => "QR1234567898",
                "precio" => 45.00,
                "fecha_inicio" => "2024-12-01",
                "fecha_fin" => "2024-12-03",
                "foto" => "https://b3488972.smushcdn.com/3488972/wp-content/uploads/2024/04/malaga-clasica-2024.jpg?lossy=2&strip=1&webp=1",
                "localizacion" => "Auditorio Municipal de Málaga",
                "latitud" => 36.719444,
                "longitud" => -4.42,
                "valoracion" => 5,
                "boost" => "Música Clásica y Cultura"
            ],
            [
                "id"=>24,
                "titulo" => "Exposición Fotográfica",
                "descripcion" => "Exposición de fotografías de artistas contemporáneos",
                "qr" => "QR1234567899",
                "precio" => 25.00,
                "fecha_inicio" => "2024-12-10",
                "fecha_fin" => "2024-12-17",
                "foto" => "expo_fotografia.jpg",
                "localizacion" => "Galería de Arte de Málaga",
                "latitud" => 36.72016,
                "longitud" => -4.42034,
                "valoracion" => 4,
                "boost" => "Fotografía y Arte"
            ],
            [
                "id"=>25,
                "titulo" => "Festival de Danza",
                "descripcion" => "Festival de danza con actuaciones de diferentes estilos",
                "qr" => "QR1234567900",
                "precio" => 50.00,
                "fecha_inicio" => "2024-12-20",
                "fecha_fin" => "2024-12-22",
                "foto" => "https://www.teatrocervantes.com/public/images/content/ciclos/48dca46945b6bced74fdb92e0c7215bc.jpg",
                "localizacion" => "Teatro Cervantes",
                "latitud" => 36.722556,
                "longitud" => -4.419391,
                "valoracion" => 5,
                "boost" => "Danza y Cultura"
            ],
            [
                "id"=>26,
                "titulo" => "Festival de Flamenco",
                "descripcion" => "Festival de flamenco con artistas reconocidos",
                "qr" => "QR1234567911",
                "precio" => 40.00,
                "fecha_inicio" => "2024-08-15",
                "fecha_fin" => "2024-08-18",
                "foto" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrIkvKe0RGdgsWl3IM6g0M2D88p2RdKIIlb4JouHxogzNN4aWiJ0tqVXsew&s=10",
                "localizacion" => "Teatro Cervantes",
                "latitud" => 36.722556,
                "longitud" => -4.419391,
                "valoracion" => 5,
                "boost" => "Flamenco y Cultura"
            ],
            [
                "id"=>27,
                "titulo" => "Exposición de Esculturas",
                "descripcion" => "Exposición de esculturas de artistas locales",
                "qr" => "QR1234567912",
                "precio" => 20.00,
                "fecha_inicio" => "2024-09-20",
                "fecha_fin" => "2024-09-25",
                "foto" => "https://www.museopicassomalaga.org/cms/uploads/medium_MPM_Exposicion_Picasso_Escultor_Materia_y_Cuerpo_03_9c5c6ee48f.jpg",
                "localizacion" => "Museo Picasso Málaga",
                "latitud" => 36.721944,
                "longitud" => -4.416944,
                "valoracion" => 4,
                "boost" => "Arte y Cultura"
            ],
            [
                "id"=>28,
                "titulo" => "Festival de Tapas",
                "descripcion" => "Festival gastronómico con variedad de tapas tradicionales y creativas",
                "qr" => "QR1234567913",
                "precio" => 25.00,
                "fecha_inicio" => "2024-10-05",
                "fecha_fin" => "2024-10-10",
                "foto" => "https://www.gastronosfera.com/sites/default/files/styles/large/public/menu/2023/tapa_LLOS_MARANGOS.png?itok=8Vc7G-H7",
                "localizacion" => "Plaza de la Merced",
                "latitud" => 36.723889,
                "longitud" => -4.4175,
                "valoracion" => 4,
                "boost" => "Gastronomía y Cultura"
            ],
            
            [
                "id"=>29,
                "titulo" => "Feria de la Cerveza Artesanal",
                "descripcion" => "Feria dedicada a la cerveza artesanal con degustaciones y actividades",
                "qr" => "QR1234567914",
                "precio" => 15.00,
                "fecha_inicio" => "2024-11-20",
                "fecha_fin" => "2024-11-25",
                "foto" => "https://www.malagahoy.es/2023/02/27/la-farola/Cartel-promocional-BirraArt-Coin_1770134151_178102584_667x375.jpg",
                "localizacion" => "Recinto Ferial de Málaga",
                "latitud" => 36.716,
                "longitud" => -4.418,
                "valoracion" => 4,
                "boost" => "Cerveza y Gastronomía"
            ],
            [
                "id"=>30,
                "titulo" => "Festival Clásicos de Teatro",
                "descripcion" => "Representación de una obra clásica de teatro",
                "qr" => "QR1234567916",
                "precio" => 20.00,
                "fecha_inicio" => "2024-11-15",
                "fecha_fin" => "2024-11-20",
                "foto" => "https://www.teatrocervantes.com/public/images/content/ciclos/638b03a1611792a4a3aa0b619bc39ccf.jpg",
                "localizacion" => "Teatro Cervantes",
                "latitud" => 36.722556,
                "longitud" => -4.419391,
                "valoracion" => 4,
                "boost" => "Teatro y Cultura"
            ],
            [
                "id"=>31,
                "titulo" => "Comedia en Vivo",
                "descripcion" => "Noche de risas con una comedia en vivo",
                "qr" => "QR1234567917",
                "precio" => 15.00,
                "fecha_inicio" => "2024-10-25",
                "fecha_fin" => "2024-10-27",
                "foto" => "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F545634339%2F86142021533%2F1%2Foriginal.20220921-093915?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=215%2C0%2C2160%2C1080&s=204ebd81b0ce5b0169f37de3cb151fc2",
                "localizacion" => "Teatro Cervantes",
                "latitud" => 36.722556,
                "longitud" => -4.419391,
                "valoracion" => 4,
                "boost" => "Teatro y Entretenimiento"
            ],
            [
                "id"=>32,
                "titulo" => "BiznagaFest 2024",
                "descripcion" => "Conferencia sobre las últimas tendencias en tecnología",
                "qr" => "QR1234567901",
                "precio" => 30.00,
                "fecha_inicio" => "2024-12-15",
                "fecha_fin" => "2024-12-16",
                "foto" => "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F625553309%2F155423569169%2F1%2Foriginal.20230518-081129?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C275%2C2048%2C1024&s=018d0acf9ed14b350127a88ac0885d19",
                "localizacion" => "Centro de Convenciones de Málaga",
                "latitud" => 36.722526,
                "longitud" => -4.41824,
                "valoracion" => 4,
                "boost" => "Tecnología y Innovación"
            ],
            [
                "id"=>33,
                "titulo" => "Torneo de eSports",
                "descripcion" => "Torneo de eSports con los mejores equipos",
                "qr" => "QR1234567902",
                "precio" => 55.00,
                "fecha_inicio" => "2024-12-25",
                "fecha_fin" => "2024-12-27",
                "foto" => "https://i.imgur.com/NQTMdJK.png",
                "localizacion" => "Pabellón Deportivo de Málaga",
                "latitud" => 36.71667,
                "longitud" => -4.41667,
                "valoracion" => 5,
                "boost" => "eSports y Tecnología"
            ],
            [
                "id"=>34,
                "titulo" => "Vibras Marenostrum",
                "descripcion" => "Festival de verano con actividades al aire libre",
                "qr" => "QR1234567903",
                "precio" => 35.00,
                "fecha_inicio" => "2024-06-01",
                "fecha_fin" => "2024-06-03",
                "foto" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyo_j8Bv2RyPDpAqHCYNOIVRTg8yEwpsEjxUPQKC251Q&s=10",
                "localizacion" => "Playa de la Malagueta",
                "latitud" => 36.719722,
                "longitud" => -4.415,
                "valoracion" => 4,
                "boost" => "Verano y Entretenimiento"
            ]
        ]);
    }
}