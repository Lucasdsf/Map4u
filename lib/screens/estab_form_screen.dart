
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:form_field_validator/form_field_validator.dart';



Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: Text('Cadastro de estabelecimento'),
    ),
    body: Column(
      children: <Widget>[
        TextField(
          decoration: InputDecoration(
            labelText: 'Título',
          )
        )
      ]),
  );
}

// class FormScreen extends StatefulWidget {
//   @override
//   _FormScreenState createState() => _FormScreenState();
// }

