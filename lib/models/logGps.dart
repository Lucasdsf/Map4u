final String tableLogGps = 'logGps';

class LogGpsFields {
  static final List<String> values = [
    //Add all fields
    id, timeStamp, latitude, longitude, x, y, z
  ];

  static final String id = '_id';
  static final String timeStamp = 'timeStamp';
  static final String latitude = 'latitude';
  static final String longitude = 'longitude';
  static final String x = 'x';
  static final String y = 'y';
  static final String z = 'z';
}

class LogGps {
  final int? id;
  final String timeStamp;
  final double latitude;
  final double longitude;
  final String x;
  final String y;
  final String z;

  const LogGps({
    this.id,
    required this.timeStamp,
    required this.latitude,
    required this.longitude,
    required this.x,
    required this.y,
    required this.z,
  });

  String getTimeStamp() {
    return timeStamp;
  }

  double getLatitude() {
    return latitude;
  }

  double getLongitude() {
    return longitude;
  }

  LogGps copyGps({
    int? id,
    String? timeStamp,
    double? latitude,
    double? longitude,
    String? x,
    String? y,
    String? z,
  }) =>
      LogGps(
        id: id ?? this.id,
        timeStamp: timeStamp ?? this.timeStamp,
        latitude: latitude ?? this.latitude,
        longitude: longitude ?? this.longitude,
        x: x ?? this.x,
        y: y ?? this.y,
        z: z ?? this.z,
      );
  static LogGps fromJsonGps(Map<String, Object?> json) => LogGps(
        id: json[LogGpsFields.id] as int?,
        timeStamp: json[LogGpsFields.timeStamp] as String,
        latitude: json[LogGpsFields.latitude] as double,
        longitude: json[LogGpsFields.longitude] as double,
        x: json[LogGpsFields.x] as String,
        y: json[LogGpsFields.y] as String,
        z: json[LogGpsFields.z] as String,
      );
  Map<String, Object?> toJsonGps() => {
        LogGpsFields.id: id,
        LogGpsFields.timeStamp: timeStamp,
        LogGpsFields.latitude: latitude,
        LogGpsFields.longitude: longitude,
        LogGpsFields.x: x,
        LogGpsFields.y: y,
        LogGpsFields.z: z,
      };
}
