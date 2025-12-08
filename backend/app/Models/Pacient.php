<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pacient extends Model
{
    /** @use HasFactory<\Database\Factories\PacientFactory> */
    use HasFactory;

    protected $primaryKey = 'dni';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'nom',
        'cognoms',
        'dataNaixement',
        'dni',
        'poblacio',
        'cip',
    ];
}
