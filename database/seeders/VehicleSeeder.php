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
            'model'             => 'Ghia',
            'year'              => '2006',
            'color'             => 'Prata',
            'odometer'          => '135000',
            'transmission'      => 'Manual',
            'description'       => 'Carro com manutenções em dias.',
            'value'             => '24000',
            'active'            =>  true,
        ]);

        Vehicle::factory()->create([
            'manufacturer_id'   => Manufacturer::find(1)->id,
            'name'              => 'Corolla',
            'model'             => 'Altis',
            'year'              => '2024',
            'color'             => 'Prata',
            'odometer'          => '120000',
            'transmission'      => 'Manual',
            'description'       => 'Conforto, qualidade e segurança.',
            'value'             => '191000',
            'active'            =>  true,
        ]);

        Vehicle::factory()->create([
            'manufacturer_id'   => Manufacturer::find(7)->id,
            'name'              => 'Uno',
            'model'             => 'Mille Way Economy',
            'year'              => '2012',
            'color'             => 'Prata',
            'odometer'          => '120000',
            'transmission'      => 'Manual',
            'description'       => 'Carro em excelente estado de conservação.',
            'value'             => '29000',
            'active'            =>  true,
        ]);

        Vehicle::factory()->create([
            'manufacturer_id'   => Manufacturer::find(8)->id,
            'name'              => 'M4',
            'model'             => 'Motorsport',
            'year'              => '2015',
            'color'             => 'Azul',
            'odometer'          => '72000',
            'transmission'      => 'Manual',
            'description'       => 'Esportivo de respeito.',
            'value'             => '399000',
            'active'            =>  true,
        ]);
    }
}
