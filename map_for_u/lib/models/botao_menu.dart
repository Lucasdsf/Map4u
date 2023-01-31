import 'package:flutter/material.dart';

class BotaoMenu {
  final String id;
  final String title;
  final Color color;

  const BotaoMenu ({
    required this.id,
    required this.title,
    this.color = Colors.orange,
  });
}