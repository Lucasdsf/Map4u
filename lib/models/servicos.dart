final String tableServicos = 'Servicos';

class ServicosFields {
  static final List<String> values = [
    //Add all fields
    id, servicos, descricaoServico, horaCadastro
  ];

  static final String id = '_id';
  static final String servicos = 'servicos';
  static final String nomeEstab = 'nomeEstab';
  static final String descricaoServico = 'descricaoServico';
  static final String horaCadastro = 'horaCadastro';
}

class Servicos {
  final int? id;
  final String servicos;
  final String nomeEstab;
  final String descricaoServico;
  final DateTime horaCadastro;

  const Servicos({
    this.id,
    required this.servicos,
    required this.nomeEstab,
    required this.descricaoServico,
    required this.horaCadastro,
  });

  Servicos copy({
    int? id,
    String? servicos,
    String? nomeEstab,
    String? descricaoServico,
    DateTime? horaCadastro,
  }) =>
      Servicos(
        id: id ?? this.id,
        servicos: servicos ?? this.servicos,
        nomeEstab: nomeEstab ?? this.nomeEstab,
        descricaoServico: descricaoServico ?? this.descricaoServico,
        horaCadastro: horaCadastro ?? this.horaCadastro,
      );

  static Servicos fromJson(Map<String, Object?> json) => Servicos(
        id: json[ServicosFields.id] as int?,
        servicos: json[ServicosFields.servicos] as String,
        nomeEstab: json[ServicosFields.nomeEstab] as String,
        descricaoServico: json[ServicosFields.descricaoServico] as String,
        horaCadastro: json[ServicosFields.horaCadastro] as DateTime,
      );

  Map<String, Object?> toJson() => {
        ServicosFields.id: id,
        ServicosFields.servicos: servicos,
        ServicosFields.nomeEstab: nomeEstab,
        ServicosFields.descricaoServico: descricaoServico,
        ServicosFields.horaCadastro: horaCadastro,
      };
}
