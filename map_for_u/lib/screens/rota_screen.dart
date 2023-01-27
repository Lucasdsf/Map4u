import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';

import '../components/botao_item.dart';
import '../data/botoes_rota.dart';

class RotaScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('ROTA'),
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
        children: BOTOES_ROTA.map((e) {
          return BotaoItem(e);
        }).toList(),
      )),
    );
  }
}
