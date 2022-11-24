import 'package:map4u/main.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/logGps.dart';

class LogGpsDatabase extends Home {
  static final LogGpsDatabase instance = LogGpsDatabase._init();

  static Database? _database;

  static final table = 'logGps';
  static final id = 'id';
  static final timeStamp = 'timeStamp';
  static final latitude = 'latitude';
  static final longitude = 'longitude';
  static final x = 'x';
  static final y = 'y';
  static final z = 'z';

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
      ${LogGpsFields.timeStamp} $textType,
      ${LogGpsFields.latitude} $realType,
      ${LogGpsFields.longitude} $realType,
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

    final orderBy = '${LogGpsFields.timeStamp} ASC';
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

insert(String _timeStamp, String _longitude, String _latitude, String _x,
    String _y, String _z) async {
  // get a reference to the database
  // because this is an expensive operation we use async and await
  Database db = await LogGpsDatabase.instance.database;

  // row to insert
  Map<String, dynamic> row = {
    LogGpsDatabase.timeStamp: _timeStamp,
    LogGpsDatabase.longitude: _longitude,
    LogGpsDatabase.latitude: _latitude,
    LogGpsDatabase.x: _x,
    LogGpsDatabase.y: _y,
    LogGpsDatabase.z: _z
  };

  // do the insert and get the id of the inserted row
  int id = await db.insert(LogGpsDatabase.table, row);
}

select() async {
  Database db = await LogGpsDatabase.instance.database;
  // show the results: print all rows in the db
  print(await db.query(LogGpsDatabase.table));
}

delete(String nameTable) async {
  Database db = await LogGpsDatabase.instance.database;

  return db.rawQuery('DELETE FROM ${nameTable}');
}
