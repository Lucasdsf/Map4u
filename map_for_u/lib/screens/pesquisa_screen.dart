import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';
import 'package:map_for_u/data/botoes_cadastro.dart';
import 'package:map_for_u/main.dart';
import '../components/botaoRota_item.dart';
import '../data/botoes_rota.dart';

 

class PesquisaScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
     return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Barra de pesquisa",
        ),
        actions: [
          IconButton(
              onPressed: () => Navigator.of(context)
                  .push(MaterialPageRoute(builder: (_) => Text('hai'))),
              icon: const Icon(Icons.search)),
        ],
      ),
      body: const Center(
        child: Text(
          "Barra de pesquisa",
          style: TextStyle(fontSize: 30),
        ),
      ),
    );
  }
}