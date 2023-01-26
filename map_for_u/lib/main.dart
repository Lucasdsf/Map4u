import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'botoes_menu/configuracoes.dart';
import 'botoes_menu/cadastrar.dart';
import 'botoes_menu/pesquisar.dart';

main() => runApp(new Map4u());

class _Map4uState extends State<Map4u> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('MENU'),
        ),
        body: Column(
          children: [
            Pesquisar('PESQUISAR'),
            Cadastrar('CADASTRAR'),
            Configuracoes('CONFIGURAÇÕES'),
          ],
        ),
      ),
    );
  }
}

class Map4u extends StatefulWidget {
  @override
  _Map4uState createState() => _Map4uState();
}
