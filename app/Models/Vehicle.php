<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        'manufacturer_id',
        'name',
        'model',
        'year',
        'color',
        'odometer',
        'transmission',
        'description',
        'value',
        'active'
    ];
}
