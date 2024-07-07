<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Vehicle;
use Database\Factories\VehicleFactory;
use Faker\Factory;
use Illuminate\Http\UploadedFile;

class VehicleControllerTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_returns_active_vehicles()
    {
        $response = $this->get('/vehicle');

        $response->assertStatus(200)
            ->assertJsonStructure([
                '*' => [
                    'id',
                    'manufacturer_id',
                    'name',
                    'year',
                    'value',
                    'odometer',
                    'image',
                    'active',
                    'manufacturer_name',
                ],
            ]);
    }

    public function it_stores_a_new_vehicle()
    {
        $manufacturer = Vehicle::factory(\App\Models\Manufacturer::class)->create();

        $data = [
            'manufacturer' => $manufacturer->id,
            'name' => 'Test Vehicle',
            'year' => 2023,
            'odometer' => 10000,
            'value' => 50000,
            'file' => UploadedFile::fake()->image('vehicle.jpg'),
        ];

        $response = $this->post('/vehicle/insert', $data);

        $response->assertStatus(201)
            ->assertJson(['message' => 'Veículo cadastrado com sucesso!']);

        $this->assertDatabaseHas('vehicles', ['name' => 'Test Vehicle']);
    }

    public function it_shows_a_vehicle()
    {
        $vehicle = Vehicle::factory(\App\Models\Vehicle::class)->create();

        $response = $this->get("/vehicle/{$vehicle->id}");

        $response->assertStatus(200)
            ->assertJson([
                'id' => $vehicle->id,
                'name' => $vehicle->name,
            ]);
    }

    public function it_updates_a_vehicle()
    {
        $vehicle = Vehicle::factory(\App\Models\Vehicle::class)->create();

        $data = [
            'id' => $vehicle->id,
            'manufacturer_id' => $vehicle->manufacturer_id,
            'name' => 'Updated Vehicle Name',
            'year' => 2024,
            'odometer' => 15000,
            'value' => 60000,
            'file' => UploadedFile::fake()->image('updated_vehicle.jpg'),
        ];

        $response = $this->post('/vehicle/edicao', $data);

        $response->assertStatus(200)
            ->assertJson(['message' => 'Veículo editado com sucesso!']);

        $this->assertDatabaseHas('vehicles', ['name' => 'Updated Vehicle Name']);
    }

    public function it_deletes_a_vehicle()
    {
        $vehicle = Vehicle::Factory(\App\Models\Vehicle::class)->create();

        $response = $this->post("/vehicle/delete/{$vehicle->id}");

        $response->assertStatus(200)
            ->assertJson(['message' => 'Veículo deletado com sucesso!']);

        $this->assertDatabaseMissing('vehicles', ['id' => $vehicle->id]);
    }
}
