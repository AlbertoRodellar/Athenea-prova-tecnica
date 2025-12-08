<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pacients', function (Blueprint $table) {
            $table->string('dni')->primary();
            $table->string('nom');
            $table->string('cognoms');
            $table->date('dataNaixement');
            $table->string('poblacio');
            $table->string('cip')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pacients');
    }
};
