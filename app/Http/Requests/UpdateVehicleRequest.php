<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'manufacturer_id'   => 'required|string|max:255',
            'name'              => 'required|string|max:255',
            'value'             => 'required|numeric',
            'odometer'          => 'required|numeric',
            'year'              => 'required|numeric|min:1900|max:' . date('Y'),
        ];
    }
}
