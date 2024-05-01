<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php echo e(config("app.name")); ?></title>
        <link rel="shortcut icon" href="<?php echo e(asset('favicon.ico')); ?>" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Importamos REACT -->
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')('resources/react/app.tsx'); ?>
    </head>
    <body>
        <div id="app" data-projects=""></div>
    </body>
</html><?php /**PATH C:\Users\pollo\Desktop\TFG\resources\views/index.blade.php ENDPATH**/ ?>