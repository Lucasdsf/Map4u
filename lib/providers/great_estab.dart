
// import 'dart:math';
// import 'package:flutter/foundation.dart';
// import 'package:map4u/models/estabelecimento.dart';
// import 'package:map4u/utils/db_util.dart';


// class GreatEstab with ChangeNotifier {
//   List<Estabelecimento> _items = [];

//     List<Estabelecimento> get items {
//       return [... _items];
//     }

//     int get itemsCount {
//       return _items.length;
//     }

//     Estabelecimento getItem(int index) {
//       return _items[index];
//     }
  

  // Future<void> addEstabelecimento(
  //   String nome, 
  //   String servicos
  //   ) async {
      
  //   }

  // void newEstabelecimento(Estabelecimento estabelecimento) {
  //   _items.add(estabelecimento);
  //   notifyListeners();
  // }

  // final newEstabelecimento = Estabelecimento(
  //     cod_estab: Random().nextDouble().toString(), 
  //     nome_estab: nome, 
  //     servicos: servicos);

  // _items.add(newEstabelecimento);
  // DbUtil.insert('estabelecimento', {
  //   'cod_estab': newEstabelecimento.cod_estab,
  //   'nome_estab': newEstabelecimento.nome_estab,
  //   'servicos': newEstabelecimento.servicos
  // });
  // notifyListeners();
// }