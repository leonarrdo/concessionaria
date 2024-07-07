<?php

namespace Database\Seeders;

use App\Models\Manufacturer;
use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Vehicle::factory()->create([
            'manufacturer_id'   => Manufacturer::find(3)->id,
            'name'              => 'Focus',
            'year'              => '2006',
            'odometer'          => '135000',
            'value'             => '24000',
            'image'             => 'IJR1RcfjTPjWTWmTlQfXLHv07LgXcMVmLAj2QTCm.jpg',
            'active'            =>  true,
        ]);

        Vehicle::factory()->create([
            'manufacturer_id'   => Manufacturer::find(1)->id,
            'name'              => 'Corolla',
            'year'              => '2024',
            'odometer'          => '120000',
            'value'             => '191000',
            'image'             => 'pCaobNpPAjOtumJyrzR5AG2p2obdqyEPMIPG39mS.jpg',
            'active'            =>  true,
        ]);

        Vehicle::factory()->create([
            'manufacturer_id'   => Manufacturer::find(7)->id,
            'name'              => 'Uno',
            'year'              => '2012',
            'odometer'          => '120000',
            'value'             => '29000',
            'image'             => 'UwOtFRwVyGv7P41Q9DYHJsAi7oKKOWvL9Q4jTqGY.jpg',
            'active'            =>  true,
        ]);

        Vehicle::factory()->create([
            'manufacturer_id'   => Manufacturer::find(8)->id,
            'name'              => 'M4',
            'year'              => '2015',
            'odometer'          => '72000',
            'value'             => '399000',
            'image'             => 'uLHlodLEoATTFOSVazUw3UZz97FRYqsn8bBDNBhY.jpg',
            'active'            =>  true,
        ]);
    }
}
