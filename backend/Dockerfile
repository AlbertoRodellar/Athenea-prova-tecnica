FROM php:8.2-apache

RUN docker-php-ext-install pdo pdo_mysql

RUN a2enmod rewrite

COPY . /var/www/html/

# Change Apache document root to Laravel's public folder
RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!/var/www/html/public/!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 80

CMD ["apache2-foreground"]
