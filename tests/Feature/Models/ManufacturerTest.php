<?php

namespace Tests\Feature\Models;

use App\Models\Manufacturer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Tests\TestCase;

class ManufacturerTest extends TestCase
{

    public function can_create_manufacturer(): void
    {
        Manufacturer::factory(20)->create();

        $response = $this->getJson('/api/assinatura');

        $response->assertStatus(Response::HTTP_OK);

        $this->assertEquals(20, count($response->json(['data'])));
    }
}
