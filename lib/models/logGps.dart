final String tableLogGps = 'logGps';

class LogGpsFields {
  static final List<String> values = [
    //Add all fields
    id, latitude, longitude, timesTemp, x, y, z
  ];

  static final String id = '_id';
  static final String latitude = 'latitude';
  static final String longitude = 'longitude';
  static final String timesTemp = 'timesTemp';
  static final String x = 'x';
  static final String y = 'y';
  static final String z = 'z';
}

class LogGps {
  final int? id;
  final double latitude;
  final double longitude;
  final String timesTemp;
  final String x;
  final String y;
  final String z;

  const LogGps({
    this.id,
    required this.latitude,
    required this.longitude,
    required this.timesTemp,
    required this.x,
    required this.y,
    required this.z,
  });

  LogGps copyGps({
    int? id,
    double? latitude,
    double? longitude,
    String? timesTemp,
    String? x,
    String? y,
    String? z,
  }) =>
      LogGps(
        id: id ?? this.id,
        latitude: latitude ?? this.latitude,
        longitude: longitude ?? this.longitude,
        timesTemp: timesTemp ?? this.timesTemp,
        x: x ?? this.x,
        y: y ?? this.y,
        z: z ?? this.z,
      );
  static LogGps fromJsonGps(Map<String, Object?> json) => LogGps(
        id: json[LogGpsFields.id] as int?,
        latitude: json[LogGpsFields.latitude] as double,
        longitude: json[LogGpsFields.longitude] as double,
        timesTemp: json[LogGpsFields.timesTemp] as String,
        x: json[LogGpsFields.x] as String,
        y: json[LogGpsFields.y] as String,
        z: json[LogGpsFields.z] as String,
      );
  Map<String, Object?> toJsonGps() => {
        LogGpsFields.id: id,
        LogGpsFields.latitude: latitude,
        LogGpsFields.longitude: longitude,
        LogGpsFields.timesTemp: timesTemp,
        LogGpsFields.x: x,
        LogGpsFields.y: y,
        LogGpsFields.z: z,
      };
}
