<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pacient;

class PacientController extends Controller
{
    // CRUD pacients
    public function index()
    {
        return Pacient::all();
    }

    public function show($dni)
    {
        return Pacient::findOrFail($dni);
    }

    public function store (Request $request)
    {
        $validated = $request->validate([
            'dni' => 'required|string|unique:pacients,dni',
            'nom' => 'required|string',
            'cognoms' => 'required|string',
            'dataNaixement' => 'required|date',
            'poblacio' => 'required|string',
            'cip' => 'required|string|unique:pacients,cip',
        ]);

        $pacient = Pacient::create($validated);

        return response()->json($pacient, 201);
    }

    public function update(Request $request, $dni)
    {
        $pacient = Pacient::findOrFail($dni);

        $validated = $request->validate([
            'nom' => 'sometimes|required|string',
            'cognoms' => 'sometimes|required|string',
            'dataNaixement' => 'sometimes|required|date',
            'poblacio' => 'sometimes|required|string',
            'cip' => 'sometimes|required|string|unique:pacients,cip,' . $dni . ',dni',
        ]);

        $pacient->update($validated);

        return response()->json($pacient, 200);
    }

    public function destroy($dni)
    {
        $pacient = Pacient::findOrFail($dni);
        $pacient->delete();

        return response()->json(null, 204);
    }


}
