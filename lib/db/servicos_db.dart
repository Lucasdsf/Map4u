import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/servico.dart';

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
      ${ServicoFields.id} $idType,
      ${ServicoFields.nomeServico} $textType,
      ${ServicoFields.estabServico} $textType,
      ${ServicoFields.descServico} $textType
    )
    ''');
  }

  Future<Servico> create(Servico Servico) async {
    final db = await instance.database;
    final id = await db.insert(tableServicos, Servico.toJson());
    return Servico.copy(id: id);
  }

  Future<Servico> readServico(int id) async {
    final db = await instance.database;

    final maps = await db.query(
      tableServicos,
      columns: ServicoFields.values,
      where: '${ServicoFields.values} = ?',
      whereArgs: [id],
    );

    if (maps.isNotEmpty) {
      return Servico.fromJson(maps.first);
    } else {
      throw Exception('ID $id not found');
    }
  }

  Future<List<Servico>> readAllServicos() async {
    final db = await instance.database;

    final orderBy = '${ServicoFields.nomeServico} ASC';
    final result = await db.query(tableServicos, orderBy: orderBy);

    return result.map((json) => Servico.fromJson(json)).toList();
  }

  Future<int> update(Servico Servico) async {
    final db = await instance.database;

    return db.update(
      tableServicos,
      Servico.toJson(),
      where: '${ServicoFields.id} = ?',
      whereArgs: [Servico.id],
    );
  }

  Future<int> delete(int id) async {
    final db = await instance.database;

    return await db.delete(
      tableServicos,
      where: '${ServicoFields.id} = ?',
      whereArgs: [id],
    );
  }

  Future close() async {
    final db = await instance.database;
    db.close();
  }
}
