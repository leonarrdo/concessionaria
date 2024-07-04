<?php

namespace Database\Seeders;

use App\Models\Manufacturer;
use Illuminate\Database\Seeder;

class ManufacturerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $manufacturersList = [
            'Toyota',
            'Honda',
            'Ford',
            'Nissan',
            'Chevrolet',
            'Ferrari',
            'Fiat',
            'Bmw'
        ];

        foreach ($manufacturersList as $manufacturerName) {
            Manufacturer::factory()->create(['name' => $manufacturerName]);
        }        
    }
}
