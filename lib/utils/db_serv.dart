import 'package:sqflite/sqflite.dart' as sql;
import 'package:path/path.dart' as path;

class DbServ {
  static Future<sql.Database> database() async {
    final dbPath = await sql.getDatabasesPath();
    return sql.openDatabase(
      path.join(dbPath, 'servicos.db'),
      onCreate: (db, version) {
        return db.execute(
            'CREATE TABLE servicos (id TEXT PRIMARY KEY, servicos TEXT, nomeEstab TEXT, descricaoServico TEXT, horaCadastro TEXT)');
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
