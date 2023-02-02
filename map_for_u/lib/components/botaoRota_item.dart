import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';
import 'package:map_for_u/screens/menu_screen.dart';
import 'package:map_for_u/utils/app_routes.dart';
import '../screens/cadastro_screen.dart';
import '../models/botao_rota.dart';

class BotaoRotaItem extends StatelessWidget {
  final BotaoRota botao_rota;

  const BotaoRotaItem(this.botao_rota);

  void _selectBotao(BuildContext context) {
    Navigator.of(context).pushNamed(
      AppRoutes.CADASTRAR_ROTA,
      arguments: botao_rota,
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
          botao_rota.title,
          style: TextStyle(fontSize: 13),
        ),
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(15),
            gradient: LinearGradient(
                colors: [botao_rota.color.withOpacity(0.5), botao_rota.color],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight)),
      ),
    );
  }
}
