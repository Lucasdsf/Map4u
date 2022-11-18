final String tableEstabelecimentos = 'Estabelecimentos';

class EstabFields {
  static final List<String> values = [
    //Add all fields
    id, nomeEstab, temEscadas, numeroDegraus, temElevador, numeroAndares,
    servicos, horaCadastro
  ];

  static final String id = '_id';
  static final String nomeEstab = 'nomeEstab';
  static final String temEscadas = 'temEscadas';
  static final String numeroDegraus = 'numeroDegraus';
  static final String temElevador = 'temElevador';
  static final String numeroAndares = 'numeroAndares';
  static final String servicos = 'servicos';
  static final String horaCadastro = 'horaCadastro';
}

class Estabelecimento {
  final int? id;
  final String nomeEstab;
  final bool temEscadas;
  final int numeroDegraus;
  final bool temElevador;
  final int numeroAndares;
  final String servicos;
  final DateTime horaCadastro;

  const Estabelecimento({
    this.id,
    required this.nomeEstab,
    required this.temEscadas,
    required this.numeroDegraus,
    required this.temElevador,
    required this.numeroAndares,
    required this.servicos,
    required this.horaCadastro,
  });

  Estabelecimento copy({
    int? id,
    String? nomeEstab,
    bool? temEscadas,
    int? numeroDegraus,
    bool? temElevador,
    int? numeroAndares,
    String? servicos,
    DateTime? horaCadastro,
  }) =>
      Estabelecimento(
        id: id ?? this.id,
        temEscadas: temEscadas ?? this.temEscadas,
        numeroDegraus: numeroDegraus ?? this.numeroDegraus,
        temElevador: temElevador ?? this.temElevador,
        numeroAndares: numeroAndares ?? this.numeroAndares,
        nomeEstab: nomeEstab ?? this.nomeEstab,
        servicos: servicos ?? this.servicos,
        horaCadastro: horaCadastro ?? this.horaCadastro,
      );

  static Estabelecimento fromJson(Map<String, Object?> json) => Estabelecimento(
        id: json[EstabFields.id] as int?,
        nomeEstab: json[EstabFields.nomeEstab] as String,
        temEscadas: json[EstabFields.temEscadas] == 1,
        numeroDegraus: json[EstabFields.numeroDegraus] as int,
        temElevador: json[EstabFields.temElevador] == 1,
        numeroAndares: json[EstabFields.numeroAndares] as int,
        servicos: json[EstabFields.servicos] as String,
        horaCadastro: DateTime.parse(json[EstabFields.horaCadastro] as String),
      );

  Map<String, Object?> toJson() => {
        EstabFields.id: id,
        EstabFields.nomeEstab: nomeEstab,
        EstabFields.temEscadas: temEscadas ? 1 : 0,
        EstabFields.numeroDegraus: numeroDegraus,
        EstabFields.temElevador: temElevador ? 1 : 0,
        EstabFields.numeroAndares: numeroAndares,
        EstabFields.servicos: servicos,
        EstabFields.horaCadastro: horaCadastro.toIso8601String(),
      };
}
