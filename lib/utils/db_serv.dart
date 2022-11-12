import 'package:sqflite/sqflite.dart' as sql;
import 'package:path/path.dart' as path;
import 'package:path_provider/path_provider.dart';

class DbServ {
  static Future<sql.Database> database() async {
    final dbPath = await sql.getDatabasesPath();
    return sql.openDatabase(
      path.join(dbPath, 'servicos.db'),
      onCreate: (db, version) {
        return db.execute(
            'CREATE TABLE servicos (cod_serv TEXT PRIMARY KEY, nome_serv TEXT, estab_serv TEXT, desc_serv TEXT)');
      },
    );
  }

  static Future<void> insert(String table, Map<String, Object> data) async {
    final db = await DbServ.database();
    await db.insert(table, data,
        conflictAlgorithm: sql.ConflictAlgorithm.replace);
  }

  static Future<List<Map<String, dynamic>>> getData(String table) async {
    final db = await DbServ.database();
    return db.query(table);
  }
}
