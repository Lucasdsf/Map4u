import 'package:map4u/main.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/logGps.dart';

class LogGpsDatabase extends Home {
  static final LogGpsDatabase instance = LogGpsDatabase._init();

  static Database? _database;

  LogGpsDatabase._init();

  Future<Database> get database async {
    if (_database != null) return _database!;

    _database = await _initDB('logGps.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);

    return await openDatabase(path, version: 1, onCreate: _createDB);
  }

  Future _createDB(Database db, int version) async {
    final idType = 'INTEGER PRIMARY KEY AUTOINCREMENT';
    final textType = 'TEXT NOT NULL';
    final realType = 'REAL NOT NULL';

    await db.execute('''CREATE TABLE $tableLogGps (
      ${LogGpsFields.id} $idType,
      ${LogGpsFields.latitude} $realType,
      ${LogGpsFields.longitude} $realType,
      ${LogGpsFields.timesTemp} $textType,
      ${LogGpsFields.x} $textType,
      ${LogGpsFields.y} $textType,
      ${LogGpsFields.z} $textType
    )
    ''');
  }

  Future<LogGps> create(LogGps logGps) async {
    final db = await instance.database;
    final id = await db.insert(tableLogGps, logGps.toJsonGps());
    return logGps.copyGps(id: id);
  }

  Future<LogGps> readLogGps(int id) async {
    final db = await instance.database;

    final maps = await db.query(
      tableLogGps,
      columns: LogGpsFields.values,
      where: '${LogGpsFields.id} = ?',
      whereArgs: [id],
    );

    if (maps.isNotEmpty) {
      return LogGps.fromJsonGps(maps.first);
    } else {
      throw Exception('ID $id not found');
    }
  }

  Future<List<LogGps>> readAllLogGps() async {
    final db = await instance.database;

    final orderBy = '${LogGpsFields.timesTemp} ASC';
    final result = await db.query(tableLogGps, orderBy: orderBy);
    print(result.map((json) => LogGps.fromJsonGps(json)).toList());

    return result.map((json) => LogGps.fromJsonGps(json)).toList();
  }

  Future<int> update(LogGps logGps) async {
    final db = await instance.database;

    return db.update(
      tableLogGps,
      logGps.toJsonGps(),
      where: '${LogGpsFields.id} = ?',
      whereArgs: [logGps.id],
    );
  }

  Future<int> delete(int id) async {
    final db = await instance.database;

    return db.delete(
      tableLogGps,
      where: '${LogGpsFields.id} = ?',
      whereArgs: [id],
    );
  }

  Future close() async {
    final db = await instance.database;
    db.close();
  }
}
