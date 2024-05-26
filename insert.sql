SELECT * FROM eventos;
SET SQL_SAFE_UPDATES = 0;
delete from eventos;

INSERT INTO eventos VALUES (1, 'Rosse', 'Descripción del evento 1', 'qr_code_1', 20.99, '2024-06-01', '2024-06-05', 'https://festgra.com/wp-content/uploads/2019/11/rosse-vip-club-malaga-discoteca-fiesta-grande-.jpg', 'Ubicación 1', -4.452977837449125, 36.705325241571266, 4, 'Grefusa', NOW(), NOW());

INSERT INTO eventos VALUES (2, 'K2', 'Descripción del evento 2', 'qr_code_2', 15.50, '2024-07-10', '2024-07-15', 'https://www.despedidastemptation.com/wp-content/uploads/las-mejores-discotecas-de-malaga-discoteca-k2-malaga.jpeg', 'Ubicación 2', -4.45980 ,36.69199, 4, 'Durex', NOW(), NOW());

INSERT INTO eventos VALUES (3, 'Jaleo', 'Descripción del evento 3', 'qr_code_3', 10.00, '2024-08-20', '2024-08-25', 'https://www.malagasesale.com/wp-content/uploads/118829019_1161885664194724_8206743658028533995_n.jpg', 'Ubicación 3', -4.467372525282044,36.7206645409886 , 3, 'Nike', NOW(), NOW());

INSERT INTO eventos VALUES (4, 'Reggaeton Beach Festival', 'Descripción del evento 4', 'qr_code_4', 25.99, '2024-09-15', '2024-09-20', 'https://estaticos.esmadrid.com/cdn/farfuture/QolHHrrdfMkVx4nFCXdEi-ubWooDOs5CDOhPiFNXKGw/mtime:1700572835/sites/default/files/eventos/eventos/reggaeton_beach_festival_1.jpg', 'Ubicación 4',-3.8997059, 36.744156526718406, 5, 'Fanta', NOW(), NOW());

INSERT INTO eventos VALUES (5, 'Puro Latino - Chris MJ', 'Descripción del evento 5', 'qr_code_5', 30.75, '2024-04-05', '2024-04-10', 'https://purolatino.es/torremolinos/wp-content/themes/yootheme/cache/bf/cris-Mj-puro-latino-torremolinos-bfd5d182.jpeg', 'Ubicación 5', -4.513778091549178, 36.62069832234932 , 2, 'Coca-Cola', NOW(), NOW());

INSERT INTO eventos VALUES (6, 'Puro Latino - festival de luces', 'Descripción del evento 5', 'qr_code_5', 50.75, '2024-04-05', '2024-04-10', 'https://www.diariodecadiz.es/2023/10/05/noticias-provincia-cadiz/imagen-edicion-Puro-Latino-Puerto_1836126899_194089312_667x375.jpg', 'Ubicación 5', -4.513778091549178, 36.62069832234932 , 2, 'Coca-Cola', NOW(), NOW());

delete from eventos;