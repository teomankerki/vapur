const FERRY_DATA = {
 "stations": {
  "rumelikavagi": {
   "name": "Rumeli Kavağı",
   "lat": 41.18164,
   "lon": 29.0752,
   "lines": [
    8,
    10,
    11,
    24,
    25
   ],
   "transfers": []
  },
  "sariyer": {
   "name": "Sarıyer",
   "lat": 41.16716,
   "lon": 29.05768,
   "lines": [
    8,
    10,
    11,
    12,
    18,
    24
   ],
   "transfers": []
  },
  "buyukdere": {
   "name": "Büyükdere",
   "lat": 41.16055,
   "lon": 29.0483,
   "lines": [
    10
   ],
   "transfers": []
  },
  "istinye": {
   "name": "İstinye",
   "lat": 41.1144,
   "lon": 29.05912,
   "lines": [
    8,
    10,
    12,
    13,
    15,
    17
   ],
   "transfers": []
  },
  "emirgan": {
   "name": "Emirgan",
   "lat": 41.10305,
   "lon": 29.05609,
   "lines": [
    8,
    10,
    13,
    14
   ],
   "transfers": []
  },
  "asiyan": {
   "name": "Aşiyan",
   "lat": 41.08114,
   "lon": 29.05486,
   "lines": [
    32,
    33
   ],
   "transfers": [
    {
     "code": "F4",
     "name": "Hisarüstü (Boğaziçi Üniversitesi)-Aşiyan Füniküler Hattı"
    }
   ]
  },
  "bebek": {
   "name": "Bebek",
   "lat": 41.07635,
   "lon": 29.04443,
   "lines": [
    8,
    10,
    13,
    14
   ],
   "transfers": []
  },
  "arnavutkoy": {
   "name": "Arnavutköy",
   "lat": 41.06704,
   "lon": 29.04414,
   "lines": [
    8,
    10,
    13
   ],
   "transfers": []
  },
  "ortakoy": {
   "name": "Ortaköy",
   "lat": 41.04728,
   "lon": 29.02562,
   "lines": [
    7,
    8,
    10,
    23,
    34
   ],
   "transfers": []
  },
  "besiktas": {
   "name": "Beşiktaş",
   "lat": 41.04108,
   "lon": 29.00736,
   "lines": [
    3,
    8,
    10,
    12,
    16,
    21,
    24,
    25,
    28,
    30,
    34
   ],
   "transfers": []
  },
  "kabatas": {
   "name": "Kabataş",
   "lat": 41.03294,
   "lon": 28.99415,
   "lines": [
    6,
    8,
    16,
    19,
    26,
    28,
    30
   ],
   "transfers": [
    {
     "code": "T1",
     "name": "Kabataş-Bağcılar Tramvay Hattı"
    },
    {
     "code": "F1",
     "name": "Kabataş-Taksim Füniküler Hattı"
    }
   ]
  },
  "karakoy": {
   "name": "Karaköy",
   "lat": 41.02143,
   "lon": 28.97673,
   "lines": [
    1,
    2,
    4,
    5,
    6,
    28
   ],
   "transfers": [
    {
     "code": "F2",
     "name": "Karaköy-Beyoğlu Tarihi Tünel"
    },
    {
     "code": "T1",
     "name": "Kabataş-Bağcılar Tramvay Hattı"
    }
   ]
  },
  "eminonu": {
   "name": "Eminönü",
   "lat": 41.01713,
   "lon": 28.97627,
   "lines": [
    1,
    4,
    8,
    10,
    23,
    24,
    25,
    34
   ],
   "transfers": [
    {
     "code": "T1",
     "name": "Kabataş-Bağcılar Tramvay Hattı"
    },
    {
     "code": "Marmaray",
     "name": "Halkalı-Gebze Marmaray Hattı"
    },
    {
     "code": "T5",
     "name": "Eminönü-Alibeyköy Tramvay Hattı"
    }
   ]
  },
  "ayvansaray": {
   "name": "Ayvansaray",
   "lat": 41.04081,
   "lon": 28.94485,
   "lines": [
    5
   ],
   "transfers": [
    {
     "code": "T5",
     "name": "Eminönü-Alibeyköy Tramvay Hattı"
    },
    {
     "code": "Metrobüs",
     "name": "Söğütlüçeşme-Beylikdüzü Metrobüs Hattı"
    }
   ]
  },
  "eyupsultan": {
   "name": "Eyüpsultan",
   "lat": 41.04725,
   "lon": 28.9378,
   "lines": [
    5,
    27,
    28
   ],
   "transfers": [
    {
     "code": "TF2",
     "name": "Eyüpsultan-Piyer Loti Teleferik Hattı"
    },
    {
     "code": "T5",
     "name": "Eminönü-Alibeyköy Tramvay Hattı"
    }
   ]
  },
  "sutluce": {
   "name": "Sütlüce",
   "lat": 41.04667,
   "lon": 28.94069,
   "lines": [
    5,
    27,
    28
   ],
   "transfers": [
    {
     "code": "Metrobüs",
     "name": "Söğütlüçeşme-Beylikdüzü Metrobüs Hattı"
    }
   ]
  },
  "haskoy": {
   "name": "Hasköy",
   "lat": 41.04055,
   "lon": 28.94906,
   "lines": [
    5,
    27,
    28
   ],
   "transfers": []
  },
  "kasimpasa": {
   "name": "Kasımpaşa",
   "lat": 41.03031,
   "lon": 28.96608,
   "lines": [
    5,
    27,
    28
   ],
   "transfers": []
  },
  "balat": {
   "name": "Balat",
   "lat": 41.03485,
   "lon": 28.94922,
   "lines": [
    5
   ],
   "transfers": [
    {
     "code": "T5",
     "name": "Eminönü-Alibeyköy Tramvay Hattı"
    }
   ]
  },
  "fener": {
   "name": "Fener",
   "lat": 41.03095,
   "lon": 28.95262,
   "lines": [
    5,
    27
   ],
   "transfers": [
    {
     "code": "T5",
     "name": "Eminönü-Alibeyköy Tramvay Hattı"
    }
   ]
  },
  "anadolukavagi": {
   "name": "Anadolu Kavağı",
   "lat": 41.17343,
   "lon": 29.08787,
   "lines": [
    8,
    9,
    11,
    24,
    25
   ],
   "transfers": []
  },
  "beykoz": {
   "name": "Beykoz",
   "lat": 41.1349,
   "lon": 29.0923,
   "lines": [
    8,
    9,
    18
   ],
   "transfers": []
  },
  "pasabahce": {
   "name": "Paşabahçe",
   "lat": 41.11668,
   "lon": 29.09325,
   "lines": [
    8,
    9
   ],
   "transfers": []
  },
  "cubuklu": {
   "name": "Çubuklu",
   "lat": 41.10746,
   "lon": 29.08046,
   "lines": [
    8,
    9,
    17
   ],
   "transfers": []
  },
  "kanlica": {
   "name": "Kanlıca",
   "lat": 41.10025,
   "lon": 29.06532,
   "lines": [
    8,
    9,
    13,
    14,
    16,
    24
   ],
   "transfers": []
  },
  "anadoluhisari": {
   "name": "Anadolu Hisarı",
   "lat": 41.08323,
   "lon": 29.06664,
   "lines": [
    8,
    9,
    13,
    14,
    32
   ],
   "transfers": []
  },
  "kucuksu": {
   "name": "Küçüksu",
   "lat": 41.07961,
   "lon": 29.06539,
   "lines": [
    8,
    15,
    16,
    32
   ],
   "transfers": []
  },
  "kandilli": {
   "name": "Kandilli",
   "lat": 41.07463,
   "lon": 29.05816,
   "lines": [
    8,
    13
   ],
   "transfers": []
  },
  "cengelkoy": {
   "name": "Çengelköy",
   "lat": 41.05108,
   "lon": 29.05163,
   "lines": [
    8,
    9,
    13,
    30
   ],
   "transfers": []
  },
  "beylerbeyi": {
   "name": "Beylerbeyi",
   "lat": 41.04497,
   "lon": 29.04462,
   "lines": [
    8,
    9
   ],
   "transfers": []
  },
  "kuzguncuk": {
   "name": "Kuzguncuk",
   "lat": 41.03688,
   "lon": 29.02974,
   "lines": [
    8,
    30
   ],
   "transfers": []
  },
  "uskudar": {
   "name": "Üsküdar",
   "lat": 41.02814,
   "lon": 29.01529,
   "lines": [
    4,
    5,
    7,
    8,
    9,
    23,
    24,
    25,
    33
   ],
   "transfers": [
    {
     "code": "M5",
     "name": "Üsküdar-Çekmeköy Metro Hattı"
    },
    {
     "code": "Marmaray",
     "name": "Halkalı-Gebze Marmaray Hattı"
    }
   ]
  },
  "kadikoy": {
   "name": "Kadıköy",
   "lat": 40.99291,
   "lon": 29.02287,
   "lines": [
    1,
    2,
    3,
    7,
    12,
    19,
    21,
    25,
    26,
    27
   ],
   "transfers": [
    {
     "code": "M4",
     "name": "Kadıköy-Tavşantepe Metro Hattı"
    },
    {
     "code": "T3",
     "name": "Kadıköy-Moda Tramvay Hattı"
    }
   ]
  },
  "moda": {
   "name": "Moda",
   "lat": 40.97893,
   "lon": 29.02519,
   "lines": [
    6
   ],
   "transfers": []
  },
  "bostanci": {
   "name": "Bostancı",
   "lat": 40.95156,
   "lon": 29.09426,
   "lines": [
    6,
    19,
    20,
    25
   ],
   "transfers": [
    {
     "code": "M8",
     "name": "Bostancı-Dudullu Metro Hattı"
    },
    {
     "code": "Marmaray",
     "name": "Halkalı-Gebze Marmaray Hattı"
    }
   ]
  },
  "maltepe": {
   "name": "Maltepe",
   "lat": 40.91818,
   "lon": 29.12846,
   "lines": [
    29
   ],
   "transfers": []
  },
  "pendik": {
   "name": "Pendik",
   "lat": 40.87497,
   "lon": 29.2346,
   "lines": [
    31
   ],
   "transfers": []
  },
  "tuzla": {
   "name": "Tuzla",
   "lat": 40.81476,
   "lon": 29.30183,
   "lines": [
    31
   ],
   "transfers": []
  },
  "kinaliada": {
   "name": "Kınalıada",
   "lat": 40.91013,
   "lon": 29.05587,
   "lines": [
    19,
    20,
    21,
    29
   ],
   "transfers": []
  },
  "burgazada": {
   "name": "Burgazada",
   "lat": 40.88156,
   "lon": 29.06977,
   "lines": [
    19,
    20,
    21,
    29
   ],
   "transfers": []
  },
  "heybeliada": {
   "name": "Heybeliada",
   "lat": 40.87785,
   "lon": 29.10087,
   "lines": [
    19,
    20,
    21,
    29
   ],
   "transfers": []
  },
  "buyukada": {
   "name": "Büyükada",
   "lat": 40.87494,
   "lon": 29.1283,
   "lines": [
    19,
    20,
    21,
    22,
    29,
    31
   ],
   "transfers": []
  },
  "sedefadasi": {
   "name": "Sedef Adası",
   "lat": 40.85135,
   "lon": 29.1439,
   "lines": [
    22
   ],
   "transfers": []
  }
 },
 "lines": {
  "1": {
   "id": 1,
   "color": "#076eb3",
   "name_tr": "Kadıköy-Karaköy-Eminönü",
   "name_en": "Kadıköy-Karaköy-Eminönü",
   "category": "city",
   "dashed": false,
   "stops": [
    "kadikoy",
    "karakoy",
    "eminonu"
   ]
  },
  "2": {
   "id": 2,
   "color": "#94519b",
   "name_tr": "Kadıköy-Karaköy",
   "name_en": "Kadıköy-Karaköy",
   "category": "city",
   "dashed": false,
   "stops": [
    "kadikoy",
    "karakoy"
   ]
  },
  "3": {
   "id": 3,
   "color": "#99a234",
   "name_tr": "Kadıköy-Beşiktaş",
   "name_en": "Kadıköy-Beşiktaş",
   "category": "city",
   "dashed": false,
   "stops": [
    "kadikoy",
    "besiktas"
   ]
  },
  "4": {
   "id": 4,
   "color": "#ec6907",
   "name_tr": "Üsküdar-Karaköy-Eminönü",
   "name_en": "Üsküdar-Karaköy-Eminönü",
   "category": "city",
   "dashed": false,
   "stops": [
    "uskudar",
    "karakoy",
    "eminonu"
   ]
  },
  "5": {
   "id": 5,
   "color": "#07aeb6",
   "name_tr": "Haliç Hattı",
   "name_en": "Golden Horn Line",
   "category": "halic",
   "dashed": false,
   "stops": [
    "uskudar",
    "karakoy",
    "kasimpasa",
    "fener",
    "balat",
    "haskoy",
    "ayvansaray",
    "sutluce",
    "eyupsultan"
   ]
  },
  "6": {
   "id": 6,
   "color": "#086d83",
   "name_tr": "Bostancı-Moda-Karaköy-Kabataş",
   "name_en": "Bostancı-Moda-Karaköy-Kabataş",
   "category": "city",
   "dashed": false,
   "stops": [
    "bostanci",
    "moda",
    "karakoy",
    "kabatas"
   ]
  },
  "7": {
   "id": 7,
   "color": "#4b2776",
   "name_tr": "Üsküdar-Ortaköy-Kadıköy",
   "name_en": "Üsküdar-Ortaköy-Kadıköy",
   "category": "city",
   "dashed": false,
   "stops": [
    "kadikoy",
    "uskudar",
    "ortakoy"
   ]
  },
  "8": {
   "id": 8,
   "color": "#b24617",
   "name_tr": "Boğaz Hattı",
   "name_en": "Bosphorus Line",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "eminonu",
    "kabatas",
    "besiktas",
    "ortakoy",
    "uskudar",
    "kuzguncuk",
    "beylerbeyi",
    "cengelkoy",
    "arnavutkoy",
    "bebek",
    "kandilli",
    "kucuksu",
    "anadoluhisari",
    "kanlica",
    "emirgan",
    "istinye",
    "cubuklu",
    "pasabahce",
    "beykoz",
    "sariyer",
    "rumelikavagi",
    "anadolukavagi"
   ]
  },
  "9": {
   "id": 9,
   "color": "#ef8aa4",
   "name_tr": "Üsküdar-Anadolukavağı",
   "name_en": "Üsküdar-Anadolu Kavağı",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "uskudar",
    "beylerbeyi",
    "cengelkoy",
    "anadoluhisari",
    "kanlica",
    "cubuklu",
    "pasabahce",
    "beykoz",
    "anadolukavagi"
   ]
  },
  "10": {
   "id": 10,
   "color": "#b8105c",
   "name_tr": "Eminönü-Rumelikavağı",
   "name_en": "Eminönü-Rumeli Kavağı",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "eminonu",
    "besiktas",
    "ortakoy",
    "arnavutkoy",
    "bebek",
    "emirgan",
    "istinye",
    "buyukdere",
    "sariyer",
    "rumelikavagi"
   ]
  },
  "11": {
   "id": 11,
   "color": "#8cbf2e",
   "name_tr": "Sarıyer-Rumelikavağı-Anadolukavağı",
   "name_en": "Sarıyer-Rumeli Kavağı-Anadolu Kavağı",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "sariyer",
    "rumelikavagi",
    "anadolukavagi"
   ]
  },
  "12": {
   "id": 12,
   "color": "#077c5a",
   "name_tr": "Kadıköy-Sarıyer",
   "name_en": "Kadıköy-Sarıyer",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "kadikoy",
    "besiktas",
    "istinye",
    "sariyer"
   ]
  },
  "13": {
   "id": 13,
   "color": "#199cd8",
   "name_tr": "Çengelköy-İstinye",
   "name_en": "Çengelköy-İstinye",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "cengelkoy",
    "arnavutkoy",
    "bebek",
    "kandilli",
    "anadoluhisari",
    "kanlica",
    "emirgan",
    "istinye"
   ]
  },
  "14": {
   "id": 14,
   "color": "#0e7ab2",
   "name_tr": "Bebek-Emirgan",
   "name_en": "Bebek-Emirgan",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "bebek",
    "anadoluhisari",
    "kanlica",
    "emirgan"
   ]
  },
  "15": {
   "id": 15,
   "color": "#73848a",
   "name_tr": "Küçüksu-İstinye",
   "name_en": "Küçüksu-İstinye",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "kucuksu",
    "istinye"
   ]
  },
  "16": {
   "id": 16,
   "color": "#feca28",
   "name_tr": "Küçüksu-Beşiktaş-Kabataş",
   "name_en": "Küçüksu-Beşiktaş-Kabataş",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "kanlica",
    "kucuksu",
    "besiktas",
    "kabatas"
   ]
  },
  "17": {
   "id": 17,
   "color": "#e40e7c",
   "name_tr": "İstinye-Çubuklu",
   "name_en": "İstinye-Çubuklu",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "istinye",
    "cubuklu"
   ]
  },
  "18": {
   "id": 18,
   "color": "#364192",
   "name_tr": "Beykoz-Sarıyer",
   "name_en": "Beykoz-Sarıyer",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "beykoz",
    "sariyer"
   ]
  },
  "19": {
   "id": 19,
   "color": "#333227",
   "name_tr": "Kabataş-Adalar",
   "name_en": "Kabataş-Islands",
   "category": "islands",
   "dashed": false,
   "stops": [
    "kabatas",
    "kadikoy",
    "kinaliada",
    "burgazada",
    "heybeliada",
    "buyukada",
    "bostanci"
   ]
  },
  "20": {
   "id": 20,
   "color": "#c67916",
   "name_tr": "Bostancı-Adalar",
   "name_en": "Bostancı-Islands",
   "category": "islands",
   "dashed": false,
   "stops": [
    "bostanci",
    "kinaliada",
    "burgazada",
    "heybeliada",
    "buyukada"
   ]
  },
  "21": {
   "id": 21,
   "color": "#554596",
   "name_tr": "Beşiktaş-Adalar",
   "name_en": "Beşiktaş-Islands",
   "category": "islands",
   "dashed": false,
   "stops": [
    "besiktas",
    "kadikoy",
    "kinaliada",
    "burgazada",
    "heybeliada",
    "buyukada"
   ]
  },
  "22": {
   "id": 22,
   "color": "#c51723",
   "name_tr": "Büyükada-Sedefadası",
   "name_en": "Büyükada-Sedef Island",
   "category": "islands",
   "dashed": false,
   "stops": [
    "buyukada",
    "sedefadasi"
   ]
  },
  "23": {
   "id": 23,
   "color": "#4bad33",
   "name_tr": "Kısa Boğaz Turu",
   "name_en": "Short Bosphorus Tour",
   "category": "tour",
   "dashed": true,
   "stops": [
    "eminonu",
    "uskudar",
    "ortakoy"
   ]
  },
  "24": {
   "id": 24,
   "color": "#0b959c",
   "name_tr": "Uzun Boğaz Turu",
   "name_en": "Long Bosphorus Tour",
   "category": "tour",
   "dashed": true,
   "stops": [
    "eminonu",
    "besiktas",
    "uskudar",
    "kanlica",
    "sariyer",
    "rumelikavagi",
    "anadolukavagi"
   ]
  },
  "25": {
   "id": 25,
   "color": "#662a10",
   "name_tr": "Mehtap Turu",
   "name_en": "Moonlight Tour",
   "category": "tour",
   "dashed": true,
   "stops": [
    "bostanci",
    "kadikoy",
    "eminonu",
    "uskudar",
    "besiktas",
    "rumelikavagi",
    "anadolukavagi"
   ]
  },
  "26": {
   "id": 26,
   "color": "#bb7e14",
   "name_tr": "Kabataş-Kadıköy",
   "name_en": "Kabataş-Kadıköy",
   "category": "city",
   "dashed": false,
   "stops": [
    "kabatas",
    "kadikoy"
   ]
  },
  "27": {
   "id": 27,
   "color": "#7cb828",
   "name_tr": "Kadıköy-Kasımpaşa-Fener-Hasköy-Sütlüce-Eyüpsultan",
   "name_en": "Kadıköy-Kasımpaşa-Fener-Hasköy-Sütlüce-Eyüpsultan",
   "category": "halic",
   "dashed": false,
   "stops": [
    "kadikoy",
    "kasimpasa",
    "fener",
    "haskoy",
    "sutluce",
    "eyupsultan"
   ]
  },
  "28": {
   "id": 28,
   "color": "#fae50c",
   "name_tr": "Beşiktaş-Kabataş-Karaköy-Kasımpaşa-Hasköy-Sütlüce-Eyüpsultan",
   "name_en": "Beşiktaş-Kabataş-Karaköy-Kasımpaşa-Hasköy-Sütlüce-Eyüpsultan",
   "category": "halic",
   "dashed": false,
   "stops": [
    "besiktas",
    "kabatas",
    "karakoy",
    "kasimpasa",
    "haskoy",
    "sutluce",
    "eyupsultan"
   ]
  },
  "29": {
   "id": 29,
   "color": "#b13188",
   "name_tr": "Maltepe-Büyükada-Heybeliada-Burgazada-Kınalıada",
   "name_en": "Maltepe-Büyükada-Heybeliada-Burgazada-Kınalıada",
   "category": "islands",
   "dashed": false,
   "stops": [
    "maltepe",
    "buyukada",
    "heybeliada",
    "burgazada",
    "kinaliada"
   ]
  },
  "30": {
   "id": 30,
   "color": "#3c4796",
   "name_tr": "Çengelköy-Kuzguncuk-Beşiktaş-Kabataş",
   "name_en": "Çengelköy-Kuzguncuk-Beşiktaş-Kabataş",
   "category": "city",
   "dashed": false,
   "stops": [
    "cengelkoy",
    "kuzguncuk",
    "besiktas",
    "kabatas"
   ]
  },
  "31": {
   "id": 31,
   "color": "#e00817",
   "name_tr": "Tuzla-Pendik-Büyükada",
   "name_en": "Tuzla-Pendik-Büyükada",
   "category": "islands",
   "dashed": false,
   "stops": [
    "tuzla",
    "pendik",
    "buyukada"
   ]
  },
  "32": {
   "id": 32,
   "color": "#ea9403",
   "name_tr": "Aşiyan-Anadolu Hisarı-Küçüksu",
   "name_en": "Aşiyan-Anadolu Hisarı-Küçüksu",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "asiyan",
    "anadoluhisari",
    "kucuksu"
   ]
  },
  "33": {
   "id": 33,
   "color": "#93bfc1",
   "name_tr": "Üsküdar-Aşiyan",
   "name_en": "Üsküdar-Aşiyan",
   "category": "bosphorus",
   "dashed": false,
   "stops": [
    "uskudar",
    "asiyan"
   ]
  },
  "34": {
   "id": 34,
   "color": "#0d3a21",
   "name_tr": "Ortaköy-Beşiktaş-Eminönü",
   "name_en": "Ortaköy-Beşiktaş-Eminönü",
   "category": "city",
   "dashed": false,
   "stops": [
    "ortakoy",
    "besiktas",
    "eminonu"
   ]
  }
 }
};
