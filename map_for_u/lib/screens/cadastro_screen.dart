import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';
import 'package:map_for_u/data/botoes_cadastro.dart';

import '../components/botao_item.dart';
import '../data/botoes_menu_texto.dart';

class CadastroScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('CADASTRAR'),
        backgroundColor: Colors.black,
      ),
      body: Center(
          child: GridView(
        shrinkWrap: true,
        padding: const EdgeInsets.all(25),
        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
          maxCrossAxisExtent: 200,
          childAspectRatio: 3 / 3,
          crossAxisSpacing: 20,
          mainAxisSpacing: 20,
        ),
        children: BOTOES_CADASTRO.map((e) {
          return BotaoItem(e);
        }).toList(),
      )),
    );
  }
}

// BOTOES_CADASTRO.map((e) {
//                     return BotaoItem(e);
//                   }).toList()
