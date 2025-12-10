#!/bin/sh

if [ ! -f /var/www/html/database/database.sqlite ]; then
  touch /var/www/html/database/database.sqlite
  echo "Archivo SQLite creado"
fi

if [ ! -d /var/www/html/vendor ]; then
  composer install --optimize-autoloader --no-dev
fi

php artisan migrate:fresh --seed

apache2-foreground
