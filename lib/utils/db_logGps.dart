import 'package:sqflite/sqflite.dart' as sql;
import 'package:path/path.dart' as path;

class DbLogGps {
  static Future<sql.Database> database() async {
    final dbPath = await sql.getDatabasesPath();
    return sql.openDatabase(
      path.join(dbPath, 'logGps.db'),
      onCreate: (db, version) {
        return db.execute(
            'CREATE TABLE logGps (id TEXT PRIMARY KEY, timeStamp TEXT, latitude TEXT, longitude TEXT, x TEXT, y TEXT, z TEXT)');
      },
    );
  }

  static Future<void> insert(String table, Map<String, Object> data) async {
    final db = await DbLogGps.database();
    await db.insert(table, data,
        conflictAlgorithm: sql.ConflictAlgorithm.replace);
  }

  static Future<List<Map<String, dynamic>>> getData(String table) async {
    final db = await DbLogGps.database();
    return db.query(table);
  }
}
