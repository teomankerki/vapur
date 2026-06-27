(function () {
  "use strict";

  var DATA = FERRY_DATA;
  var STATIONS = DATA.stations;
  var LINES = DATA.lines;

  var CATEGORY_META = {
    city:      { label: "Şehir Hatları",   sub: "City Lines",        order: 1 },
    bosphorus: { label: "Boğaz Hatları",   sub: "Bosphorus Lines",   order: 2 },
    halic:     { label: "Haliç Hattı",     sub: "Golden Horn",       order: 3 },
    islands:   { label: "Adalar Hatları",  sub: "Island Lines",      order: 4 },
    tour:      { label: "Boğaz Turları",   sub: "Bosphorus Tours",   order: 5 }
  };

  function trLower(s) {
    return (s || "").toLocaleLowerCase("tr-TR");
  }

  // ---------------- Water-routing spines ----------------
  // Hand-traced water lanes. The Bosphorus needs shore-specific lanes: routing
  // every pier through one centerline makes same-shore stops draw ugly triangles.
  var SPINES = {
    bosphorus_europe: [
      [41.0178, 28.9830], [41.0250, 28.9900], [41.0331, 29.0000], [41.0405, 29.0140],
      [41.0474, 29.0310], [41.0550, 29.0420], [41.0675, 29.0500], [41.0767, 29.0500],
      [41.0814, 29.0610], [41.1036, 29.0620], [41.1152, 29.0660], [41.1350, 29.0630],
      [41.1500, 29.0600], [41.1609, 29.0580], [41.1677, 29.0640], [41.1750, 29.0750],
      [41.1812, 29.0800]
    ],
    bosphorus_asia: [
      [41.0286, 29.0080], [41.0372, 29.0260], [41.0452, 29.0400], [41.0516, 29.0470],
      [41.0650, 29.0520], [41.0750, 29.0540], [41.0836, 29.0590], [41.1005, 29.0590],
      [41.1078, 29.0740], [41.1169, 29.0870], [41.1350, 29.0840], [41.1500, 29.0730],
      [41.1600, 29.0730], [41.1731, 29.0820]
    ],
    halic: [
      [41.0195, 28.9745], [41.0290, 28.9650], [41.0360, 28.9560],
      [41.0410, 28.9480], [41.0435, 28.9415], [41.0473, 28.9378]
    ],
    marmara_asia: [
      [40.8090, 29.3025], [40.8035, 29.2860], [40.8110, 29.2620],
      [40.8500, 29.2360], [40.8685, 29.2320], [40.8910, 29.1760],
      [40.9100, 29.1250], [40.9400, 29.0940], [40.9580, 29.0650],
      [40.9740, 29.0370], [40.9900, 29.0200]
    ]
  };

  var STATION_SPINES = {
    rumelikavagi: ["bosphorus_europe"], sariyer: ["bosphorus_europe"], buyukdere: ["bosphorus_europe"],
    istinye: ["bosphorus_europe"], emirgan: ["bosphorus_europe"], asiyan: ["bosphorus_europe"],
    bebek: ["bosphorus_europe"], arnavutkoy: ["bosphorus_europe"], ortakoy: ["bosphorus_europe"],
    besiktas: ["bosphorus_europe"], kabatas: ["bosphorus_europe"], karakoy: ["bosphorus_europe", "halic"],
    eminonu: ["bosphorus_europe", "halic"], anadolukavagi: ["bosphorus_asia"], beykoz: ["bosphorus_asia"],
    pasabahce: ["bosphorus_asia"], cubuklu: ["bosphorus_asia"], kanlica: ["bosphorus_asia"],
    anadoluhisari: ["bosphorus_asia"], kucuksu: ["bosphorus_asia"], kandilli: ["bosphorus_asia"],
    cengelkoy: ["bosphorus_asia"], beylerbeyi: ["bosphorus_asia"], kuzguncuk: ["bosphorus_asia"],
    uskudar: ["bosphorus_asia"],
    kadikoy: ["marmara_asia"], moda: ["marmara_asia"], bostanci: ["marmara_asia"],
    maltepe: ["marmara_asia"], pendik: ["marmara_asia"], tuzla: ["marmara_asia"],
    kasimpasa: ["halic"], haskoy: ["halic"], sutluce: ["halic"], fener: ["halic"],
    balat: ["halic"], ayvansaray: ["halic"], eyupsultan: ["halic"]
  };

  // Drawing anchors live just off the pier in the water. Station markers stay at
  // their real map positions, while route polylines avoid snapping onto land.
  var WATER_POINTS = {
    eminonu: [41.0178, 28.9782],
    karakoy: [41.0215, 28.9790],
    kabatas: [41.0331, 28.9956],
    besiktas: [41.0405, 29.0096],
    arnavutkoy: [41.0675, 29.0458],
    bebek: [41.0767, 29.0457],
    asiyan: [41.0814, 29.0560],
    emirgan: [41.1036, 29.0573],
    istinye: [41.1152, 29.0610],
    buyukdere: [41.1609, 29.0505],
    sariyer: [41.1677, 29.0592],
    rumelikavagi: [41.1812, 29.0759],

    uskudar: [41.0286, 29.0134],
    kuzguncuk: [41.0372, 29.0311],
    beylerbeyi: [41.0452, 29.0458],
    cengelkoy: [41.0516, 29.0528],
    kandilli: [41.0750, 29.0594],
    kucuksu: [41.0799, 29.0641],
    anadoluhisari: [41.0836, 29.0647],
    kanlica: [41.1005, 29.0646],
    cubuklu: [41.1078, 29.0790],
    pasabahce: [41.1169, 29.0922],
    beykoz: [41.1350, 29.0896],
    anadolukavagi: [41.1731, 29.0870],

    kadikoy: [40.9920, 29.0215],
    moda: [40.9775, 29.0235],
    bostanci: [40.9510, 29.0920],
    maltepe: [40.9178, 29.1270],
    pendik: [40.8746, 29.2330],
    tuzla: [40.8150, 29.3000],

    kinaliada: [40.9102, 29.0545],
    burgazada: [40.8816, 29.0712],
    heybeliada: [40.8781, 29.1024],
    buyukada: [40.8746, 29.1265],
    sedefadasi: [40.8520, 29.1432],

    kasimpasa: [41.0280, 28.9662],
    fener: [41.0310, 28.9540],
    balat: [41.0347, 28.9510],
    haskoy: [41.0403, 28.9500],
    ayvansaray: [41.0402, 28.9462],
    sutluce: [41.0463, 28.9412],
    eyupsultan: [41.0472, 28.9386]
  };

  var BASE_LINE_OPACITY = 0.78;
  var BASE_LINE_WEIGHT = 3.8;
  var DASHED_LINE_WEIGHT = 3.1;
  var DIRECT_SEGMENT_LIMIT_METERS = 900;

  var DIRECT_WATER_SEGMENTS = {
    "eminonu:karakoy": true
  };

  var ROUTED_WATER_SEGMENTS = {
    "besiktas:kadikoy": {
      from: "kadikoy",
      points: [[40.9988, 29.0085], [41.0138, 29.0010], [41.0285, 29.0000]]
    },
    "kabatas:kadikoy": {
      from: "kadikoy",
      points: [[40.9988, 29.0085], [41.0120, 29.0005], [41.0255, 28.9965]]
    },
    "karakoy:uskudar": {
      from: "uskudar",
      points: [[41.0286, 29.0134], [41.0246, 29.0030], [41.0218, 28.9800]]
    },
    "eminonu:uskudar": {
      from: "eminonu",
      points: [[41.0180, 28.9790], [41.0218, 28.9950], [41.0284, 29.0130]]
    },
    "besiktas:uskudar": {
      from: "uskudar",
      points: [[41.0290, 29.0140], [41.0340, 29.0125], [41.0402, 29.0100]]
    },
    "asiyan:uskudar": {
      from: "uskudar",
      points: [[41.0288, 29.0138], [41.0485, 29.0285], [41.0656, 29.0459], [41.0762, 29.0487], [41.0822, 29.0564]]
    },
    "anadoluhisari:asiyan": {
      from: "asiyan",
      points: [[41.0812, 29.0560], [41.0822, 29.0615], [41.0834, 29.0646]]
    },
    "ortakoy:uskudar": {
      from: "uskudar",
      points: [[41.0290, 29.0140], [41.0360, 29.0190], [41.0474, 29.0262]]
    },
    "kadikoy:karakoy": {
      from: "kadikoy",
      points: [[40.9988, 29.0085], [41.0100, 28.9990], [41.0170, 28.9885]]
    },
    "eminonu:kadikoy": {
      from: "kadikoy",
      points: [[40.9988, 29.0085], [41.0095, 28.9990], [41.0140, 28.9885]]
    },
    "kadikoy:uskudar": {
      from: "kadikoy",
      points: [[40.9988, 29.0085], [41.0108, 29.0018], [41.0220, 29.0088], [41.0282, 29.0134]]
    },
    "kadikoy:kasimpasa": {
      from: "kadikoy",
      points: [[40.9988, 29.0085], [41.0100, 28.9990], [41.0180, 28.9878], [41.0208, 28.9697], [41.0234, 28.9672], [41.0260, 28.9661]]
    },
    "bostanci:kadikoy": {
      from: "kadikoy",
      points: [[40.9858, 29.0130], [40.9705, 29.0085], [40.9520, 29.0320], [40.9415, 29.0710], [40.9440, 29.0940]]
    },
    "kadikoy:kinaliada": {
      from: "kadikoy",
      points: [[40.9858, 29.0130], [40.9705, 29.0085], [40.9430, 29.0225]]
    },
    "bostanci:moda": {
      from: "moda",
      points: [[40.9752, 29.0194], [40.9705, 29.0152], [40.9520, 29.0320], [40.9415, 29.0710], [40.9440, 29.0940]]
    },
    "karakoy:moda": {
      from: "moda",
      points: [[40.9752, 29.0194], [40.9900, 29.0110], [41.0060, 29.0040], [41.0170, 28.9950], [41.0210, 28.9850]]
    },

    "karakoy:kasimpasa": {
      from: "karakoy",
      points: [[41.0208, 28.9697], [41.0234, 28.9672], [41.0260, 28.9661], [41.0280, 28.9662]]
    },
    "fener:kasimpasa": {
      from: "kasimpasa",
      points: [[41.0280, 28.9662], [41.0307, 28.9608], [41.0310, 28.9540]]
    },
    "fener:haskoy": {
      from: "fener",
      points: [[41.0312, 28.9540], [41.0358, 28.9510], [41.0402, 28.9500]]
    },
    "balat:fener": {
      from: "fener",
      points: [[41.0315, 28.9540], [41.0338, 28.9512]]
    },
    "balat:haskoy": {
      from: "balat",
      points: [[41.0352, 28.9510], [41.0384, 28.9502], [41.0403, 28.9500]]
    },
    "haskoy:kasimpasa": {
      from: "kasimpasa",
      points: [[41.0280, 28.9662], [41.0307, 28.9608], [41.0310, 28.9540], [41.0358, 28.9510], [41.0402, 28.9500]]
    },
    "ayvansaray:haskoy": {
      from: "haskoy",
      points: [[41.0402, 28.9497], [41.0400, 28.9464]]
    },
    "haskoy:sutluce": {
      from: "haskoy",
      points: [[41.0405, 28.9498], [41.0435, 28.9450], [41.0462, 28.9412]]
    },
    "ayvansaray:sutluce": {
      from: "ayvansaray",
      points: [[41.0404, 28.9460], [41.0434, 28.9430], [41.0461, 28.9414]]
    },
    "eyupsultan:sutluce": {
      from: "sutluce",
      points: [[41.0465, 28.9410], [41.0471, 28.9388]]
    },
    "burgazada:heybeliada": {
      from: "burgazada",
      points: [[40.8813, 29.0715], [40.8845, 29.0900], [40.8830, 29.1000], [40.8800, 29.1070], [40.8783, 29.1030]]
    },
    "buyukada:heybeliada": {
      from: "heybeliada",
      points: [[40.8780, 29.1024], [40.8768, 29.1150], [40.8748, 29.1265]]
    },
    "buyukada:maltepe": {
      from: "maltepe",
      points: [[40.9178, 29.1270], [40.8980, 29.1210], [40.8748, 29.1265]]
    },
    "burgazada:kinaliada": {
      from: "kinaliada",
      points: [[40.9100, 29.0545], [40.8950, 29.0620], [40.8818, 29.0712]]
    },
    "buyukada:sedefadasi": {
      from: "buyukada",
      points: [[40.8730, 29.1385], [40.8698, 29.1416], [40.8656, 29.1403], [40.8612, 29.1380], [40.8520, 29.1432]]
    },
    "pendik:tuzla": {
      from: "tuzla",
      points: [[40.8095, 29.2978], [40.8082, 29.2925], [40.8088, 29.2865], [40.8106, 29.2801], [40.8150, 29.2650], [40.8300, 29.2500], [40.8500, 29.2350], [40.8746, 29.2330]]
    },
    "buyukada:pendik": {
      from: "pendik",
      points: [[40.8746, 29.2330], [40.8735, 29.1880], [40.8745, 29.1270]]
    }
  };

  function buildSpineMeta(points) {
    var cum = [0];
    for (var i = 1; i < points.length; i++) {
      var dx = points[i][0] - points[i - 1][0], dy = points[i][1] - points[i - 1][1];
      cum.push(cum[i - 1] + Math.sqrt(dx * dx + dy * dy));
    }
    return { points: points, cum: cum };
  }
  var spineMeta = {};
  Object.keys(SPINES).forEach(function (k) { spineMeta[k] = buildSpineMeta(SPINES[k]); });

  function projectOntoSpine(p, meta) {
    var pts = meta.points, cum = meta.cum, best = null;
    for (var i = 0; i < pts.length - 1; i++) {
      var a = pts[i], b = pts[i + 1];
      var abx = b[0] - a[0], aby = b[1] - a[1];
      var len2 = abx * abx + aby * aby;
      var t = len2 > 0 ? ((p[0] - a[0]) * abx + (p[1] - a[1]) * aby) / len2 : 0;
      t = Math.max(0, Math.min(1, t));
      var projx = a[0] + abx * t, projy = a[1] + aby * t;
      var dx = p[0] - projx, dy = p[1] - projy;
      var d2 = dx * dx + dy * dy;
      if (!best || d2 < best.d2) {
        best = { point: [projx, projy], d2: d2, distAlong: cum[i] + t * (cum[i + 1] - cum[i]) };
      }
    }
    return best;
  }

  function spineSubPath(meta, projA, projB) {
    var reverse = projA.distAlong > projB.distAlong;
    var lo = Math.min(projA.distAlong, projB.distAlong);
    var hi = Math.max(projA.distAlong, projB.distAlong);
    var loPoint = reverse ? projB.point : projA.point;
    var hiPoint = reverse ? projA.point : projB.point;
    var mid = [];
    for (var i = 0; i < meta.points.length; i++) {
      if (meta.cum[i] > lo && meta.cum[i] < hi) mid.push(meta.points[i]);
    }
    var result = [loPoint].concat(mid, [hiPoint]);
    if (reverse) result.reverse();
    return result;
  }

  function commonSpine(idA, idB, line) {
    var sa = STATION_SPINES[idA], sb = STATION_SPINES[idB];
    if (!sa || !sb) return null;
    var shared = [];
    for (var i = 0; i < sa.length; i++) {
      if (sb.indexOf(sa[i]) !== -1) shared.push(sa[i]);
    }
    if (!shared.length) return null;
    if (line.category === "halic" && shared.indexOf("halic") !== -1) return "halic";
    if (shared.indexOf("bosphorus_europe") !== -1) return "bosphorus_europe";
    if (shared.indexOf("bosphorus_asia") !== -1) return "bosphorus_asia";
    if (shared.indexOf("marmara_asia") !== -1) return "marmara_asia";
    return shared[0];
  }

  function stationSide(id) {
    var spines = STATION_SPINES[id] || [];
    if (spines.indexOf("bosphorus_europe") !== -1) return "europe";
    if (spines.indexOf("bosphorus_asia") !== -1) return "asia";
    return null;
  }

  function segmentMeters(a, b) {
    var avgLat = (a[0] + b[0]) * Math.PI / 360;
    var dy = (b[0] - a[0]) * 111320;
    var dx = (b[1] - a[1]) * 111320 * Math.cos(avgLat);
    return Math.sqrt(dx * dx + dy * dy);
  }

  function stationLatLng(id) {
    var s = STATIONS[id];
    return [s.lat, s.lon];
  }

  function routeLatLng(id) {
    return WATER_POINTS[id] || stationLatLng(id);
  }

  function segmentKey(idA, idB) {
    return [idA, idB].sort().join(":");
  }

  function shouldUseDirectSegment(idA, idB, a, b) {
    if (DIRECT_WATER_SEGMENTS[segmentKey(idA, idB)]) return true;
    var sa = STATION_SPINES[idA] || [];
    var sb = STATION_SPINES[idB] || [];
    if (sa.indexOf("halic") !== -1 && sb.indexOf("halic") !== -1) return false;
    return segmentMeters(a, b) <= DIRECT_SEGMENT_LIMIT_METERS;
  }

  function routedWaterPoints(idA, idB) {
    var route = ROUTED_WATER_SEGMENTS[segmentKey(idA, idB)];
    if (!route) return [];
    var points = route.points.slice();
    if (idA !== route.from) points.reverse();
    return points;
  }

  function curvedCrossingPoints(a, b, idA, idB) {
    var sideA = stationSide(idA), sideB = stationSide(idB);
    var distance = segmentMeters(a, b);
    var lonDelta = Math.abs(a[1] - b[1]);
    if (!sideA || !sideB || sideA === sideB || distance > 10000) return [];

    var avgLat = (a[0] + b[0]) * Math.PI / 360;
    var mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    var dy = (b[0] - a[0]) * 111320;
    var dx = (b[1] - a[1]) * 111320 * Math.cos(avgLat);
    var len = Math.sqrt(dx * dx + dy * dy);
    if (!len) return [];

    var px = -dy / len;
    var py = dx / len;
    var bend = Math.min(420, Math.max(120, distance * 0.08));
    var sign = a[0] <= b[0] ? 1 : -1;
    var control = [
      mid[0] + py * bend * sign / 111320,
      mid[1] + px * bend * sign / (111320 * Math.cos(avgLat))
    ];
    var points = [];
    for (var i = 1; i < 6; i++) {
      var t = i / 6;
      var mt = 1 - t;
      points.push([
        mt * mt * a[0] + 2 * mt * t * control[0] + t * t * b[0],
        mt * mt * a[1] + 2 * mt * t * control[1] + t * t * b[1]
      ]);
    }
    return points;
  }

  function buildLineLatLngs(line) {
    var coords = [];
    function pushPoint(ll) {
      var last = coords[coords.length - 1];
      if (!last || last[0] !== ll[0] || last[1] !== ll[1]) coords.push(ll);
    }
    function samePoint(a, b) { return a[0] === b[0] && a[1] === b[1]; }

    line.stops.forEach(function (sid, i) {
      var truePt = stationLatLng(sid);
      if (i === 0) { pushPoint(truePt); return; }

      var prevId = line.stops[i - 1];
      var prevTrue = stationLatLng(prevId);
      var from = routeLatLng(prevId);
      var to = routeLatLng(sid);

      // Lead out from the pier into the water anchor before routing, if they differ.
      if (!samePoint(from, prevTrue)) pushPoint(from);

      var routed = routedWaterPoints(prevId, sid);
      if (routed.length) {
        routed.forEach(pushPoint);
      } else if (!shouldUseDirectSegment(prevId, sid, from, to)) {
        var spineKey = commonSpine(prevId, sid, line);
        if (spineKey) {
          var meta = spineMeta[spineKey];
          var sub = spineSubPath(meta, projectOntoSpine(from, meta), projectOntoSpine(to, meta));
          sub.forEach(pushPoint);
        } else {
          curvedCrossingPoints(from, to, prevId, sid).forEach(pushPoint);
        }
      }

      // Lead in from the water anchor onto the real pier coordinate so the
      // line always touches the station marker exactly.
      if (!samePoint(to, truePt)) pushPoint(to);
      pushPoint(truePt);
    });
    return coords;
  }

  // Shift a path sideways by a fixed real-world distance (meters), perpendicular
  // to its local direction, so lines sharing the same corridor render as
  // distinguishable parallel tracks instead of one stacked line.
  function offsetPath(coords, meters) {
    if (!meters) return coords;
    var n = coords.length;
    if (n < 2) return coords;
    return coords.map(function (pt, i) {
      var a = coords[i === 0 ? 0 : i - 1];
      var b = coords[i === n - 1 ? n - 1 : i + 1];
      var dLat = b[0] - a[0], dLon = b[1] - a[1];
      var len = Math.sqrt(dLat * dLat + dLon * dLon);
      if (len === 0) return pt;
      // perpendicular unit vector (in lat/lon space)
      var px = -dLon / len, py = dLat / len;
      var latMeterDeg = 1 / 111320;
      var lonMeterDeg = 1 / (111320 * Math.cos(pt[0] * Math.PI / 180));
      return [pt[0] + px * meters * latMeterDeg, pt[1] + py * meters * lonMeterDeg];
    });
  }

  // Rank each line within its category so overlapping same-corridor lines fan
  // out evenly instead of drawing on top of each other.
  var LINE_OFFSET_METERS = {};
  (function () {
    var spacing = 4;
    var byCategory = {};
    Object.keys(LINES).forEach(function (id) {
      var cat = LINES[id].category;
      (byCategory[cat] = byCategory[cat] || []).push(Number(id));
    });
    Object.keys(byCategory).forEach(function (cat) {
      var ids = byCategory[cat].sort(function (a, b) { return a - b; });
      var n = ids.length;
      ids.forEach(function (id, rank) {
        LINE_OFFSET_METERS[id] = (rank - (n - 1) / 2) * spacing;
      });
    });
  })();

  // ---------------- Map setup ----------------
  var map = L.map("map", { zoomControl: true, minZoom: 9, maxZoom: 17 });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19
  }).addTo(map);

  var allLatLngs = [];
  Object.keys(STATIONS).forEach(function (id) {
    var s = STATIONS[id];
    allLatLngs.push([s.lat, s.lon]);
  });
  map.fitBounds(L.latLngBounds(allLatLngs), { padding: [30, 30] });

  // ---------------- Line layers ----------------
  var lineLayers = {};   // id -> L.Polyline
  var lineVisible = {};  // id -> bool
  var lineRows = {};     // id -> row element

  var lineIds = Object.keys(LINES).map(Number).sort(function (a, b) { return a - b; });

  lineIds.forEach(function (id) {
    var line = LINES[id];
    var latlngs = offsetPath(buildLineLatLngs(line), LINE_OFFSET_METERS[id]);
    var poly = L.polyline(latlngs, {
      color: line.color,
      weight: line.dashed ? DASHED_LINE_WEIGHT : BASE_LINE_WEIGHT,
      opacity: BASE_LINE_OPACITY,
      dashArray: line.dashed ? "1,9" : null,
      lineCap: "round",
      lineJoin: "round",
      smoothFactor: 0.35
    }).addTo(map);

    poly.bindTooltip(id + " · " + line.name_tr, { sticky: true });
    poly.on("mouseover", function () { highlightLine(id, true); });
    poly.on("mouseout", function () { highlightLine(id, false); });
    poly.on("click", function () { focusLine(id); });

    lineLayers[id] = poly;
    lineVisible[id] = true;
  });

  // ---------------- Station markers ----------------
  var stationMarkers = {};

  Object.keys(STATIONS).forEach(function (id) {
    var s = STATIONS[id];
    var n = s.lines.length;
    var isHub = n >= 4;
    var radius = 3.5 + Math.min(n, 10) * 0.55;

    var marker = L.circleMarker([s.lat, s.lon], {
      radius: radius,
      weight: isHub ? 2.5 : 1.6,
      color: "#0a3a1f",
      fillColor: "#ffffff",
      fillOpacity: 1,
      opacity: 1
    }).addTo(map);

    marker.bindTooltip(s.name, {
      permanent: isHub,
      direction: "right",
      offset: [8, 0],
      className: "station-label"
    });

    marker.bindPopup(buildPopupHTML(id, s), { maxWidth: 280 });

    stationMarkers[id] = marker;
  });

  function buildPopupHTML(id, s) {
    var lineBadges = s.lines.slice().sort(function (a, b) { return a - b; }).map(function (n) {
      var ld = LINES[n];
      return '<span class="popup-line-badge" data-line="' + n + '">' +
        '<span class="dot" style="background:' + ld.color + '">' + n + "</span>" +
        ld.name_tr + "</span>";
    }).join("");

    var transferHTML = "";
    if (s.transfers && s.transfers.length) {
      transferHTML = '<div class="popup-section-label">Aktarma · Transfer</div><div class="popup-badges">' +
        s.transfers.map(function (t) {
          return '<span class="popup-transfer-badge" title="' + t.name.replace(/"/g, "&quot;") + '">' + t.code + "</span>";
        }).join("") + "</div>";
    }

    return '<div class="popup-title">' + s.name + "</div>" +
      '<div class="popup-section-label">Hatlar (' + s.lines.length + ") · Lines</div>" +
      '<div class="popup-badges">' + lineBadges + "</div>" +
      transferHTML;
  }

  map.on("popupopen", function (e) {
    var el = e.popup.getElement();
    if (!el) return;
    el.querySelectorAll(".popup-line-badge").forEach(function (badge) {
      badge.addEventListener("click", function () {
        var n = Number(badge.getAttribute("data-line"));
        focusLine(n);
      });
    });
  });

  // ---------------- Highlight / toggle ----------------
  function highlightLine(id, on) {
    var poly = lineLayers[id];
    if (!poly) return;
    if (on) {
      poly.bringToFront();
      poly.setStyle({ weight: (LINES[id].dashed ? 5.2 : 6.2), opacity: 1 });
      lineIds.forEach(function (k) {
        if (k !== id && lineVisible[k]) lineLayers[k].setStyle({ opacity: 0.12 });
      });
    } else {
      lineIds.forEach(function (k) {
        if (lineVisible[k]) {
          lineLayers[k].setStyle({
            opacity: BASE_LINE_OPACITY,
            weight: LINES[k].dashed ? DASHED_LINE_WEIGHT : BASE_LINE_WEIGHT
          });
        }
      });
    }
  }

  function setLineVisible(id, visible) {
    lineVisible[id] = visible;
    var poly = lineLayers[id];
    if (visible) {
      if (!map.hasLayer(poly)) poly.addTo(map);
    } else {
      if (map.hasLayer(poly)) map.removeLayer(poly);
    }
    var row = lineRows[id];
    if (row) row.querySelector("input").checked = visible;
  }

  function focusLine(id) {
    if (!lineVisible[id]) setLineVisible(id, true);
    var poly = lineLayers[id];
    map.fitBounds(poly.getBounds(), { padding: [40, 40], maxZoom: 14 });
    highlightLine(id, true);
    setTimeout(function () { highlightLine(id, false); }, 1600);

    var row = lineRows[id];
    if (row) {
      row.scrollIntoView({ behavior: "smooth", block: "center" });
      row.classList.add("flash");
      setTimeout(function () { row.classList.remove("flash"); }, 1600);
    }
  }

  // ---------------- Sidebar ----------------
  var groupsByCategory = {};
  lineIds.forEach(function (id) {
    var cat = LINES[id].category;
    (groupsByCategory[cat] = groupsByCategory[cat] || []).push(id);
  });

  var lineGroupsEl = document.getElementById("lineGroups");
  var categories = Object.keys(groupsByCategory).sort(function (a, b) {
    return CATEGORY_META[a].order - CATEGORY_META[b].order;
  });

  categories.forEach(function (cat) {
    var meta = CATEGORY_META[cat];
    var ids = groupsByCategory[cat];

    var groupEl = document.createElement("div");
    groupEl.className = "line-group";

    var header = document.createElement("div");
    header.className = "line-group-header";
    header.innerHTML = '<span>' + meta.label + '</span>' +
      '<span><span class="ggl-count">' + ids.length + '</span><span class="ggl-arrow">▾</span></span>';
    header.addEventListener("click", function () {
      groupEl.classList.toggle("collapsed");
    });
    groupEl.appendChild(header);

    var rowsWrap = document.createElement("div");
    rowsWrap.className = "line-rows";

    ids.forEach(function (id) {
      var line = LINES[id];
      var row = document.createElement("label");
      row.className = "line-row";

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = true;
      checkbox.addEventListener("change", function () {
        setLineVisible(id, checkbox.checked);
      });

      var badge = document.createElement("span");
      badge.className = "line-badge";
      badge.style.background = line.color;
      badge.textContent = id;

      var text = document.createElement("span");
      text.className = "line-text";
      text.innerHTML = '<div class="lt-tr">' + line.name_tr + '</div><div class="lt-en">' + line.name_en + '</div>';

      row.appendChild(checkbox);
      row.appendChild(badge);
      row.appendChild(text);

      row.addEventListener("mouseenter", function () {
        if (lineVisible[id]) highlightLine(id, true);
      });
      row.addEventListener("mouseleave", function () {
        if (lineVisible[id]) highlightLine(id, false);
      });

      rowsWrap.appendChild(row);
      lineRows[id] = row;
    });

    groupEl.appendChild(rowsWrap);
    lineGroupsEl.appendChild(groupEl);
  });

  document.getElementById("showAll").addEventListener("click", function () {
    lineIds.forEach(function (id) { setLineVisible(id, true); });
  });
  document.getElementById("hideAll").addEventListener("click", function () {
    lineIds.forEach(function (id) { setLineVisible(id, false); });
  });

  // ---------------- Search ----------------
  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");
  var stationIds = Object.keys(STATIONS);

  function renderSearch(query) {
    var q = trLower(query.trim());
    if (!q) {
      searchResults.classList.remove("open");
      searchResults.innerHTML = "";
      return;
    }
    var matches = stationIds.filter(function (id) {
      return trLower(STATIONS[id].name).indexOf(q) !== -1;
    }).slice(0, 8);

    if (!matches.length) {
      searchResults.innerHTML = '<div class="search-result"><span>Sonuç bulunamadı</span></div>';
      searchResults.classList.add("open");
      return;
    }

    searchResults.innerHTML = matches.map(function (id) {
      var s = STATIONS[id];
      return '<div class="search-result" data-id="' + id + '"><span>' + s.name + '</span><span class="sr-lines">' + s.lines.length + ' hat</span></div>';
    }).join("");
    searchResults.classList.add("open");

    searchResults.querySelectorAll(".search-result").forEach(function (el) {
      el.addEventListener("click", function () {
        var id = el.getAttribute("data-id");
        if (!id) return;
        selectStation(id);
      });
    });
  }

  function selectStation(id) {
    var s = STATIONS[id];
    map.flyTo([s.lat, s.lon], 15, { duration: 0.6 });
    setTimeout(function () { stationMarkers[id].openPopup(); }, 350);
    searchResults.classList.remove("open");
    searchInput.value = s.name;
    closeSidebarMobile();
  }

  searchInput.addEventListener("input", function () { renderSearch(searchInput.value); });
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { searchResults.classList.remove("open"); searchInput.blur(); }
  });
  document.addEventListener("click", function (e) {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.classList.remove("open");
    }
  });

  // ---------------- Mobile sidebar ----------------
  var sidebar = document.getElementById("sidebar");
  var scrim = document.getElementById("sidebarScrim");
  var toggleBtn = document.getElementById("sidebarToggle");

  function openSidebarMobile() {
    sidebar.classList.add("open");
    scrim.classList.add("open");
  }
  function closeSidebarMobile() {
    sidebar.classList.remove("open");
    scrim.classList.remove("open");
  }
  toggleBtn.addEventListener("click", function () {
    sidebar.classList.contains("open") ? closeSidebarMobile() : openSidebarMobile();
  });
  scrim.addEventListener("click", closeSidebarMobile);

  // ---------------- Privacy modal ----------------
  var privacyOverlay = document.getElementById("privacyOverlay");
  document.getElementById("privacyLink").addEventListener("click", function (e) {
    e.preventDefault();
    privacyOverlay.classList.add("open");
  });
  document.getElementById("privacyClose").addEventListener("click", function () {
    privacyOverlay.classList.remove("open");
  });
  privacyOverlay.addEventListener("click", function (e) {
    if (e.target === privacyOverlay) privacyOverlay.classList.remove("open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") privacyOverlay.classList.remove("open");
  });

})();
