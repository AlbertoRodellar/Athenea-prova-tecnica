<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pacient>
 */
class PacientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'dni' => strtoupper($this->faker->unique()->bothify('########?')), 
            'nom' => $this->faker->firstName(),
            'cognoms' => $this->faker->lastName(),
            'dataNaixement' => $this->faker->date('Y-m-d', '2005-01-01'),
            'poblacio' => $this->faker->city(),
            'cip' => strtoupper($this->faker->unique()->bothify('?########?'))
        ];
    }
}
