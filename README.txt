El servidor funciona paro es necesario tener:
-XAMP
-COMPOSER
-NODE.JS
-NPM

Cuando se haya descargado e instalado todo lo anterior, dentro de la carpeta TFG
ejecutar en un cmd o en un terminal de VS code el comando 

-"npm install" 

para actualizar las carpetasde todas maneras esta carpeta la voy a pasar con 
todos los node modules para que esten actualizados.

--------------------------------------------------------------------------------
Dentro del proyecto nosotros trabajamos con la carpeta 
resources/react
dentro ponemos los componentes que necesitemos con extension .TSX
(necesario para que el servidor se comunique con react)
y creamos los Modelos, Controladores, Seeders ... que necesitemos como si fuese laravel 
normal

--------------------------------------------------------------------------------
PARA QUE FUNCIONE EL SERVIDOR

Necesitamos 2 consolas en una ejecutamos
-npm run dev
y en la otra 
-php artisan serve

Primero la de npm run dev que es el compilador de react y luego la de php