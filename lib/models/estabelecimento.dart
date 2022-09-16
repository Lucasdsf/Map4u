import 'package:flutter/cupertino.dart'; //pensar em apagar
import 'package:flutter/foundation.dart';

class Estabelecimento {
  final String cod_estab;
  final String nome_estab;
  final String servicos;

  Estabelecimento({
    required this.cod_estab,
    required this.nome_estab,
    required this.servicos
  });

}