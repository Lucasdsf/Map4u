final String tableServicos = 'servicos';

class ServicoFields {
  static final List<String> values = [
    //Add all fields
    id, nomeServico, descricaoServico, horaCadastro
  ];

  static final String id = '_id';
  static final String nomeServico = 'nomeServico';
  static final String descricaoServico = 'descricaoServico';
  static final String horaCadastro = 'horaCadastro';
}

class Servico {
  final int? id;
  final String nomeServico;
  final String estabServico;
  final DateTime descServico;

  const Servico({
    this.id,
    required this.nomeServico,
    required this.estabServico,
    required this.descServico,
  });

  Servico copy({
    int? id,
    String? nomeServico,
    String? estabServico,
    DateTime? descServico,
  }) =>
      Servico(
        id: id ?? this.id,
        nomeServico: nomeServico ?? this.nomeServico,
        estabServico: estabServico ?? this.estabServico,
        descServico: descServico ?? this.descServico,
      );

  static Servico fromJson(Map<String, Object?> json) => Servico(
        id: json[ServicoFields.id] as int?,
        nomeServico: json[ServicoFields.nomeServico] as String,
        estabServico: json[ServicoFields.estabServico] as String,
        descServico: json[ServicoFields.descServico] as DateTime,
      );
  Map<String, Object?> toJson() => {
        ServicoFields.id: id,
        ServicoFields.nomeServico: nomeServico,
        ServicoFields.estabServico: estabServico,
        ServicoFields.descServico: descServico,
      };
}
