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
            'model'             => $this->faker->text(30),
            'year'              => $this->faker->numberBetween(1995, 2024),
            'color'             => $this->faker->colorName(),
            'odometer'          => $this->faker->numberBetween(1, 400000),
            'transmission'      => $this->faker->text(20),
            'description'       => $this->faker->realTextBetween(10, 60),
            'value'             => $this->faker->randomFloat(2, 1, 2000),
            'active'            => $this->faker->boolean(50),
        ];
    }
}
