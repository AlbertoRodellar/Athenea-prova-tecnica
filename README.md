# 🌟 Athenea Solutions - Repte tècnic

Este proyecto consta de un backend en PHP (Laravel) y un frontend en Angular/Ionic. Aquí se explica cómo preparar y ejecutar el proyecto localmente.

---

## 📋 Requisitos

Asegúrate de tener instalado lo siguiente antes de comenzar:

* **Docker y Docker Compose** instalados.
* **PHP y Composer** instalados (solo son necesarios para preparar el backend la primera vez).

---

## 🚀 Pasos para levantar el proyecto

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local.

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/AlbertoRodellar/Athenea-prova-tecnica](https://github.com/AlbertoRodellar/Athenea-prova-tecnica)
    cd Athenea-prova-tecnica
    ```

2.  **Preparar el Backend (Solo la primera vez):**

    Dirígete al directorio del backend e instala las dependencias de PHP.

    ```bash
    cd backend
    composer install
    ```

3.  **Configurar la Base de Datos:**

    Crea el archivo de base de datos **SQLite** vacío y ejecuta las migraciones junto con los *seeders* para tener datos iniciales.

    ```bash
    touch database/database.sqlite
    php artisan migrate:fresh --seed
    ```

4.  **Levantar Contenedores Docker:**

    Vuelve a la raíz del proyecto y utiliza Docker Compose para construir y levantar los servicios (backend y frontend).

    ```bash
    cd ..
    docker compose up --build
    ```

---

## 🌐 Información adicional

Una vez levantados los contenedores, los servicios estarán accesibles en las siguientes direcciones:

| Servicio | URL |
| :--- | :--- |
| **Backend (Laravel)** | `http://localhost:8000` |
| **Frontend (Angular/Ionic)** | `http://localhost:4200` |
