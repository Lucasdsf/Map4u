import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/estabelecimento.dart';

class EstabelecimentosDatabase {
  static final EstabelecimentosDatabase instance =
      EstabelecimentosDatabase._init();
  static Database? _database;
  EstabelecimentosDatabase._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('Estabelecimentos.db');
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
    CREATE TABLE $tableEstabelecimentos (
      ${EstabFields.id} $idType,
      ${EstabFields.nomeEstab} $textType,
      ${EstabFields.temEscadas} $boolType,
      ${EstabFields.numeroDegraus} $integerType,
      ${EstabFields.temElevador} $boolType,
      ${EstabFields.numeroAndares} $integerType,
      ${EstabFields.servicos} $textType,
      ${EstabFields.horaCadastro} $textType
    )
    ''');
  }

  Future<Estabelecimento> create(Estabelecimento Estabelecimento) async {
    final db = await instance.database;
    final id = await db.insert(tableEstabelecimentos, Estabelecimento.toJson());
    return Estabelecimento.copy(id: id);
  }

  Future<Estabelecimento> readEstabelecimento(int id) async {
    final db = await instance.database;

    final maps = await db.query(
      tableEstabelecimentos,
      columns: EstabFields.values,
      where: '${EstabFields.values} = ?',
      whereArgs: [id],
    );

    if (maps.isNotEmpty) {
      return Estabelecimento.fromJson(maps.first);
    } else {
      throw Exception('ID $id not found');
    }
  }

  Future<List<Estabelecimento>> readAllEstabelecimentos() async {
    final db = await instance.database;

    final orderBy = '${EstabFields.horaCadastro} ASC';

    // final result = await db.rawQuery('SELECT * FROM $tableEstabelecimentos ORDER BY $orderBy');

    final result = await db.query(tableEstabelecimentos, orderBy: orderBy);

    return result.map((json) => Estabelecimento.fromJson(json)).toList();
  }

  Future<int> update(Estabelecimento Estabelecimento) async {
    final db = await instance.database;

    return db.update(
      tableEstabelecimentos,
      Estabelecimento.toJson(),
      where: '${EstabFields.id} = ?',
      whereArgs: [Estabelecimento.id],
    );
  }

  Future<int> delete(int id) async {
    final db = await instance.database;

    return db.delete(
      tableEstabelecimentos,
      where: '${EstabFields.id} = ?',
      whereArgs: [id],
    );
  }

  Future close() async {
    final db = await instance.database;
    db.close();
  }
}
