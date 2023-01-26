import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

class Configuracoes extends StatelessWidget {
  final String texto;

  Configuracoes(this.texto);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: EdgeInsets.all(10),
      child: ElevatedButton(
        child: Text(
          texto,
          style: TextStyle(fontSize: 20),
          textAlign:  TextAlign.center,
        ),
        style: ElevatedButton.styleFrom(
            primary: Colors.white, onPrimary: Colors.black),
        onPressed: null,
      ),
    );
  }
}
