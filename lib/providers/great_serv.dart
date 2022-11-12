import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:form_field_validator/form_field_validator.dart';

Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: Text('Cadastro de serviço'),
    ),
    body: Column(children: <Widget>[
      TextField(
          decoration: InputDecoration(
        labelText: 'Título',
      ))
    ]),
  );
}
