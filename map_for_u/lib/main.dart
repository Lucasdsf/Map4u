import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

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
      home: MenuScreen()
    );
  }
}

class Map4u extends StatefulWidget {
  @override
  _Map4uState createState() => _Map4uState();
}
