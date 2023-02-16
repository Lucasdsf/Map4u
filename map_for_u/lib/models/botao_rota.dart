import 'package:flutter/material.dart';

class BotaoRota {
  final String id;
  final String title;
  final Color color;

  const BotaoRota ({
    required this.id,
    required this.title,
    this.color = Colors.orange,
  });
}