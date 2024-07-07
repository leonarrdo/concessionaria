<?php

namespace Database\Factories;

use App\Models\Manufacturer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'manufacturer_id'   => $this->faker->numberBetween(1, Manufacturer::count()),
            'name'              => $this->faker->text(20),
            'year'              => $this->faker->numberBetween(1995, 2024),
            'odometer'          => $this->faker->numberBetween(1, 400000),
            'value'             => $this->faker->randomFloat(2, 1, 2000),
            'value'             => 'https://via.placeholder.com/500',
            'active'            => $this->faker->boolean(50),
        ];
    }
}
