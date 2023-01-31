import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:map_for_u/screens/cadastro_screen.dart';
import 'package:map_for_u/screens/rota_screen.dart';
import 'package:map_for_u/utils/app_routes.dart';

import 'screens/menu_screen.dart';

main() => runApp(new Map4u());

class _Map4uState extends State<Map4u> {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MENU',
      theme: ThemeData(
        primaryColor: Colors.black,
        canvasColor: Color.fromRGBO(255, 254, 229, 1),
      ),
      routes: {
        AppRoutes.HOME: (context) => MenuScreen(),
        AppRoutes.CADASTRAR:(context) => CadastroScreen(),
        AppRoutes.CADASTRAR_ROTA:(context) => RotaScreen(),
      }
    );
  }
}

class Map4u extends StatefulWidget {
  @override
  _Map4uState createState() => _Map4uState();
}
