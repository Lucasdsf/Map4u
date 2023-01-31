import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';
import 'package:map_for_u/utils/app_routes.dart';
import '../screens/cadastro_screen.dart';
import '../models/botao_cadastro.dart';

class BotaoCadastroItem extends StatelessWidget {
  final BotaoCadastro botao_cadastro;

  const BotaoCadastroItem(this.botao_cadastro);

  void _selectBotao(BuildContext context) {
    Navigator.of(context).pushNamed(
      AppRoutes.CADASTRAR_ROTA,
      arguments: botao_cadastro,
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
          botao_cadastro.title,
          style: TextStyle(fontSize: 13),
        ),
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(15),
            gradient: LinearGradient(
                colors: [botao_cadastro.color.withOpacity(0.5), botao_cadastro.color],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight)),
      ),
    );
  }
}