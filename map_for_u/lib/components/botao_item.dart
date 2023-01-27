import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';
import 'package:map_for_u/screens/menu_screen.dart';
import '../screens/cadastro_screen.dart';
import '../models/botao.dart';

class BotaoItem extends StatelessWidget {
  final Botao botao;

  const BotaoItem(this.botao);

  void _selectBotao(BuildContext context) {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (_) {
          return CadastroScreen();
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () => _selectBotao(context),
      splashColor: Theme.of(context).primaryColor,
      borderRadius: BorderRadius.circular(15),
      child: Container(
        padding: EdgeInsets.all(15),
        child: Text(
          botao.title,
          style: TextStyle(fontSize: 13),
        ),
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(15),
            gradient: LinearGradient(
                colors: [botao.color.withOpacity(0.5), botao.color],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight)),
      ),
    );
  }
}
