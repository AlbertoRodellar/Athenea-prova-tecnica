#!/bin/bash

DB_PATH="/var/www/html/database/database.sqlite"
if [ ! -f $DB_PATH ]; then
  echo "=> Creando archivo SQLite..."
  touch $DB_PATH
  chown www-data:www-data $DB_PATH
  chmod 664 $DB_PATH
fi

sleep 5

echo "=> Ejecutando migraciones y seeders..."
su www-data -c "php /var/www/html/artisan migrate:fresh --seed --force"

echo "=> Inicialización completa."

exec "$@"