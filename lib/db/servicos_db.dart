import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/servicos.dart';

class ServicosDatabase {
  static final ServicosDatabase instance = ServicosDatabase._init();
  static Database? _database;
  ServicosDatabase._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('Servicos.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);
    return await openDatabase(path, version: 2, onCreate: _createDB);
  }

  Future _createDB(Database db, int version) async {
    final idType = 'INTEGER PRIMARY KEY AUTOINCREMENT';
    final boolType = 'BOOLEAN NOT NULL';
    final integerType = 'INTEGER NOT NULL';
    final textType = 'TEXT NOT NULL';
    await db.execute('''
    CREATE TABLE $tableServicos (
      ${ServicosFields.id} $idType,
      ${ServicosFields.servicos} $textType,
      ${ServicosFields.nomeEstab} $textType
      ${ServicosFields.descricaoServico} $textType,
      ${ServicosFields.horaCadastro} $textType
    )
    ''');
  }

  Future<Servicos> create(Servicos Servicos) async {
    final db = await instance.database;
    final id = await db.insert(tableServicos, Servicos.toJson());
    return Servicos.copy(id: id);
  }

  Future<Servicos> readServicos(int id) async {
    final db = await instance.database;

    final maps = await db.query(
      tableServicos,
      columns: ServicosFields.values,
      where: '${ServicosFields.values} = ?',
      whereArgs: [id],
    );

    if (maps.isNotEmpty) {
      return Servicos.fromJson(maps.first);
    } else {
      throw Exception('ID $id not found');
    }
  }

  Future<List<Servicos>> readAllServicos() async {
    final db = await instance.database;

    final orderBy = '${ServicosFields.horaCadastro} ASC';
    final result = await db.query(tableServicos, orderBy: orderBy);

    return result.map((json) => Servicos.fromJson(json)).toList();
  }

  Future<int> update(Servicos Servicos) async {
    final db = await instance.database;

    return db.update(
      tableServicos,
      Servicos.toJson(),
      where: '${ServicosFields.id} = ?',
      whereArgs: [Servicos.id],
    );
  }

  Future close() async {
    final db = await instance.database;
    db.close();
  }
}
