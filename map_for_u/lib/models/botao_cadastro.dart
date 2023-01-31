import 'package:flutter/material.dart';

class BotaoCadastro {
  final String id;
  final String title;
  final Color color;

  const BotaoCadastro ({
    required this.id,
    required this.title,
    this.color = Colors.orange,
  });
}