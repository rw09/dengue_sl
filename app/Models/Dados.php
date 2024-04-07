<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dados extends Model
{
    use HasFactory;

    protected $fillable = [
        'data_atualizacao',
        'notificacoes',
        'confirmados',
        'incidencia',
        'obitos'
    ];
}
