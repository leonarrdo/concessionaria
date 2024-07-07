<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehicleRequest;
use App\Http\Requests\UpdateVehicleRequest;
use App\Models\Manufacturer;
use App\Models\Vehicle;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return DB::table('vehicles')
                    ->join('manufacturers', 'manufacturers.id', '=', 'vehicles.manufacturer_id')
                    ->select('vehicles.*', 'manufacturers.name as manufacturer_name')
                    ->where('vehicles.active', true)->get(); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVehicleRequest $request)
    {

        $manufacturer = Manufacturer::find($request->manufacturer);

        $vehicle                    = new Vehicle();
        $vehicle->manufacturer_id   = $manufacturer->id;
        $vehicle->name              = $request->name;
        $vehicle->year              = $request->year;
        $vehicle->odometer          = $request->odometer;
        $vehicle->value             = $request->value;
        $vehicle->image             = Storage::disk('vehicles')->putFile($request->file);
        $vehicle->save();

        return response()->json(['message' => 'Veículo cadastrado com sucesso!'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Vehicle $vehicle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vehicle $vehicle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVehicleRequest $request, Vehicle $vehicle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicle $vehicle)
    {
        //
    }
}
