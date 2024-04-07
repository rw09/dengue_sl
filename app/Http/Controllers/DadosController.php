<?php

namespace App\Http\Controllers;

use App\Models\Dados;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DadosController extends Controller
{
    public function mostrarDados()
    {
        $dados = Dados::latest()->first();

        return Inertia::render('Dados', ['dados' => $dados]);
    }

    public function salvarDados(Request $request)
    {
        $data_dados = str_replace("Base de dados SINAN Dengue Online: ", "", $request->input('data_atualizacao'));

        $dados = new Dados();
        $dados->data_atualizacao = $data_dados;
        $dados->notificacoes = $request->input('dados.notificacoes');
        $dados->confirmados = $request->input('dados.confirmados');
        $dados->incidencia = $request->input('dados.incidencia');
        $dados->obitos = $request->input('dados.obitos');
        $dados->save();

        return response()->json(['message' => 'Dados salvos com sucesso'], 200);
    }
}
