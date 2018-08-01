var isString = require('is-string')

var datain = {
  "wbs": {
    "41508250": {
      "en": "Lake Erie 1 - Western Basin",
      "fr": "Lac �_ri�� 1 - Bassin ouest",
      "lat": 41.83869218,
      "long": -82.83380557
    },
    "42048308": {
      "en": "Lake Erie 5b - Lower Detroit River",
      "fr": "Lac �_ri�� 5b - Cours inf��rieur de la rivi��re D��troit",
      "lat": 42.15229085,
      "long": -83.1221968
    },
    "42068227": {
      "en": "Lake Erie 2b - Wheatley Harbour",
      "fr": "Lac �_ri�� 2b - Havre Wheatley",
      "lat": 42.06751304,
      "long": -82.46753351
    },
    "42158307": {
      "en": "Lake Erie 5a - Detroit River",
      "fr": "Lac �_ri�� 5a - Rivi��re D��troit",
      "lat": 42.25013023,
      "long": -83.11578812
    },
    "42178153": {
      "en": "Lake Erie 2a - Rondeau Bay",
      "fr": "Lac �_ri�� 2a - Baie Rondeau",
      "lat": 42.2938925,
      "long": -81.89270425
    },
    "42208225": {
      "en": "Thames River",
      "fr": "Rivi��re Thames",
      "lat": 42.41431487,
      "long": -82.17548023
    },
    "42288240": {
      "en": "Lake Erie 6 - Lake St. Clair",
      "fr": "Lac �_ri�� 6 - Lac Sainte-Claire",
      "lat": 42.46729337,
      "long": -82.67889836
    },
    "42358211": {
      "en": "Sydenham River",
      "fr": "Rivi��re Sydenham",
      "lat": 42.59388033,
      "long": -82.18298757
    },
    "42368026": {
      "en": "Big Creek",
      "fr": "Ruisseau Big",
      "lat": 42.60230327,
      "long": -80.4522131
    },
    "42378107": {
      "en": "Lake Erie 2 - Central Basin",
      "fr": "Lac �_ri�� 2 - Bassin du centre",
      "lat": 42.30591645,
      "long": -81.51300443
    },
    "42388113": {
      "en": "Kettle Creek",
      "fr": "Ruisseau Kettle",
      "lat": 42.65973733,
      "long": -81.21271139
    },
    "42388142": {
      "en": "Thames River",
      "fr": "Rivi��re Thames",
      "lat": 42.67328711,
      "long": -81.69549963
    },
    "42408010": {
      "en": "Lake Erie 3 - Long Point Bay",
      "fr": "Lac �_ri�� 3 - Baie Long Point",
      "lat": 42.68152693,
      "long": -80.1757848
    },
    "42408230": {
      "en": "Lake Erie 7c - Lower St. Clair River",
      "fr": "Lac �_ri�� 7c - Cours inf��rieur de la rivi��re Sainte-Claire",
      "lat": 42.71527927,
      "long": -82.48248718
    },
    "42457915": {
      "en": "Lake Erie 4 - Eastern Basin",
      "fr": "Lac �_ri�� 4 - Bassin est",
      "lat": 42.72467882,
      "long": -79.64252048
    },
    "42458035": {
      "en": "Deer Creek Reservoir",
      "fr": "R��servoir Deer Creek",
      "lat": 42.7064903,
      "long": -80.56299196
    },
    "42468059": {
      "en": "Aylmer Police College Ponds",
      "fr": "�_tangs Aylmer Police College",
      "lat": 42.80231549,
      "long": -80.94299697
    },
    "42478030": {
      "en": "Big Creek",
      "fr": "Ruisseau Big",
      "lat": 42.82013778,
      "long": -80.5076941
    },
    "42508018": {
      "en": "Lynn River",
      "fr": "Rivi��re Lynn",
      "lat": 42.8415001,
      "long": -80.30609491
    },
    "42508020": {
      "en": "Lynn River",
      "fr": "Rivi��re Lynn",
      "lat": 42.82331162,
      "long": -80.28711297
    },
    "42518029": {
      "en": "Big Creek",
      "fr": "Big Creek",
      "lat": 42.86011581,
      "long": -80.49609742
    },
    "42518030": {
      "en": "Delhi Reservoir",
      "fr": "R��servoir Delhi",
      "lat": 42.85248642,
      "long": -80.51520143
    },
    "42528044": {
      "en": "Lake Lisgar",
      "fr": "Lac Lisgar",
      "lat": 42.86890487,
      "long": -80.73169319
    },
    "42537935": {
      "en": "Grand River",
      "fr": "Rivi��re Grand",
      "lat": 42.88452992,
      "long": -79.58221774
    },
    "42538226": {
      "en": "Lake Erie 7b - Middle St. Clair River",
      "fr": "Lac �_ri�� 7b - Cours moyen de la rivi��re Sainte-Claire",
      "lat": 42.82648534,
      "long": -82.47528504
    },
    "42548057": {
      "en": "Lake Whittaker",
      "fr": "Lac Whittaker",
      "lat": 42.91370467,
      "long": -80.95911026
    },
    "42557918": {
      "en": "Wainfleet Marsh",
      "fr": "Marais Wainfleet",
      "lat": 42.91309439,
      "long": -79.31940027
    },
    "42567904": {
      "en": "Black Creek",
      "fr": "Ruisseau Black",
      "lat": 42.96192254,
      "long": -79.02222001
    },
    "42568019": {
      "en": "Waterford Lakes",
      "fr": "Lacs de Waterford",
      "lat": 42.93109972,
      "long": -80.31531123
    },
    "42568111": {
      "en": "Westminster Ponds",
      "fr": "�_tangs Westminster",
      "lat": 42.94928816,
      "long": -81.2177163
    },
    "42568118": {
      "en": "Thames River",
      "fr": "Rivi��re Thames",
      "lat": 42.94733503,
      "long": -81.40417876
    },
    "42577857": {
      "en": "Lake Ontario 1a - Upper Niagara River",
      "fr": "Lac Ontario 1a - Cours sup��rieur de la rivi��re Niagara",
      "lat": 43.02253046,
      "long": -79.02270829
    },
    "42587912": {
      "en": "Lyons Creek",
      "fr": "Ruisseau Lyons",
      "lat": 42.98011101,
      "long": -79.20550864
    },
    "42597911": {
      "en": "Lyons Creek",
      "fr": "Ruisseau Lyons",
      "lat": 42.99591912,
      "long": -79.17798178
    },
    "42597933": {
      "en": "Oswego Creek",
      "fr": "Ruisseau Oswego",
      "lat": 42.98468863,
      "long": -79.5543857
    },
    "42597934": {
      "en": "Welland River",
      "fr": "Rivi��re Welland",
      "lat": 42.99848258,
      "long": -79.5719028
    },
    "42598058": {
      "en": "Thames River",
      "fr": "Rivi��re Thames",
      "lat": 43.05872422,
      "long": -80.99408343
    },
    "42598111": {
      "en": "Thames River",
      "fr": "Rivi��re Thames",
      "lat": 42.97089461,
      "long": -81.18298729
    },
    "42598114": {
      "en": "Thames River",
      "fr": "Rivi��re Thames",
      "lat": 43.00672225,
      "long": -81.26831447
    },
    "42598224": {
      "en": "Lake Erie 7a - Upper St. Clair River",
      "fr": "Lac �_ri�� 7a - Cours sup��rieur de la rivi��re Sainte-Claire",
      "lat": 42.95868752,
      "long": -82.42187928
    },
    "43007918": {
      "en": "16 Mile Creek Marsh",
      "fr": "Marais du ruisseau 16 Mile",
      "lat": 43.17792598,
      "long": -79.32641934
    },
    "43007925": {
      "en": "Welland River",
      "fr": "Rivi��re Welland",
      "lat": 43.00312126,
      "long": -79.41669035
    },
    "43008109": {
      "en": "Skyway Storm Pond",
      "fr": "�_tang d'eaux pluviales Skyway",
      "lat": 43.02649765,
      "long": -81.16058739
    },
    "43017913": {
      "en": "Old Welland Canal",
      "fr": "Vieux Canal Welland",
      "lat": 42.93610466,
      "long": -79.2464022
    },
    "43017914": {
      "en": "Welland River",
      "fr": "Rivi��re Welland",
      "lat": 43.01068963,
      "long": -79.23639244
    },
    "43017916": {
      "en": "Miller Creek",
      "fr": "Ruisseau Miller",
      "lat": 42.95472039,
      "long": -78.9757112
    },
    "43018001": {
      "en": "Boston Creek",
      "fr": "Ruisseau Boston",
      "lat": 43.01648794,
      "long": -80.01660509
    },
    "43018013": {
      "en": "McKenzie Creek",
      "fr": "Ruisseau McKenzie",
      "lat": 43.01947865,
      "long": -80.20752312
    },
    "43018114": {
      "en": "Pottersburg Creek",
      "fr": "Ruisseau Pottersburg",
      "lat": 42.97150496,
      "long": -81.1777993
    },
    "43037908": {
      "en": "Welland River",
      "fr": "Rivi��re Welland",
      "lat": 43.04871454,
      "long": -79.13330403
    },
    "43038052": {
      "en": "Thames River",
      "fr": "Rivi��re Thames",
      "lat": 43.05011827,
      "long": -80.86908339
    },
    "43047933": {
      "en": "North Creek",
      "fr": "Ruisseau North",
      "lat": 43.07471551,
      "long": -79.52472262
    },
    "43047957": {
      "en": "Grand River",
      "fr": "Rivi��re Grand",
      "lat": 42.94788441,
      "long": -79.86108746
    },
    "43048111": {
      "en": "Fanshawe Reservoir (Thames River)",
      "fr": "R��servoir Fanshawe (Rivi��re Thames)",
      "lat": 43.06531601,
      "long": -81.18658837
    },
    "43057912": {
      "en": "Old Welland Canal",
      "fr": "Vieux canal Welland",
      "lat": 43.000924,
      "long": -79.24328942
    },
    "43067914": {
      "en": "Lake Gibson",
      "fr": "Lac Gibson",
      "lat": 43.10468379,
      "long": -79.2324862
    },
    "43077903": {
      "en": "Lake Ontario 1b - Lower Niagara River",
      "fr": "Lac Ontario 1b - Cours inf��rieur de la rivi��re Niagara",
      "lat": 43.1046838,
      "long": -79.05939044
    },
    "43077913": {
      "en": "Lake Gibson (Marlatt's Pond)",
      "fr": "Lac Gibson (�_tang Marlatt's)",
      "lat": 43.10669795,
      "long": -79.21667809
    },
    "43077948": {
      "en": "Binbrook Reservoir (Lake Niapenco)",
      "fr": "R��servoir Binbrook (Lac Niapenco)",
      "lat": 43.10431755,
      "long": -79.84997907
    },
    "43077955": {
      "en": "Welland River",
      "fr": "Rivi��re Welland",
      "lat": 43.13349235,
      "long": -79.92419785
    },
    "43078024": {
      "en": "Whiteman's Creek",
      "fr": "Ruisseau Whiteman's",
      "lat": 43.11652456,
      "long": -80.3997229
    },
    "43087903": {
      "en": "Lyons Creek",
      "fr": "Ruisseau Lyons",
      "lat": 43.03369989,
      "long": -79.09668293
    },
    "43088013": {
      "en": "Mohawk Lake",
      "fr": "Lac Mohawk",
      "lat": 43.1342858,
      "long": -80.2307165
    },
    "43088044": {
      "en": "Pittock Reservoir (Thames River)",
      "fr": "R��servoir Pittock (Rivi��re Thames)",
      "lat": 43.1539391,
      "long": -80.74780651
    },
    "43097923": {
      "en": "Twenty Mile Creek",
      "fr": "Ruisseau Twenty Mile",
      "lat": 43.151925,
      "long": -79.37439299
    },
    "43107915": {
      "en": "St. Catharines - Water Intake Canal",
      "fr": "Canal de prise d'eau de St. Catharines",
      "lat": 43.09650508,
      "long": -79.22748131
    },
    "43108140": {
      "en": "Parkhill Reservoir",
      "fr": "R��servoir Parkhill",
      "lat": 43.17108993,
      "long": -81.67139078
    },
    "43117916": {
      "en": "Martindale Pond",
      "fr": "�_tang Martindale",
      "lat": 43.18750851,
      "long": -79.27222011
    },
    "43117922": {
      "en": "Lake Ontario 2a - Jordan Harbour",
      "fr": "Lac Ontario 2a - Port de Jordan",
      "lat": 43.18232051,
      "long": -79.37298918
    },
    "43117923": {
      "en": "Twenty Mile Creek",
      "fr": "Ruisseau Twenty Mile",
      "lat": 43.09168328,
      "long": -79.53692965
    },
    "43128202": {
      "en": "Lake Huron H5",
      "fr": "Lac Huron H5",
      "lat": 43.19733503,
      "long": -82.16138117
    },
    "43147947": {
      "en": "Red Hill Creek",
      "fr": "Ruisseau Red Hill",
      "lat": 43.22791376,
      "long": -79.78943219
    },
    "43148102": {
      "en": "Wildwood Reservoir",
      "fr": "R��servoir Wildwood",
      "lat": 43.25849232,
      "long": -81.06720359
    },
    "43158002": {
      "en": "Valens Reservoir",
      "fr": "R��servoir Valens",
      "lat": 43.38648311,
      "long": -80.13751581
    },
    "43158108": {
      "en": "Thames River",
      "fr": "Rivi��re Thames",
      "lat": 43.26172718,
      "long": -81.14691553
    },
    "43167956": {
      "en": "Lake Jojo",
      "fr": "Lac Jojo",
      "lat": 43.27430048,
      "long": -79.93970079
    },
    "43167957": {
      "en": "Desjardins Canal",
      "fr": "Canal Desjardins",
      "lat": 43.26752558,
      "long": -79.93890734
    },
    "43168023": {
      "en": "Pinehurst Lake",
      "fr": "Lac Pinehurst",
      "lat": 43.26947869,
      "long": -80.38971314
    },
    "43177906": {
      "en": "Lake Ontario 2 - Western Lake Ontario",
      "fr": "Lac Ontario 2 - Partie ouest du lac Ontario",
      "lat": 43.34571165,
      "long": -79.57910498
    },
    "43177950": {
      "en": "Lake Ontario 3 - Hamilton Harbour",
      "fr": "Lac Ontario 3 - Port de Hamilton",
      "lat": 43.28449336,
      "long": -79.83380476
    },
    "43178001": {
      "en": "Christie Reservoir",
      "fr": "R��servoir Christie",
      "lat": 43.27973261,
      "long": -80.02380727
    },
    "43187953": {
      "en": "Grindstone Creek",
      "fr": "Ruisseau Grindstone",
      "lat": 43.3059167,
      "long": -79.86420028
    },
    "43198146": {
      "en": "Ausable River",
      "fr": "Rivi��re Ausable",
      "lat": 43.31348497,
      "long": -81.76660567
    },
    "43218127": {
      "en": "Morrison Lake",
      "fr": "Lac Morrison",
      "lat": 43.35950551,
      "long": -81.45111485
    },
    "43228017": {
      "en": "Shades Mill Reservoir",
      "fr": "R��servoir Shades Mill",
      "lat": 43.37812129,
      "long": -80.28918822
    },
    "43228022": {
      "en": "Speed River",
      "fr": "Rivi��re Speed",
      "lat": 43.39948359,
      "long": -80.36578736
    },
    "43228042": {
      "en": "Nith River",
      "fr": "Rivi��re Nith",
      "lat": 43.37250603,
      "long": -80.70190807
    },
    "43228049": {
      "en": "Shakespeare Pond",
      "fr": "�_tang de Shakespeare",
      "lat": 43.38111198,
      "long": -80.83380509
    },
    "43228057": {
      "en": "Avon River",
      "fr": "Rivi��re Avon",
      "lat": 43.35468374,
      "long": -81.08551415
    },
    "43228059": {
      "en": "Avon River (Lake Victoria)",
      "fr": "Rivi��re Avon (Lac Victoria)",
      "lat": 43.37452018,
      "long": -80.97778707
    },
    "43237957": {
      "en": "Bronte Creek",
      "fr": "Ruisseau Bronte",
      "lat": 43.39893429,
      "long": -79.95941517
    },
    "43237958": {
      "en": "Bronte Creek - Carlisle Pond",
      "fr": "Ruisseau Bronte - �_tang Carlisle",
      "lat": 43.39313595,
      "long": -79.97858021
    },
    "43238023": {
      "en": "Grand River",
      "fr": "Rivi��re Grand",
      "lat": 43.13953482,
      "long": -80.28021603
    },
    "43247953": {
      "en": "Bronte Creek",
      "fr": "Ruisseau Bronte",
      "lat": 43.42688841,
      "long": -79.84527939
    },
    "43258003": {
      "en": "Bronte Creek",
      "fr": "Ruisseau Bronte",
      "lat": 43.42109006,
      "long": -80.0621984
    },
    "43258016": {
      "en": "Puslinch Lake",
      "fr": "Lac Puslinch",
      "lat": 43.41669551,
      "long": -80.26501829
    },
    "43268002": {
      "en": "Mountsberg Reservoir",
      "fr": "R��servoir Mountsberg",
      "lat": 43.45948118,
      "long": -80.04358268
    },
    "43268019": {
      "en": "Speed River",
      "fr": "Rivi��re Speed",
      "lat": 43.43512813,
      "long": -80.30829223
    },
    "43288111": {
      "en": "Thames River",
      "fr": "Rivi��re Thames",
      "lat": 43.47290886,
      "long": -81.19641508
    },
    "43298029": {
      "en": "Columbia Lake (Laurel Creek)",
      "fr": "Lac Columbia (Ruisseau Laurel)",
      "lat": 43.47370235,
      "long": -80.5554847
    },
    "43307940": {
      "en": "Lake Aquitaine",
      "fr": "Lac Aquitaine",
      "lat": 43.58673951,
      "long": -79.75360457
    },
    "43307956": {
      "en": "Kelso Reservoir",
      "fr": "R��servoir Kelso",
      "lat": 43.51111693,
      "long": -79.94610951
    },
    "43307957": {
      "en": "Hilton Falls Reservoir",
      "fr": "R��servoir Hilton Falls",
      "lat": 43.50971312,
      "long": -79.96472524
    },
    "43317936": {
      "en": "Rattray Marsh",
      "fr": "Marais Rattray",
      "lat": 43.51789185,
      "long": -79.60303079
    },
    "43328010": {
      "en": "Eramosa River",
      "fr": "Rivi��re Eramosa",
      "lat": 43.54810423,
      "long": -80.18158322
    },
    "43328014": {
      "en": "Speed River",
      "fr": "Rivi��re Speed",
      "lat": 43.53888792,
      "long": -80.24139769
    },
    "43338015": {
      "en": "Speed River",
      "fr": "Rivi��re Speed",
      "lat": 43.56568236,
      "long": -80.26880249
    },
    "43347935": {
      "en": "Credit River Marsh",
      "fr": "Marais Rivi��re Credit",
      "lat": 43.55231569,
      "long": -79.59271584
    },
    "43347944": {
      "en": "Lake Wabukayne",
      "fr": "Lac Wabukayne",
      "lat": 43.58033082,
      "long": -79.73920027
    },
    "43348019": {
      "en": "Speed River",
      "fr": "Rivi��re Speed",
      "lat": 43.59449096,
      "long": -80.26800903
    },
    "43348029": {
      "en": "Grand River",
      "fr": "Rivi��re Grand",
      "lat": 43.56971067,
      "long": -80.47998419
    },
    "43348138": {
      "en": "Bayfield River",
      "fr": "Rivi��re Bayfield",
      "lat": 43.55829703,
      "long": -81.6344035
    },
    "43357917": {
      "en": "Lake Ontario 4 - Toronto Offshore Area",
      "fr": "Lac Ontario 4 - Zone extrac��ti��re de Toronto",
      "lat": 43.59229374,
      "long": -79.2863803
    },
    "43357943": {
      "en": "Lake Ontario 5 - Credit River",
      "fr": "Lac Ontario 5 - Rivi��re Credit",
      "lat": 43.54932496,
      "long": -79.65503276
    },
    "43358015": {
      "en": "Guelph Lake",
      "fr": "Lac Guelph",
      "lat": 43.59650512,
      "long": -80.25000365
    },
    "43368033": {
      "en": "Canagagigue Creek",
      "fr": "Ruisseau Canagagigue",
      "lat": 43.58472532,
      "long": -80.53442757
    },
    "43377999": {
      "en": "Black Creek",
      "fr": "Ruisseau Black",
      "lat": 43.62909791,
      "long": -80.01019645
    },
    "43378003": {
      "en": "Fairy Lake",
      "fr": "Lac Fairy",
      "lat": 43.62513062,
      "long": -80.0482824
    },
    "43378035": {
      "en": "Canagagigue Creek",
      "fr": "Ruisseau Canagagigue",
      "lat": 43.61609739,
      "long": -80.56000131
    },
    "43387935": {
      "en": "Centennial Park Pond",
      "fr": "�_tang du parc Centennial",
      "lat": 43.64789676,
      "long": -79.59308206
    },
    "43388035": {
      "en": "Canagagigue Creek (Woolwich Reservoir)",
      "fr": "Ruisseau Canagagigue (R��servoir Woolwich)",
      "lat": 43.62549681,
      "long": -80.56970591
    },
    "43397919": {
      "en": "Lake Ontario 4a - Toronto Waterfront Area",
      "fr": "Lac Ontario 4a - Secteur riverain de Toronto",
      "lat": 43.63391971,
      "long": -79.38269381
    },
    "43397927": {
      "en": "Humber River",
      "fr": "Rivi��re Humber",
      "lat": 43.65168094,
      "long": -79.49139746
    },
    "43397928": {
      "en": "Humber River Marsh",
      "fr": "Marais de la rivi��re Humber",
      "lat": 43.63868045,
      "long": -79.48468359
    },
    "43407927": {
      "en": "Grenadier Pond",
      "fr": "�_tang Grenadier",
      "lat": 43.64148807,
      "long": -79.46722753
    },
    "43408043": {
      "en": "Conestogo River",
      "fr": "Rivi��re Conestogo",
      "lat": 43.66510862,
      "long": -80.71002578
    },
    "43417921": {
      "en": "Don River",
      "fr": "Rivi��re Don",
      "lat": 43.68811894,
      "long": -79.362186
    },
    "43417928": {
      "en": "Eglinton Flats Pond",
      "fr": "�_tang Eglinton Flats",
      "lat": 43.68311405,
      "long": -79.49609717
    },
    "43427943": {
      "en": "Norton Place Park Pond",
      "fr": "�_tang Norton Place Park",
      "lat": 43.71009159,
      "long": -79.72967879
    },
    "43428044": {
      "en": "Conestogo Lake",
      "fr": "Lac Conestogo",
      "lat": 43.69611449,
      "long": -80.73138809
    },
    "43437923": {
      "en": "West Don River",
      "fr": "Rivi��re West Don",
      "lat": 43.77173712,
      "long": -79.46002539
    },
    "43447923": {
      "en": "G. Ross Lord Reservoir",
      "fr": "R��servoir G. Ross Lord",
      "lat": 43.77228643,
      "long": -79.46380957
    },
    "43447940": {
      "en": "West Humber River",
      "fr": "Rivi��re West Humber",
      "lat": 43.73688603,
      "long": -79.629398
    },
    "43447946": {
      "en": "Professor's Lake",
      "fr": "Lac Professor's",
      "lat": 43.74750614,
      "long": -79.73468368
    },
    "43447947": {
      "en": "Heart Lake",
      "fr": "Lac Heart",
      "lat": 43.74030399,
      "long": -79.79529161
    },
    "43447948": {
      "en": "Loafers Lake",
      "fr": "Lac Loafers",
      "lat": 43.72333621,
      "long": -79.80108995
    },
    "43448115": {
      "en": "Maitland River, Middle",
      "fr": "Rivi��re Maitland, Middle",
      "lat": 43.73969357,
      "long": -81.24798982
    },
    "43448150": {
      "en": "Lake Huron H4",
      "fr": "Lac Huron H4",
      "lat": 43.72950067,
      "long": -81.85071218
    },
    "43457940": {
      "en": "Claireville Reservoir (West Humber River)",
      "fr": "R��servoir Claireville (Rivi��re West Humber)",
      "lat": 43.73810673,
      "long": -79.63220562
    },
    "43458143": {
      "en": "Maitland River",
      "fr": "Rivi��re Maitland",
      "lat": 43.75013056,
      "long": -81.71722825
    },
    "43468020": {
      "en": "Belwood Lake (Grand River)",
      "fr": "Lac Belwood (Rivi��re Grand)",
      "lat": 43.75873659,
      "long": -80.3394202
    },
    "43468132": {
      "en": "Maitland River",
      "fr": "Rivi��re Maitland",
      "lat": 43.8961267,
      "long": -81.35303138
    },
    "43487903": {
      "en": "Duffin Creek Marsh",
      "fr": "Marais du ruisseau Duffin",
      "lat": 43.82172494,
      "long": -79.03601403
    },
    "43488000": {
      "en": "Credit River",
      "fr": "Rivi��re Credit",
      "lat": 43.80310917,
      "long": -79.99469353
    },
    "43497905": {
      "en": "Lake Ontario 6a - Frenchman Bay",
      "fr": "Lac Ontario 6a - Baie Frenchman",
      "lat": 43.81708626,
      "long": -79.09222743
    },
    "43497907": {
      "en": "Rouge River Marsh",
      "fr": "Marais Rivi��re Rouge",
      "lat": 43.79370979,
      "long": -79.12109706
    },
    "43497913": {
      "en": "Milne Reservoir (Rouge River)",
      "fr": "R��servoir Milne (Rivi��re Rouge)",
      "lat": 43.86512093,
      "long": -79.26642182
    },
    "43507840": {
      "en": "Lake Ontario 6 - Northwestern Lake Ontario",
      "fr": "Lac Ontario 6 - Partie nord-ouest du lac Ontario",
      "lat": 43.79511364,
      "long": -78.32971497
    },
    "43507953": {
      "en": "Little Credit River",
      "fr": "Rivi��re Little Credit",
      "lat": 43.83368779,
      "long": -79.8886144
    },
    "43517847": {
      "en": "McLaughlin Bay (Lake Ontario)",
      "fr": "Baie McLaughlin (lac Ontario)",
      "lat": 43.8711024,
      "long": -78.79669511
    },
    "43517857": {
      "en": "Lynde Creek Marsh",
      "fr": "Marais du ruisseau Lynde",
      "lat": 43.85071665,
      "long": -78.95862143
    },
    "43518115": {
      "en": "Little Maitland River",
      "fr": "Rivi��re Little Maitland",
      "lat": 43.85309691,
      "long": -81.24939364
    },
    "43527850": {
      "en": "Oshawa Creek",
      "fr": "Ruisseau Oshawa",
      "lat": 43.86811167,
      "long": -78.84601153
    },
    "43527851": {
      "en": "Oshawa Harbour (Lake Ontario)",
      "fr": "Havre Oshawa (lac Ontario)",
      "lat": 43.86792857,
      "long": -78.82800615
    },
    "43527856": {
      "en": "Lake Ontario 6b - Whitby Harbour",
      "fr": "Lac Ontario 6b - Port de Whitby",
      "lat": 43.85328013,
      "long": -78.93249837
    },
    "43527910": {
      "en": "Rouge River",
      "fr": "Rivi��re Rouge",
      "lat": 43.82727913,
      "long": -79.19971037
    },
    "43527918": {
      "en": "Toogood Pond",
      "fr": "�_tang Toogood",
      "lat": 43.87189583,
      "long": -79.31500582
    },
    "43527927": {
      "en": "Mill Pond",
      "fr": "�_tang Mill",
      "lat": 43.87671761,
      "long": -79.45331153
    },
    "43528109": {
      "en": "Maitland River",
      "fr": "Rivi��re Maitland",
      "lat": 43.87030883,
      "long": -81.14502349
    },
    "43537835": {
      "en": "Wilmot Creek Marsh",
      "fr": "Marais du ruisseau Wilmot",
      "lat": 43.89649304,
      "long": -78.59741526
    },
    "43537840": {
      "en": "Westside Marsh",
      "fr": "Marais Westside",
      "lat": 43.88672741,
      "long": -78.67859205
    },
    "43537938": {
      "en": "Bowmanville Creek Marsh",
      "fr": "Marais du ruisseau Bowmanville",
      "lat": 43.88971813,
      "long": -78.66528638
    },
    "43538119": {
      "en": "Maitland River",
      "fr": "Rivi��re Maitland",
      "lat": 43.89368529,
      "long": -81.30218907
    },
    "43547834": {
      "en": "Graham Creek - Port Newcastle",
      "fr": "Ruisseau Graham - port de Newcastle",
      "lat": 43.89710335,
      "long": -79.57721294
    },
    "43547848": {
      "en": "Farewell Creek",
      "fr": "Ruisseau Farewell",
      "lat": 43.90747936,
      "long": -78.80108965
    },
    "43557712": {
      "en": "East Lake",
      "fr": "Lac East",
      "lat": 43.92109027,
      "long": -77.19769558
    },
    "43557717": {
      "en": "West Lake",
      "fr": "Lac West",
      "lat": 43.94013324,
      "long": -77.28668486
    },
    "43557842": {
      "en": "Bowmanville Creek",
      "fr": "Ruisseau Bowmanville",
      "lat": 43.92151745,
      "long": -78.70160231
    },
    "43557943": {
      "en": "Humber River",
      "fr": "Rivi��re Humber",
      "lat": 43.88373663,
      "long": -79.77191515
    },
    "43558006": {
      "en": "Island Lake (Orangeville Reservoir)",
      "fr": "Lac Island (R��servoir Orangeville)",
      "lat": 43.93549444,
      "long": -80.08661252
    },
    "43567717": {
      "en": "Lake Ontario 8 - Northeastern Lake Ontario",
      "fr": "Lac Ontario 8 - Partie nord-est du lac Ontario",
      "lat": 43.74732315,
      "long": -77.17969018
    },
    "43567903": {
      "en": "Duffin Creek (east)",
      "fr": "Ruisseau Duffin (est)",
      "lat": 43.94971568,
      "long": -79.08081386
    },
    "43567932": {
      "en": "Eaton Hall (Seneca) Lake",
      "fr": "Lac Eaton Hall (Seneca)",
      "lat": 43.95929818,
      "long": -79.51880228
    },
    "43568026": {
      "en": "Luther Marsh Reservoir",
      "fr": "R��servoir du marais Luther",
      "lat": 43.93793583,
      "long": -80.42798226
    },
    "43577818": {
      "en": "Lake Ontario 7 - Ganaraska River",
      "fr": "Lac Ontario 7 - Rivi��re Ganaraska",
      "lat": 43.94648085,
      "long": -78.29181214
    },
    "43577840": {
      "en": "Soper Creek",
      "fr": "Ruisseau Soper",
      "lat": 43.96570691,
      "long": -78.68030104
    },
    "43577926": {
      "en": "Wilcox Lake",
      "fr": "Lac Wilcox",
      "lat": 43.9487391,
      "long": -79.43609962
    },
    "43577950": {
      "en": "Palgrave Reservoir (Humber River)",
      "fr": "R��servoir Palgrave (Rivi��re Humber)",
      "lat": 43.95252326,
      "long": -79.83880971
    },
    "43578131": {
      "en": "Lucknow River",
      "fr": "Rivi��re Lucknow",
      "lat": 43.97388549,
      "long": -81.49640301
    },
    "43587844": {
      "en": "Bowmanville Creek",
      "fr": "Ruisseau Bowmanville",
      "lat": 43.96973523,
      "long": -78.74780594
    },
    "43587911": {
      "en": "Duffin Creek (west)",
      "fr": "Ruisseau Duffin (ouest)",
      "lat": 43.92432505,
      "long": -79.17248869
    },
    "43597837": {
      "en": "Wilmot Creek",
      "fr": "Ruisseau Wilmot",
      "lat": 43.98291883,
      "long": -78.61798412
    },
    "43597923": {
      "en": "Preston Lake",
      "fr": "Lac Preston",
      "lat": 43.98529917,
      "long": -79.37909277
    },
    "43598119": {
      "en": "Teeswater River",
      "fr": "Rivi��re Teeswater",
      "lat": 43.99311158,
      "long": -81.33270667
    },
    "44007727": {
      "en": "Consecon Lake",
      "fr": "Lac Consecon",
      "lat": 44.00092426,
      "long": -77.477786
    },
    "44017841": {
      "en": "Soper Creek",
      "fr": "Ruisseau Soper",
      "lat": 44.01789198,
      "long": -78.6843904
    },
    "44027916": {
      "en": "Musselman Lake",
      "fr": "Lac Musselman",
      "lat": 44.03089245,
      "long": -79.27301364
    },
    "44037927": {
      "en": "Fairy Lake",
      "fr": "Lac Fairy",
      "lat": 44.05011851,
      "long": -79.45502053
    },
    "44057733": {
      "en": "Lake Ontario 9a - Upper Bay of Quinte",
      "fr": "Lac Ontario 9a - Partie sup��rieure de la baie de Quinte",
      "lat": 44.09089009,
      "long": -77.56860635
    },
    "44058125": {
      "en": "Silver Lake",
      "fr": "Lac Silver",
      "lat": 44.08533571,
      "long": -81.41919352
    },
    "44067734": {
      "en": "Trent River",
      "fr": "Rivi��re Trent",
      "lat": 44.10950582,
      "long": -77.58832072
    },
    "44077656": {
      "en": "Lake Ontario 10 - Middle Bay of Quinte",
      "fr": "Lac Ontario 10 - Partie centrale de la baie de Quinte",
      "lat": 44.09333152,
      "long": -77.0766018
    },
    "44087724": {
      "en": "Lake Ontario 9b - Upper Bay of Quinte",
      "fr": "Lac Ontario 9b - Partie sup��rieure de la baie de Quinte",
      "lat": 44.14753073,
      "long": -77.38159458
    },
    "44097717": {
      "en": "Lake Ontario 9 - Upper Bay of Quinte",
      "fr": "Lac Ontario 9 - Partie sup��rieure de la baie de Quinte",
      "lat": 44.14972801,
      "long": -77.28058136
    },
    "44098009": {
      "en": "Pine River",
      "fr": "Rivi��re Pine",
      "lat": 44.17090708,
      "long": -80.15307985
    },
    "44107644": {
      "en": "Lake Ontario 11 - Lower Bay of Quinte/Eastern Lake Ontario",
      "fr": "Lac Ontario 11 - Partie inf��rieure de la baie de Quinte/part",
      "lat": 44.05610009,
      "long": -76.66247813
    },
    "44107850": {
      "en": "Lake Scugog",
      "fr": "Lac Scugog",
      "lat": 44.18329728,
      "long": -78.857181
    },
    "44107931": {
      "en": "Holland Marsh Canals",
      "fr": "Chenaux du marais Holland",
      "lat": 44.16669568,
      "long": -79.51642193
    },
    "44108103": {
      "en": "Marl Lakes",
      "fr": "Lacs Marl",
      "lat": 44.16388799,
      "long": -81.05218902
    },
    "44127810": {
      "en": "Rice Lake",
      "fr": "Lac Rice",
      "lat": 44.14472308,
      "long": -78.22461243
    },
    "44127931": {
      "en": "Holland River",
      "fr": "Rivi��re Holland",
      "lat": 44.17371472,
      "long": -79.51691021
    },
    "44147747": {
      "en": "Percy Reach (Trent River)",
      "fr": "Passage Percy (Rivi��re Trent)",
      "lat": 44.23053854,
      "long": -77.78308397
    },
    "44147808": {
      "en": "Rice Lake",
      "fr": "Lac Rice",
      "lat": 44.21308247,
      "long": -78.12189024
    },
    "44147819": {
      "en": "Otonabee River",
      "fr": "Rivi��re Otonabee",
      "lat": 44.20612445,
      "long": -78.28222964
    },
    "44157956": {
      "en": "Bear Creek",
      "fr": "Ruisseau Bear",
      "lat": 44.25873669,
      "long": -79.93408565
    },
    "44167628": {
      "en": "Cataraqui River",
      "fr": "Rivi��re Cataraqui",
      "lat": 44.25452542,
      "long": -76.47308599
    },
    "44167720": {
      "en": "Moira River",
      "fr": "Rivi��re Moira",
      "lat": 44.27570459,
      "long": -77.36749546
    },
    "44167731": {
      "en": "Oak Lake",
      "fr": "Lac Oak",
      "lat": 44.26752587,
      "long": -77.52002237
    },
    "44167736": {
      "en": "Trent River",
      "fr": "Rivi��re Trent",
      "lat": 44.26392479,
      "long": -77.6071806
    },
    "44177844": {
      "en": "Scugog River",
      "fr": "Rivi��re Scugog",
      "lat": 44.28949847,
      "long": -78.74029864
    },
    "44187627": {
      "en": "Colonel By Lake (Cataraqui River)",
      "fr": "Lac Colonel By (Rivi��re Cataraqui)",
      "lat": 44.30829741,
      "long": -76.42889653
    },
    "44187819": {
      "en": "Otonabee River (Little Lake)",
      "fr": "Rivi��re Otonabee (Lac Little)",
      "lat": 44.2974941,
      "long": -78.30969548
    },
    "44187832": {
      "en": "Pigeon River",
      "fr": "Rivi��re Pigeon",
      "lat": 44.33533589,
      "long": -78.53918774
    },
    "44188029": {
      "en": "Beaver River",
      "fr": "Rivi��re Beaver",
      "lat": 44.33728893,
      "long": -80.35498423
    },
    "44188040": {
      "en": "Rocky Saugeen River",
      "fr": "Rivi��re Rocky Saugeen",
      "lat": 44.31873422,
      "long": -80.66681294
    },
    "44197507": {
      "en": "South Nation River",
      "fr": "Rivi��re South Nation",
      "lat": 45.19092701,
      "long": -75.15051483
    },
    "44197953": {
      "en": "Pine River",
      "fr": "Rivi��re Pine",
      "lat": 44.31971083,
      "long": -79.88470819
    },
    "44198030": {
      "en": "Eugenia Lake",
      "fr": "Lac Eugenia",
      "lat": 44.32672984,
      "long": -80.49798964
    },
    "44198044": {
      "en": "Bells Lake",
      "fr": "Lac Bells",
      "lat": 44.32093149,
      "long": -80.73608786
    },
    "44207600": {
      "en": "St. Lawrence River 12 - Thousand Islands area",
      "fr": "Fleuve Saint-Laurent 12 - Environs des Mille-�_les",
      "lat": 44.31891754,
      "long": -76.10638666
    },
    "44218033": {
      "en": "Beaver River",
      "fr": "Rivi��re Beaver",
      "lat": 44.34589488,
      "long": -80.53943253
    },
    "44237749": {
      "en": "Seymour Lake (Trent River)",
      "fr": "Lac Seymour (Rivi��re Trent)",
      "lat": 44.38471337,
      "long": -77.80969532
    },
    "44237814": {
      "en": "Otonabee River",
      "fr": "Rivi��re Otonabee",
      "lat": 44.3552944,
      "long": -78.29071354
    },
    "44237845": {
      "en": "Scugog River",
      "fr": "Rivi��re Scugog",
      "lat": 44.38428609,
      "long": -78.74798909
    },
    "44237951": {
      "en": "Willow Creek",
      "fr": "Ruisseau Willow",
      "lat": 44.39832412,
      "long": -79.85553339
    },
    "44247824": {
      "en": "Chemong Lake",
      "fr": "Lac Chemong",
      "lat": 44.38868063,
      "long": -78.39270333
    },
    "44248055": {
      "en": "Sydenham River",
      "fr": "Rivi��re Sydenham",
      "lat": 44.4025355,
      "long": -80.91638578
    },
    "44257621": {
      "en": "Dog Lake",
      "fr": "Lac Dog",
      "lat": 44.43030671,
      "long": -76.33441409
    },
    "44257633": {
      "en": "Sydenham Lake",
      "fr": "Lac Sydenham",
      "lat": 44.43091705,
      "long": -76.55658213
    },
    "44257742": {
      "en": "Rylstone Lake (Crowe River)",
      "fr": "Lac Rylstone (Rivi��re Crowe)",
      "lat": 44.4231045,
      "long": -77.70160203
    },
    "44257845": {
      "en": "Sturgeon Lake",
      "fr": "Lac Sturgeon",
      "lat": 44.4146816,
      "long": -78.75299397
    },
    "44257920": {
      "en": "Lake Simcoe",
      "fr": "Lac Simcoe",
      "lat": 44.42371477,
      "long": -79.3710972
    },
    "44257940": {
      "en": "Little Lake",
      "fr": "Lac Little",
      "lat": 44.42670548,
      "long": -79.67077991
    },
    "44267613": {
      "en": "South Lake",
      "fr": "Lac South",
      "lat": 44.43409089,
      "long": -76.22137694
    },
    "44277609": {
      "en": "Gananoque Lake",
      "fr": "Lac Gananoque",
      "lat": 44.44593172,
      "long": -76.15222409
    },
    "44277625": {
      "en": "Loughborough Lake",
      "fr": "Lac Loughborough",
      "lat": 44.44733552,
      "long": -76.41137944
    },
    "44277816": {
      "en": "Katchewanooka Lake",
      "fr": "Lac Katchewanooka",
      "lat": 44.45752831,
      "long": -78.25860905
    },
    "44277830": {
      "en": "Pigeon Lake",
      "fr": "Lac Pigeon",
      "lat": 44.470895,
      "long": -78.49469311
    },
    "44278046": {
      "en": "Bighead River",
      "fr": "Rivi��re Bighead",
      "lat": 44.47168835,
      "long": -80.77631006
    },
    "44287641": {
      "en": "Hambly Lake",
      "fr": "Lac Hambly",
      "lat": 44.46808746,
      "long": -76.68329116
    },
    "44287717": {
      "en": "Stoco Lake",
      "fr": "Lac Stoco",
      "lat": 44.47309232,
      "long": -77.28943149
    },
    "44287843": {
      "en": "Sturgeon Lake",
      "fr": "Lac Sturgeon",
      "lat": 44.46668356,
      "long": -78.71667805
    },
    "44287910": {
      "en": "Talbot River",
      "fr": "Rivi��re Talbot",
      "lat": 44.50751607,
      "long": -79.11999849
    },
    "44297744": {
      "en": "Crowe Lake",
      "fr": "Lac Crowe",
      "lat": 44.48389552,
      "long": -77.73718554
    },
    "44297823": {
      "en": "Buckhorn Lake",
      "fr": "Lac Buckhorn",
      "lat": 44.48450585,
      "long": -78.39581613
    },
    "44298000": {
      "en": "Nottawasaga River",
      "fr": "Rivi��re Nottawasaga",
      "lat": 44.48249161,
      "long": -79.99890502
    },
    "44298013": {
      "en": "Georgian Bay GB4a",
      "fr": "Baie Georgienne GB4a",
      "lat": 44.51392471,
      "long": -80.22571174
    },
    "44298115": {
      "en": "Arran Lake",
      "fr": "Lac Arran",
      "lat": 44.4818812,
      "long": -81.25940347
    },
    "44298119": {
      "en": "Saugeen River",
      "fr": "Rivi��re Saugeen",
      "lat": 44.49970346,
      "long": -81.36578779
    },
    "44307632": {
      "en": "Otter Lake",
      "fr": "Lac Otter",
      "lat": 44.5023282,
      "long": -76.55578868
    },
    "44307702": {
      "en": "Beaver Lake",
      "fr": "Lac Beaver",
      "lat": 44.4975064,
      "long": -77.03277858
    },
    "44307727": {
      "en": "Moira Lake",
      "fr": "Lac Moira",
      "lat": 44.48731351,
      "long": -77.45361612
    },
    "44307730": {
      "en": "Moira River",
      "fr": "Rivi��re Moira",
      "lat": 44.49970364,
      "long": -77.61438277
    },
    "44307753": {
      "en": "Round Lake",
      "fr": "Lac Round",
      "lat": 44.49488185,
      "long": -77.87500297
    },
    "44308118": {
      "en": "Saugeen River",
      "fr": "Rivi��re Saugeen",
      "lat": 44.30609992,
      "long": -81.27472328
    },
    "44317749": {
      "en": "Belmont Lake",
      "fr": "Lac Belmont",
      "lat": 44.49512599,
      "long": -77.82660208
    },
    "44327600": {
      "en": "Charleston Lake",
      "fr": "Lac Charleston",
      "lat": 44.53473789,
      "long": -76.01581047
    },
    "44327605": {
      "en": "Red Horse Lake",
      "fr": "Lac Red Horse",
      "lat": 44.5416959,
      "long": -76.07892085
    },
    "44327614": {
      "en": "Whitefish Lake",
      "fr": "Lac Whitefish",
      "lat": 44.51593905,
      "long": -76.2396875
    },
    "44327626": {
      "en": "Buck Lake",
      "fr": "Lac Buck",
      "lat": 44.53809481,
      "long": -76.43829597
    },
    "44327630": {
      "en": "Big Salmon Lake",
      "fr": "Lac Big Salmon",
      "lat": 44.54010897,
      "long": -76.49750009
    },
    "44327632": {
      "en": "Birch Lake",
      "fr": "Lac Birch",
      "lat": 44.54792147,
      "long": -76.54168955
    },
    "44327638": {
      "en": "Thirteen Island Lake",
      "fr": "Lac Thirteen Island",
      "lat": 44.54090242,
      "long": -76.6215846
    },
    "44327806": {
      "en": "Dummer (White) Lake",
      "fr": "Lac Dummer (White)",
      "lat": 44.52613184,
      "long": -78.0933258
    },
    "44327818": {
      "en": "Buckhorn Lake, Lower",
      "fr": "Lac Buckhorn, Lower",
      "lat": 44.55371973,
      "long": -78.27331854
    },
    "44327825": {
      "en": "Sandy Lake",
      "fr": "Lac Sandy",
      "lat": 44.54529687,
      "long": -78.40521555
    },
    "44337628": {
      "en": "Big Clear Lake",
      "fr": "Lac Big Clear",
      "lat": 44.55951815,
      "long": -76.4569117
    },
    "44337645": {
      "en": "Second Depot Lake",
      "fr": "Lac Second Depot",
      "lat": 44.55091218,
      "long": -76.76019549
    },
    "44337806": {
      "en": "Stony Lake",
      "fr": "Lac Stony",
      "lat": 44.5625088,
      "long": -78.10888977
    },
    "44337813": {
      "en": "Lovesick Lake",
      "fr": "Lac Lovesick",
      "lat": 44.55732081,
      "long": -78.23327946
    },
    "44337846": {
      "en": "Cameron Lake",
      "fr": "Lac Cameron",
      "lat": 44.55188865,
      "long": -78.76080649
    },
    "44338114": {
      "en": "Chesley Lake",
      "fr": "Lac Chesley",
      "lat": 44.55292613,
      "long": -81.22418618
    },
    "44347553": {
      "en": "Graham Lake",
      "fr": "Lac Graham",
      "lat": 44.57288488,
      "long": -75.87970203
    },
    "44347616": {
      "en": "Sand Lake",
      "fr": "Lac Sand",
      "lat": 44.56849033,
      "long": -76.26141603
    },
    "44347619": {
      "en": "Opinicon Lake",
      "fr": "Lac Opinicon",
      "lat": 44.55890781,
      "long": -76.32831058
    },
    "44347647": {
      "en": "Third Depot Lake",
      "fr": "Lac Third Depot",
      "lat": 44.5695279,
      "long": -76.78778339
    },
    "44347652": {
      "en": "Fifth Depot Lake",
      "fr": "Lac Fifth Depot",
      "lat": 44.60669832,
      "long": -76.86297873
    },
    "44347823": {
      "en": "Bald Lake, Big",
      "fr": "Lac Bald, Big",
      "lat": 44.57569239,
      "long": -78.38721018
    },
    "44347825": {
      "en": "Bald Lake, Little",
      "fr": "Lac Bald, Little",
      "lat": 44.57453272,
      "long": -78.41528636
    },
    "44347857": {
      "en": "Mitchell Lake",
      "fr": "Lac Mitchell",
      "lat": 44.57392234,
      "long": -78.95019864
    },
    "44347903": {
      "en": "Canal Lake",
      "fr": "Lac Canal",
      "lat": 44.56751364,
      "long": -79.04358246
    },
    "44348050": {
      "en": "Sheppard Lake",
      "fr": "Lac Sheppard",
      "lat": 44.57648572,
      "long": -80.84418118
    },
    "44348056": {
      "en": "Sydenham River",
      "fr": "Rivi��re Sydenham",
      "lat": 44.55750378,
      "long": -80.9418985
    },
    "44348119": {
      "en": "Lake Huron H3",
      "fr": "Lac Huron H3",
      "lat": 44.53968147,
      "long": -81.81531186
    },
    "44357627": {
      "en": "Devil Lake",
      "fr": "Lac Devil",
      "lat": 44.57392245,
      "long": -76.44690193
    },
    "44357647": {
      "en": "Fourth Depot Lake",
      "fr": "Lac Fourth Depot",
      "lat": 44.59168367,
      "long": -76.7891872
    },
    "44357659": {
      "en": "Gull Lake",
      "fr": "Lac Gull",
      "lat": 44.58930329,
      "long": -76.9902981
    },
    "44357700": {
      "en": "Sheffield Long Lake",
      "fr": "Lac Sheffield Long",
      "lat": 44.59528474,
      "long": -77.00970729
    },
    "44357750": {
      "en": "Cordova Lake",
      "fr": "Lac Cordova",
      "lat": 44.5753262,
      "long": -77.82501517
    },
    "44357850": {
      "en": "Balsam Lake",
      "fr": "Lac Balsam",
      "lat": 44.58069725,
      "long": -78.8416781
    },
    "44367553": {
      "en": "Temperance Lake",
      "fr": "Lac Temperance",
      "lat": 44.59089025,
      "long": -75.88049549
    },
    "44367608": {
      "en": "Beverley Lake, Lower",
      "fr": "Lac Beverley, Lower",
      "lat": 44.59790928,
      "long": -76.13690427
    },
    "44367620": {
      "en": "Indian Lake",
      "fr": "Lac Indian",
      "lat": 44.59229404,
      "long": -76.32690677
    },
    "44367625": {
      "en": "Crow Lake (Little) (Devil Lake)",
      "fr": "Lac Crow (Petit)",
      "lat": 44.6010831,
      "long": -76.41137946
    },
    "44367640": {
      "en": "St. Andrew Lakes",
      "fr": "Lacs St. Andrew",
      "lat": 44.60450106,
      "long": -76.66931411
    },
    "44367753": {
      "en": "Oak Lake",
      "fr": "Lac Oak",
      "lat": 44.59888577,
      "long": -77.91247858
    },
    "44367809": {
      "en": "Julian Lake",
      "fr": "Lac Julian",
      "lat": 44.59613918,
      "long": -78.14691469
    },
    "44367812": {
      "en": "Coon Lake",
      "fr": "Lac Coon",
      "lat": 44.60871242,
      "long": -78.20050358
    },
    "44367930": {
      "en": "Bass Lake",
      "fr": "Lac Bass",
      "lat": 44.60328023,
      "long": -79.50659531
    },
    "44367948": {
      "en": "Orr Lake",
      "fr": "Lac Orr",
      "lat": 44.6082851,
      "long": -79.80298212
    },
    "44377605": {
      "en": "Beverley Lake, Upper",
      "fr": "Lac Beverley, Upper",
      "lat": 44.61890538,
      "long": -76.08502437
    },
    "44377643": {
      "en": "Elbow Lake",
      "fr": "Lac Elbow",
      "lat": 44.62751132,
      "long": -76.72442888
    },
    "44387620": {
      "en": "Newboro Lake",
      "fr": "Lac Newboro",
      "lat": 44.63153965,
      "long": -76.31750736
    },
    "44387758": {
      "en": "Kasshabog Lake",
      "fr": "Lac Kasshabog",
      "lat": 44.63153958,
      "long": -77.96472469
    },
    "44387907": {
      "en": "Dalrymple Lake",
      "fr": "Lac Dalrymple",
      "lat": 44.6472866,
      "long": -79.10858493
    },
    "44388104": {
      "en": "McNab Lake",
      "fr": "Lac McNab",
      "lat": 44.64508924,
      "long": -81.07440587
    },
    "44397633": {
      "en": "Burridge Lake",
      "fr": "Lac Burridge",
      "lat": 44.66449863,
      "long": -76.55469006
    },
    "44407658": {
      "en": "Horseshoe Lake",
      "fr": "Lac Horseshoe",
      "lat": 44.67469149,
      "long": -76.96081812
    },
    "44407922": {
      "en": "Lake Couchiching",
      "fr": "Lac Couchiching",
      "lat": 44.6643154,
      "long": -79.37640728
    },
    "44417620": {
      "en": "Rideau Lake, Upper",
      "fr": "Lac Rideau, Upper",
      "lat": 44.68293126,
      "long": -76.3363062
    },
    "44417630": {
      "en": "Wolfe Lake",
      "fr": "Lac Wolfe",
      "lat": 44.68250401,
      "long": -76.47821298
    },
    "44417635": {
      "en": "Bobs Lake",
      "fr": "Lac Bobs",
      "lat": 44.6811002,
      "long": -76.58771009
    },
    "44417642": {
      "en": "Eagle Lake",
      "fr": "Lac Eagle",
      "lat": 44.68311435,
      "long": -76.698611
    },
    "44417658": {
      "en": "Bull Lake",
      "fr": "Lac Bull",
      "lat": 44.68793612,
      "long": -76.97461207
    },
    "44417810": {
      "en": "Long Lake",
      "fr": "Lac Long",
      "lat": 44.68793607,
      "long": -78.18048405
    },
    "44417845": {
      "en": "Four Mile Lake",
      "fr": "Lac Four Mile",
      "lat": 44.68171045,
      "long": -78.73718589
    },
    "44417919": {
      "en": "Lake St. John",
      "fr": "Lac St. John",
      "lat": 44.68708152,
      "long": -79.32501567
    },
    "44427532": {
      "en": "St. Lawrence River 13 - Middle Corridor",
      "fr": "Fleuve Saint-Laurent 13 - Cours moyen",
      "lat": 44.72608316,
      "long": -75.47278053
    },
    "44427657": {
      "en": "Buck Lake",
      "fr": "Lac Buck",
      "lat": 44.70533114,
      "long": -76.95221216
    },
    "44427732": {
      "en": "Wolf Lake",
      "fr": "Lac Wolf",
      "lat": 44.69391754,
      "long": -77.53241255
    },
    "44427802": {
      "en": "Jack Lake",
      "fr": "Lac Jack",
      "lat": 44.69471098,
      "long": -78.03558654
    },
    "44427819": {
      "en": "Mississagua Lake",
      "fr": "Lac Mississagua",
      "lat": 44.70649075,
      "long": -78.32019357
    },
    "44437643": {
      "en": "Leggat Lake",
      "fr": "Lac Leggat",
      "lat": 44.71308262,
      "long": -76.72387957
    },
    "44437655": {
      "en": "Big Clear Lake",
      "fr": "Lac Big Clear",
      "lat": 44.7259,
      "long": -76.90692406
    },
    "44437750": {
      "en": "Tangamong Lake",
      "fr": "Lac Tangamong",
      "lat": 44.71289947,
      "long": -77.83661187
    },
    "44437755": {
      "en": "Methuen Lake",
      "fr": "Lac Methuen",
      "lat": 44.71790435,
      "long": -77.90942683
    },
    "44437848": {
      "en": "Shadow Lake",
      "fr": "Lac Shadow",
      "lat": 44.71473048,
      "long": -78.79138513
    },
    "44438041": {
      "en": "Mountain Lake",
      "fr": "Lac Mountain",
      "lat": 44.70929825,
      "long": -80.69659814
    },
    "44438113": {
      "en": "Boat Lake",
      "fr": "Lac Boat",
      "lat": 44.72589979,
      "long": -81.22693278
    },
    "44447658": {
      "en": "Kennebec Lake",
      "fr": "Lac Kennebec",
      "lat": 44.74030429,
      "long": -76.96521266
    },
    "44447716": {
      "en": "Deerock Lake",
      "fr": "Lac Deerock",
      "lat": 44.73609285,
      "long": -77.26019566
    },
    "44447810": {
      "en": "Wolf Lake",
      "fr": "Lac Wolf",
      "lat": 44.73951078,
      "long": -78.17889714
    },
    "44447855": {
      "en": "Head Lake",
      "fr": "Lac Head",
      "lat": 44.73969385,
      "long": -78.91388273
    },
    "44447953": {
      "en": "Little (Midland Park) Lake",
      "fr": "Lac Little (Midland Park)",
      "lat": 44.73511617,
      "long": -79.88910277
    },
    "44457626": {
      "en": "Crosby Lake",
      "fr": "Lac Crosby",
      "lat": 44.75348791,
      "long": -76.43579354
    },
    "44457812": {
      "en": "Anstruther Lake",
      "fr": "Lac Anstruther",
      "lat": 44.74549223,
      "long": -78.21332098
    },
    "44457819": {
      "en": "Catchacoma Lake",
      "fr": "Lac Catchacoma",
      "lat": 44.75849271,
      "long": -78.32660226
    },
    "44457829": {
      "en": "Crystal Lake",
      "fr": "Lac Crystal",
      "lat": 44.75672269,
      "long": -78.47888503
    },
    "44467613": {
      "en": "Rideau Lake, Big",
      "fr": "Lac Rideau, Big",
      "lat": 44.77088294,
      "long": -76.21252687
    },
    "44467618": {
      "en": "Black Lake",
      "fr": "Lac Black",
      "lat": 44.76929603,
      "long": -76.30328617
    },
    "44467630": {
      "en": "Farrell (Farren) Lake",
      "fr": "Lac Farrell (Farren)",
      "lat": 44.75849279,
      "long": -76.49780528
    },
    "44467641": {
      "en": "Sharbot Lake",
      "fr": "Lac Sharbot",
      "lat": 44.76752599,
      "long": -76.69330095
    },
    "44467643": {
      "en": "Black Lake",
      "fr": "Lac Black",
      "lat": 44.77649816,
      "long": -76.72058368
    },
    "44467725": {
      "en": "Lingham Lake",
      "fr": "Lac Lingham",
      "lat": 44.76429109,
      "long": -77.41668986
    },
    "44467903": {
      "en": "Cranberry Lake",
      "fr": "Lac Cranberry",
      "lat": 44.7703335,
      "long": -79.05218844
    },
    "44467942": {
      "en": "Georgian Bay GB4",
      "fr": "Baie Georgienne GB4",
      "lat": 44.82471577,
      "long": -80.44189836
    },
    "44477621": {
      "en": "Pike Lake",
      "fr": "Lac Pike",
      "lat": 44.78247962,
      "long": -76.34112798
    },
    "44477738": {
      "en": "Jordan Lake",
      "fr": "Lac Jordan",
      "lat": 44.77948884,
      "long": -77.6300078
    },
    "44477744": {
      "en": "Dickey Lake",
      "fr": "Lac Dickey",
      "lat": 44.78748444,
      "long": -77.7415801
    },
    "44477924": {
      "en": "Sparrow Lake",
      "fr": "Lac Sparrow",
      "lat": 44.81311914,
      "long": -79.38721052
    },
    "44477929": {
      "en": "Matchedash (Long) Lake",
      "fr": "Lac Matchedash (Long)",
      "lat": 44.78949852,
      "long": -79.49438829
    },
    "44478114": {
      "en": "Isaac Lake",
      "fr": "Lac Isaac",
      "lat": 44.77893935,
      "long": -81.23279217
    },
    "44487615": {
      "en": "Long Lake",
      "fr": "Lac Long",
      "lat": 44.79328285,
      "long": -76.24609622
    },
    "44487626": {
      "en": "Christie Lake",
      "fr": "Lac Christie",
      "lat": 44.80451331,
      "long": -76.43860116
    },
    "44487630": {
      "en": "Little Silver Lake",
      "fr": "Lac Little Silver",
      "lat": 44.80329261,
      "long": -76.49658458
    },
    "44487803": {
      "en": "Chandos Lake",
      "fr": "Lac Chandos",
      "lat": 44.8250821,
      "long": -77.9785797
    },
    "44487846": {
      "en": "Buller Lake",
      "fr": "Lac Buller",
      "lat": 44.80811428,
      "long": -78.7625155
    },
    "44487914": {
      "en": "Clearwater Lake",
      "fr": "Lac Clearwater",
      "lat": 44.80793115,
      "long": -79.2428013
    },
    "44487929": {
      "en": "Eastern Lake",
      "fr": "Lac Eastern",
      "lat": 44.80249901,
      "long": -79.47241563
    },
    "44488111": {
      "en": "Berford Lake",
      "fr": "Lac Berford",
      "lat": 44.80970108,
      "long": -81.17908121
    },
    "44497849": {
      "en": "Black Lake",
      "fr": "Lac Black",
      "lat": 44.8187344,
      "long": -78.82471034
    },
    "44497910": {
      "en": "Riley Lake",
      "fr": "Lac Riley",
      "lat": 44.83692286,
      "long": -79.18158302
    },
    "44497934": {
      "en": "Dumbell Lake",
      "fr": "Lac Dumbell",
      "lat": 44.81849022,
      "long": -79.5488927
    },
    "44497939": {
      "en": "Black (MacLean) Lake",
      "fr": "Lac Black (MacLean)",
      "lat": 44.81812401,
      "long": -79.6469152
    },
    "44497942": {
      "en": "Little Lake (Severn River)",
      "fr": "Lac Little (Rivi��re Severn)",
      "lat": 44.818124,
      "long": -79.71222283
    },
    "44497959": {
      "en": "Farlain Lake",
      "fr": "Lac Farlain",
      "lat": 44.81531637,
      "long": -79.97082887
    },
    "44507636": {
      "en": "Silver Lake",
      "fr": "Lac Silver",
      "lat": 44.82752356,
      "long": -76.59942885
    },
    "44507658": {
      "en": "Big Gull Lake",
      "fr": "Lac Big Gull",
      "lat": 44.8270963,
      "long": -76.96881374
    },
    "44507702": {
      "en": "Sand (Plevna) Lake",
      "fr": "Lac Sand (Plevna)",
      "lat": 44.93152747,
      "long": -77.03113067
    },
    "44507716": {
      "en": "Skootamatta Lake",
      "fr": "Lac Skootamatta",
      "lat": 44.8375333,
      "long": -77.24750036
    },
    "44507741": {
      "en": "Steenburg Lake",
      "fr": "Lac Steenburg",
      "lat": 44.8259366,
      "long": -77.68109425
    },
    "44507749": {
      "en": "Urbach Lake",
      "fr": "Lac Urbach",
      "lat": 44.82972078,
      "long": -77.80969536
    },
    "44507803": {
      "en": "Tallan Lake",
      "fr": "Lac Tallan",
      "lat": 44.84589508,
      "long": -78.0524933
    },
    "44507826": {
      "en": "Fortescue Lake",
      "fr": "Lac Fortescue",
      "lat": 44.83753325,
      "long": -78.4403108
    },
    "44507829": {
      "en": "White Lake",
      "fr": "Lac White",
      "lat": 44.82892729,
      "long": -78.47638259
    },
    "44507848": {
      "en": "Little Gull Lake",
      "fr": "Lac Little Gull",
      "lat": 44.84308743,
      "long": -78.80908534
    },
    "44507918": {
      "en": "Kahshe Lake",
      "fr": "Lac Kahshe",
      "lat": 44.85688136,
      "long": -79.2860142
    },
    "44507938": {
      "en": "Horseshoe Lake",
      "fr": "Lac Horseshoe",
      "lat": 44.83973046,
      "long": -79.62579703
    },
    "44517607": {
      "en": "Rideau Lake, Lower",
      "fr": "Lac Rideau, Lower",
      "lat": 44.86609781,
      "long": -76.11889891
    },
    "44517613": {
      "en": "Otty Lake",
      "fr": "Lac Otty",
      "lat": 44.84150063,
      "long": -76.22693117
    },
    "44517750": {
      "en": "Wollaston Lake",
      "fr": "Lac Wollaston",
      "lat": 44.8407071,
      "long": -77.83581842
    },
    "44517829": {
      "en": "Salerno Lake",
      "fr": "Lac Salerno",
      "lat": 44.85950591,
      "long": -78.48529373
    },
    "44517847": {
      "en": "Gull Lake",
      "fr": "Lac Gull",
      "lat": 44.84888577,
      "long": -78.77942224
    },
    "44517942": {
      "en": "Gloucester Pool (Severn River)",
      "fr": "Bassin Gloucester (Rivi��re Severn)",
      "lat": 44.85089989,
      "long": -79.70050408
    },
    "44527701": {
      "en": "Kashwakamak Lake",
      "fr": "Lac Kashwakamak",
      "lat": 44.85669835,
      "long": -77.03851592
    },
    "44527705": {
      "en": "Mississagagon Lake",
      "fr": "Lac Mississagagon",
      "lat": 44.87030919,
      "long": -77.07910431
    },
    "44527808": {
      "en": "Alder Lake",
      "fr": "Lac Alder",
      "lat": 44.86829499,
      "long": -78.14581608
    },
    "44527847": {
      "en": "Little Bob Lake",
      "fr": "Lac Little Bob",
      "lat": 44.87751127,
      "long": -78.78692957
    },
    "44527850": {
      "en": "Devil's Lake",
      "fr": "Lac Devil's",
      "lat": 44.86951566,
      "long": -78.83941982
    },
    "44527927": {
      "en": "Morrison Lake",
      "fr": "Lac Morrison",
      "lat": 44.87012598,
      "long": -79.45441026
    },
    "44527939": {
      "en": "Tea Lake",
      "fr": "Lac Tea",
      "lat": 44.87592431,
      "long": -79.64941764
    },
    "44537556": {
      "en": "Rideau River",
      "fr": "Rivi��re Rideau",
      "lat": 44.88593425,
      "long": -75.94250726
    },
    "44537607": {
      "en": "Tay River",
      "fr": "Rivi��re Tay",
      "lat": 44.87873209,
      "long": -76.1127954
    },
    "44537614": {
      "en": "Tay River",
      "fr": "Rivi��re Tay",
      "lat": 44.89972818,
      "long": -76.23968753
    },
    "44537713": {
      "en": "Bon Echo Lake",
      "fr": "Lac Bon Echo",
      "lat": 44.89808019,
      "long": -77.22998327
    },
    "44537737": {
      "en": "Limerick Lake",
      "fr": "Lac Limerick",
      "lat": 44.89289218,
      "long": -77.61719042
    },
    "44537826": {
      "en": "Contau Lake",
      "fr": "Lac Contau",
      "lat": 44.88929107,
      "long": -78.43640456
    },
    "44547703": {
      "en": "Shawenegog Lake",
      "fr": "Lac Shawenegog",
      "lat": 44.91028723,
      "long": -77.05499542
    },
    "44547708": {
      "en": "Shabomeka Lake",
      "fr": "Lac Shabomeka",
      "lat": 44.89252599,
      "long": -77.13580599
    },
    "44547710": {
      "en": "Kishkebus Lake",
      "fr": "Lac Kishkebus",
      "lat": 44.90448888,
      "long": -77.16748325
    },
    "44547717": {
      "en": "Joeperry Lake",
      "fr": "Lac Joeperry",
      "lat": 44.91230138,
      "long": -77.29541298
    },
    "44547808": {
      "en": "Eels Lake",
      "fr": "Lac Eels",
      "lat": 44.89753083,
      "long": -78.13190006
    },
    "44547823": {
      "en": "Gooderham Lake",
      "fr": "Lac Gooderham",
      "lat": 44.91169098,
      "long": -78.38440259
    },
    "44547927": {
      "en": "Muldrew Lakes",
      "fr": "Lacs Muldrew",
      "lat": 44.90290186,
      "long": -79.43719834
    },
    "44547933": {
      "en": "Woodland Lake",
      "fr": "Lac Woodland",
      "lat": 44.90253565,
      "long": -79.54828236
    },
    "44547934": {
      "en": "Boleau Lake",
      "fr": "Lac Boleau",
      "lat": 44.90229151,
      "long": -79.56030629
    },
    "44547943": {
      "en": "Six Mile Lake",
      "fr": "Lac Six Mile",
      "lat": 44.90973779,
      "long": -79.7327917
    },
    "44557628": {
      "en": "Bennett Lake",
      "fr": "Lac Bennett",
      "lat": 44.91553628,
      "long": -76.46472423
    },
    "44557648": {
      "en": "Crotch Lake",
      "fr": "Lac Crotch",
      "lat": 44.91248451,
      "long": -76.80938987
    },
    "44557712": {
      "en": "Mazinaw Lakes",
      "fr": "Lacs Mazinaw",
      "lat": 44.89972814,
      "long": -77.19000523
    },
    "44557733": {
      "en": "Cashel Lake",
      "fr": "Lac Cashel",
      "lat": 44.91510899,
      "long": -77.55047898
    },
    "44557743": {
      "en": "Robinson Lake",
      "fr": "Lac Robinson",
      "lat": 44.91089755,
      "long": -77.71832571
    },
    "44557804": {
      "en": "Silent Lake",
      "fr": "Lac Silent",
      "lat": 44.91169099,
      "long": -78.05969545
    },
    "44557841": {
      "en": "South Lake",
      "fr": "Lac South",
      "lat": 44.91169096,
      "long": -78.68249839
    },
    "44557847": {
      "en": "Bob Lake",
      "fr": "Lac Bob",
      "lat": 44.91529203,
      "long": -78.78851649
    },
    "44567504": {
      "en": "St. Lawrence River 14 - Lake St. Lawrence",
      "fr": "Fleuve Saint-Laurent 14 - Lac St. Lawrence",
      "lat": 44.93329757,
      "long": -75.07110805
    },
    "44567652": {
      "en": "Ardoch Lake",
      "fr": "Lac Ardoch",
      "lat": 44.93171058,
      "long": -76.8621853
    },
    "44567735": {
      "en": "Mephisto Lake",
      "fr": "Lac Mephisto",
      "lat": 44.93030674,
      "long": -77.57690721
    },
    "44567815": {
      "en": "Blue Rock (Lowry) Lake",
      "fr": "Lac Blue Rock (Lowry)",
      "lat": 44.93110017,
      "long": -78.25159005
    },
    "44567828": {
      "en": "Bark Lake",
      "fr": "Lac Bark",
      "lat": 44.93250397,
      "long": -78.46771561
    },
    "44567924": {
      "en": "Lake Muskoka",
      "fr": "Lac Muskoka",
      "lat": 44.93030666,
      "long": -79.39630477
    },
    "44577806": {
      "en": "Farrel Lake",
      "fr": "Lac Farrel",
      "lat": 44.94568758,
      "long": -78.0922272
    },
    "44577935": {
      "en": "Nine Mile Lake",
      "fr": "Lac Nine Mile",
      "lat": 44.94233058,
      "long": -79.57190298
    },
    "44587634": {
      "en": "Dalhousie Lake",
      "fr": "Lac Dalhousie",
      "lat": 44.96570718,
      "long": -76.56939956
    },
    "44587801": {
      "en": "Paudash Lake, Lower",
      "fr": "Lac Paudash, Lower",
      "lat": 44.96753817,
      "long": -78.00110169
    },
    "44587803": {
      "en": "Paudash Lake",
      "fr": "Lac Paudash",
      "lat": 44.96369296,
      "long": -78.05469057
    },
    "44587808": {
      "en": "Cheddar Lake",
      "fr": "Lac Cheddar",
      "lat": 44.97828036,
      "long": -78.14020086
    },
    "44587824": {
      "en": "Stormy Lake",
      "fr": "Lac Stormy",
      "lat": 44.97589997,
      "long": -78.40918288
    },
    "44587829": {
      "en": "Koshlong Lake",
      "fr": "Lac Koshlong",
      "lat": 44.97089509,
      "long": -78.48541581
    },
    "44587945": {
      "en": "Gibson Lake",
      "fr": "Lac Gibson",
      "lat": 44.96613428,
      "long": -79.74908809
    },
    "44597716": {
      "en": "Mackavoy Lake",
      "fr": "Lac Mackavoy",
      "lat": 44.99451575,
      "long": -77.27551552
    },
    "44597721": {
      "en": "Effingham Lake",
      "fr": "Lac Effingham",
      "lat": 44.98511633,
      "long": -77.3599882
    },
    "44597836": {
      "en": "Kashagawigamog Lake",
      "fr": "Lac Kashagawigamog",
      "lat": 44.99549225,
      "long": -78.58941975
    },
    "44597841": {
      "en": "Horseshoe Lake",
      "fr": "Lac Horseshoe",
      "lat": 44.99091461,
      "long": -78.67718834
    },
    "44597908": {
      "en": "Prospect Lake",
      "fr": "Lac Prospect",
      "lat": 44.9923184,
      "long": -79.1351963
    },
    "45007520": {
      "en": "South Nation River",
      "fr": "Rivi��re South Nation",
      "lat": 44.99610274,
      "long": -75.43249733
    },
    "45007644": {
      "en": "Antoine Lake",
      "fr": "Lac Antoine",
      "lat": 45.00672281,
      "long": -76.73108175
    },
    "45007657": {
      "en": "Grindstone Lake",
      "fr": "Lac Grindstone",
      "lat": 45.01392495,
      "long": -76.95300565
    },
    "45007704": {
      "en": "Buckshot Lake",
      "fr": "Lac Buckshot",
      "lat": 44.99549232,
      "long": -77.06939973
    },
    "45007807": {
      "en": "Monck Lake",
      "fr": "Lac Monck",
      "lat": 45.00391513,
      "long": -78.10528874
    },
    "45007823": {
      "en": "Portage Lake",
      "fr": "Lac Portage",
      "lat": 45.01032381,
      "long": -78.38721022
    },
    "45007827": {
      "en": "Blue Hawk Lake",
      "fr": "Lac Blue Hawk",
      "lat": 45.0023282,
      "long": -78.44909988
    },
    "45007839": {
      "en": "Duck Lake",
      "fr": "Lac Duck",
      "lat": 45.00531891,
      "long": -78.64801352
    },
    "45007925": {
      "en": "Lake Muskoka",
      "fr": "Lac Muskoka",
      "lat": 45.05371976,
      "long": -79.47461292
    },
    "45017651": {
      "en": "Palmerston Lake",
      "fr": "Lac Palmerston",
      "lat": 45.01612222,
      "long": -76.84167749
    },
    "45017749": {
      "en": "L'Amable Lake",
      "fr": "Lac I'Amable",
      "lat": 45.01728184,
      "long": -77.81360163
    },
    "45017756": {
      "en": "Bow Lake",
      "fr": "Lac Bow",
      "lat": 45.01569492,
      "long": -77.9382965
    },
    "45017803": {
      "en": "Centre Lake",
      "fr": "Lac Centre",
      "lat": 45.01093417,
      "long": -78.0477936
    },
    "45017816": {
      "en": "Esson Lake",
      "fr": "Lac Esson",
      "lat": 45.0208829,
      "long": -78.27221995
    },
    "45017823": {
      "en": "Loon (Dudmon) Lake",
      "fr": "Lac Loon (Dudmon)",
      "lat": 45.01593904,
      "long": -78.37640699
    },
    "45017843": {
      "en": "Twelve Mile Lake",
      "fr": "Lac Twelve Mile",
      "lat": 45.02533844,
      "long": -78.70581384
    },
    "45017905": {
      "en": "Wood Lake",
      "fr": "Lac Wood",
      "lat": 45.0133145,
      "long": -79.07391698
    },
    "45017951": {
      "en": "Go Home Lake",
      "fr": "Lac Go Home",
      "lat": 45.00849268,
      "long": -79.84112914
    },
    "45027623": {
      "en": "Kerr Lake",
      "fr": "Lac Kerr",
      "lat": 45.03888835,
      "long": -76.38409677
    },
    "45027636": {
      "en": "Park Lake",
      "fr": "Lac Park",
      "lat": 45.0197233,
      "long": -76.59778092
    },
    "45027725": {
      "en": "Weslemkoon Lake",
      "fr": "Lac Weslemkoon",
      "lat": 45.0307096,
      "long": -77.43078901
    },
    "45027755": {
      "en": "Bentley Lake",
      "fr": "Lac Bentley",
      "lat": 45.02692539,
      "long": -77.91461485
    },
    "45027806": {
      "en": "Deer Lake",
      "fr": "Lac Deer",
      "lat": 45.03693515,
      "long": -78.09491276
    },
    "45027814": {
      "en": "Cockle Lake",
      "fr": "Lac Cockle",
      "lat": 45.02832919,
      "long": -78.23541574
    },
    "45027821": {
      "en": "Little Dudmon Lake",
      "fr": "Lac Little Dudmon",
      "lat": 45.03388338,
      "long": -78.34942944
    },
    "45027827": {
      "en": "Haas Lake",
      "fr": "Lac Haas",
      "lat": 45.03070955,
      "long": -78.44189774
    },
    "45027856": {
      "en": "Bentshoe Lakes",
      "fr": "Lacs Bentshoe",
      "lat": 45.04371002,
      "long": -78.92859223
    },
    "45027901": {
      "en": "Clear Lake",
      "fr": "Lac Clear",
      "lat": 45.0410855,
      "long": -79.0158115
    },
    "45027958": {
      "en": "Tadenac Bay (Georgian Bay)",
      "fr": "Baie Tadenac (Baie Georgienne)",
      "lat": 45.04792139,
      "long": -79.97803105
    },
    "45037647": {
      "en": "Canonto Lake",
      "fr": "Lac Canonto",
      "lat": 45.05610025,
      "long": -76.79419212
    },
    "45037703": {
      "en": "Brule Lake",
      "fr": "Lac Br��l��",
      "lat": 45.05091225,
      "long": -77.04828156
    },
    "45037809": {
      "en": "Cope Lake",
      "fr": "Lac Cope",
      "lat": 45.05451328,
      "long": -78.15942694
    },
    "45037813": {
      "en": "Pusey Lake",
      "fr": "Lac Pusey",
      "lat": 45.04932529,
      "long": -78.21502999
    },
    "45037819": {
      "en": "Miskwabi Lake",
      "fr": "Lac Miskwabi",
      "lat": 45.0510953,
      "long": -78.32159741
    },
    "45037824": {
      "en": "South Portage Lake",
      "fr": "Lac Portage Sud",
      "lat": 45.04792147,
      "long": -78.39721999
    },
    "45037850": {
      "en": "Brady Lake",
      "fr": "Lac Brady",
      "lat": 45.05591706,
      "long": -78.82080411
    },
    "45037903": {
      "en": "Bigwind Lake",
      "fr": "Lac Bigwind",
      "lat": 45.05732085,
      "long": -79.05469091
    },
    "45037906": {
      "en": "Leech Lake",
      "fr": "Lac Leech",
      "lat": 45.05188872,
      "long": -79.09778174
    },
    "45037910": {
      "en": "McKay Lake",
      "fr": "Lac McKay",
      "lat": 45.05530669,
      "long": -79.17438089
    },
    "45037957": {
      "en": "Tadenac Lake",
      "fr": "Lac Tadenac",
      "lat": 45.04108546,
      "long": -79.94031131
    },
    "45047639": {
      "en": "Robertson Lake",
      "fr": "Lac Robertson",
      "lat": 45.05671061,
      "long": -76.65613055
    },
    "45047723": {
      "en": "Ashby Lake",
      "fr": "Lac Ashby",
      "lat": 45.09253822,
      "long": -77.35101604
    },
    "45047755": {
      "en": "Faraday Lake",
      "fr": "Lac Faraday",
      "lat": 45.05970128,
      "long": -77.92218321
    },
    "45047802": {
      "en": "Diamond Lake",
      "fr": "Lac Diamond",
      "lat": 45.07392247,
      "long": -78.03668521
    },
    "45047804": {
      "en": "Jordan Lake",
      "fr": "Lac Jordan",
      "lat": 45.0717252,
      "long": -78.06439518
    },
    "45047808": {
      "en": "Hudson Lake",
      "fr": "Lac Hudson",
      "lat": 45.06769688,
      "long": -78.13550116
    },
    "45047844": {
      "en": "Boshkung Lake",
      "fr": "Lac Boshkung",
      "lat": 45.06409577,
      "long": -78.72693201
    },
    "45047847": {
      "en": "Kushog Lake",
      "fr": "Lac Kushog",
      "lat": 45.08429841,
      "long": -78.78747891
    },
    "45047904": {
      "en": "Pine Lake",
      "fr": "Lac Pine",
      "lat": 45.06653716,
      "long": -79.06830175
    },
    "45047927": {
      "en": "Leonard Lake",
      "fr": "Lac Leonard",
      "lat": 45.07569242,
      "long": -79.44549914
    },
    "45057610": {
      "en": "Mississippi Lake",
      "fr": "Lac Mississippi",
      "lat": 45.06531659,
      "long": -76.1853052
    },
    "45057659": {
      "en": "Mackie Lake",
      "fr": "Lac Mackie",
      "lat": 45.07727945,
      "long": -76.98828398
    },
    "45057824": {
      "en": "Drag Lake",
      "fr": "Lac Drag",
      "lat": 45.06952792,
      "long": -78.40613113
    },
    "45057902": {
      "en": "Crosson Lake",
      "fr": "Lac Crosson",
      "lat": 45.08368805,
      "long": -79.03638036
    },
    "45057911": {
      "en": "Healey Lake",
      "fr": "Lac Healey",
      "lat": 45.08252837,
      "long": -79.18939554
    },
    "45058123": {
      "en": "Miller Lake",
      "fr": "Lac Miller",
      "lat": 45.09931293,
      "long": -81.39380299
    },
    "45067648": {
      "en": "Redhorse Lake",
      "fr": "Lac Redhorse",
      "lat": 45.09528483,
      "long": -76.80749779
    },
    "45067701": {
      "en": "Fortune Lake",
      "fr": "Lac Fortune",
      "lat": 45.09369791,
      "long": -77.0263089
    },
    "45067845": {
      "en": "Halls Lake",
      "fr": "Lac Halls",
      "lat": 45.10889558,
      "long": -78.74548671
    },
    "45067931": {
      "en": "Brandy Lake",
      "fr": "Lac Brandy",
      "lat": 45.10749174,
      "long": -79.52771353
    },
    "45077659": {
      "en": "Round Schooner Lake",
      "fr": "Lac Round Schooner",
      "lat": 45.12091959,
      "long": -76.99048125
    },
    "45077803": {
      "en": "Baptiste Lake",
      "fr": "Lac Baptiste",
      "lat": 45.0993131,
      "long": -77.99609682
    },
    "45077828": {
      "en": "Basshaunt Lake",
      "fr": "Lac Basshaunt",
      "lat": 45.12311679,
      "long": -78.46380937
    },
    "45077834": {
      "en": "Cranberry Lake",
      "fr": "Lac Cranberry",
      "lat": 45.12549716,
      "long": -78.55609456
    },
    "45077835": {
      "en": "Pine Lake",
      "fr": "Lac Pine",
      "lat": 45.11530428,
      "long": -78.58862631
    },
    "45077914": {
      "en": "Halfway Lake",
      "fr": "Lac Halfway",
      "lat": 45.11011627,
      "long": -79.22668804
    },
    "45077918": {
      "en": "Muskoka River",
      "fr": "Rivi��re Muskoka",
      "lat": 45.11829497,
      "long": -79.30298201
    },
    "45087425": {
      "en": "St. Lawrence River 15 - Lake St. Francis",
      "fr": "Fleuve Saint-Laurent 15 - Lac Saint-Fran�_ois",
      "lat": 45.12513112,
      "long": -74.46557808
    },
    "45087430": {
      "en": "St. Lawrence River 16 - Lake St. Francis at Raisin River",
      "fr": "Fleuve Saint-Laurent 16 - Lac Saint-Fran�_ois, �� l'embouchure de la rivi��re Raisin",
      "lat": 45.13373708,
      "long": -74.5115986
    },
    "45087648": {
      "en": "Govan Lake",
      "fr": "Lac Govan",
      "lat": 45.13312663,
      "long": -76.79529076
    },
    "45087716": {
      "en": "Denbigh Lake",
      "fr": "Lac Denbigh",
      "lat": 45.13013589,
      "long": -77.2713041
    },
    "45087726": {
      "en": "Trout Lake",
      "fr": "Lac Trout",
      "lat": 45.14948403,
      "long": -77.43548873
    },
    "45087808": {
      "en": "Elephant Lake",
      "fr": "Lac Elephant",
      "lat": 45.13068517,
      "long": -78.13190009
    },
    "45087829": {
      "en": "Eagle Lake",
      "fr": "Lac Eagle",
      "lat": 45.1378873,
      "long": -78.48999346
    },
    "45087906": {
      "en": "Heeney Lake",
      "fr": "Lac Heeney",
      "lat": 45.12812165,
      "long": -79.10278663
    },
    "45087945": {
      "en": "Stewart Lake",
      "fr": "Lac Stewart",
      "lat": 45.14289212,
      "long": -79.76501829
    },
    "45087959": {
      "en": "Moon River",
      "fr": "Rivi��re Moon",
      "lat": 45.13233303,
      "long": -79.98498907
    },
    "45097439": {
      "en": "Raisin River",
      "fr": "Rivi��re Raisin",
      "lat": 45.15473317,
      "long": -74.6483174
    },
    "45097539": {
      "en": "Rideau River",
      "fr": "Rivi��re Rideau",
      "lat": 45.07593673,
      "long": -75.64001694
    },
    "45097607": {
      "en": "Mississippi River",
      "fr": "Rivi��re Mississippi",
      "lat": 45.1533293,
      "long": -76.12658937
    },
    "45097636": {
      "en": "Green Lake",
      "fr": "Lac Green",
      "lat": 45.14289227,
      "long": -76.6077907
    },
    "45097641": {
      "en": "Widow Lake",
      "fr": "Lac Widow",
      "lat": 45.14447918,
      "long": -76.68548848
    },
    "45097703": {
      "en": "Centennial (Black Donald) Lake",
      "fr": "Lac Centennial (Black Donald)",
      "lat": 45.15070475,
      "long": -77.04999055
    },
    "45097719": {
      "en": "Big Yirkie Lake",
      "fr": "Lac Big Yirkie",
      "lat": 45.15369546,
      "long": -77.32641887
    },
    "45097843": {
      "en": "Hawk Lake, Little",
      "fr": "Lac Hawk, Little",
      "lat": 45.15149813,
      "long": -78.70691248
    },
    "45097844": {
      "en": "Hawk Lake, Big",
      "fr": "Lac Hawk, Big",
      "lat": 45.1615079,
      "long": -78.73578212
    },
    "45097850": {
      "en": "St. Nora Lake",
      "fr": "Lac St. Nora",
      "lat": 45.15589266,
      "long": -78.82971526
    },
    "45097905": {
      "en": "Dickie Lake",
      "fr": "Lac Dickie",
      "lat": 45.14893464,
      "long": -79.08880958
    },
    "45097910": {
      "en": "Moot Lake",
      "fr": "Lac Moot",
      "lat": 45.14508942,
      "long": -79.1724888
    },
    "45097954": {
      "en": "Kapikog Lake",
      "fr": "Lac Kapikog",
      "lat": 45.15332913,
      "long": -79.89111697
    },
    "45097955": {
      "en": "Healey Lake",
      "fr": "Lac Healey",
      "lat": 45.16468167,
      "long": -79.91717899
    },
    "45107620": {
      "en": "Clayton Lake",
      "fr": "Lac Clayton",
      "lat": 45.17749922,
      "long": -76.34582773
    },
    "45107652": {
      "en": "Norcan Lake",
      "fr": "Lac Norcan",
      "lat": 45.16150798,
      "long": -76.86657985
    },
    "45107712": {
      "en": "Leatherroot Lake",
      "fr": "Lac Leatherroot",
      "lat": 45.17310465,
      "long": -77.20910926
    },
    "45107835": {
      "en": "Tedious Lake",
      "fr": "Lac Tedious",
      "lat": 45.16529209,
      "long": -78.57501547
    },
    "45107915": {
      "en": "Fawn Lake",
      "fr": "Lac Fawn",
      "lat": 45.17188385,
      "long": -79.24780621
    },
    "45107927": {
      "en": "Three Mile Lake",
      "fr": "Lac Three Mile",
      "lat": 45.17908599,
      "long": -79.46332142
    },
    "45107935": {
      "en": "Lake Rosseau",
      "fr": "Lac Rosseau",
      "lat": 45.17371489,
      "long": -79.59833123
    },
    "45107944": {
      "en": "Lake Joseph",
      "fr": "Lac Joseph",
      "lat": 45.18512846,
      "long": -79.71612912
    },
    "45108135": {
      "en": "Willow Creek",
      "fr": "Ruisseau Willow",
      "lat": 45.15931049,
      "long": -81.56830256
    },
    "45108140": {
      "en": "Lake Huron H2",
      "fr": "Lac Huron H2",
      "lat": 45.20148577,
      "long": -81.93610054
    },
    "45108236": {
      "en": "North Channel NC2a - Whalesback Channel",
      "fr": "Chenal Nord NC2a - Chenal Whalesback",
      "lat": 46.16230133,
      "long": -82.47528539
    },
    "45117422": {
      "en": "Gunn Creek",
      "fr": "Ruisseau Gunn",
      "lat": 45.18848558,
      "long": -75.62549058
    },
    "45117608": {
      "en": "Mississippi River",
      "fr": "Rivi��re Mississippi",
      "lat": 45.20569747,
      "long": -76.1616846
    },
    "45117739": {
      "en": "Fraser Lake",
      "fr": "Lac Fraser",
      "lat": 45.18872963,
      "long": -77.64331351
    },
    "45117749": {
      "en": "Salmon Trout Lake",
      "fr": "Lac Salmon Trout",
      "lat": 45.19013343,
      "long": -77.8129913
    },
    "45117832": {
      "en": "Redstone Lake",
      "fr": "Lac Redstone",
      "lat": 45.18311436,
      "long": -78.53778401
    },
    "45117843": {
      "en": "Clear Lake",
      "fr": "Lac Clear",
      "lat": 45.18232089,
      "long": -78.71222255
    },
    "45117847": {
      "en": "Sherborne Lake",
      "fr": "Lac Sherborne",
      "lat": 45.17810946,
      "long": -78.78491544
    },
    "45117857": {
      "en": "Red Chalk Lake",
      "fr": "Lac Red Chalk",
      "lat": 45.18970614,
      "long": -78.94751315
    },
    "45117904": {
      "en": "Echo Lake",
      "fr": "Lac Echo",
      "lat": 45.17688874,
      "long": -79.06799659
    },
    "45127656": {
      "en": "Black Donald Lake",
      "fr": "Lac Black Donald",
      "lat": 45.21448651,
      "long": -76.93799101
    },
    "45127726": {
      "en": "Genricks Lake",
      "fr": "Lac Genricks",
      "lat": 45.21527994,
      "long": -77.4486113
    },
    "45127813": {
      "en": "Kingscote Lake",
      "fr": "Lac Kingscote",
      "lat": 45.19971594,
      "long": -78.22082834
    },
    "45127822": {
      "en": "Percy Lake",
      "fr": "Lac Percy",
      "lat": 45.20929845,
      "long": -78.35138259
    },
    "45127824": {
      "en": "Haliburton Lake",
      "fr": "Lac Haliburton",
      "lat": 45.19269688,
      "long": -78.39612137
    },
    "45127835": {
      "en": "Birchy Lake",
      "fr": "Lac Birchy",
      "lat": 45.2100919,
      "long": -78.60779136
    },
    "45127842": {
      "en": "Red Pine Lake",
      "fr": "Lac Red Pine",
      "lat": 45.20453769,
      "long": -78.70160243
    },
    "45127844": {
      "en": "Nunikani Lake",
      "fr": "Lac Nunikani",
      "lat": 45.20032626,
      "long": -78.7360873
    },
    "45127851": {
      "en": "Raven Lake",
      "fr": "Lac Raven",
      "lat": 45.21173984,
      "long": -78.85211517
    },
    "45127856": {
      "en": "Blue Chalk Lake",
      "fr": "Lac Blue Chalk",
      "lat": 45.19928866,
      "long": -78.93829684
    },
    "45128120": {
      "en": "Gillies Lake",
      "fr": "Lac Gillies",
      "lat": 45.20472067,
      "long": -81.33551441
    },
    "45128128": {
      "en": "George Lake",
      "fr": "Lac George",
      "lat": 45.19391744,
      "long": -81.46612968
    },
    "45137830": {
      "en": "Dog Lake",
      "fr": "Lac Dog",
      "lat": 45.2179044,
      "long": -78.5040926
    },
    "45137831": {
      "en": "Duck Lake",
      "fr": "Lac Duck",
      "lat": 45.21613438,
      "long": -78.51410237
    },
    "45137838": {
      "en": "Kennisis Lake",
      "fr": "Lac Kennisis",
      "lat": 45.21589024,
      "long": -78.64160485
    },
    "45137856": {
      "en": "Paint Lake",
      "fr": "Lac Paint",
      "lat": 45.21930819,
      "long": -78.94250827
    },
    "45137859": {
      "en": "Chub Lake",
      "fr": "Lac Chub",
      "lat": 45.2130826,
      "long": -78.98419529
    },
    "45137933": {
      "en": "Young Lake",
      "fr": "Lac Young",
      "lat": 45.20429351,
      "long": -79.54889274
    },
    "45137957": {
      "en": "Crane Lake",
      "fr": "Lac Crane",
      "lat": 45.21308256,
      "long": -79.9282874
    },
    "45138128": {
      "en": "Emmett Lake",
      "fr": "Lac Emmett",
      "lat": 45.21448629,
      "long": -81.45911064
    },
    "45138131": {
      "en": "Cyprus Lake",
      "fr": "Lac Cyprus",
      "lat": 45.23053853,
      "long": -81.53131526
    },
    "45138134": {
      "en": "Cameron Lake",
      "fr": "Lac Cameron",
      "lat": 45.21692769,
      "long": -81.55798763
    },
    "45147650": {
      "en": "Wabun Lake",
      "fr": "Lac Wabun",
      "lat": 45.227487,
      "long": -76.83191188
    },
    "45157443": {
      "en": "Loch Garry",
      "fr": "Lac Garry",
      "lat": 45.25391532,
      "long": -74.70971879
    },
    "45157740": {
      "en": "Fosters Lake",
      "fr": "Lac Fosters",
      "lat": 45.24970376,
      "long": -77.67529594
    },
    "45157830": {
      "en": "Eyre Lake",
      "fr": "Lac Eyre",
      "lat": 45.2600797,
      "long": -78.49908772
    },
    "45157832": {
      "en": "Depot Lake",
      "fr": "Lac Depot",
      "lat": 45.29969153,
      "long": -78.53442709
    },
    "45157835": {
      "en": "Kennisis Lake, Little",
      "fr": "Lac Kennisis, Little",
      "lat": 45.25653966,
      "long": -78.59057945
    },
    "45157838": {
      "en": "Goodwin Lake",
      "fr": "Lac Goodwin",
      "lat": 45.25513585,
      "long": -78.64911218
    },
    "45157904": {
      "en": "Lake of Bays",
      "fr": "Lac de Bays",
      "lat": 45.25049716,
      "long": -78.99829442
    },
    "45157915": {
      "en": "Mary Lake",
      "fr": "Lac Mary",
      "lat": 45.2445157,
      "long": -79.25830427
    },
    "45157927": {
      "en": "Skeleton Lake",
      "fr": "Lac Skeleton",
      "lat": 45.25110749,
      "long": -79.45331166
    },
    "45157940": {
      "en": "Sucker Lake",
      "fr": "Lac Sucker",
      "lat": 45.25049713,
      "long": -79.68280392
    },
    "45167645": {
      "en": "Calabogie Lake",
      "fr": "Lac Calabogie",
      "lat": 45.2772917,
      "long": -76.74280052
    },
    "45167731": {
      "en": "Dropledge Lake",
      "fr": "Lac Dropledge",
      "lat": 45.26453532,
      "long": -77.50860888
    },
    "45167755": {
      "en": "Cardwell Lake",
      "fr": "Lac Cardwell",
      "lat": 45.26233803,
      "long": -77.92169495
    },
    "45167831": {
      "en": "Dutton Lake",
      "fr": "Lac Dutton",
      "lat": 45.27729162,
      "long": -78.52380697
    },
    "45167936": {
      "en": "Woods Lake",
      "fr": "Lac Woods",
      "lat": 45.26892975,
      "long": -79.60419062
    },
    "45167947": {
      "en": "Clear Lake",
      "fr": "Lac Clear",
      "lat": 45.2620938,
      "long": -79.79498658
    },
    "45177807": {
      "en": "Meach Lakes",
      "fr": "Lacs Meach",
      "lat": 45.29969154,
      "long": -78.13110664
    },
    "45177842": {
      "en": "Slipper Lake",
      "fr": "Lac Slipper",
      "lat": 45.2902921,
      "long": -78.69299648
    },
    "45177958": {
      "en": "Otter Lake",
      "fr": "Lac Otter",
      "lat": 45.27808501,
      "long": -79.96753302
    },
    "45187631": {
      "en": "White Lake",
      "fr": "Lac White",
      "lat": 45.2981047,
      "long": -76.51861832
    },
    "45187651": {
      "en": "Fergusons Lake",
      "fr": "Lac Fergusons",
      "lat": 45.30188887,
      "long": -76.84417995
    },
    "45187805": {
      "en": "Big Mink Lake",
      "fr": "Lac Big Mink",
      "lat": 45.25531898,
      "long": -78.0800202
    },
    "45187845": {
      "en": "Kawagama Lake",
      "fr": "Lac Kawagama",
      "lat": 45.29871495,
      "long": -78.75250577
    },
    "45197641": {
      "en": "Balmer Lake",
      "fr": "Lac Balmer",
      "lat": 45.33252853,
      "long": -76.68408469
    },
    "45197705": {
      "en": "Burns Lake",
      "fr": "Lac Burns",
      "lat": 45.31708661,
      "long": -77.09222691
    },
    "45197802": {
      "en": "Lake St. Peter",
      "fr": "Lac St. Peter",
      "lat": 45.31208169,
      "long": -78.02331852
    },
    "45197850": {
      "en": "Millichamp Lake",
      "fr": "Lac Millichamp",
      "lat": 45.32593663,
      "long": -78.8294101
    },
    "45197852": {
      "en": "Clinto Lake",
      "fr": "Lac Clinto",
      "lat": 45.3139127,
      "long": -78.86780122
    },
    "45197908": {
      "en": "Buchanan Lake",
      "fr": "Lac Buchanan",
      "lat": 45.31610996,
      "long": -79.12890971
    },
    "45197958": {
      "en": "Oastler Lake",
      "fr": "Lac Oastler",
      "lat": 45.31733062,
      "long": -79.96667853
    },
    "45207554": {
      "en": "Monahan Drain",
      "fr": "Drain Monahan",
      "lat": 45.27228685,
      "long": -75.85498285
    },
    "45207643": {
      "en": "Norway Lake",
      "fr": "Lac Norway",
      "lat": 45.33930343,
      "long": -76.71991234
    },
    "45207701": {
      "en": "Tooeys Lake",
      "fr": "Lac Tooeys",
      "lat": 45.34290449,
      "long": -77.02630892
    },
    "45207842": {
      "en": "Bear Lake",
      "fr": "Lac Bear",
      "lat": 45.34150061,
      "long": -78.70941494
    },
    "45207851": {
      "en": "McFadden Lake",
      "fr": "Lac McFadden",
      "lat": 45.33429845,
      "long": -78.85101655
    },
    "45207855": {
      "en": "Flaherty Lake",
      "fr": "Lac Flaherty",
      "lat": 45.34070714,
      "long": -78.92077976
    },
    "45207906": {
      "en": "Peninsula Lake",
      "fr": "Lac Peninsula",
      "lat": 45.3429044,
      "long": -79.09918558
    },
    "45207911": {
      "en": "Fairy Lake",
      "fr": "Lac Fairy",
      "lat": 45.32892734,
      "long": -79.18048443
    },
    "45207917": {
      "en": "Lake Vernon",
      "fr": "Lac Vernon",
      "lat": 45.33228427,
      "long": -79.2932164
    },
    "45208135": {
      "en": "Georgian Bay GB2",
      "fr": "Baie Georgienne GB2",
      "lat": 45.39472314,
      "long": -81.26019702
    },
    "45217744": {
      "en": "Purdy Lake",
      "fr": "Lac Purdy",
      "lat": 45.34290446,
      "long": -77.73327937
    },
    "45217749": {
      "en": "Papineau Lake",
      "fr": "Lac Papineau",
      "lat": 45.34510172,
      "long": -77.81439512
    },
    "45217841": {
      "en": "Kimball Lake",
      "fr": "Lac Kimball",
      "lat": 45.34168371,
      "long": -78.67608974
    },
    "45217847": {
      "en": "Fletcher Lake",
      "fr": "Lac Fletcher",
      "lat": 45.35370764,
      "long": -78.78442717
    },
    "45217850": {
      "en": "Fletcher Lake, Lower",
      "fr": "Lac Fletcher, Lower",
      "lat": 45.3425382,
      "long": -78.83252289
    },
    "45217858": {
      "en": "Fifteen Mile Lake",
      "fr": "Lac Fifteen Mile",
      "lat": 45.34967931,
      "long": -78.96222264
    },
    "45217956": {
      "en": "Haines Lake",
      "fr": "Lac Haines",
      "lat": 45.35071686,
      "long": -79.94861212
    },
    "45227750": {
      "en": "Hicks Lake",
      "fr": "Lac Hicks",
      "lat": 45.37470378,
      "long": -77.82501524
    },
    "45227801": {
      "en": "McKenzie Lake",
      "fr": "Lac McKenzie",
      "lat": 45.36432779,
      "long": -78.02270818
    },
    "45227843": {
      "en": "Livingstone Lake",
      "fr": "Lac Livingstone",
      "lat": 45.36029944,
      "long": -78.71918057
    },
    "45227854": {
      "en": "McCann Lake",
      "fr": "Lac McCann",
      "lat": 45.35950597,
      "long": -78.89831881
    },
    "45227855": {
      "en": "Oxtongue Lake",
      "fr": "Lac Oxtongue",
      "lat": 45.36591466,
      "long": -78.91919284
    },
    "45227921": {
      "en": "Fox Lake",
      "fr": "Lac Fox",
      "lat": 45.38648349,
      "long": -79.35748645
    },
    "45227935": {
      "en": "Meadow (Mead) Lake",
      "fr": "Lac Meadow (Mead)",
      "lat": 45.36872225,
      "long": -79.57941034
    },
    "45228000": {
      "en": "Mill Lake",
      "fr": "Lac Mill",
      "lat": 45.36951569,
      "long": -79.99719612
    },
    "45237635": {
      "en": "Madawaska River",
      "fr": "Rivi��re Madawaska",
      "lat": 45.38428635,
      "long": -76.58252216
    },
    "45237848": {
      "en": "Fisher Lake",
      "fr": "Lac Fisher",
      "lat": 45.38288244,
      "long": -78.79748871
    },
    "45237900": {
      "en": "Buck Lake",
      "fr": "Lac Buck",
      "lat": 45.39228185,
      "long": -78.99078711
    },
    "45237901": {
      "en": "Solitaire Lake",
      "fr": "Lac Solitaire",
      "lat": 45.39209874,
      "long": -79.00860938
    },
    "45237905": {
      "en": "Walker Lake",
      "fr": "Lac Walker",
      "lat": 45.38092931,
      "long": -79.08771097
    },
    "45237907": {
      "en": "Harp Lake",
      "fr": "Lac Harp",
      "lat": 45.37873204,
      "long": -79.13501323
    },
    "45237913": {
      "en": "Mayflower Lake",
      "fr": "Lac Mayflower",
      "lat": 45.39032871,
      "long": -79.2166783
    },
    "45237930": {
      "en": "Axe Lake",
      "fr": "Lac Axe",
      "lat": 45.3903287,
      "long": -79.50360466
    },
    "45247559": {
      "en": "Constance Lake",
      "fr": "Lac Constance",
      "lat": 45.40888355,
      "long": -75.97857909
    },
    "45247640": {
      "en": "Hurds Lake",
      "fr": "Lac Hurds",
      "lat": 45.39789719,
      "long": -76.68109397
    },
    "45247659": {
      "en": "Constant Lake",
      "fr": "Lac Constant",
      "lat": 45.40570968,
      "long": -76.98248567
    },
    "45247757": {
      "en": "Cross (Lyell) Lake",
      "fr": "Lac Cross (Lyell)",
      "lat": 45.39673747,
      "long": -77.94330142
    },
    "45247812": {
      "en": "Hay Lake, Lower",
      "fr": "Lac Hay, Lower",
      "lat": 45.40729654,
      "long": -78.20520336
    },
    "45247851": {
      "en": "Niger Lake",
      "fr": "Lac Niger",
      "lat": 45.40253577,
      "long": -78.84741548
    },
    "45247912": {
      "en": "Arrowhead Lake",
      "fr": "Lac Arrowhead",
      "lat": 45.39673741,
      "long": -79.20080915
    },
    "45247917": {
      "en": "Waseosa Lake",
      "fr": "Lac Waseosa",
      "lat": 45.40528233,
      "long": -79.27502793
    },
    "45247942": {
      "en": "Manitouwaba Lake",
      "fr": "Lac Manitouwaba",
      "lat": 45.40528231,
      "long": -79.70001586
    },
    "45247949": {
      "en": "Isabella Lake",
      "fr": "Lac Isabella",
      "lat": 45.40308504,
      "long": -79.81329714
    },
    "45257545": {
      "en": "Ottawa River",
      "fr": "Rivi��re des Outaouais",
      "lat": 45.37391041,
      "long": -75.86718989
    },
    "45257741": {
      "en": "Kamaniskeg Lake",
      "fr": "Lac Kamaniskeg",
      "lat": 45.41333904,
      "long": -77.69391169
    },
    "45257841": {
      "en": "Wolf Lake",
      "fr": "Lac Wolf",
      "lat": 45.42810951,
      "long": -78.69659756
    },
    "45257902": {
      "en": "Rebecca Lake",
      "fr": "Lac Rebecca",
      "lat": 45.42908605,
      "long": -79.03998146
    },
    "45257923": {
      "en": "Buck Lake",
      "fr": "Lac Buck",
      "lat": 45.42029697,
      "long": -79.39471791
    },
    "45257939": {
      "en": "Fry Lake, Upper",
      "fr": "Lac Fry, Upper",
      "lat": 45.41291171,
      "long": -79.64691525
    },
    "45267616": {
      "en": "Mississippi River",
      "fr": "Rivi��re Mississippi",
      "lat": 45.44111011,
      "long": -76.28491464
    },
    "45267712": {
      "en": "Lake Clear",
      "fr": "Lac Clear",
      "lat": 45.44111007,
      "long": -77.19031045
    },
    "45267735": {
      "en": "Wadsworth Lake",
      "fr": "Lac Wadsworth",
      "lat": 45.43970624,
      "long": -77.58130179
    },
    "45267834": {
      "en": "McGarvey Lake",
      "fr": "Lac McGarvey",
      "lat": 45.43451821,
      "long": -78.55908531
    },
    "45267840": {
      "en": "Crown Lake",
      "fr": "Lac Crown",
      "lat": 45.43152748,
      "long": -78.67248867
    },
    "45267845": {
      "en": "Roger Lake",
      "fr": "Lac Roger",
      "lat": 45.4347013,
      "long": -78.74469328
    },
    "45267855": {
      "en": "Camp Lake",
      "fr": "Lac Camp",
      "lat": 45.43909583,
      "long": -78.90722996
    },
    "45267858": {
      "en": "Oxbow Lake",
      "fr": "Lac Oxbow",
      "lat": 45.43671545,
      "long": -78.96667822
    },
    "45267902": {
      "en": "Bella Lake",
      "fr": "Lac Bella",
      "lat": 45.44452795,
      "long": -79.03113137
    },
    "45267935": {
      "en": "Bear Lake",
      "fr": "Lac Bear",
      "lat": 45.44233066,
      "long": -79.58630733
    },
    "45267937": {
      "en": "Horn Lake",
      "fr": "Lac Horn",
      "lat": 45.39429598,
      "long": -79.60998897
    },
    "45268011": {
      "en": "Shebeshekong Lake",
      "fr": "Lac Shebeshekong",
      "lat": 45.44648102,
      "long": -80.19031143
    },
    "45277542": {
      "en": "Rideau River",
      "fr": "Rivi��re Rideau",
      "lat": 45.36512135,
      "long": -75.69391102
    },
    "45277615": {
      "en": "Mississippi River Snye",
      "fr": "Rivi��re Mississippi Snye",
      "lat": 45.44892261,
      "long": -76.23999275
    },
    "45277751": {
      "en": "Bark Lake",
      "fr": "Lac Bark",
      "lat": 45.44788494,
      "long": -77.83581848
    },
    "45277837": {
      "en": "Big Porcupine Lake",
      "fr": "Lac Big Porcupine",
      "lat": 45.45227944,
      "long": -78.61218592
    },
    "45277856": {
      "en": "Tasso Lake",
      "fr": "Lac Tasso",
      "lat": 45.45569739,
      "long": -78.93439061
    },
    "45277859": {
      "en": "Dotty Lake",
      "fr": "Lac Dotty",
      "lat": 45.46173987,
      "long": -78.99048194
    },
    "45277911": {
      "en": "Oudaze Lake",
      "fr": "Lac Oudaze",
      "lat": 45.45368322,
      "long": -79.19519392
    },
    "45287621": {
      "en": "Madawaska Lake",
      "fr": "Lac Madawaska",
      "lat": 45.40949389,
      "long": -76.34381359
    },
    "45287829": {
      "en": "Lake Louisa",
      "fr": "Lac Louisa",
      "lat": 45.47229898,
      "long": -78.48248617
    },
    "45287835": {
      "en": "Bonnechere Lake",
      "fr": "Lac Bonnechere",
      "lat": 45.46033608,
      "long": -78.58362146
    },
    "45287911": {
      "en": "Foote Lake",
      "fr": "Lac Foote",
      "lat": 45.47571691,
      "long": -79.17529645
    },
    "45287924": {
      "en": "Round Lake",
      "fr": "Lac Round",
      "lat": 45.46473057,
      "long": -79.40613149
    },
    "45297744": {
      "en": "Trout Lake",
      "fr": "Lac Trout",
      "lat": 45.49250165,
      "long": -77.74158017
    },
    "45297847": {
      "en": "Westward Lake",
      "fr": "Lac Westward",
      "lat": 45.4910978,
      "long": -78.77551605
    },
    "45297954": {
      "en": "Manitouwabing Lake",
      "fr": "Lac Manitouwabing",
      "lat": 45.47431307,
      "long": -79.90332403
    },
    "45307745": {
      "en": "Carson Lake",
      "fr": "Lac Carson",
      "lat": 45.513925,
      "long": -77.75830381
    },
    "45307817": {
      "en": "Galeairy Lake",
      "fr": "Lac Galeairy",
      "lat": 45.47608317,
      "long": -78.29999099
    },
    "45307843": {
      "en": "Swan Lake",
      "fr": "Lac Swan",
      "lat": 45.49530923,
      "long": -78.71020841
    },
    "45307912": {
      "en": "Bay Lake",
      "fr": "Lac Bay",
      "lat": 45.50452551,
      "long": -79.20050399
    },
    "45308015": {
      "en": "Georgian Bay GB3",
      "fr": "Baie Georgienne GB3",
      "lat": 45.42170072,
      "long": -80.6066934
    },
    "45317633": {
      "en": "Bonnechere River",
      "fr": "Rivi��re Bonnech��re",
      "lat": 45.51868579,
      "long": -76.55719257
    },
    "45317836": {
      "en": "Delano Lake",
      "fr": "Lac Delano",
      "lat": 45.51569498,
      "long": -78.59692713
    },
    "45317841": {
      "en": "Smoke Lake",
      "fr": "Lac Smoke",
      "lat": 45.51532876,
      "long": -78.68109464
    },
    "45317857": {
      "en": "Unnamed Lake #420",
      "fr": "Lac sans nom no 420",
      "lat": 45.51673256,
      "long": -78.95001562
    },
    "45317912": {
      "en": "Emsdale Lake",
      "fr": "Lac Emsdale",
      "lat": 45.51612219,
      "long": -79.19659773
    },
    "45317916": {
      "en": "Clear (Schamerhorn) Lake",
      "fr": "Lac Clear (Schamerhorn)",
      "lat": 45.50531897,
      "long": -79.26080674
    },
    "45317948": {
      "en": "Oliver Lake",
      "fr": "Lac Oliver",
      "lat": 45.51471836,
      "long": -79.79608523
    },
    "45317956": {
      "en": "McKellar Lake",
      "fr": "Lac McKellar",
      "lat": 45.51368075,
      "long": -79.93298713
    },
    "45327500": {
      "en": "South Nation River",
      "fr": "Rivi��re South Nation",
      "lat": 45.53510432,
      "long": -74.99359342
    },
    "45327835": {
      "en": "Cache Lake",
      "fr": "Lac Cache",
      "lat": 45.5409025,
      "long": -78.58441492
    },
    "45327902": {
      "en": "Hungry Lake",
      "fr": "Lac Hungry",
      "lat": 45.53931557,
      "long": -79.02972757
    },
    "45327924": {
      "en": "Doe Lake",
      "fr": "Lac Doe",
      "lat": 45.53388342,
      "long": -79.41418814
    },
    "45327930": {
      "en": "Rainy Lake",
      "fr": "Lac Rainy",
      "lat": 45.53150304,
      "long": -79.49579217
    },
    "45327958": {
      "en": "Lorimer Lake",
      "fr": "Lac Lorimer",
      "lat": 45.54468661,
      "long": -79.95862191
    },
    "45337703": {
      "en": "Mink Lake",
      "fr": "Lac Mink",
      "lat": 45.56470629,
      "long": -77.04828161
    },
    "45337710": {
      "en": "Mud (Wilbur) Lake",
      "fr": "Lac Mud (Wilbur)",
      "lat": 45.56049485,
      "long": -77.17438028
    },
    "45337807": {
      "en": "McCauley Lake",
      "fr": "Lac McCauley",
      "lat": 45.54230633,
      "long": -78.11188059
    },
    "45337900": {
      "en": "Cripple Lake",
      "fr": "Lac Cripple",
      "lat": 45.55970131,
      "long": -79.00751076
    },
    "45338015": {
      "en": "Rock Island Lake (Shawanaga River)",
      "fr": "Lac Rock Island (Rivi��re Shawanaga)",
      "lat": 45.55310945,
      "long": -80.25751117
    },
    "45347721": {
      "en": "Golden Lake",
      "fr": "Lac Golden",
      "lat": 45.56568284,
      "long": -77.32440474
    },
    "45347835": {
      "en": "Canisbay Lake",
      "fr": "Lac Canisbay",
      "lat": 45.57532633,
      "long": -78.58941981
    },
    "45347854": {
      "en": "McCraney Lake",
      "fr": "Lac McCraney",
      "lat": 45.56891763,
      "long": -78.90222509
    },
    "45357740": {
      "en": "Burns Lake",
      "fr": "Lac Burns",
      "lat": 45.58728927,
      "long": -77.67138972
    },
    "45357917": {
      "en": "Deer Lake",
      "fr": "Lac Deer",
      "lat": 45.58008704,
      "long": -79.27661486
    },
    "45357919": {
      "en": "Three Mile Lake",
      "fr": "Lac Three Mile",
      "lat": 45.59369788,
      "long": -79.31250354
    },
    "45358010": {
      "en": "Trout Lake",
      "fr": "Lac Trout",
      "lat": 45.58509188,
      "long": -80.16461563
    },
    "45358206": {
      "en": "Manitou River",
      "fr": "Rivi��re Manitou",
      "lat": 45.60028954,
      "long": -82.10303179
    },
    "45367458": {
      "en": "Lac Georges",
      "fr": "Lac Georges",
      "lat": 45.60590511,
      "long": -74.97332975
    },
    "45377751": {
      "en": "Aylen Lake",
      "fr": "Lac Aylen",
      "lat": 45.61329024,
      "long": -77.8483307
    },
    "45377921": {
      "en": "Kernick Lake",
      "fr": "Lac Kernick",
      "lat": 45.62452064,
      "long": -79.34833119
    },
    "45377942": {
      "en": "Ahmic Lake",
      "fr": "Lac Ahmic",
      "lat": 45.63453039,
      "long": -79.69549928
    },
    "45378129": {
      "en": "Georgian Bay GB1",
      "fr": "Baie Georgienne GB1",
      "lat": 45.80591706,
      "long": -81.32642023
    },
    "45387454": {
      "en": "Ottawa River",
      "fr": "Rivi��re des Outaouais",
      "lat": 45.64148862,
      "long": -74.88159388
    },
    "45387730": {
      "en": "Round Lake",
      "fr": "Lac Round",
      "lat": 45.6425261,
      "long": -77.52752982
    },
    "45387933": {
      "en": "Cecebe Lake",
      "fr": "Lac Cecebe",
      "lat": 45.64289222,
      "long": -79.58050901
    },
    "45397748": {
      "en": "Murphys Lake",
      "fr": "Lac Murphys",
      "lat": 45.66108078,
      "long": -77.81109925
    },
    "45397911": {
      "en": "Sand Lake",
      "fr": "Lac Sand",
      "lat": 45.62549721,
      "long": -79.17328231
    },
    "45397952": {
      "en": "Whitestone Lake",
      "fr": "Lac Whitestone",
      "lat": 45.64753087,
      "long": -79.86969367
    },
    "45398014": {
      "en": "Miskokway Lake",
      "fr": "Lac Miskokway",
      "lat": 45.65009433,
      "long": -80.22668841
    },
    "45407650": {
      "en": "Ottawa River",
      "fr": "Rivi��re des Outaouais",
      "lat": 45.60730885,
      "long": -76.67578393
    },
    "45407655": {
      "en": "Muskrat Lake",
      "fr": "Lac Muskrat",
      "lat": 45.68250416,
      "long": -76.91192903
    },
    "45407736": {
      "en": "Stevenson Lake",
      "fr": "Lac Stevenson",
      "lat": 45.68012376,
      "long": -77.60608209
    },
    "45407814": {
      "en": "MyKiss Lake",
      "fr": "Lac MyKiss",
      "lat": 45.67652266,
      "long": -78.22418532
    },
    "45407913": {
      "en": "Loon (Pevensey) Lake",
      "fr": "Lac Loon (Pevensey)",
      "lat": 45.66889321,
      "long": -79.21881455
    },
    "45407918": {
      "en": "Pickerel River",
      "fr": "Rivi��re Pickerel",
      "lat": 45.98792396,
      "long": -80.53387849
    },
    "45407920": {
      "en": "Jacks (Burden) Lake",
      "fr": "Lac Jacks (Burden)",
      "lat": 45.65747963,
      "long": -79.3386266
    },
    "45417729": {
      "en": "Jacks Lakes",
      "fr": "Lacs Jacks",
      "lat": 45.69092699,
      "long": -77.48749075
    },
    "45417806": {
      "en": "Ryan Lake",
      "fr": "Lac Ryan",
      "lat": 45.68470138,
      "long": -78.08972483
    },
    "45417814": {
      "en": "Little MyKiss Lake",
      "fr": "Lac Little MyKiss",
      "lat": 45.68811934,
      "long": -78.22821365
    },
    "45417848": {
      "en": "Timberwolf Lake",
      "fr": "Lac Timberwolf",
      "lat": 45.68110027,
      "long": -78.80249362
    },
    "45417905": {
      "en": "Nabdoe Lake",
      "fr": "Lac Nabdoe",
      "lat": 45.68848551,
      "long": -79.0844151
    },
    "45417910": {
      "en": "Buck (McCann) Lake",
      "fr": "Lac Buck (McCann)",
      "lat": 45.69013345,
      "long": -79.16638534
    },
    "45417912": {
      "en": "Grass (Sweny) Lake",
      "fr": "Lac Grass (Sweny)",
      "lat": 45.68012369,
      "long": -79.20300644
    },
    "45417914": {
      "en": "Island (Proudfoot) Lake",
      "fr": "Lac Island (Proudfoot)",
      "lat": 45.68708169,
      "long": -79.24048204
    },
    "45417918": {
      "en": "Pickerel Lake",
      "fr": "Lac Pickerel",
      "lat": 45.6818937,
      "long": -79.30749867
    },
    "45417944": {
      "en": "Magnetawan River",
      "fr": "Rivi��re Magnetawan",
      "lat": 45.68512854,
      "long": -79.73468386
    },
    "45427719": {
      "en": "Kelly Lake",
      "fr": "Lac Kelly",
      "lat": 45.70368335,
      "long": -77.32409958
    },
    "45427823": {
      "en": "Opeongo Lake",
      "fr": "Lac Opeongo",
      "lat": 45.70929854,
      "long": -78.3679842
    },
    "45427911": {
      "en": "Long (Oliphant) Lake",
      "fr": "Lac Long (Oliphant)",
      "lat": 45.71033609,
      "long": -79.1749913
    },
    "45428204": {
      "en": "Windfall Lake",
      "fr": "Lac Windfall",
      "lat": 45.70533106,
      "long": -82.06750933
    },
    "45437912": {
      "en": "North Lake",
      "fr": "Lac North",
      "lat": 45.72150553,
      "long": -79.19659776
    },
    "45438002": {
      "en": "Wahwashkesh Lake",
      "fr": "Lac Wahwashkesh",
      "lat": 45.71790441,
      "long": -80.03961561
    },
    "45438030": {
      "en": "Giroux Lake",
      "fr": "Lac Giroux",
      "lat": 45.71369296,
      "long": -80.5040933
    },
    "45438152": {
      "en": "Sucker Lake",
      "fr": "Lac Sucker",
      "lat": 45.7216885,
      "long": -81.87250194
    },
    "45447812": {
      "en": "Round Island Lake",
      "fr": "Lac Round Island",
      "lat": 45.73188155,
      "long": -78.19519362
    },
    "45457923": {
      "en": "Lake Bernard",
      "fr": "Lac Bernard",
      "lat": 45.73890054,
      "long": -79.38519645
    },
    "45458213": {
      "en": "Mindemoya Lake",
      "fr": "Lac Mindemoya",
      "lat": 45.76148341,
      "long": -82.20190879
    },
    "45458257": {
      "en": "Lake Huron H1",
      "fr": "Lac Huron H1",
      "lat": 45.68311423,
      "long": -82.70502173
    },
    "45467828": {
      "en": "Redrock Lake",
      "fr": "Lac Redrock",
      "lat": 45.7694792,
      "long": -78.47058434
    },
    "45467908": {
      "en": "Peyton Lake",
      "fr": "Lac Peyton",
      "lat": 45.77253093,
      "long": -79.15307968
    },
    "45467945": {
      "en": "Big Deer Lake",
      "fr": "Lac Big Deer",
      "lat": 45.76752602,
      "long": -79.75049198
    },
    "45477812": {
      "en": "Dickson Lake",
      "fr": "Lac Dickson",
      "lat": 45.78113693,
      "long": -78.20752273
    },
    "45478200": {
      "en": "Lake Manitou",
      "fr": "Lac Manitou",
      "lat": 45.77753567,
      "long": -81.98328079
    },
    "45487908": {
      "en": "Trout Lake",
      "fr": "Lac Trout",
      "lat": 45.80390301,
      "long": -79.14862411
    },
    "45497918": {
      "en": "Forest Lake",
      "fr": "Lac Forest",
      "lat": 45.82428874,
      "long": -79.29248403
    },
    "45497940": {
      "en": "Spring (Fowke) Lake",
      "fr": "Lac Spring (Fowke)",
      "lat": 45.81031167,
      "long": -79.68158327
    },
    "45498218": {
      "en": "Kagawong Lake",
      "fr": "Lac Kagawong",
      "lat": 45.82929347,
      "long": -82.30548549
    },
    "45507806": {
      "en": "White Partridge Lake",
      "fr": "Lac White Partridge",
      "lat": 45.83448167,
      "long": -78.1102937
    },
    "45507811": {
      "en": "Little Crooked Lake",
      "fr": "Lac Little Crooked",
      "lat": 45.82788987,
      "long": -78.18860183
    },
    "45507835": {
      "en": "Lake La Muir",
      "fr": "Lac La Muir",
      "lat": 45.82428878,
      "long": -78.59418058
    },
    "45507930": {
      "en": "Eagle Lake",
      "fr": "Lac Eagle",
      "lat": 45.83289469,
      "long": -79.50049191
    },
    "45508327": {
      "en": "North Channel NC1",
      "fr": "Chenal Nord NC1",
      "lat": 46.0770962,
      "long": -83.16101558
    },
    "45517814": {
      "en": "Lake Lavieille",
      "fr": "Lac Lavieille",
      "lat": 45.86811204,
      "long": -78.24609697
    },
    "45517954": {
      "en": "Le Grou Lake",
      "fr": "Lac Le Grou",
      "lat": 45.85071694,
      "long": -79.90112681
    },
    "45518014": {
      "en": "Smoky Lake",
      "fr": "Lac Smoky",
      "lat": 45.8532804,
      "long": -80.23968893
    },
    "45518227": {
      "en": "Tobacco Lake",
      "fr": "Lac Tobacco",
      "lat": 45.8559048,
      "long": -82.44550019
    },
    "45527830": {
      "en": "Hogan Lake",
      "fr": "Lac Hogan",
      "lat": 45.8770842,
      "long": -78.49719569
    },
    "45528159": {
      "en": "Pike Lake",
      "fr": "Lac Pike",
      "lat": 45.87452055,
      "long": -81.98541703
    },
    "45537914": {
      "en": "Red Deer Lake",
      "fr": "Lac Red Deer",
      "lat": 45.88733807,
      "long": -79.21991321
    },
    "45537921": {
      "en": "Bacon Lake",
      "fr": "Lac Bacon",
      "lat": 45.88172283,
      "long": -79.34997917
    },
    "45538157": {
      "en": "Bass Lake",
      "fr": "Lac Bass",
      "lat": 45.89093901,
      "long": -81.94659866
    },
    "45538254": {
      "en": "Silver Lake",
      "fr": "Lac Silver",
      "lat": 45.87751122,
      "long": -82.89142318
    },
    "45547720": {
      "en": "Petawawa River",
      "fr": "Rivi��re Petawawa",
      "lat": 45.88172293,
      "long": -77.36188037
    },
    "45547957": {
      "en": "Seagull Lake",
      "fr": "Lac Seagull",
      "lat": 45.90570962,
      "long": -79.94299694
    },
    "45548000": {
      "en": "Wauquimakog Lake",
      "fr": "Lac Wauquimakog",
      "lat": 45.90308511,
      "long": -79.99579237
    },
    "45548033": {
      "en": "Portage Lake",
      "fr": "Lac Portage",
      "lat": 45.90253576,
      "long": -80.55218903
    },
    "45548034": {
      "en": "Key River",
      "fr": "Rivi��re Key",
      "lat": 45.892526,
      "long": -80.56689851
    },
    "45557914": {
      "en": "Tower Lake",
      "fr": "Lac Tower",
      "lat": 45.91248456,
      "long": -79.2329137
    },
    "45557951": {
      "en": "Cadden Lake",
      "fr": "Lac Cadden",
      "lat": 45.92292154,
      "long": -79.86578745
    },
    "45558032": {
      "en": "Gurd Lake",
      "fr": "Lac Gurd",
      "lat": 45.92908606,
      "long": -80.54419343
    },
    "45567950": {
      "en": "Arthurs Lake",
      "fr": "Lac Arthurs",
      "lat": 45.94312419,
      "long": -79.82690804
    },
    "45568004": {
      "en": "Big Caribou Lake",
      "fr": "Grand lac Caribou",
      "lat": 45.9329313,
      "long": -80.07300187
    },
    "45568013": {
      "en": "Dollars Lake",
      "fr": "Lac Dollars",
      "lat": 45.95252358,
      "long": -80.2371865
    },
    "45598032": {
      "en": "Pakeshkag Lake",
      "fr": "Lac Pakeshkag",
      "lat": 45.95008216,
      "long": -80.52832429
    },
    "46008000": {
      "en": "Memesagamesing Lake",
      "fr": "Lac Memesagamesing",
      "lat": 46.02033366,
      "long": -79.9907875
    },
    "46017723": {
      "en": "Sturgeon Lake",
      "fr": "Lac Sturgeon",
      "lat": 46.01032402,
      "long": -77.3790923
    },
    "46017828": {
      "en": "Cedar Lake",
      "fr": "Lac Cedar",
      "lat": 46.02149341,
      "long": -78.47601649
    },
    "46017931": {
      "en": "Ruth Lake",
      "fr": "Lac Ruth",
      "lat": 46.01032392,
      "long": -79.51691039
    },
    "46017943": {
      "en": "Commanda Lake",
      "fr": "Lac Commanda",
      "lat": 46.01331463,
      "long": -79.69940557
    },
    "46018000": {
      "en": "Mud Lake",
      "fr": "Lac Mud",
      "lat": 46.04328288,
      "long": -80.01861954
    },
    "46027932": {
      "en": "Beatty (Wolfe) Lake",
      "fr": "Lac Beatty (Wolfe)",
      "lat": 46.02692548,
      "long": -79.52661498
    },
    "46027934": {
      "en": "McQuaby Lake",
      "fr": "Lac McQuaby",
      "lat": 46.03833906,
      "long": -79.56579957
    },
    "46028004": {
      "en": "Woodcock Lake",
      "fr": "Lac Woodcock",
      "lat": 46.05188884,
      "long": -80.01752091
    },
    "46028124": {
      "en": "George Lake",
      "fr": "Lac George",
      "lat": 46.02893955,
      "long": -81.39770934
    },
    "46037946": {
      "en": "Restoule Lake",
      "fr": "Lac Restoule",
      "lat": 46.05390302,
      "long": -79.77161018
    },
    "46037958": {
      "en": "Robin Lake",
      "fr": "Lac Robin",
      "lat": 46.05408611,
      "long": -79.97778701
    },
    "46037959": {
      "en": "Migisi (Snigisi) Lake",
      "fr": "Lac Migisi (Snigisi)",
      "lat": 46.05152263,
      "long": -79.99158096
    },
    "46038005": {
      "en": "Fraser Lake",
      "fr": "Lac Fraser",
      "lat": 46.05011882,
      "long": -80.10467914
    },
    "46038055": {
      "en": "French River",
      "fr": "Rivi��re French",
      "lat": 45.98688634,
      "long": -80.94971114
    },
    "46048117": {
      "en": "Carlyle Lake",
      "fr": "Lac Carlyle",
      "lat": 46.06110509,
      "long": -81.27917903
    },
    "46048120": {
      "en": "Kakakise Lake",
      "fr": "Lac Kakakise",
      "lat": 46.06452306,
      "long": -81.32251401
    },
    "46057853": {
      "en": "Kioshkokwi Lake",
      "fr": "Lac Kioshkokwi",
      "lat": 46.08112474,
      "long": -78.88409769
    },
    "46057947": {
      "en": "Patterson (Stormy) Lake",
      "fr": "Lac Patterson (Stormy)",
      "lat": 46.07972089,
      "long": -79.77472298
    },
    "46058010": {
      "en": "French River",
      "fr": "Rivi��re French",
      "lat": 46.0828947,
      "long": -80.16669088
    },
    "46058127": {
      "en": "Threenarrows Lake",
      "fr": "Lac Threenarrows",
      "lat": 46.11371739,
      "long": -81.42639588
    },
    "46067801": {
      "en": "Chateau Lake",
      "fr": "Lac Chateau",
      "lat": 46.09308768,
      "long": -78.01190502
    },
    "46067947": {
      "en": "Clear (Watt) Lake",
      "fr": "Lac Clear (Watt)",
      "lat": 46.09833662,
      "long": -79.78113168
    },
    "46068006": {
      "en": "Hemlock Lake #1",
      "fr": "Lac Hemlock no 1",
      "lat": 46.10889568,
      "long": -80.12250142
    },
    "46068007": {
      "en": "Hemlock Lake #2",
      "fr": "Lac Hemlock no 2",
      "lat": 46.10889568,
      "long": -80.11359028
    },
    "46068008": {
      "en": "Harris Lake",
      "fr": "Lac Harris",
      "lat": 46.10108318,
      "long": -80.12640767
    },
    "46068133": {
      "en": "Helen Lake",
      "fr": "Lac Helen",
      "lat": 46.10968907,
      "long": -81.56500677
    },
    "46077729": {
      "en": "Ottawa River",
      "fr": "Rivi��re des Outaouais",
      "lat": 46.10828546,
      "long": -77.47967828
    },
    "46077933": {
      "en": "South River",
      "fr": "Rivi��re South",
      "lat": 46.10309737,
      "long": -79.51770386
    },
    "46078010": {
      "en": "French River",
      "fr": "Rivi��re French",
      "lat": 46.10090005,
      "long": -80.5449869
    },
    "46078107": {
      "en": "Tyson Lake",
      "fr": "Lac Tyson",
      "lat": 46.11872229,
      "long": -81.11578787
    },
    "46078114": {
      "en": "Johnnie Lake",
      "fr": "Lac Johnnie",
      "lat": 46.08789953,
      "long": -81.22461359
    },
    "46087913": {
      "en": "Wistiwasing (Wasi) Lake",
      "fr": "Lac Wistiwasing (Wasi)",
      "lat": 46.13971849,
      "long": -79.2241857
    },
    "46088045": {
      "en": "Crooked Lake",
      "fr": "Lac Crooked",
      "lat": 46.14832437,
      "long": -80.73608805
    },
    "46088112": {
      "en": "Bell Lake",
      "fr": "Lac Bell",
      "lat": 46.1267179,
      "long": -81.21252863
    },
    "46088140": {
      "en": "Charlton Lake",
      "fr": "Lac Charlton",
      "lat": 46.14069492,
      "long": -81.69409617
    },
    "46088152": {
      "en": "Evangeline Lake",
      "fr": "Lac Evangeline",
      "lat": 46.1378873,
      "long": -81.86041702
    },
    "46097740": {
      "en": "Tee Lake",
      "fr": "Lac Tee",
      "lat": 46.15833429,
      "long": -77.67578431
    },
    "46098121": {
      "en": "Great Mountain Lake",
      "fr": "Lac Great Mountain",
      "lat": 46.15790686,
      "long": -81.35858581
    },
    "46098220": {
      "en": "North Channel NC2",
      "fr": "Chenal Nord NC2",
      "lat": 46.03308989,
      "long": -82.4232834
    },
    "46108015": {
      "en": "Mercer Lake",
      "fr": "Lac Mercer",
      "lat": 46.16468182,
      "long": -80.26831446
    },
    "46108137": {
      "en": "Deerhound Lake",
      "fr": "Lac Deerhound",
      "lat": 46.17389806,
      "long": -81.63049752
    },
    "46108140": {
      "en": "Lang Lake",
      "fr": "Lac Lang",
      "lat": 46.16510899,
      "long": -81.66681345
    },
    "46108155": {
      "en": "Maple Lake",
      "fr": "Lac Maple",
      "lat": 46.16230136,
      "long": -81.91498247
    },
    "46108204": {
      "en": "La Cloche Lake",
      "fr": "Lac La Cloche",
      "lat": 46.14447908,
      "long": -82.07581016
    },
    "46108301": {
      "en": "Mississagi River",
      "fr": "Rivi��re Mississagi",
      "lat": 46.17609525,
      "long": -83.01770499
    },
    "46118130": {
      "en": "Walker Lake",
      "fr": "Lac Walker",
      "lat": 46.19953283,
      "long": -81.50799992
    },
    "46118145": {
      "en": "Raven Lake",
      "fr": "Lac Raven",
      "lat": 46.17469151,
      "long": -81.74469433
    },
    "46118156": {
      "en": "Cutler Lake",
      "fr": "Lac Cutler",
      "lat": 46.17328769,
      "long": -81.94910114
    },
    "46127913": {
      "en": "Lake Nosbonsing",
      "fr": "Lac Nosbonsing",
      "lat": 46.20252367,
      "long": -79.20862173
    },
    "46128047": {
      "en": "Kakakiwaganda Lake",
      "fr": "Lac Kakakiwaganda",
      "lat": 46.20453775,
      "long": -80.79217938
    },
    "46128113": {
      "en": "Peter Lake",
      "fr": "Lac Peter",
      "lat": 46.18952308,
      "long": -81.21161311
    },
    "46128127": {
      "en": "Bear Lake",
      "fr": "Lac Bear",
      "lat": 46.18909582,
      "long": -81.45019961
    },
    "46128140": {
      "en": "Stratton Lake",
      "fr": "Lac Stratton",
      "lat": 46.20508702,
      "long": -81.67291697
    },
    "46128229": {
      "en": "Grassy Lake",
      "fr": "Lac Grassy",
      "lat": 46.21393708,
      "long": -82.48498998
    },
    "46128250": {
      "en": "Lauzon Lake",
      "fr": "Lac Lauzon",
      "lat": 46.21430327,
      "long": -82.82550523
    },
    "46138035": {
      "en": "Trout Lake",
      "fr": "Lac Trout",
      "lat": 46.22193279,
      "long": -80.58911535
    },
    "46138138": {
      "en": "St. Leonard Lake",
      "fr": "Lac St. Leonard",
      "lat": 46.22370275,
      "long": -81.63910348
    },
    "46148136": {
      "en": "Augusta Lake",
      "fr": "Lac Augusta",
      "lat": 46.24390539,
      "long": -81.60059029
    },
    "46157855": {
      "en": "Smith Lake",
      "fr": "Lac Smith",
      "lat": 46.26313161,
      "long": -78.92828717
    },
    "46158010": {
      "en": "French River (Little)",
      "fr": "Rivi��re French (Little)",
      "lat": 46.15192548,
      "long": -80.03308489
    },
    "46158052": {
      "en": "Wanapitei River",
      "fr": "Rivi��re Wanapitei",
      "lat": 46.25928629,
      "long": -80.87720138
    },
    "46158120": {
      "en": "Panache Lake",
      "fr": "Lac Panache",
      "lat": 46.25653969,
      "long": -81.32770202
    },
    "46158138": {
      "en": "Elizabeth Lake",
      "fr": "Lac Elizabeth",
      "lat": 46.2440885,
      "long": -81.6339155
    },
    "46158146": {
      "en": "Spanish River",
      "fr": "Rivi��re Spanish",
      "lat": 46.26569493,
      "long": -81.87360063
    },
    "46158255": {
      "en": "Lake of the Mountains (Dubourne Lake)",
      "fr": "Lac des Montagnes (Lac Dubourne)",
      "lat": 46.24909331,
      "long": -82.92438222
    },
    "46158300": {
      "en": "Cataract Lake",
      "fr": "Lac Cataract",
      "lat": 46.25953032,
      "long": -83.00189689
    },
    "46168113": {
      "en": "Little Trout Lake",
      "fr": "Lac Little Trout",
      "lat": 46.26288735,
      "long": -81.23138851
    },
    "46168136": {
      "en": "Vermilion River",
      "fr": "Rivi��re Vermilion",
      "lat": 46.26947913,
      "long": -81.61279733
    },
    "46168218": {
      "en": "Kecil Lake",
      "fr": "Lac Kecil",
      "lat": 46.25928622,
      "long": -82.29669647
    },
    "46168219": {
      "en": "Lang Lake",
      "fr": "Lac Lang",
      "lat": 46.27570468,
      "long": -82.3264206
    },
    "46168240": {
      "en": "Turtle Lake",
      "fr": "Lac Turtle",
      "lat": 46.27210358,
      "long": -82.66681378
    },
    "46168302": {
      "en": "Scarfe Lake",
      "fr": "Lac Scarfe",
      "lat": 46.28510405,
      "long": -83.038518
    },
    "46168318": {
      "en": "Bright Lake",
      "fr": "Lac Bright",
      "lat": 46.26892972,
      "long": -83.3046924
    },
    "46177851": {
      "en": "Long Lake",
      "fr": "Lac Long",
      "lat": 46.29688406,
      "long": -78.85571635
    },
    "46177852": {
      "en": "Moore Lake",
      "fr": "Lac Moore",
      "lat": 46.29108572,
      "long": -78.88110699
    },
    "46178000": {
      "en": "Lake Nipissing",
      "fr": "Lac Nipissing",
      "lat": 46.26728196,
      "long": -79.78711314
    },
    "46178122": {
      "en": "Little Panache Lake",
      "fr": "Lac Little Panache",
      "lat": 46.28113686,
      "long": -81.36169861
    },
    "46178256": {
      "en": "Heron (Upper Cranberry) Lake",
      "fr": "Lac Heron (Upper Cranberry)",
      "lat": 46.27289702,
      "long": -82.93500234
    },
    "46178302": {
      "en": "Falls (Canoe) Lake",
      "fr": "Lac Falls (Canoe)",
      "lat": 46.28510405,
      "long": -83.038518
    },
    "46187851": {
      "en": "Mattawa River",
      "fr": "Rivi��re Mattawa",
      "lat": 46.30329275,
      "long": -78.86438335
    },
    "46187905": {
      "en": "Lake Talon (Mattawa River)",
      "fr": "Lac Talon (Rivi��re Mattawa)",
      "lat": 46.30451344,
      "long": -79.05609484
    },
    "46187910": {
      "en": "Turtle Lake (Mattawa River)",
      "fr": "Lac Turtle (Rivi��re Mattawa)",
      "lat": 46.30188893,
      "long": -79.17389273
    },
    "46187920": {
      "en": "Trout Lake",
      "fr": "Lac Trout",
      "lat": 46.3145232,
      "long": -79.3241003
    },
    "46188100": {
      "en": "White Oak Lake",
      "fr": "Lac White Oak",
      "lat": 46.29889811,
      "long": -80.99908864
    },
    "46188135": {
      "en": "Wabagishik Lake",
      "fr": "Lac Wabagishik",
      "lat": 46.29090247,
      "long": -81.58520943
    },
    "46188145": {
      "en": "Spanish River",
      "fr": "Rivi��re Spanish",
      "lat": 46.25513586,
      "long": -81.71753369
    },
    "46188158": {
      "en": "Gough (Birch) Lake",
      "fr": "Lac Gough (Birch)",
      "lat": 46.30408605,
      "long": -81.97443075
    },
    "46188220": {
      "en": "Little Serpent Lake",
      "fr": "Lac Little Serpent",
      "lat": 46.30249911,
      "long": -82.3460129
    },
    "46188243": {
      "en": "McGiverin Lake",
      "fr": "Lac McGiverin",
      "lat": 46.30329255,
      "long": -82.7346849
    },
    "46188258": {
      "en": "Bearhead Lake",
      "fr": "Lac Bearhead",
      "lat": 46.30732086,
      "long": -82.97559074
    },
    "46188302": {
      "en": "Plump Lake",
      "fr": "Lac Plump",
      "lat": 46.31409576,
      "long": -83.047185
    },
    "46188317": {
      "en": "Mississagi River",
      "fr": "Rivi��re Mississagi",
      "lat": 46.30732084,
      "long": -83.27020753
    },
    "46198015": {
      "en": "Bear Lake",
      "fr": "Lac Bear",
      "lat": 46.33088058,
      "long": -80.25470363
    },
    "46198109": {
      "en": "Long Lake",
      "fr": "Lac Long",
      "lat": 46.32251871,
      "long": -81.15192072
    },
    "46198220": {
      "en": "Bellows Lake",
      "fr": "Lac Bellows",
      "lat": 46.31891757,
      "long": -82.34058077
    },
    "46198228": {
      "en": "McCarthy Lake",
      "fr": "Lac McCarthy",
      "lat": 46.32508212,
      "long": -82.45831763
    },
    "46198236": {
      "en": "Grandeur Lake",
      "fr": "Lac Grandeur",
      "lat": 46.31672029,
      "long": -82.60779277
    },
    "46198237": {
      "en": "Marshland Lake",
      "fr": "Lac Marshland",
      "lat": 46.32032137,
      "long": -82.63269512
    },
    "46198301": {
      "en": "Lear Lake",
      "fr": "Lac Lear",
      "lat": 46.31928375,
      "long": -83.0208178
    },
    "46198317": {
      "en": "Red Rock Lake (Mississagi River)",
      "fr": "Lac Red Rock (Rivi��re Mississagi)",
      "lat": 46.32953764,
      "long": -83.29919924
    },
    "46198324": {
      "en": "Basswood Lake",
      "fr": "Lac Basswood",
      "lat": 46.33313871,
      "long": -83.39661138
    },
    "46207923": {
      "en": "Lees Creek",
      "fr": "Lees Creek",
      "lat": 46.34693287,
      "long": -79.39752562
    },
    "46208107": {
      "en": "Long Lake",
      "fr": "Lac Long",
      "lat": 46.37232341,
      "long": -81.0816082
    },
    "46208112": {
      "en": "Round Lake",
      "fr": "Lac Round",
      "lat": 46.32673014,
      "long": -81.19641536
    },
    "46208247": {
      "en": "Rossmere Lake",
      "fr": "Lac Rossmere",
      "lat": 46.34168367,
      "long": -82.78332994
    },
    "46208307": {
      "en": "Darrel Lake",
      "fr": "Lac Darrel",
      "lat": 46.3289273,
      "long": -83.11218746
    },
    "46218133": {
      "en": "Spanish River",
      "fr": "Rivi��re Spanish",
      "lat": 46.35248696,
      "long": -81.55688912
    },
    "46218303": {
      "en": "Chiblow Lake",
      "fr": "Lac Chiblow",
      "lat": 46.34369781,
      "long": -83.04919916
    },
    "46218308": {
      "en": "Chiblow Lake, Little",
      "fr": "Lac Chiblow, Petit",
      "lat": 46.3568814,
      "long": -83.13159665
    },
    "46228038": {
      "en": "Nepewassi Lake",
      "fr": "Lac Nepewassi",
      "lat": 46.3668913,
      "long": -80.63971353
    },
    "46228111": {
      "en": "Whitefish Lake",
      "fr": "Lac Whitefish",
      "lat": 46.38153971,
      "long": -81.19250912
    },
    "46228145": {
      "en": "Agnew Lake",
      "fr": "Lac Agnew",
      "lat": 46.35529456,
      "long": -81.76080764
    },
    "46228240": {
      "en": "Esten Lake",
      "fr": "Lac Esten",
      "lat": 46.34790926,
      "long": -82.65582746
    },
    "46228241": {
      "en": "Slipper Lake",
      "fr": "Lac Slipper",
      "lat": 46.3681119,
      "long": -82.69031233
    },
    "46228257": {
      "en": "Matinenda Lake",
      "fr": "Lac Matinenda",
      "lat": 46.38788728,
      "long": -82.91779044
    },
    "46238115": {
      "en": "McCharles Lake",
      "fr": "Lac McCharles",
      "lat": 46.38507975,
      "long": -81.23541685
    },
    "46238242": {
      "en": "Elliot Lake",
      "fr": "Lac Elliot",
      "lat": 46.39228182,
      "long": -82.69519515
    },
    "46248112": {
      "en": "Simon Lake",
      "fr": "Lac Simon",
      "lat": 46.39673747,
      "long": -81.19269222
    },
    "46258059": {
      "en": "McFarlane Lake",
      "fr": "Lac McFarlane",
      "lat": 46.41510907,
      "long": -80.96411549
    },
    "46258229": {
      "en": "May Lake",
      "fr": "Lac May",
      "lat": 46.43610508,
      "long": -82.4946946
    },
    "46258234": {
      "en": "McCabe Lake",
      "fr": "Lac McCabe",
      "lat": 46.42328769,
      "long": -82.56610576
    },
    "46258252": {
      "en": "Big Moon Lake",
      "fr": "Lac Big Moon",
      "lat": 46.41791658,
      "long": -82.8778124
    },
    "46258313": {
      "en": "Constance Lake",
      "fr": "Lac Constance",
      "lat": 46.42871979,
      "long": -83.22559083
    },
    "46258350": {
      "en": "Gorden Lake",
      "fr": "Lac Gorden",
      "lat": 46.42048,
      "long": -83.83411153
    },
    "46268055": {
      "en": "Richard Lake",
      "fr": "Lac Richard",
      "lat": 46.43793622,
      "long": -80.91748462
    },
    "46268100": {
      "en": "Still Lake",
      "fr": "Lac Still",
      "lat": 46.44452802,
      "long": -81.00140799
    },
    "46268101": {
      "en": "St. Charles Lake",
      "fr": "Lac St. Charles",
      "lat": 46.44672528,
      "long": -81.01660575
    },
    "46268220": {
      "en": "Whiskey Lake",
      "fr": "Lac Whiskey",
      "lat": 46.43970617,
      "long": -82.33551486
    },
    "46268329": {
      "en": "Bridgland (Burrows) Lake",
      "fr": "Lac Bridgland (Burrows)",
      "lat": 46.43811919,
      "long": -83.48138925
    },
    "46268346": {
      "en": "Rock Lake",
      "fr": "Lac Rock",
      "lat": 46.4347012,
      "long": -83.77252704
    },
    "46268356": {
      "en": "McCarroll Lake",
      "fr": "Lac McCarroll",
      "lat": 46.44611477,
      "long": -83.92548119
    },
    "46278051": {
      "en": "Alice Lake",
      "fr": "Lac Alice",
      "lat": 46.46228926,
      "long": -80.85278734
    },
    "46278054": {
      "en": "Daisy Lake",
      "fr": "Lac Daisy",
      "lat": 46.4547209,
      "long": -80.87939867
    },
    "46278056": {
      "en": "Laurentian Lake",
      "fr": "Lac Laurentian",
      "lat": 46.4495329,
      "long": -80.95862233
    },
    "46278057": {
      "en": "Bennett Lake",
      "fr": "Lac Bennett",
      "lat": 46.45789472,
      "long": -80.97223318
    },
    "46278058": {
      "en": "Nepahwin Lake",
      "fr": "Lac Nepahwin",
      "lat": 46.45972577,
      "long": -80.98920095
    },
    "46278102": {
      "en": "Robinson Lake",
      "fr": "Lac Robinson",
      "lat": 46.4561247,
      "long": -81.03003349
    },
    "46278104": {
      "en": "Kelley Lake",
      "fr": "Lac Kelley",
      "lat": 46.44593182,
      "long": -81.06659356
    },
    "46278233": {
      "en": "Popeye (Poppy) Lake",
      "fr": "Lac Popeye (Poppy)",
      "lat": 46.44428379,
      "long": -82.54498759
    },
    "46278326": {
      "en": "Tunnel Lake (Mississagi River)",
      "fr": "Lac Tunnel (Rivi��re Mississagi)",
      "lat": 46.44648101,
      "long": -83.40131111
    },
    "46288013": {
      "en": "Deer Lake",
      "fr": "Lac Deer",
      "lat": 46.48188158,
      "long": -80.21722805
    },
    "46288057": {
      "en": "Bethel Lake",
      "fr": "Lac Bethel",
      "lat": 46.47168867,
      "long": -80.96161306
    },
    "46288126": {
      "en": "Fairbank Lake",
      "fr": "Lac Fairbank",
      "lat": 46.4658903,
      "long": -81.4268842
    },
    "46288233": {
      "en": "Quirke Lake",
      "fr": "Lac Quirke",
      "lat": 46.4901212,
      "long": -82.55218974
    },
    "46298002": {
      "en": "Muskosung Lake",
      "fr": "Lac Muskosung",
      "lat": 46.49152514,
      "long": -80.04639059
    },
    "46298057": {
      "en": "Ramsey Lake",
      "fr": "Lac Ramsey",
      "lat": 46.48249189,
      "long": -80.95001637
    },
    "46298242": {
      "en": "Dunlop Lake",
      "fr": "Lac Dunlop",
      "lat": 46.49549229,
      "long": -82.7285814
    },
    "46307903": {
      "en": "Timber Lake",
      "fr": "Lac Timber",
      "lat": 46.49390556,
      "long": -79.04608509
    },
    "46308126": {
      "en": "Vermilion Lake",
      "fr": "Lac Vermilion",
      "lat": 46.52289715,
      "long": -81.39081242
    },
    "46308257": {
      "en": "Keelor Lake",
      "fr": "Lac Keelor",
      "lat": 46.50373202,
      "long": -82.95520501
    },
    "46308323": {
      "en": "Chub Lake",
      "fr": "Lac Chub",
      "lat": 46.51093415,
      "long": -83.38391609
    },
    "46308427": {
      "en": "Big Carp River",
      "fr": "Grande rivi��re Carp",
      "lat": 46.50013086,
      "long": -84.44159465
    },
    "46317857": {
      "en": "Lac la Cave",
      "fr": "Lac la Cave",
      "lat": 46.51892999,
      "long": -78.96191758
    },
    "46318229": {
      "en": "Geiger Lake",
      "fr": "Lac Geiger",
      "lat": 46.53028234,
      "long": -82.48688211
    },
    "46318231": {
      "en": "Rochester Lake",
      "fr": "Lac Rochester",
      "lat": 46.524484,
      "long": -82.50830546
    },
    "46318247": {
      "en": "Ten Mile Lake",
      "fr": "Lac Ten Mile",
      "lat": 46.51972324,
      "long": -82.78748035
    },
    "46318349": {
      "en": "Aberdeen (Bass) Lake",
      "fr": "Lac Aberdeen (Bass)",
      "lat": 46.50788236,
      "long": -83.80859884
    },
    "46327949": {
      "en": "Tomiko Lake",
      "fr": "Lac Tomiko",
      "lat": 46.53028248,
      "long": -79.82440566
    },
    "46328109": {
      "en": "Whitewater Lake",
      "fr": "Lac Whitewater",
      "lat": 46.53333418,
      "long": -81.1416058
    },
    "46328134": {
      "en": "Whitefish Lake",
      "fr": "Lac Whitefish",
      "lat": 46.54010906,
      "long": -81.57361277
    },
    "46328336": {
      "en": "Skookum Lake",
      "fr": "Lac Skookum",
      "lat": 46.52509429,
      "long": -83.59723403
    },
    "46328348": {
      "en": "McMahon Lake",
      "fr": "Lac McMahon",
      "lat": 46.53431059,
      "long": -83.8028005
    },
    "46328421": {
      "en": "St. Marys River",
      "fr": "Rivi��re St. Marys",
      "lat": 46.50153467,
      "long": -84.42908243
    },
    "46337927": {
      "en": "Little Tomiko Lake",
      "fr": "Lac Little Tomiko",
      "lat": 46.55372001,
      "long": -79.45361697
    },
    "46338055": {
      "en": "Maley Reservoir",
      "fr": "R��servoir Maley",
      "lat": 46.54468673,
      "long": -80.92328297
    },
    "46338245": {
      "en": "Samreid Lake",
      "fr": "Lac Samreid",
      "lat": 46.5546964,
      "long": -82.75030993
    },
    "46338247": {
      "en": "Dollyberry Lake",
      "fr": "Lac Dollyberry",
      "lat": 46.54432042,
      "long": -82.78332996
    },
    "46348134": {
      "en": "Ministic Lake",
      "fr": "Lac Ministic",
      "lat": 46.56092205,
      "long": -81.56860789
    },
    "46348225": {
      "en": "Deschamp Lake",
      "fr": "Lac Deschamp",
      "lat": 46.57673011,
      "long": -82.43140114
    },
    "46348251": {
      "en": "Astonish Lake",
      "fr": "Lac Astonish",
      "lat": 46.56531651,
      "long": -82.85468008
    },
    "46348311": {
      "en": "Castra Lake",
      "fr": "Lac Castra",
      "lat": 46.57392245,
      "long": -83.18860353
    },
    "46348322": {
      "en": "Wakomata Lake",
      "fr": "Lac Wakomata",
      "lat": 46.57209138,
      "long": -83.36041755
    },
    "46348359": {
      "en": "Echo Lake",
      "fr": "Lac Echo",
      "lat": 46.55652738,
      "long": -83.98358669
    },
    "46357900": {
      "en": "Ottawa River",
      "fr": "Rivi��re des Outaouais",
      "lat": 46.58332209,
      "long": -79.00000354
    },
    "46357931": {
      "en": "Rock Island Lake",
      "fr": "Lac Rock Island",
      "lat": 46.57788993,
      "long": -79.52331914
    },
    "46358058": {
      "en": "Whitson Lake",
      "fr": "Lac Whitson",
      "lat": 46.58429855,
      "long": -80.97223319
    },
    "46358144": {
      "en": "Fox (Macaulay) Lake",
      "fr": "Lac Fox (Macaulay)",
      "lat": 46.57831706,
      "long": -81.74799028
    },
    "46358205": {
      "en": "Klondyke Lake, Lower",
      "fr": "Lac Klondyke, Lower",
      "lat": 46.59388101,
      "long": -82.09918668
    },
    "46358232": {
      "en": "Alexander Lake",
      "fr": "Lac Alexander",
      "lat": 46.58728919,
      "long": -82.5435838
    },
    "46358241": {
      "en": "Semiwite Lake",
      "fr": "Lac Semiwite",
      "lat": 46.57752355,
      "long": -82.68140122
    },
    "46358244": {
      "en": "Jimchrist (Christman) Lake",
      "fr": "Lac Jimchrist (Christman)",
      "lat": 46.5836881,
      "long": -82.72968005
    },
    "46358247": {
      "en": "Flack Lake",
      "fr": "Lac Flack",
      "lat": 46.58753331,
      "long": -82.78241444
    },
    "46358302": {
      "en": "Endikai Lake",
      "fr": "Lac Endikai",
      "lat": 46.58948642,
      "long": -83.03003415
    },
    "46358335": {
      "en": "Shelden Lake",
      "fr": "Lac Shelden",
      "lat": 46.58673981,
      "long": -83.59021499
    },
    "46368127": {
      "en": "Windy Lake",
      "fr": "Lac Windy",
      "lat": 46.59931317,
      "long": -81.43860297
    },
    "46368305": {
      "en": "Regal Lake",
      "fr": "Lac Regal",
      "lat": 46.60028965,
      "long": -83.08630858
    },
    "46368307": {
      "en": "Burns Lake",
      "fr": "Lac Burns",
      "lat": 46.5943082,
      "long": -83.11279785
    },
    "46377939": {
      "en": "Tilden Lake",
      "fr": "Lac Tilden",
      "lat": 46.62708427,
      "long": -79.65991587
    },
    "46378211": {
      "en": "Madawanson Lake",
      "fr": "Lac Madawanson",
      "lat": 46.61390054,
      "long": -82.18079071
    },
    "46387936": {
      "en": "Bear (Kaotisinimigo) Lake",
      "fr": "Lac Bear (Kaotisinimigo)",
      "lat": 46.63031913,
      "long": -79.60278695
    },
    "46388233": {
      "en": "Sister Lake, Little",
      "fr": "Lac Sister, Petit",
      "lat": 46.64331947,
      "long": -82.55048078
    },
    "46388248": {
      "en": "Cobre Lake",
      "fr": "Lac Cobre",
      "lat": 46.63532385,
      "long": -82.79419423
    },
    "46388308": {
      "en": "Stinkfish Lake",
      "fr": "Lac Stinkfish",
      "lat": 46.63349277,
      "long": -83.13330567
    },
    "46398236": {
      "en": "Rawhide Lake",
      "fr": "Lac Rawhide",
      "lat": 46.65509925,
      "long": -82.61468978
    },
    "46398247": {
      "en": "Tenfish Lake",
      "fr": "Lac Tenfish",
      "lat": 46.64789709,
      "long": -82.76941395
    },
    "46398305": {
      "en": "Kirkpatrick Lake",
      "fr": "Lac Kirkpatrick",
      "lat": 46.6588834,
      "long": -83.09131347
    },
    "46407937": {
      "en": "Poplar Lake",
      "fr": "Lac Poplar",
      "lat": 46.66553642,
      "long": -79.6210975
    },
    "46408001": {
      "en": "Island (Thistle) Lake",
      "fr": "Lac Island (Thistle)",
      "lat": 46.67389822,
      "long": -80.02112205
    },
    "46408018": {
      "en": "Theriault Lake",
      "fr": "Lac Theriault",
      "lat": 46.6724944,
      "long": -80.30170075
    },
    "46408026": {
      "en": "Murray Lake",
      "fr": "Lac Murray",
      "lat": 46.68091724,
      "long": -80.42291661
    },
    "46408051": {
      "en": "Lac St. Jean (Massey Lake)",
      "fr": "Lac St. Jean (Lac Massey)",
      "lat": 46.67188402,
      "long": -80.85248218
    },
    "46408153": {
      "en": "S Lake",
      "fr": "Lac S",
      "lat": 46.67292156,
      "long": -81.87720176
    },
    "46408222": {
      "en": "Spinweb Lake",
      "fr": "Lac Spinweb",
      "lat": 46.67688882,
      "long": -82.38141334
    },
    "46428307": {
      "en": "White Bear Lake",
      "fr": "Lac White Bear",
      "lat": 46.69513829,
      "long": -83.10138428
    },
    "46437925": {
      "en": "Sucker Lake",
      "fr": "Lac Sucker",
      "lat": 46.71833185,
      "long": -79.41803348
    },
    "46437947": {
      "en": "Marten Lake",
      "fr": "Lac Marten",
      "lat": 46.7036834,
      "long": -79.72858045
    },
    "46438029": {
      "en": "Carafel Lake",
      "fr": "Lac Carafel",
      "lat": 46.72931813,
      "long": -80.48718666
    },
    "46438059": {
      "en": "Frenchman Lake",
      "fr": "Lac Frenchman",
      "lat": 46.71790452,
      "long": -80.987492
    },
    "46438107": {
      "en": "Sans Chambre Lake",
      "fr": "Lac Sans Chambre",
      "lat": 46.72089524,
      "long": -81.13049742
    },
    "46438130": {
      "en": "Green Lake",
      "fr": "Lac Green",
      "lat": 46.71930831,
      "long": -81.50580271
    },
    "46438303": {
      "en": "Duval Lake",
      "fr": "Lac Duval",
      "lat": 46.72113928,
      "long": -83.05218993
    },
    "46438428": {
      "en": "Goulais River",
      "fr": "Rivi��re Goulais",
      "lat": 46.77570466,
      "long": -84.05048127
    },
    "46438431": {
      "en": "Lake Superior 11 - Goulais Bay area",
      "fr": "Lac Sup��rieur 11 - Environs de la baie Goulais",
      "lat": 46.75672269,
      "long": -84.64142384
    },
    "46447921": {
      "en": "McConnell Lake",
      "fr": "Lac McConnell",
      "lat": 46.73969416,
      "long": -79.33972535
    },
    "46448033": {
      "en": "Kukagami Lake",
      "fr": "Lac Kukagami",
      "lat": 46.73389576,
      "long": -80.55359293
    },
    "46448101": {
      "en": "Joe Lake",
      "fr": "Lac Joe",
      "lat": 46.73468919,
      "long": -81.01111261
    },
    "46448105": {
      "en": "Nelson Lake",
      "fr": "Lac Nelson",
      "lat": 46.72669358,
      "long": -81.09418149
    },
    "46448154": {
      "en": "Rushbrook Lake",
      "fr": "Lac Rushbrook",
      "lat": 46.73792401,
      "long": -81.91669152
    },
    "46457954": {
      "en": "Red Cedar Lake",
      "fr": "Lac Red Cedar",
      "lat": 46.71253348,
      "long": -79.93689351
    },
    "46458030": {
      "en": "Chuggin Lake",
      "fr": "Lac Chuggin",
      "lat": 46.75568532,
      "long": -80.50659585
    },
    "46458045": {
      "en": "Wanapitei Lake",
      "fr": "Lac Wanapitei",
      "lat": 46.73731372,
      "long": -80.74359544
    },
    "46458310": {
      "en": "Toodee Lake",
      "fr": "Lac Toodee",
      "lat": 46.75153478,
      "long": -83.16998783
    },
    "46467940": {
      "en": "Wicksteed Lake",
      "fr": "Lac Wicksteed",
      "lat": 46.76209405,
      "long": -79.68140027
    },
    "46467949": {
      "en": "Opechee Lake",
      "fr": "Lac Opechee",
      "lat": 46.78247979,
      "long": -79.82770159
    },
    "46468133": {
      "en": "Geneva Lake",
      "fr": "Lac Geneva",
      "lat": 46.76453536,
      "long": -81.54608594
    },
    "46468159": {
      "en": "Shakwa Lake",
      "fr": "Lac Shakwa",
      "lat": 46.77289716,
      "long": -81.98437954
    },
    "46468342": {
      "en": "Garden Lake",
      "fr": "Lac Garden",
      "lat": 46.76368075,
      "long": -83.70721944
    },
    "46468356": {
      "en": "Devil's Lake",
      "fr": "Lac de Devil",
      "lat": 46.77808503,
      "long": -83.94470731
    },
    "46468415": {
      "en": "Sill Lake",
      "fr": "Lac Sill",
      "lat": 46.77332427,
      "long": -84.25000526
    },
    "46478036": {
      "en": "Matagamasi Lake",
      "fr": "Lac Matagamasi",
      "lat": 46.76007984,
      "long": -80.60571698
    },
    "46478220": {
      "en": "Lac aux Sables",
      "fr": "Lac aux Sables",
      "lat": 46.78870524,
      "long": -82.32611549
    },
    "46488020": {
      "en": "Wawiashkashi (Grassy) Lake",
      "fr": "Lac Wawiashkashi (Grassy)",
      "lat": 46.80231619,
      "long": -80.32660312
    },
    "46497953": {
      "en": "Hangstone Lake",
      "fr": "Lac Hangstone",
      "lat": 46.81928399,
      "long": -79.8919106
    },
    "46498114": {
      "en": "Michaud Lake",
      "fr": "Lac Michaud",
      "lat": 46.81592699,
      "long": -81.23419619
    },
    "46508029": {
      "en": "Matagamasi Lake, Lower",
      "fr": "Lac Matagamasi, Lower",
      "lat": 46.83973074,
      "long": -80.48419595
    },
    "46508408": {
      "en": "Weckstrom Lake",
      "fr": "Lac Weckstrom",
      "lat": 46.82727937,
      "long": -84.14972448
    },
    "46508432": {
      "en": "Lake Superior 10 - Agawa & Batchawana Bays",
      "fr": "Lac Sup��rieur 10 - Baies Agawa et Batchawana",
      "lat": 47.26453525,
      "long": -84.92688542
    },
    "46518017": {
      "en": "Manitou Lake",
      "fr": "Lac Manitou",
      "lat": 46.85370781,
      "long": -80.28113192
    },
    "46518042": {
      "en": "Caswell Lake",
      "fr": "Lac Caswell",
      "lat": 46.86231374,
      "long": -80.70721849
    },
    "46518105": {
      "en": "Bigwood Lake",
      "fr": "Lac Bigwood",
      "lat": 46.84449145,
      "long": -81.0941815
    },
    "46518301": {
      "en": "Doehead Lake",
      "fr": "Lac Doehead",
      "lat": 46.85028969,
      "long": -83.01611816
    },
    "46527915": {
      "en": "Lake Timiskaming",
      "fr": "Lac T��miscamingue",
      "lat": 47.13153992,
      "long": -79.4461097
    },
    "46527957": {
      "en": "Cross Lake",
      "fr": "Lac Cross",
      "lat": 46.8717132,
      "long": -79.96612938
    },
    "46528001": {
      "en": "Aileen Lake",
      "fr": "Lac Aileen",
      "lat": 46.87873224,
      "long": -80.0177041
    },
    "46528225": {
      "en": "Boumage Lake",
      "fr": "Lac Boumage",
      "lat": 46.87970867,
      "long": -82.42718975
    },
    "46537949": {
      "en": "Jumping Cariboo Lake",
      "fr": "Lac Jumping Cariboo",
      "lat": 46.88251643,
      "long": -79.77551652
    },
    "46538247": {
      "en": "Bobowash Lake",
      "fr": "Lac Bobowash",
      "lat": 46.55292637,
      "long": -82.78082752
    },
    "46548019": {
      "en": "Emerald Lake",
      "fr": "Lac Emerald",
      "lat": 46.91553643,
      "long": -80.32269688
    },
    "46548138": {
      "en": "Halfway Lake",
      "fr": "Lac Halfway",
      "lat": 46.89472337,
      "long": -81.63641801
    },
    "46548154": {
      "en": "Dennie Lake",
      "fr": "Lac Dennie",
      "lat": 46.91449874,
      "long": -81.90131068
    },
    "46548334": {
      "en": "Ranger Lake",
      "fr": "Lac Ranger",
      "lat": 46.899484,
      "long": -83.55658465
    },
    "46557953": {
      "en": "Wasaksina Lake",
      "fr": "Lac Wasaksina",
      "lat": 46.93189387,
      "long": -79.89410788
    },
    "46558032": {
      "en": "Pedro Lake",
      "fr": "Lac Pedro",
      "lat": 46.91651298,
      "long": -80.53747967
    },
    "46558034": {
      "en": "Rawson Lake",
      "fr": "Lac Rawson",
      "lat": 46.92011405,
      "long": -80.56659345
    },
    "46558053": {
      "en": "Fraleck Lake",
      "fr": "Lac Fraleck",
      "lat": 46.9144988,
      "long": -80.88251152
    },
    "46558211": {
      "en": "Jeanne Lake",
      "fr": "Lac Jeanne",
      "lat": 46.92389814,
      "long": -82.1879929
    },
    "46558228": {
      "en": "Bark Lake",
      "fr": "Lac Bark",
      "lat": 46.92469159,
      "long": -82.47821516
    },
    "46558304": {
      "en": "Rocky Island Lake",
      "fr": "Lac Rocky Island",
      "lat": 46.91828286,
      "long": -83.02270997
    },
    "46558313": {
      "en": "Aubrey Lake",
      "fr": "Lac Aubrey",
      "lat": 46.90570961,
      "long": -83.18610113
    },
    "46558412": {
      "en": "Achigan Lake",
      "fr": "Lac Achigan",
      "lat": 46.91669588,
      "long": -84.19611122
    },
    "46568112": {
      "en": "Venetian Lake, Little",
      "fr": "Lac Venetian, Little",
      "lat": 46.94111011,
      "long": -81.20941592
    },
    "46568115": {
      "en": "Venetian Lake",
      "fr": "Lac Venetian",
      "lat": 46.94648121,
      "long": -81.24780705
    },
    "46568137": {
      "en": "Antrim Lake",
      "fr": "Lac Antrim",
      "lat": 46.93531175,
      "long": -81.62610307
    },
    "46568159": {
      "en": "Sinaminda Lake",
      "fr": "Lac Sinaminda",
      "lat": 46.89032882,
      "long": -81.94940639
    },
    "46577948": {
      "en": "Wilson Lake",
      "fr": "Lac Wilson",
      "lat": 46.95929867,
      "long": -79.80578998
    },
    "46578021": {
      "en": "Iron Lake",
      "fr": "Lac Iron",
      "lat": 46.95813897,
      "long": -80.35419104
    },
    "46578042": {
      "en": "Chiniguchi Lake",
      "fr": "Lac Chiniguchi",
      "lat": 46.93110037,
      "long": -80.70331224
    },
    "46578051": {
      "en": "Beaver Lake",
      "fr": "Lac Beaver",
      "lat": 46.9589324,
      "long": -80.860783
    },
    "46578130": {
      "en": "Onaping Lake",
      "fr": "Lac Onaping",
      "lat": 47.13892507,
      "long": -81.52081742
    },
    "46578205": {
      "en": "Mozhabong Lake",
      "fr": "Lac Mozhabong",
      "lat": 46.9387297,
      "long": -82.08331758
    },
    "46578347": {
      "en": "Saddle Lake",
      "fr": "Lac Saddle",
      "lat": 46.95288976,
      "long": -83.78809108
    },
    "46578444": {
      "en": "Pancake River",
      "fr": "Rivi��re Pancake",
      "lat": 46.95832184,
      "long": -84.65973442
    },
    "46587949": {
      "en": "Herridge Lake",
      "fr": "Lac Herridge",
      "lat": 46.98249203,
      "long": -79.82501606
    },
    "46587952": {
      "en": "Driftwood Lake",
      "fr": "Lac Driftwood",
      "lat": 46.98188168,
      "long": -79.8793984
    },
    "46588150": {
      "en": "Pogamasing Lake",
      "fr": "Lac Pogamasing",
      "lat": 46.96790452,
      "long": -81.83551476
    },
    "46588308": {
      "en": "Peshu Lake",
      "fr": "Lac Peshu",
      "lat": 46.97193277,
      "long": -83.14111821
    },
    "46588421": {
      "en": "Chippewa River",
      "fr": "Rivi��re Chippewa",
      "lat": 46.92908601,
      "long": -84.42639694
    },
    "46597938": {
      "en": "Rabbit Lake",
      "fr": "Lac Rabbit",
      "lat": 46.98969419,
      "long": -79.64722059
    },
    "46598134": {
      "en": "Sugarbush Lake",
      "fr": "Lac Sugarbush",
      "lat": 46.98871752,
      "long": -81.56970657
    },
    "46598214": {
      "en": "Labitchie Lake",
      "fr": "Lac Labitchie",
      "lat": 46.9759001,
      "long": -82.22351538
    },
    "46598331": {
      "en": "Saymo Lake",
      "fr": "Lac Saymo",
      "lat": 46.98328529,
      "long": -83.51660662
    },
    "46598347": {
      "en": "Ward Lake",
      "fr": "Lac Ward",
      "lat": 46.98389562,
      "long": -83.78711452
    },
    "47008005": {
      "en": "Lake Temagami",
      "fr": "Lac Temagami",
      "lat": 47.00653987,
      "long": -80.0791055
    },
    "47008105": {
      "en": "Helen Lake",
      "fr": "Lac Helen",
      "lat": 47.01892996,
      "long": -81.0977826
    },
    "47008118": {
      "en": "Rome Lake",
      "fr": "Lac Rome",
      "lat": 47.00031422,
      "long": -81.31549507
    },
    "47018157": {
      "en": "Big Squaw Lake",
      "fr": "Lac Big Squaw",
      "lat": 47.01471848,
      "long": -81.94611051
    },
    "47018436": {
      "en": "Mamainse Lake",
      "fr": "Lac Mamainse",
      "lat": 47.03070954,
      "long": -84.61829155
    },
    "47028015": {
      "en": "Obabika Lake",
      "fr": "Lac Obabika",
      "lat": 47.04371028,
      "long": -80.25439853
    },
    "47028425": {
      "en": "Turkey Lake",
      "fr": "Lac Turkey",
      "lat": 47.04871493,
      "long": -84.42218553
    },
    "47038032": {
      "en": "Yorston Lake",
      "fr": "Lac Yorston",
      "lat": 47.07312921,
      "long": -80.53943281
    },
    "47038042": {
      "en": "Stouffer Lake",
      "fr": "Lac Stouffer",
      "lat": 47.06592706,
      "long": -80.68280444
    },
    "47038332": {
      "en": "Mystery (South Anvil) Lake",
      "fr": "Lac Mystery (South Anvil)",
      "lat": 47.05451332,
      "long": -83.52942401
    },
    "47047943": {
      "en": "Cassels Lake",
      "fr": "Lac Cassels",
      "lat": 47.07172545,
      "long": -79.72223283
    },
    "47047949": {
      "en": "Link Lake",
      "fr": "Lac Link",
      "lat": 47.07172544,
      "long": -79.81769185
    },
    "47047952": {
      "en": "Tetapaga Lake",
      "fr": "Lac Tetapaga",
      "lat": 47.05549009,
      "long": -79.87439353
    },
    "47047955": {
      "en": "Iron Lake",
      "fr": "Lac Iron",
      "lat": 47.06049497,
      "long": -79.91858299
    },
    "47048122": {
      "en": "Scotia Lake",
      "fr": "Lac Scotia",
      "lat": 47.06873464,
      "long": -81.3779951
    },
    "47048332": {
      "en": "Anvil Lake",
      "fr": "Lac Anvil",
      "lat": 47.07093178,
      "long": -83.51019793
    },
    "47048339": {
      "en": "South Branch Lake",
      "fr": "Lac South Branch",
      "lat": 47.07209144,
      "long": -83.66571556
    },
    "47048418": {
      "en": "Adelaide Lake",
      "fr": "Lac Adelaide",
      "lat": 47.06012851,
      "long": -84.30530317
    },
    "47058002": {
      "en": "Kokoko Lake",
      "fr": "Lac Kokoko",
      "lat": 47.08692319,
      "long": -80.03418362
    },
    "47058030": {
      "en": "Linger Lake",
      "fr": "Lac Linger",
      "lat": 47.0915008,
      "long": -80.51520185
    },
    "47058050": {
      "en": "Bowland Lake",
      "fr": "Lac Bowland",
      "lat": 47.08869317,
      "long": -80.8425335
    },
    "47058113": {
      "en": "Edna Lake",
      "fr": "Lac Edna",
      "lat": 47.07972098,
      "long": -81.22668889
    },
    "47058137": {
      "en": "Lower Muldrew Lake",
      "fr": "Lac Lower Muldrew",
      "lat": 47.08930348,
      "long": -81.6196944
    },
    "47058332": {
      "en": "Gong Lake",
      "fr": "Lac Gong",
      "lat": 47.07013833,
      "long": -83.53601581
    },
    "47058424": {
      "en": "Griffin Lake",
      "fr": "Lac Griffin",
      "lat": 47.08570224,
      "long": -84.40332566
    },
    "47067937": {
      "en": "Lorrain Lake",
      "fr": "Lac Lorrain",
      "lat": 47.10450134,
      "long": -79.61169813
    },
    "47067946": {
      "en": "Net Lake",
      "fr": "Lac Net",
      "lat": 47.10669859,
      "long": -79.77771381
    },
    "47068032": {
      "en": "Seagram Lake",
      "fr": "Lac Seagram",
      "lat": 47.10108332,
      "long": -80.5388835
    },
    "47068353": {
      "en": "Hanes Lake",
      "fr": "Lac Hanes",
      "lat": 47.11292396,
      "long": -83.8877005
    },
    "47068400": {
      "en": "Gavor Lake",
      "fr": "Lac Gavor",
      "lat": 47.10370764,
      "long": -84.01190708
    },
    "47068422": {
      "en": "Dick Lake",
      "fr": "Lac Dick",
      "lat": 47.1087125,
      "long": -84.3579155
    },
    "47068437": {
      "en": "Pancake Lake, Upper",
      "fr": "Lac Pancake, Upper",
      "lat": 47.10553866,
      "long": -84.62000054
    },
    "47077943": {
      "en": "Pishabo Lake",
      "fr": "Lac Pishabo",
      "lat": 47.11750182,
      "long": -79.7199135
    },
    "47078034": {
      "en": "Yorston River",
      "fr": "Rivi��re Yorston",
      "lat": 47.11188654,
      "long": -80.5755046
    },
    "47078052": {
      "en": "Laundrie Lake",
      "fr": "Lac Laundrie",
      "lat": 47.11988213,
      "long": -80.84833184
    },
    "47078105": {
      "en": "Little Burwash Lake",
      "fr": "Lac Little Burwash",
      "lat": 47.1325164,
      "long": -81.09192323
    },
    "47078208": {
      "en": "Indian Lake",
      "fr": "Lac Indian",
      "lat": 47.12708421,
      "long": -82.12640843
    },
    "47078349": {
      "en": "Point Lake",
      "fr": "Lac Point",
      "lat": 47.11908851,
      "long": -83.82520048
    },
    "47087928": {
      "en": "Lower Notch Lake (Montreal River)",
      "fr": "Lac Lower Notch (Rivi��re Montr��al)",
      "lat": 47.13471375,
      "long": -79.46112436
    },
    "47088113": {
      "en": "Avery Lake",
      "fr": "Lac Avery",
      "lat": 47.14392997,
      "long": -81.23279242
    },
    "47088117": {
      "en": "Thor Lake",
      "fr": "Lac Thor",
      "lat": 47.13471366,
      "long": -81.28113228
    },
    "47088349": {
      "en": "Graham Lake",
      "fr": "Lac Graham",
      "lat": 47.14472328,
      "long": -83.8201956
    },
    "47098001": {
      "en": "Red Squirrel Lake",
      "fr": "Lac Red Squirrel",
      "lat": 47.16028746,
      "long": -80.02380765
    },
    "47098354": {
      "en": "Quinn Lake",
      "fr": "Lac Quinn",
      "lat": 47.15693031,
      "long": -83.9019217
    },
    "47098437": {
      "en": "Queminico Lake",
      "fr": "Lac Queminico",
      "lat": 47.16388828,
      "long": -84.61719293
    },
    "47107930": {
      "en": "Tooth Lake",
      "fr": "Lac Tooth",
      "lat": 47.18091737,
      "long": -79.5076942
    },
    "47107949": {
      "en": "Thieving Bear Lake",
      "fr": "Lac Thieving Bear",
      "lat": 47.17890319,
      "long": -79.82721335
    },
    "47108037": {
      "en": "Bluesucker Lake",
      "fr": "Lac Bluesucker",
      "lat": 47.16968684,
      "long": -80.60669359
    },
    "47108038": {
      "en": "Rodd Lake",
      "fr": "Lac Rodd",
      "lat": 47.1729217,
      "long": -80.63769945
    },
    "47108123": {
      "en": "Kalaco Lake",
      "fr": "Lac Kalaco",
      "lat": 47.17810965,
      "long": -81.39270459
    },
    "47108340": {
      "en": "Goulais Lake",
      "fr": "Lac Goulais",
      "lat": 47.16333902,
      "long": -83.6721853
    },
    "47117958": {
      "en": "McLean Lake",
      "fr": "Lac McLean",
      "lat": 47.19471129,
      "long": -79.97278225
    },
    "47118041": {
      "en": "Pilgrim Lake",
      "fr": "Lac Pilgrim",
      "lat": 47.18708186,
      "long": -80.6558269
    },
    "47118042": {
      "en": "Solace Lake",
      "fr": "Lac Solace",
      "lat": 47.17688899,
      "long": -80.7044109
    },
    "47118121": {
      "en": "Oshawong Lake",
      "fr": "Lac Oshawong",
      "lat": 47.19452811,
      "long": -81.35919628
    },
    "47118142": {
      "en": "Low Water Lake",
      "fr": "Lac Low Water",
      "lat": 47.15290211,
      "long": -81.69409628
    },
    "47127942": {
      "en": "Rib Lake",
      "fr": "Lac Rib",
      "lat": 47.21473084,
      "long": -79.71612933
    },
    "47128014": {
      "en": "Diamond Lake",
      "fr": "Lac Diamond",
      "lat": 47.20173032,
      "long": -80.23389073
    },
    "47128144": {
      "en": "Marquette Lake",
      "fr": "Lac Marquette",
      "lat": 47.20649099,
      "long": -81.7296798
    },
    "47128308": {
      "en": "Beak Lake",
      "fr": "Lac Beak",
      "lat": 47.21369306,
      "long": -83.14581795
    },
    "47137949": {
      "en": "Mountain Lake",
      "fr": "Lac Mountain",
      "lat": 47.23090515,
      "long": -79.83221824
    },
    "47138102": {
      "en": "Welcome Lake",
      "fr": "Lac Welcome",
      "lat": 47.22431329,
      "long": -81.03821229
    },
    "47138122": {
      "en": "Shoofly Lake",
      "fr": "Lac Shoofly",
      "lat": 47.22651054,
      "long": -81.37909375
    },
    "47138215": {
      "en": "Ramsey Lake",
      "fr": "Lac Ramsey",
      "lat": 47.25251147,
      "long": -82.27582256
    },
    "47138338": {
      "en": "Gull Lake",
      "fr": "Lac Gull",
      "lat": 47.22467936,
      "long": -83.63440454
    },
    "47138355": {
      "en": "Galloway Lake",
      "fr": "Lac Galloway",
      "lat": 47.21973549,
      "long": -83.91638705
    },
    "47147957": {
      "en": "Anima Nipissing Lake",
      "fr": "Lac Anima Nipissing",
      "lat": 47.25953064,
      "long": -79.90613184
    },
    "47148033": {
      "en": "Florence Lake",
      "fr": "Lac Florence",
      "lat": 47.23792416,
      "long": -80.55749924
    },
    "47148047": {
      "en": "Regan Lake",
      "fr": "Lac Regan",
      "lat": 47.24030452,
      "long": -80.7736248
    },
    "47158049": {
      "en": "Stull Lake",
      "fr": "Lac Stull",
      "lat": 47.26209407,
      "long": -80.82251398
    },
    "47158228": {
      "en": "Bardney Lake",
      "fr": "Lac Bardney",
      "lat": 47.25110765,
      "long": -82.47443102
    },
    "47158317": {
      "en": "Aubinadong River",
      "fr": "Rivi��re Aubinadong",
      "lat": 47.243112,
      "long": -83.29749037
    },
    "47158332": {
      "en": "Megisan Lake",
      "fr": "Lac Megisan",
      "lat": 47.24012126,
      "long": -83.52332052
    },
    "47167941": {
      "en": "Montreal River",
      "fr": "Rivi��re Montreal",
      "lat": 47.28193056,
      "long": -79.68799212
    },
    "47168145": {
      "en": "Sand Lake",
      "fr": "Lac Sand",
      "lat": 47.27729178,
      "long": -81.74329065
    },
    "47178006": {
      "en": "Barter Lake",
      "fr": "Lac Barter",
      "lat": 47.28931579,
      "long": -80.10858552
    },
    "47178050": {
      "en": "Whitepine Lake",
      "fr": "Lac Whitepine",
      "lat": 47.2819305,
      "long": -80.83050959
    },
    "47178312": {
      "en": "Flame Lake",
      "fr": "Lac Flame",
      "lat": 47.28833906,
      "long": -83.17670176
    },
    "47188026": {
      "en": "Jim Edwards Lake",
      "fr": "Lac Jim Edwards",
      "lat": 47.30310972,
      "long": -80.43188886
    },
    "47188145": {
      "en": "Paudash Lake",
      "fr": "Lac Paudash",
      "lat": 47.29969168,
      "long": -81.75159144
    },
    "47188151": {
      "en": "Ninth Lake",
      "fr": "Lac Ninth",
      "lat": 47.30469656,
      "long": -81.85748747
    },
    "47197942": {
      "en": "Montreal River",
      "fr": "Rivi��re Montreal",
      "lat": 47.32673037,
      "long": -79.70050434
    },
    "47198121": {
      "en": "Oshkegami Lake, Lower",
      "fr": "Lac Oshkegami, Lower",
      "lat": 47.32251886,
      "long": -81.34528027
    },
    "47198207": {
      "en": "Biscotasi Lake",
      "fr": "Lac Biscotasi",
      "lat": 47.29950856,
      "long": -82.08160863
    },
    "47198427": {
      "en": "Hubert Lake",
      "fr": "Lac Hubert",
      "lat": 47.31928382,
      "long": -84.44800344
    },
    "47198436": {
      "en": "Speckled Trout Creek",
      "fr": "Ruisseau Speckled Trout",
      "lat": 47.31513342,
      "long": -84.59741755
    },
    "47207957": {
      "en": "Kittson Lake",
      "fr": "Lac Kittson",
      "lat": 47.33893739,
      "long": -79.96442044
    },
    "47208010": {
      "en": "Lady Evelyn Lake",
      "fr": "Lac Lady Evelyn",
      "lat": 47.30951843,
      "long": -80.19580479
    },
    "47208042": {
      "en": "McCulloch Lake",
      "fr": "Lac McCulloch",
      "lat": 47.32471616,
      "long": -80.70001639
    },
    "47208427": {
      "en": "Hubert Lake, North",
      "fr": "Lac Hubert, nord",
      "lat": 47.33173499,
      "long": -84.44611135
    },
    "47217951": {
      "en": "Bay Lake",
      "fr": "Lac Bay",
      "lat": 47.34748232,
      "long": -79.83911523
    },
    "47218031": {
      "en": "Dee's Lake",
      "fr": "Lac Dee's",
      "lat": 47.34931334,
      "long": -80.51392014
    },
    "47218108": {
      "en": "Skog Lake",
      "fr": "Lac Skog",
      "lat": 47.34430842,
      "long": -81.12891057
    },
    "47218353": {
      "en": "Caesar Lake",
      "fr": "Lac Caesar",
      "lat": 47.35511149,
      "long": -83.88519809
    },
    "47218423": {
      "en": "Little Agawa Lake",
      "fr": "Lac Little Agawa",
      "lat": 47.34748207,
      "long": -84.37659229
    },
    "47227940": {
      "en": "Giroux Lake",
      "fr": "Lac Giroux",
      "lat": 47.36451114,
      "long": -79.67639545
    },
    "47228038": {
      "en": "Whirligig Lake",
      "fr": "Lac Whirligig",
      "lat": 47.37848814,
      "long": -80.63892018
    },
    "47228039": {
      "en": "Jerry Lake",
      "fr": "Lac Jerry",
      "lat": 47.36750181,
      "long": -80.65082204
    },
    "47228135": {
      "en": "Donnegana Lake",
      "fr": "Lac Donnegana",
      "lat": 47.37909844,
      "long": -81.58380575
    },
    "47237939": {
      "en": "Kerr Lake",
      "fr": "Lac Kerr",
      "lat": 47.37708439,
      "long": -79.65613177
    },
    "47237940": {
      "en": "Peterson Lake",
      "fr": "Lac Peterson",
      "lat": 47.38593448,
      "long": -79.67438129
    },
    "47238108": {
      "en": "Jean Lake",
      "fr": "Lac Jean",
      "lat": 47.37751155,
      "long": -81.13409857
    },
    "47238131": {
      "en": "Deschenes Lake",
      "fr": "Lac Deschenes",
      "lat": 47.37671808,
      "long": -81.51269977
    },
    "47238255": {
      "en": "Kebskwasheshi Lake",
      "fr": "Lac Kebskwasheshi",
      "lat": 47.39728685,
      "long": -82.89691653
    },
    "47238306": {
      "en": "Wenebegon Lake",
      "fr": "Lac Wenebegon",
      "lat": 47.39508957,
      "long": -83.09888192
    },
    "47247939": {
      "en": "Crosswise Lake",
      "fr": "Lac Crosswise",
      "lat": 47.38953556,
      "long": -79.64691546
    },
    "47247941": {
      "en": "Cobalt Lake",
      "fr": "Lac Cobalt",
      "lat": 47.39649357,
      "long": -79.68188862
    },
    "47247942": {
      "en": "Sasaginaga Lake",
      "fr": "Lac Sasaginaga",
      "lat": 47.40253605,
      "long": -79.69910054
    },
    "47247944": {
      "en": "Sharp Lake",
      "fr": "Lac Sharp",
      "lat": 47.41291202,
      "long": -79.73389059
    },
    "47248040": {
      "en": "Marina Lake",
      "fr": "Lac Marina",
      "lat": 47.39832457,
      "long": -80.65832937
    },
    "47248045": {
      "en": "Lulu Lake",
      "fr": "Lac Lulu",
      "lat": 47.40473326,
      "long": -80.75690118
    },
    "47248108": {
      "en": "Karchuk Lake",
      "fr": "Lac Karchuk",
      "lat": 47.39673763,
      "long": -81.13611273
    },
    "47248133": {
      "en": "Duchabani Lake",
      "fr": "Lac Duchabani",
      "lat": 47.40668634,
      "long": -81.55048054
    },
    "47248430": {
      "en": "Black Beaver Lake",
      "fr": "Lac Black Beaver",
      "lat": 47.40870033,
      "long": -84.50580377
    },
    "47258016": {
      "en": "Anvil Lake",
      "fr": "Lac Anvil",
      "lat": 47.42432557,
      "long": -80.26800942
    },
    "47258145": {
      "en": "Threecorner Lake",
      "fr": "Lac Threecorner",
      "lat": 47.41089776,
      "long": -81.74188686
    },
    "47268023": {
      "en": "Grays Lake",
      "fr": "Lac Grays",
      "lat": 47.4353119,
      "long": -80.38000897
    },
    "47268025": {
      "en": "Makobe Lake",
      "fr": "Lac Makobe",
      "lat": 47.44831238,
      "long": -80.42938643
    },
    "47268314": {
      "en": "Weshaygo Lake",
      "fr": "Lac Weshaygo",
      "lat": 47.43909592,
      "long": -83.23889662
    },
    "47278045": {
      "en": "Okiniada Lake",
      "fr": "Lac Okiniada",
      "lat": 47.46509704,
      "long": -80.7616009
    },
    "47278109": {
      "en": "Kasakanta Lake",
      "fr": "Lac Kasakanta",
      "lat": 47.44208676,
      "long": -81.1414228
    },
    "47278435": {
      "en": "Kwagama Lake",
      "fr": "Lac Kwagama",
      "lat": 47.44031654,
      "long": -84.58331844
    },
    "47288106": {
      "en": "Chrysler Lake",
      "fr": "Lac Chrysler",
      "lat": 47.4711395,
      "long": -81.10748724
    },
    "47297951": {
      "en": "Pike Lake",
      "fr": "Lac Pike",
      "lat": 47.49170842,
      "long": -79.86298
    },
    "47298035": {
      "en": "Carmen Lake",
      "fr": "Lac Carmen",
      "lat": 47.4868866,
      "long": -80.58691822
    },
    "47298251": {
      "en": "Wakami Lake",
      "fr": "Lac Wakami",
      "lat": 47.48951099,
      "long": -82.85059084
    },
    "47307952": {
      "en": "Twin Lakes",
      "fr": "Lacs Twin",
      "lat": 47.51069035,
      "long": -79.87280666
    },
    "47308035": {
      "en": "Island Lake",
      "fr": "Lac Island",
      "lat": 47.51392518,
      "long": -80.58911549
    },
    "47308037": {
      "en": "Shack Lake",
      "fr": "Lac Shack",
      "lat": 47.50531922,
      "long": -80.61938894
    },
    "47318120": {
      "en": "Opikinimika Lake, Lower",
      "fr": "Lac Opikinimika, Lower",
      "lat": 47.51789242,
      "long": -81.32611525
    },
    "47318318": {
      "en": "Kindogan Lake",
      "fr": "Lac Kindogan",
      "lat": 47.51429124,
      "long": -83.29169206
    },
    "47318431": {
      "en": "Callahan Lake",
      "fr": "Lac Callahan",
      "lat": 47.52332437,
      "long": -84.5197198
    },
    "47318433": {
      "en": "Vesi Lake",
      "fr": "Lac Vesi",
      "lat": 47.52308023,
      "long": -84.55689022
    },
    "47328154": {
      "en": "Three Duck Lake (Middle)",
      "fr": "Lac Three Duck (Partie centrale)",
      "lat": 47.54309992,
      "long": -81.90613253
    },
    "47338104": {
      "en": "East Shining Tree Lake",
      "fr": "Lac East Shining Tree",
      "lat": 47.55591735,
      "long": -81.07550482
    },
    "47338127": {
      "en": "Nabakwasi Lake",
      "fr": "Lac Nabakwasi",
      "lat": 47.54548031,
      "long": -81.43939654
    },
    "47338549": {
      "en": "Lake Superior 9 - Michipicoten Island area",
      "fr": "Lac Sup��rieur 9 - Environs de I'��le Michipicoten",
      "lat": 47.55512361,
      "long": -85.82691016
    },
    "47348316": {
      "en": "Five Mile Lake",
      "fr": "Lac Five Mile",
      "lat": 47.55811449,
      "long": -83.27002458
    },
    "47348351": {
      "en": "Graveyard Lake",
      "fr": "Lac Graveyard",
      "lat": 47.56348555,
      "long": -83.84583043
    },
    "47358045": {
      "en": "Stumpy Lake",
      "fr": "Lac Stumpy",
      "lat": 47.57727967,
      "long": -80.75641292
    },
    "47358117": {
      "en": "West Shining Tree Lake",
      "fr": "Lac West Shining Tree",
      "lat": 47.58448179,
      "long": -81.28168165
    },
    "47368152": {
      "en": "Susanne Lake",
      "fr": "Lac Susanne",
      "lat": 47.59967952,
      "long": -81.86279756
    },
    "47368434": {
      "en": "Radium Lake",
      "fr": "Lac Radium",
      "lat": 47.61512126,
      "long": -84.57501768
    },
    "47378050": {
      "en": "Long Lake",
      "fr": "Lac Long",
      "lat": 47.60871278,
      "long": -80.82892271
    },
    "47378052": {
      "en": "Margueratt Lake",
      "fr": "Lac Margueratt",
      "lat": 47.62030946,
      "long": -80.86298034
    },
    "47378215": {
      "en": "Opeepeesway Lake",
      "fr": "Lac Opeepeesway",
      "lat": 47.62751153,
      "long": -82.2392015
    },
    "47378258": {
      "en": "Kinogama Lake",
      "fr": "Lac Kinogama",
      "lat": 47.62732838,
      "long": -82.9755909
    },
    "47378303": {
      "en": "Tony Lake",
      "fr": "Lac Tony",
      "lat": 47.61652516,
      "long": -83.03638193
    },
    "47378443": {
      "en": "Old Woman Lake",
      "fr": "Lac Old Woman",
      "lat": 47.6225065,
      "long": -84.72443179
    },
    "47378454": {
      "en": "Gargantua Lake",
      "fr": "Lac Gargantua",
      "lat": 47.62812173,
      "long": -84.89471993
    },
    "47388047": {
      "en": "Gowganda Lake",
      "fr": "Lac Gowganda",
      "lat": 47.62812196,
      "long": -80.78711362
    },
    "47388100": {
      "en": "Cripple Lake",
      "fr": "Lac Cripple",
      "lat": 47.62348328,
      "long": -81.00549748
    },
    "47388113": {
      "en": "Michiwakenda Lake",
      "fr": "Lac Michiwakenda",
      "lat": 47.63929137,
      "long": -81.22082958
    },
    "47388159": {
      "en": "Wolf Lake",
      "fr": "Lac Wolf",
      "lat": 47.63733821,
      "long": -81.98688208
    },
    "47388407": {
      "en": "McEwen Lake",
      "fr": "Lac McEwen",
      "lat": 47.64612715,
      "long": -84.13190231
    },
    "47388454": {
      "en": "Fife Lake",
      "fr": "Lac Fife",
      "lat": 47.63971841,
      "long": -84.89270577
    },
    "47398034": {
      "en": "Ashigami Lake",
      "fr": "Lac Ashigami",
      "lat": 46.64612719,
      "long": -80.57642008
    },
    "47398041": {
      "en": "Leroy Lake",
      "fr": "Lac Leroy",
      "lat": 47.66193545,
      "long": -80.69720881
    },
    "47398144": {
      "en": "Minisinakwa Lake",
      "fr": "Lac Minisinakwa",
      "lat": 47.6633392,
      "long": -81.73798064
    },
    "47398446": {
      "en": "Gamitagama Lake",
      "fr": "Lac Gamitagama",
      "lat": 47.65747965,
      "long": -84.76550847
    },
    "47408153": {
      "en": "Mesomikenda Lake",
      "fr": "Lac Mesomikenda",
      "lat": 47.6480804,
      "long": -81.87860568
    },
    "47418315": {
      "en": "Nemegos Lake",
      "fr": "Lac Nemegos",
      "lat": 47.68592213,
      "long": -83.2525075
    },
    "47428037": {
      "en": "Longpoint Lake",
      "fr": "Lac Longpoint",
      "lat": 47.68531192,
      "long": -80.60919609
    },
    "47428048": {
      "en": "Obushkong Lake",
      "fr": "Lac Obushkong",
      "lat": 47.70728457,
      "long": -80.79968687
    },
    "47428442": {
      "en": "Mijinemungshing Lake",
      "fr": "Lac Mijinemungshing",
      "lat": 47.6934904,
      "long": -84.71051578
    },
    "47438019": {
      "en": "Elk Lake",
      "fr": "Lac Elk",
      "lat": 47.72510687,
      "long": -80.31940107
    },
    "47438103": {
      "en": "Pigeon Lake",
      "fr": "Lac Pigeon",
      "lat": 47.71833192,
      "long": -81.04999213
    },
    "47438203": {
      "en": "Pebonishewi Lake",
      "fr": "Lac Pebonishewi",
      "lat": 47.72028499,
      "long": -82.04419412
    },
    "47438208": {
      "en": "Rice Lake",
      "fr": "Lac Rice",
      "lat": 47.68793635,
      "long": -82.13440411
    },
    "47448146": {
      "en": "Wizard Lake",
      "fr": "Lac Wizard",
      "lat": 47.73151548,
      "long": -81.77472382
    },
    "47448150": {
      "en": "Makami Lake",
      "fr": "Lac Makami",
      "lat": 47.73871763,
      "long": -81.83722384
    },
    "47448306": {
      "en": "Handclasp Lake",
      "fr": "Lac Handclasp",
      "lat": 47.73328542,
      "long": -83.11298109
    },
    "47448324": {
      "en": "McLennan Lake",
      "fr": "Lac McLennan",
      "lat": 47.72333667,
      "long": -83.39722191
    },
    "47448337": {
      "en": "Nagasin Lake",
      "fr": "Lac Nagasin",
      "lat": 47.73731371,
      "long": -83.60791534
    },
    "47458054": {
      "en": "Penassi Lake",
      "fr": "Lac Penassi",
      "lat": 47.73810733,
      "long": -80.89471865
    },
    "47458330": {
      "en": "Sideburned Lake",
      "fr": "Lac Sideburned",
      "lat": 47.75611255,
      "long": -83.51111355
    },
    "47458333": {
      "en": "Highbrush Lake",
      "fr": "Lac Highbrush",
      "lat": 47.75293872,
      "long": -83.54749051
    },
    "47458431": {
      "en": "Sand Lake",
      "fr": "Lac Sand",
      "lat": 47.72528973,
      "long": -84.52612852
    },
    "47458442": {
      "en": "Little Dossier Lake",
      "fr": "Lac Little Dossier",
      "lat": 47.76209393,
      "long": -84.71271306
    },
    "47458554": {
      "en": "Michi Lake",
      "fr": "Lac Michi",
      "lat": 47.74530918,
      "long": -85.90442486
    },
    "47468038": {
      "en": "Shillington Lake",
      "fr": "Lac Shillington",
      "lat": 47.7678925,
      "long": -80.64661066
    },
    "47468058": {
      "en": "Duncan Lake",
      "fr": "Lac Duncan",
      "lat": 47.75592959,
      "long": -80.964726
    },
    "47468242": {
      "en": "Cree Lake",
      "fr": "Lac Cree",
      "lat": 47.77369073,
      "long": -82.70502198
    },
    "47478119": {
      "en": "Marne Lake",
      "fr": "Lac Marne",
      "lat": 47.78528748,
      "long": -81.32501665
    },
    "47478138": {
      "en": "Kenetogami Lake",
      "fr": "Lac Kenetogami",
      "lat": 47.78229674,
      "long": -81.63861538
    },
    "47478211": {
      "en": "Rush Lake",
      "fr": "Lac Rush",
      "lat": 47.79169613,
      "long": -82.19580551
    },
    "47488114": {
      "en": "Grassy Lake",
      "fr": "Lac Grassy",
      "lat": 47.79511415,
      "long": -81.23578322
    },
    "47488326": {
      "en": "Chapleau River",
      "fr": "Rivi��re Chapleau",
      "lat": 47.88733817,
      "long": -83.35248314
    },
    "47488454": {
      "en": "Old Woman River",
      "fr": "Rivi��re Old Woman",
      "lat": 47.78968181,
      "long": -84.89441478
    },
    "47498008": {
      "en": "Long Lake",
      "fr": "Lac Long",
      "lat": 47.91950387,
      "long": -80.2565959
    },
    "47498150": {
      "en": "Akonesi Lake",
      "fr": "Lac Akonesi",
      "lat": 47.81171568,
      "long": -81.82361301
    },
    "47508247": {
      "en": "Denyes Lake",
      "fr": "Lac Denyes",
      "lat": 47.84070733,
      "long": -82.77692143
    },
    "47508317": {
      "en": "Borden Lake",
      "fr": "Lac Borden",
      "lat": 47.82331228,
      "long": -83.29718527
    },
    "47508334": {
      "en": "Wangoon Lake",
      "fr": "Lac Wangoon",
      "lat": 47.83612965,
      "long": -83.56891387
    },
    "47508436": {
      "en": "Anjigami Lake",
      "fr": "Lac Anjigami",
      "lat": 47.8510832,
      "long": -84.5833185
    },
    "47518121": {
      "en": "Sinclair Lake",
      "fr": "Lac Sinclair",
      "lat": 47.85688173,
      "long": -81.34723346
    },
    "47518148": {
      "en": "Katodawa Lake",
      "fr": "Lac Katodawa",
      "lat": 47.84589538,
      "long": -81.78278048
    },
    "47518350": {
      "en": "Little Wawa Lake",
      "fr": "Lac Little Wawa",
      "lat": 47.84729907,
      "long": -83.82831337
    },
    "47527939": {
      "en": "Skeleton Lake",
      "fr": "Lac Skeleton",
      "lat": 47.86530468,
      "long": -79.64801415
    },
    "47527943": {
      "en": "Wendigo Lake",
      "fr": "Lac Wendigo",
      "lat": 47.87250682,
      "long": -79.70611964
    },
    "47528040": {
      "en": "Sisseney Lake",
      "fr": "Lac Sisseney",
      "lat": 47.86652533,
      "long": -80.66968197
    },
    "47528105": {
      "en": "Dumbell Lake",
      "fr": "Lac Dumbell",
      "lat": 47.87470402,
      "long": -81.08612498
    },
    "47528135": {
      "en": "Mattagami Lake",
      "fr": "Lac Mattagami",
      "lat": 47.83588562,
      "long": -81.56079554
    },
    "47528142": {
      "en": "Tatachikapika Lake",
      "fr": "Lac Tatachikapika",
      "lat": 47.8565155,
      "long": -81.69891815
    },
    "47528235": {
      "en": "Hanson Lake",
      "fr": "Lac Hanson",
      "lat": 47.8781219,
      "long": -82.5969287
    },
    "47528451": {
      "en": "Treeby Lake",
      "fr": "Lac Treeby",
      "lat": 47.8759245,
      "long": -84.8527888
    },
    "47538050": {
      "en": "Elmer Lake",
      "fr": "Lac Elmer",
      "lat": 47.88013616,
      "long": -80.83520937
    },
    "47538112": {
      "en": "Halliday Lake",
      "fr": "Lac Halliday",
      "lat": 47.87671817,
      "long": -81.20331252
    },
    "47538137": {
      "en": "Hazen Lake",
      "fr": "Lac Hazen",
      "lat": 47.87513123,
      "long": -81.61969449
    },
    "47548045": {
      "en": "Mistinikon Lake",
      "fr": "Lac Mistinikon",
      "lat": 47.93152777,
      "long": -80.7366986
    },
    "47548059": {
      "en": "Midlothian Lake",
      "fr": "Lac Midlothian",
      "lat": 47.91071477,
      "long": -80.99719673
    },
    "47548116": {
      "en": "Sothman Lake",
      "fr": "Lac Sothman",
      "lat": 47.88971866,
      "long": -81.2711226
    },
    "47548118": {
      "en": "Reading Lake",
      "fr": "Lac Reading",
      "lat": 47.90192569,
      "long": -81.29687945
    },
    "47548125": {
      "en": "Nursey Lake",
      "fr": "Lac Nursey",
      "lat": 47.89869082,
      "long": -81.40558309
    },
    "47548158": {
      "en": "Katagi Lake",
      "fr": "Lac Katagi",
      "lat": 47.90870055,
      "long": -81.96918191
    },
    "47548241": {
      "en": "Little Ridley Lake",
      "fr": "Lac Little Ridley",
      "lat": 47.90430598,
      "long": -82.69440188
    },
    "47558330": {
      "en": "Como Lake",
      "fr": "Lac Como",
      "lat": 47.91651297,
      "long": -83.51581328
    },
    "47558351": {
      "en": "Prairie Bee Lake",
      "fr": "Lac Prairie Bee",
      "lat": 47.90473316,
      "long": -83.90332561
    },
    "47568039": {
      "en": "Montreal River",
      "fr": "Rivi��re Montr��al",
      "lat": 47.93793647,
      "long": -80.6527142
    },
    "47568117": {
      "en": "Lake 61",
      "fr": "Lac 61",
      "lat": 47.94513859,
      "long": -81.28888384
    },
    "47568449": {
      "en": "Magpie River",
      "fr": "Rivi��re Magpie",
      "lat": 47.94532148,
      "long": -84.83252513
    },
    "47568451": {
      "en": "Michipicoten River",
      "fr": "Rivi��re Michipicoten",
      "lat": 47.9101042,
      "long": -84.75659737
    },
    "47578040": {
      "en": "Ottise Lake",
      "fr": "Lac Ottise",
      "lat": 47.95331733,
      "long": -80.67389341
    },
    "47578103": {
      "en": "Melick Lake",
      "fr": "Lac Melick",
      "lat": 47.95227971,
      "long": -81.04938181
    },
    "47578238": {
      "en": "Rollo Lake",
      "fr": "Lac Rollo",
      "lat": 47.96613461,
      "long": -82.6486255
    },
    "47578430": {
      "en": "Whitefish Lake - Expanded Reservoir",
      "fr": "Lac Whitefish - r��servoir ��largi",
      "lat": 47.95649094,
      "long": -84.49829651
    },
    "47578449": {
      "en": "Magpie River",
      "fr": "Rivi��re Magpie",
      "lat": 47.96589034,
      "long": -84.82190501
    },
    "47587943": {
      "en": "St. Anthony Lake",
      "fr": "Lac St. Anthony",
      "lat": 47.96528027,
      "long": -79.71112453
    },
    "47588347": {
      "en": "Windermere Lake",
      "fr": "Lac Windermere",
      "lat": 47.95093678,
      "long": -83.76721717
    },
    "47598535": {
      "en": "Jackfish Lake",
      "fr": "Lac Jackfish",
      "lat": 47.99952066,
      "long": -85.58911718
    },
    "48008110": {
      "en": "Canoeshed Lake",
      "fr": "Lac Canoeshed",
      "lat": 47.98731389,
      "long": -81.1702925
    },
    "48008220": {
      "en": "Horwood Lake",
      "fr": "Lac Horwood",
      "lat": 47.97693785,
      "long": -82.32611563
    },
    "48008307": {
      "en": "Nemegosenda Lake",
      "fr": "Lac Nemegosenda",
      "lat": 48.00611261,
      "long": -83.1099904
    },
    "48018002": {
      "en": "Round Lake",
      "fr": "Lac Round",
      "lat": 48.01612255,
      "long": -80.0377848
    },
    "48018049": {
      "en": "Ashley Lake",
      "fr": "Lac Ashley",
      "lat": 48.02393501,
      "long": -80.82391788
    },
    "48018428": {
      "en": "Whitefish Lake",
      "fr": "Lac Whitefish",
      "lat": 48.03968187,
      "long": -84.45300842
    },
    "48018443": {
      "en": "Wawa Lake",
      "fr": "Lac Wawa",
      "lat": 48.01288742,
      "long": -84.72168526
    },
    "48028105": {
      "en": "Moray Lake",
      "fr": "Lac Moray",
      "lat": 48.02808539,
      "long": -81.07941113
    },
    "48028136": {
      "en": "Indian Lake",
      "fr": "Lac Indian",
      "lat": 48.03571475,
      "long": -81.59998015
    },
    "48028320": {
      "en": "Racine Lake",
      "fr": "Lac Racine",
      "lat": 48.01831963,
      "long": -83.33020532
    },
    "48028353": {
      "en": "Goldie Lake",
      "fr": "Lac Goldie",
      "lat": 48.04468679,
      "long": -83.89551313
    },
    "48037933": {
      "en": "Raven Lake",
      "fr": "Lac Raven",
      "lat": 48.05188918,
      "long": -79.55029685
    },
    "48038103": {
      "en": "Austen Lake",
      "fr": "Lac Austen",
      "lat": 48.0438935,
      "long": -81.05579052
    },
    "48038440": {
      "en": "Lena Lake",
      "fr": "Lac Lena",
      "lat": 48.05109544,
      "long": -84.68280586
    },
    "48038450": {
      "en": "Black Trout Lake",
      "fr": "Lac Black Trout",
      "lat": 48.05689377,
      "long": -84.83472241
    },
    "48048035": {
      "en": "Separation Lake",
      "fr": "Lac Separation",
      "lat": 48.06751413,
      "long": -80.57751888
    },
    "48048158": {
      "en": "Kaneki Lake",
      "fr": "Lac Kaneki",
      "lat": 48.06311952,
      "long": -81.94690409
    },
    "48048434": {
      "en": "Hawk Lake",
      "fr": "Lac Hawk",
      "lat": 48.0673308,
      "long": -84.56659489
    },
    "48048444": {
      "en": "Magpie River",
      "fr": "Rivi��re Magpie",
      "lat": 48.06653733,
      "long": -84.73920237
    },
    "48048520": {
      "en": "Katzenbach Lake",
      "fr": "Lac Katzenbach",
      "lat": 48.06372967,
      "long": -85.33661467
    },
    "48057938": {
      "en": "Larder Lake",
      "fr": "Lac Larder",
      "lat": 48.08533645,
      "long": -79.64221583
    },
    "48057948": {
      "en": "Grassy Lake",
      "fr": "Lac Grassy",
      "lat": 48.09369826,
      "long": -79.79999176
    },
    "48058022": {
      "en": "Burt Lake",
      "fr": "Lac Burt",
      "lat": 48.07709666,
      "long": -80.36438404
    },
    "48058118": {
      "en": "Muskasenda Lake",
      "fr": "Lac Muskasenda",
      "lat": 48.09028021,
      "long": -81.30658406
    },
    "48058125": {
      "en": "Peterlong Lake",
      "fr": "Lac Peterlong",
      "lat": 48.08808294,
      "long": -81.41083214
    },
    "48058155": {
      "en": "Kenogaming Lake",
      "fr": "Lac Kenogaming",
      "lat": 48.06153261,
      "long": -81.90363015
    },
    "48058444": {
      "en": "Magpie River",
      "fr": "Rivi��re Magpie",
      "lat": 48.08033128,
      "long": -84.74298655
    },
    "48058521": {
      "en": "Mishi Lake",
      "fr": "Lac Mishi",
      "lat": 48.07953778,
      "long": -85.35919768
    },
    "48058525": {
      "en": "Mishibishu Lake",
      "fr": "Lac Mishibishu",
      "lat": 48.074716,
      "long": -85.40991791
    },
    "48059135": {
      "en": "Basswood Lake",
      "fr": "Lac Basswood",
      "lat": 48.08588502,
      "long": -91.56720743
    },
    "48068014": {
      "en": "Kenogami Lake",
      "fr": "Lac Kenogami",
      "lat": 48.10791943,
      "long": -80.23639328
    },
    "48068215": {
      "en": "Groundhog Lake",
      "fr": "Lac Groundhog",
      "lat": 48.10590516,
      "long": -82.23779775
    },
    "48068235": {
      "en": "Ivanhoe Lake",
      "fr": "Lac Ivanhoe",
      "lat": 48.1710907,
      "long": -82.51752197
    },
    "48068408": {
      "en": "Shikwamkwa Lake",
      "fr": "Lac Shikwamkwa",
      "lat": 48.09430836,
      "long": -84.14252249
    },
    "48068439": {
      "en": "Bauldry (Scott) Lake",
      "fr": "Lac Bauldry (Scott)",
      "lat": 48.09790941,
      "long": -84.6563166
    },
    "48068448": {
      "en": "Catfish Lake",
      "fr": "Lac Catfish",
      "lat": 48.0911345,
      "long": -84.80170239
    },
    "48068924": {
      "en": "Lake Superior 1 - Border/Pie Island area",
      "fr": "Lac Sup��rieur 1 - Environs de la fronti��re Ontario-�_tats-Unis et de l'��le Pie",
      "lat": 48.12311663,
      "long": -89.20441374
    },
    "48069119": {
      "en": "Sheridan Lake",
      "fr": "Lac Sheridan",
      "lat": 48.10431765,
      "long": -91.32221224
    },
    "48077937": {
      "en": "Bear Lake",
      "fr": "Lac Bear",
      "lat": 48.13172318,
      "long": -79.63141261
    },
    "48078148": {
      "en": "Pharand Lake",
      "fr": "Lac Pharand",
      "lat": 48.12250675,
      "long": -81.80389868
    },
    "48078439": {
      "en": "Goetz Lake",
      "fr": "Lac Goetz",
      "lat": 48.10871263,
      "long": -84.64832099
    },
    "48079032": {
      "en": "North Lake",
      "fr": "Lac North",
      "lat": 48.12232308,
      "long": -90.52503182
    },
    "48088115": {
      "en": "Scott Lake",
      "fr": "Lac Scott",
      "lat": 48.13892524,
      "long": -81.25519245
    },
    "48088523": {
      "en": "Ellen Lake",
      "fr": "Lac Ellen",
      "lat": 48.14429609,
      "long": -85.39002046
    },
    "48088932": {
      "en": "Cloud Lake",
      "fr": "Lac Cloud",
      "lat": 48.13648331,
      "long": -89.54071756
    },
    "48098242": {
      "en": "Carty Lake",
      "fr": "Lac Carty",
      "lat": 48.16529235,
      "long": -82.70050543
    },
    "48099016": {
      "en": "Arrow Lake",
      "fr": "Lac Arrow",
      "lat": 48.1643153,
      "long": -90.26502199
    },
    "48099112": {
      "en": "This Man Lake",
      "fr": "Lac This Man",
      "lat": 48.16248417,
      "long": -91.20880889
    },
    "48099119": {
      "en": "Louisa Lake",
      "fr": "Lac Louisa",
      "lat": 48.15650272,
      "long": -91.31940463
    },
    "48107943": {
      "en": "Beaverhouse Lake",
      "fr": "Lac Beaverhouse",
      "lat": 48.17548538,
      "long": -79.72571196
    },
    "48108127": {
      "en": "Splitrock Lake",
      "fr": "Lac Splitrock",
      "lat": 48.17151801,
      "long": -81.39770959
    },
    "48108424": {
      "en": "Manitowik Lake",
      "fr": "Lac Manitowik",
      "lat": 48.16370533,
      "long": -84.37360167
    },
    "48109026": {
      "en": "Addie Lake",
      "fr": "Lac Addie",
      "lat": 48.16669558,
      "long": -91.42939002
    },
    "48117953": {
      "en": "Victoria Lake",
      "fr": "Lac Victoria",
      "lat": 48.18891311,
      "long": -79.88220616
    },
    "48118014": {
      "en": "Sesekinika Lake",
      "fr": "Lac Sesekinika",
      "lat": 48.18610548,
      "long": -80.23859055
    },
    "48119020": {
      "en": "Iron Range Lake",
      "fr": "Lac Iron Range",
      "lat": 48.19013317,
      "long": -90.33380863
    },
    "48119109": {
      "en": "Other Man Lake",
      "fr": "Lac Other Man",
      "lat": 48.19513799,
      "long": -91.15052031
    },
    "48119139": {
      "en": "Robinson Lake",
      "fr": "Lac Robinson",
      "lat": 48.19611452,
      "long": -91.66138472
    },
    "48127936": {
      "en": "Wawagoshe Lake",
      "fr": "Lac Wawagoshe",
      "lat": 48.20112016,
      "long": -79.60669337
    },
    "48128005": {
      "en": "Amikougami Lake",
      "fr": "Lac Amikougami",
      "lat": 48.18311476,
      "long": -80.08002117
    },
    "48128045": {
      "en": "Radisson Lake",
      "fr": "Lac Radisson",
      "lat": 48.21253367,
      "long": -80.75519229
    },
    "48128433": {
      "en": "Speight Lake",
      "fr": "Lac Speight",
      "lat": 48.18872974,
      "long": -84.54181462
    },
    "48129135": {
      "en": "Sarah Lake",
      "fr": "Lac Sarah",
      "lat": 48.20227907,
      "long": -91.58612835
    },
    "48137945": {
      "en": "Misema Lake",
      "fr": "Lac Misema",
      "lat": 48.20948197,
      "long": -79.75159088
    },
    "48138310": {
      "en": "Schewabik Lake",
      "fr": "Lac Schewabik",
      "lat": 48.22193295,
      "long": -83.16638694
    },
    "48138338": {
      "en": "Little Missinaibi Lake",
      "fr": "Lac Little Missinaibi",
      "lat": 48.2309051,
      "long": -83.59943151
    },
    "48139000": {
      "en": "Whitefish Lake",
      "fr": "Lac Whitefish",
      "lat": 48.22113905,
      "long": -90.00080072
    },
    "48139031": {
      "en": "Sunbow Lake",
      "fr": "Lac Sunbow",
      "lat": 48.22449595,
      "long": -90.52332286
    },
    "48139034": {
      "en": "Icarus Lake",
      "fr": "Lac Icarus",
      "lat": 48.22010141,
      "long": -90.57190685
    },
    "48139037": {
      "en": "Madalaine Lake",
      "fr": "Lac Madalaine",
      "lat": 48.24652964,
      "long": -90.55719738
    },
    "48147949": {
      "en": "Howard Lake",
      "fr": "Lac Howard",
      "lat": 48.24048783,
      "long": -79.82611484
    },
    "48148033": {
      "en": "Watabeag Lake",
      "fr": "Lac Watabeag",
      "lat": 48.23688672,
      "long": -80.57660337
    },
    "48148409": {
      "en": "Murray Lake",
      "fr": "Lac Murray",
      "lat": 48.22931815,
      "long": -84.1522271
    },
    "48149014": {
      "en": "Sandstone Lake",
      "fr": "Lac Sandstone",
      "lat": 48.23169812,
      "long": -90.24030275
    },
    "48149108": {
      "en": "Blackstone Lake",
      "fr": "Lac Blackstone",
      "lat": 48.24390509,
      "long": -91.1411209
    },
    "48149128": {
      "en": "Kahshahpiwi Lake",
      "fr": "Lac Kahshahpiwi",
      "lat": 48.24451541,
      "long": -91.481392
    },
    "48158133": {
      "en": "Kenogamissi Lake",
      "fr": "Lac Kenogamissi",
      "lat": 48.18390814,
      "long": -81.54968718
    },
    "48158209": {
      "en": "Groundhog River",
      "fr": "Rivi��re Groundhog",
      "lat": 48.25013126,
      "long": -82.15082264
    },
    "48159029": {
      "en": "Reta Lake",
      "fr": "Lac Reta",
      "lat": 48.26111705,
      "long": -90.47779062
    },
    "48159032": {
      "en": "Shaco Lake",
      "fr": "Lac Shaco",
      "lat": 48.25928599,
      "long": -90.53351574
    },
    "48159148": {
      "en": "Argo Lake",
      "fr": "Lac Argo",
      "lat": 48.25708863,
      "long": -91.80408497
    },
    "48168118": {
      "en": "Papakomeka Lake",
      "fr": "Lac Papakomeka",
      "lat": 48.26453561,
      "long": -81.29248496
    },
    "48168500": {
      "en": "Kabenung Lake",
      "fr": "Lac Kabenung",
      "lat": 48.28168627,
      "long": -84.98029134
    },
    "48168503": {
      "en": "Kabenug Lake, West",
      "fr": "Lac Kabenung, ouest",
      "lat": 48.26032396,
      "long": -85.04889487
    },
    "48169039": {
      "en": "Northern Light Lake",
      "fr": "Lac Northern Light",
      "lat": 48.24451547,
      "long": -90.67578873
    },
    "48169120": {
      "en": "Agnes Lake",
      "fr": "Lac Agnes",
      "lat": 48.2481165,
      "long": -91.34558873
    },
    "48177952": {
      "en": "Allan (Lallan) Lake",
      "fr": "Lac Allan (Lallan)",
      "lat": 48.29749467,
      "long": -79.8800089
    },
    "48177953": {
      "en": "Panagapka Lake",
      "fr": "Lac Panagapka",
      "lat": 48.2883394,
      "long": -79.87659093
    },
    "48178151": {
      "en": "Opishing Lake",
      "fr": "Lac Opishing",
      "lat": 48.32392279,
      "long": -81.83380594
    },
    "48178408": {
      "en": "Dog Lake",
      "fr": "Lac Dog",
      "lat": 48.30512383,
      "long": -84.07050101
    },
    "48178426": {
      "en": "Goudreau Lake",
      "fr": "Lac Goudreau",
      "lat": 48.2802825,
      "long": -84.43500308
    },
    "48179110": {
      "en": "McEwen Lake",
      "fr": "Lac McEwen",
      "lat": 48.28968146,
      "long": -91.18219758
    },
    "48179133": {
      "en": "Burt Lake",
      "fr": "Lac Burt",
      "lat": 48.29688358,
      "long": -91.54999554
    },
    "48187953": {
      "en": "Gourlay Lake",
      "fr": "Lac Gourlay",
      "lat": 48.3161104,
      "long": -79.88751623
    },
    "48188506": {
      "en": "Knife Lake",
      "fr": "Lac Knife",
      "lat": 48.3018889,
      "long": -85.09668542
    },
    "48188531": {
      "en": "Partridge Lake",
      "fr": "Lac Partridge",
      "lat": 48.31568282,
      "long": -85.52472511
    },
    "48189055": {
      "en": "Saganagons Lake",
      "fr": "Lac Saganagons",
      "lat": 48.30512337,
      "long": -90.92292016
    },
    "48197952": {
      "en": "Lulu Lake",
      "fr": "Lac Lulu",
      "lat": 48.32953813,
      "long": -79.88269446
    },
    "48198027": {
      "en": "Legault Lake",
      "fr": "Lac Legault",
      "lat": 48.31672072,
      "long": -80.45770685
    },
    "48198442": {
      "en": "Davies Lake",
      "fr": "Lac Davies",
      "lat": 48.31232594,
      "long": -84.6972102
    },
    "48198458": {
      "en": "Fungus Lake",
      "fr": "Lac Fungus",
      "lat": 48.31092212,
      "long": -84.96808431
    },
    "48199023": {
      "en": "Weikwabinonaw Lake",
      "fr": "Lac Weikwabinonaw",
      "lat": 48.32508191,
      "long": -90.37641121
    },
    "48207932": {
      "en": "Clarice Lake",
      "fr": "Lac Clarice",
      "lat": 48.33948688,
      "long": -79.5341836
    },
    "48208351": {
      "en": "Crooked Lake",
      "fr": "Lac Crooked",
      "lat": 48.33069758,
      "long": -83.8502861
    },
    "48218315": {
      "en": "Makonie Lake",
      "fr": "Lac Makonie",
      "lat": 48.34430846,
      "long": -83.2429861
    },
    "48218502": {
      "en": "Burnfield Lake",
      "fr": "Lac Burnfield",
      "lat": 48.34931323,
      "long": -85.03491783
    },
    "48218919": {
      "en": "Kam River",
      "fr": "Rivi��re Kam",
      "lat": 48.34693258,
      "long": -89.31610815
    },
    "48219208": {
      "en": "Lac La Croix",
      "fr": "Lac La Croix",
      "lat": 48.36371704,
      "long": -92.14020569
    },
    "48228144": {
      "en": "Jowsey Lake",
      "fr": "Lac Jowsey",
      "lat": 48.37470406,
      "long": -81.72351539
    },
    "48228438": {
      "en": "Lola Lake",
      "fr": "Lac Lola",
      "lat": 48.36109304,
      "long": -84.6375178
    },
    "48229032": {
      "en": "Titmarsh Lake",
      "fr": "Lac Titmarsh",
      "lat": 48.35529431,
      "long": -90.53003675
    },
    "48229052": {
      "en": "Twinhouse Lake",
      "fr": "Lac Twinhouse",
      "lat": 48.36890512,
      "long": -90.856697
    },
    "48229140": {
      "en": "Poohbah Lake",
      "fr": "Lac Poohbah",
      "lat": 48.38013553,
      "long": -91.6829912
    },
    "48238340": {
      "en": "Missinaibi Lake",
      "fr": "Lac Missinaibi",
      "lat": 48.35669857,
      "long": -83.69141154
    },
    "48238358": {
      "en": "Rennie Lake",
      "fr": "Lac Rennie",
      "lat": 48.3861175,
      "long": -83.968084
    },
    "48238529": {
      "en": "McCrea Lake, North",
      "fr": "Lac McCrea, North",
      "lat": 48.39429612,
      "long": -85.4852964
    },
    "48238848": {
      "en": "Marie Louise Lake",
      "fr": "Lac Marie Louise",
      "lat": 48.38312646,
      "long": -88.80139852
    },
    "48239217": {
      "en": "Thompson Lake",
      "fr": "Lac Thompson",
      "lat": 48.38507934,
      "long": -92.28809392
    },
    "48239228": {
      "en": "Sand Point Lake",
      "fr": "Lac Sand Point",
      "lat": 48.37671751,
      "long": -92.46833079
    },
    "48248439": {
      "en": "Boulder Lake",
      "fr": "Lac Boulder",
      "lat": 48.39649344,
      "long": -84.64551342
    },
    "48248506": {
      "en": "Hammer Lake",
      "fr": "Lac Hammer",
      "lat": 48.4016814,
      "long": -85.10059169
    },
    "48248950": {
      "en": "Marks Lake",
      "fr": "Lac Marks",
      "lat": 48.40308489,
      "long": -89.83692131
    },
    "48249046": {
      "en": "Greenwood Lake",
      "fr": "Lac Greenwood",
      "lat": 48.41071422,
      "long": -90.77613058
    },
    "48258910": {
      "en": "Lake Superior 3 - Thunder Bay Inner Harbour",
      "fr": "Lac Sup��rieur 3 - Arri��re-port de Thunder Bay",
      "lat": 48.42951316,
      "long": -89.2091135
    },
    "48259016": {
      "en": "Blunder Lake",
      "fr": "Lac Blunder",
      "lat": 48.4245082,
      "long": -90.26941656
    },
    "48268413": {
      "en": "Wabatongushi Lake",
      "fr": "Lac Wabatongushi",
      "lat": 48.46369318,
      "long": -84.23029112
    },
    "48269010": {
      "en": "Batwing Lake",
      "fr": "Lac Batwing",
      "lat": 48.44233048,
      "long": -90.17359134
    },
    "48278102": {
      "en": "Redstone River",
      "fr": "Rivi��re Redstone",
      "lat": 48.45508741,
      "long": -81.04028763
    },
    "48278315": {
      "en": "Bittern Lake",
      "fr": "Lac Bittern",
      "lat": 48.45832214,
      "long": -83.25299588
    },
    "48278353": {
      "en": "South Greenhill Lake",
      "fr": "Lac South Greenhill",
      "lat": 48.45508724,
      "long": -83.88690722
    },
    "48279032": {
      "en": "Nelson Lake",
      "fr": "Lac Nelson",
      "lat": 48.46228895,
      "long": -90.52881606
    },
    "48279218": {
      "en": "Bill Lake",
      "fr": "Lac Bill",
      "lat": 48.44812866,
      "long": -92.29859199
    },
    "48279221": {
      "en": "Little Eva Lake (Namakan River)",
      "fr": "Lac Little Eva (Rivi��re Namakan)",
      "lat": 48.46009155,
      "long": -92.35669747
    },
    "48279235": {
      "en": "Namakan Lake",
      "fr": "Lac Namakan",
      "lat": 48.4567346,
      "long": -92.58521317
    },
    "48288058": {
      "en": "Night Hawk Lake",
      "fr": "Lac Night Hawk",
      "lat": 48.45710157,
      "long": -80.98029005
    },
    "48288118": {
      "en": "Pearl Lake",
      "fr": "Lac Pearl",
      "lat": 48.47950146,
      "long": -81.2918136
    },
    "48288119": {
      "en": "Gillies Lake",
      "fr": "Lac Gillies",
      "lat": 48.48108837,
      "long": -81.31641077
    },
    "48288233": {
      "en": "Sweetwater Lake",
      "fr": "Lac Sweetwater",
      "lat": 48.46949162,
      "long": -82.56439702
    },
    "48288500": {
      "en": "Negwazu Lake",
      "fr": "Lac Negwazu",
      "lat": 48.46528005,
      "long": -85.00519372
    },
    "48289153": {
      "en": "Your Lake",
      "fr": "Lac Your",
      "lat": 48.47113895,
      "long": -91.88690974
    },
    "48289219": {
      "en": "Captain Tom Lake",
      "fr": "Lac Captain Tom",
      "lat": 48.47828003,
      "long": -92.31909981
    },
    "48298111": {
      "en": "Porcupine Lake",
      "fr": "Lac Porcupine",
      "lat": 48.4851167,
      "long": -81.18799276
    },
    "48308044": {
      "en": "Moose Lake",
      "fr": "Lac Moose",
      "lat": 48.50672317,
      "long": -80.73108343
    },
    "48308109": {
      "en": "Bobs Lake",
      "fr": "Lac Bobs",
      "lat": 48.49549268,
      "long": -81.14752644
    },
    "48308257": {
      "en": "Kapuskasing Lake",
      "fr": "Lac Kapuskasing",
      "lat": 48.48371279,
      "long": -82.94440203
    },
    "48308844": {
      "en": "Lake Superior 2 - Thunder Bay Outer Harbour area",
      "fr": "Lac Sup��rieur 2 - Environs de l'avant-port de Thunder Bay",
      "lat": 48.39008446,
      "long": -88.9904855
    },
    "48318106": {
      "en": "Three Nations Lake",
      "fr": "Lac Three Nations",
      "lat": 48.51612257,
      "long": -81.10498493
    },
    "48318127": {
      "en": "Mattagami River",
      "fr": "Rivi��re Mattagami",
      "lat": 48.50873729,
      "long": -81.46381073
    },
    "48319012": {
      "en": "Kekekuab Lake",
      "fr": "Lac Kekekuab",
      "lat": 48.51593888,
      "long": -90.20801519
    },
    "48319033": {
      "en": "Squeers Lake",
      "fr": "Lac Squeers",
      "lat": 48.51648817,
      "long": -90.5575026
    },
    "48328608": {
      "en": "White River",
      "fr": "Rivi��re White",
      "lat": 48.53229658,
      "long": -86.14911499
    },
    "48328609": {
      "en": "White River",
      "fr": "Rivi��re White",
      "lat": 48.53931563,
      "long": -86.13721313
    },
    "48329005": {
      "en": "Matawin River",
      "fr": "Rivi��re Matawin",
      "lat": 48.53247943,
      "long": -89.92749753
    },
    "48329033": {
      "en": "Grouse Lake",
      "fr": "Lac Grouse",
      "lat": 48.54328261,
      "long": -90.5449904
    },
    "48329126": {
      "en": "Olifaunt Lake",
      "fr": "Lac Olifaunt",
      "lat": 48.53589729,
      "long": -91.43891156
    },
    "48329142": {
      "en": "Jean Lake",
      "fr": "Lac Jean",
      "lat": 48.54291632,
      "long": -91.70301077
    },
    "48329206": {
      "en": "Beaverhouse Lake",
      "fr": "Lac Beaverhouse",
      "lat": 48.5432825,
      "long": -92.10279116
    },
    "48338052": {
      "en": "Island Lake",
      "fr": "Lac Island",
      "lat": 48.55671097,
      "long": -80.86529979
    },
    "48338053": {
      "en": "Pexton Lake",
      "fr": "Lac Pexton",
      "lat": 48.55793167,
      "long": -80.86169872
    },
    "48348052": {
      "en": "Hughes Lake",
      "fr": "Lac Hughes",
      "lat": 48.58210159,
      "long": -80.86890087
    },
    "48348053": {
      "en": "Irrigation Lake",
      "fr": "Lac Irrigation",
      "lat": 48.5756929,
      "long": -80.88910351
    },
    "48348131": {
      "en": "Kamiskotia River",
      "fr": "Rivi��re Kamiskotia",
      "lat": 48.56873486,
      "long": -81.51361544
    },
    "48348132": {
      "en": "Kamiskotia River",
      "fr": "Rivi��re Kamiskotia",
      "lat": 48.56891796,
      "long": -81.53351291
    },
    "48348138": {
      "en": "Kamiskotia Lake",
      "fr": "Lac Kamiskotia",
      "lat": 48.56971141,
      "long": -81.63190161
    },
    "48348558": {
      "en": "Hayward Lake",
      "fr": "Lac Hayward",
      "lat": 48.57593674,
      "long": -85.97858272
    },
    "48349026": {
      "en": "Greenwater Lake",
      "fr": "Lac Greenwater",
      "lat": 48.57453262,
      "long": -90.43000013
    },
    "48349155": {
      "en": "Quetico Lake",
      "fr": "Lac Quetico",
      "lat": 48.56452275,
      "long": -91.94330625
    },
    "48357941": {
      "en": "Trollope Lake",
      "fr": "Lac Trollope",
      "lat": 48.58210166,
      "long": -79.68579501
    },
    "48358045": {
      "en": "Abitibi River",
      "fr": "Rivi��re Abitibi",
      "lat": 48.70252399,
      "long": -80.64911322
    },
    "48358556": {
      "en": "Herrick Lake",
      "fr": "Lac Herrick",
      "lat": 48.59510178,
      "long": -85.92218622
    },
    "48358903": {
      "en": "Penassen Lakes",
      "fr": "Lacs Penassen",
      "lat": 48.58393214,
      "long": -89.05139863
    },
    "48358919": {
      "en": "Hazelwood Lake",
      "fr": "Lac Hazelwood",
      "lat": 48.58948632,
      "long": -89.31030985
    },
    "48358956": {
      "en": "Shebandowan River",
      "fr": "Rivi��re Shebandowan",
      "lat": 48.59650532,
      "long": -89.94159666
    },
    "48359033": {
      "en": "Jacob Lake",
      "fr": "Lac Jacob",
      "lat": 48.3524867,
      "long": -90.3264234
    },
    "48359038": {
      "en": "Burchell Lake",
      "fr": "Lac Burchell",
      "lat": 48.58832656,
      "long": -90.62689961
    },
    "48359159": {
      "en": "Cirrus Lake",
      "fr": "Lac Cirrus",
      "lat": 48.59253788,
      "long": -91.9878009
    },
    "48368433": {
      "en": "Esnagi Lake",
      "fr": "Lac Esnagi",
      "lat": 48.59748224,
      "long": -84.56549633
    },
    "48368553": {
      "en": "White River",
      "fr": "Rivi��re White",
      "lat": 48.59693284,
      "long": -85.86530144
    },
    "48369010": {
      "en": "Shebandowan Lake, Lower",
      "fr": "Lac Shebandowan, Lower",
      "lat": 48.61249652,
      "long": -90.17499518
    },
    "48378118": {
      "en": "Bigwater Lake",
      "fr": "Lac Bigwater",
      "lat": 48.61292433,
      "long": -81.28192592
    },
    "48378553": {
      "en": "Spangle Lake",
      "fr": "Lac Spangle",
      "lat": 48.6279387,
      "long": -85.87781365
    },
    "48378617": {
      "en": "Pic River",
      "fr": "Rivi��re Pic",
      "lat": 48.62030928,
      "long": -86.2716126
    },
    "48379119": {
      "en": "Pickerel Lake",
      "fr": "Lac Pickerel",
      "lat": 48.62470346,
      "long": -91.44470992
    },
    "48379343": {
      "en": "Rainy River",
      "fr": "Rivi��re Rainy",
      "lat": 48.60968866,
      "long": -93.36829448
    },
    "48379345": {
      "en": "Rainy River",
      "fr": "Rivi��re Rainy",
      "lat": 48.56952749,
      "long": -93.80329216
    },
    "48388052": {
      "en": "McIntosh Lake",
      "fr": "Lac McIntosh",
      "lat": 48.62513139,
      "long": -80.86328564
    },
    "48388513": {
      "en": "Tukanee Lake",
      "fr": "Lac Tukanee",
      "lat": 48.63709402,
      "long": -85.21808444
    },
    "48388546": {
      "en": "White River",
      "fr": "Rivi��re White",
      "lat": 48.6386809,
      "long": -85.76941518
    },
    "48389215": {
      "en": "Pipe Lake",
      "fr": "Lac Pipe",
      "lat": 48.64173221,
      "long": -92.25299874
    },
    "48389315": {
      "en": "Rainy Lake",
      "fr": "Lac Rainy",
      "lat": 48.64869014,
      "long": -93.25190041
    },
    "48398055": {
      "en": "Frederick House Lake",
      "fr": "Lac Frederick House",
      "lat": 48.66071488,
      "long": -80.9378096
    },
    "48398547": {
      "en": "Frank Lake",
      "fr": "Lac Frank",
      "lat": 48.65253588,
      "long": -85.83911735
    },
    "48398606": {
      "en": "Campfire Lake",
      "fr": "Lac Campfire",
      "lat": 48.65369553,
      "long": -86.10059205
    },
    "48398613": {
      "en": "Black River",
      "fr": "Rivi��re Black",
      "lat": 48.6587004,
      "long": -86.23468633
    },
    "48399249": {
      "en": "Grassy Lake, Little (Seine River)",
      "fr": "Lac Grassy, Little (Rivi��re Seine)",
      "lat": 48.64710326,
      "long": -92.81281336
    },
    "48408407": {
      "en": "Tatnall Lake",
      "fr": "Lac Tatnall",
      "lat": 48.67829283,
      "long": -84.11798643
    },
    "48408416": {
      "en": "Oba Lake",
      "fr": "Lac Oba",
      "lat": 48.64570004,
      "long": -84.28851871
    },
    "48408553": {
      "en": "Molson Lake",
      "fr": "Lac Molson",
      "lat": 48.66748949,
      "long": -85.88001092
    },
    "48408613": {
      "en": "Black River",
      "fr": "Rivi��re Black",
      "lat": 48.66828293,
      "long": -86.22138066
    },
    "48408847": {
      "en": "Nalla Lake",
      "fr": "Lac Nalla",
      "lat": 48.66950346,
      "long": -88.79218226
    },
    "48408859": {
      "en": "Unnamed Lake",
      "fr": "Lac sans nom",
      "lat": 48.66889309,
      "long": -88.99719941
    },
    "48409140": {
      "en": "Abbess Lake",
      "fr": "Lac Abbess",
      "lat": 48.68030647,
      "long": -91.68299125
    },
    "48409219": {
      "en": "Whalen Lake",
      "fr": "Lac Whalen",
      "lat": 48.65528201,
      "long": -92.3021931
    },
    "48409242": {
      "en": "Grassy Lake",
      "fr": "Lac Grassy",
      "lat": 48.66510864,
      "long": -92.71808678
    },
    "48418541": {
      "en": "Clearwater Lake",
      "fr": "Lac Clearwater",
      "lat": 48.67652271,
      "long": -85.68048693
    },
    "48418550": {
      "en": "Cedar Lake, Little",
      "fr": "Lac Cedar, Little",
      "lat": 48.69312426,
      "long": -85.83472283
    },
    "48418558": {
      "en": "Cigar Lake",
      "fr": "Lac Cigar",
      "lat": 48.68549486,
      "long": -85.96503293
    },
    "48418601": {
      "en": "Rous Lake",
      "fr": "Lac Rous",
      "lat": 48.68708177,
      "long": -86.0283264
    },
    "48418844": {
      "en": "Elbow Lake",
      "fr": "Lac Elbow",
      "lat": 48.6909268,
      "long": -88.73389367
    },
    "48418855": {
      "en": "Unnamed Lake (Beck Creek)",
      "fr": "Lac sans nom (Ruisseau Beck)",
      "lat": 48.68671536,
      "long": -88.92749724
    },
    "48418927": {
      "en": "Hawkeye Lake",
      "fr": "Lac Hawkeye",
      "lat": 48.68610498,
      "long": -89.45221664
    },
    "48419036": {
      "en": "Crayfish Lake",
      "fr": "Lac Crayfish",
      "lat": 48.69391739,
      "long": -90.62940207
    },
    "48419238": {
      "en": "Shoal Lake (Seine River)",
      "fr": "Lac Shoal (Rivi��re Seine)",
      "lat": 48.68732545,
      "long": -92.62751058
    },
    "48419323": {
      "en": "Rainy Lake",
      "fr": "Lac Rainy",
      "lat": 48.68329707,
      "long": -93.38330915
    },
    "48427945": {
      "en": "Lake Abitibi",
      "fr": "Lac Abitibi",
      "lat": 48.65833457,
      "long": -79.84473062
    },
    "48428038": {
      "en": "Black River",
      "fr": "Rivi��re Black",
      "lat": 48.69672565,
      "long": -80.63220647
    },
    "48428844": {
      "en": "Upper Hunters Lake",
      "fr": "Lac Upper Hunters",
      "lat": 48.70008208,
      "long": -88.73578576
    },
    "48428845": {
      "en": "Bisect Lake",
      "fr": "Lac Bisect",
      "lat": 48.70288969,
      "long": -88.75891809
    },
    "48429116": {
      "en": "Crystal Lake",
      "fr": "Lac Crystal",
      "lat": 48.70948131,
      "long": -91.28308879
    },
    "48429126": {
      "en": "Nym Lake",
      "fr": "Lac Nym",
      "lat": 48.68549448,
      "long": -91.45661179
    },
    "48429158": {
      "en": "McCaulay Lake",
      "fr": "Lac McCaulay",
      "lat": 48.70832159,
      "long": -91.97711976
    },
    "48429203": {
      "en": "Factor Lake",
      "fr": "Lac Factor",
      "lat": 48.70069219,
      "long": -92.06501042
    },
    "48438049": {
      "en": "Hidden Lake",
      "fr": "Lac Hidden",
      "lat": 48.72449664,
      "long": -80.82861767
    },
    "48438305": {
      "en": "Dumbell Lake",
      "fr": "Lac Dumbell",
      "lat": 48.71192326,
      "long": -83.08160914
    },
    "48438815": {
      "en": "Lost Lake",
      "fr": "Lac Lost",
      "lat": 48.72589999,
      "long": -88.25360788
    },
    "48439023": {
      "en": "Kashabowie Lake",
      "fr": "Lac Kashabowie",
      "lat": 48.71888079,
      "long": -90.39411147
    },
    "48439110": {
      "en": "Eva Lake",
      "fr": "Lac Eva",
      "lat": 48.71332653,
      "long": -91.1782914
    },
    "48439120": {
      "en": "Niobe Lake",
      "fr": "Lac Niobe",
      "lat": 48.72651012,
      "long": -91.33002485
    },
    "48439229": {
      "en": "Wild Potato Lake (Seine River)",
      "fr": "Lac Wild Potato (Rivi��re Seine)",
      "lat": 48.71668337,
      "long": -92.47693681
    },
    "48448049": {
      "en": "Wilson Lake",
      "fr": "Lac Wilson",
      "lat": 48.74390582,
      "long": -80.80969677
    },
    "48448457": {
      "en": "Strickland Lake",
      "fr": "Lac Strickland",
      "lat": 48.74750665,
      "long": -84.9636288
    },
    "48448625": {
      "en": "Lake Superior 8a - Peninsula Harbour",
      "fr": "Lac Sup��rieur 8a - Port de Peninsula",
      "lat": 48.73371261,
      "long": -86.40442516
    },
    "48449123": {
      "en": "Aramis Lake",
      "fr": "Lac Aramis",
      "lat": 48.74408824,
      "long": -91.37860885
    },
    "48449222": {
      "en": "Partridge Crop Lake (Seine River)",
      "fr": "Lac Partridge Crop (Rivi��re Seine)",
      "lat": 48.72950076,
      "long": -92.37030836
    },
    "48449240": {
      "en": "Bad Vermilion Lake",
      "fr": "Lac Bad Vermilion",
      "lat": 48.73511597,
      "long": -92.68000084
    },
    "48449334": {
      "en": "Wasaw Lake",
      "fr": "Lac Wasaw",
      "lat": 48.74671259,
      "long": -93.5727013
    },
    "48458558": {
      "en": "Cedar Creek",
      "fr": "Ruisseau Cedar",
      "lat": 48.7501311,
      "long": -85.96130979
    },
    "48458604": {
      "en": "Gowan Lake",
      "fr": "Lac Gowan",
      "lat": 48.76892992,
      "long": -86.04968873
    },
    "48458655": {
      "en": "Lake Superior 7 - Schreiber Point/Sewell Point Area",
      "fr": "Lac Sup��rieur 7 - Environs de la pointe Schreiber et de la pointe Sewell",
      "lat": 48.5039152,
      "long": -86.70410784
    },
    "48459113": {
      "en": "Kawene Lake",
      "fr": "Lac Kawene",
      "lat": 48.75971326,
      "long": -91.21131144
    },
    "48459151": {
      "en": "Perch Lake",
      "fr": "Lac Perch",
      "lat": 48.74689582,
      "long": -91.84491758
    },
    "48459155": {
      "en": "Chub Lake (Seine River)",
      "fr": "Lac Chub (Rivi��re Seine)",
      "lat": 48.74091437,
      "long": -91.91858704
    },
    "48459320": {
      "en": "Boffin Lake",
      "fr": "Lac Boffin",
      "lat": 48.75092402,
      "long": -93.46973497
    },
    "48468155": {
      "en": "Aitken Lake, Lower",
      "fr": "Lac Aitken, Lower",
      "lat": 48.7708833,
      "long": -81.92169666
    },
    "48468501": {
      "en": "Dayohessarah lake",
      "fr": "Lac Dayohessarah",
      "lat": 48.78089288,
      "long": -85.03003508
    },
    "48468654": {
      "en": "Steel River",
      "fr": "Rivi��re Steel",
      "lat": 48.77668134,
      "long": -86.88410062
    },
    "48468932": {
      "en": "Dog Lake",
      "fr": "Lac Dog",
      "lat": 48.7639248,
      "long": -89.54279286
    },
    "48469012": {
      "en": "Athelstane Lake",
      "fr": "Lac Athelstane",
      "lat": 48.77448384,
      "long": -90.20801523
    },
    "48469121": {
      "en": "Sapawe Lake",
      "fr": "Lac Sapawe",
      "lat": 48.77533825,
      "long": -91.34253706
    },
    "48469141": {
      "en": "Apungsisagen (Lower Steeprock) Lake",
      "fr": "Lac Apungsisagen (lac Lower Steeprock)",
      "lat": 48.76148324,
      "long": -91.69080377
    },
    "48469204": {
      "en": "Calm Lake (Seine River)",
      "fr": "Lac Calm (Rivi��re Seine)",
      "lat": 48.7743006,
      "long": -92.08081854
    },
    "48478030": {
      "en": "Abitibi River",
      "fr": "Rivi��re Abitibi",
      "lat": 48.79328329,
      "long": -80.51831484
    },
    "48478442": {
      "en": "Nameigos Lake",
      "fr": "Lac Nameigos",
      "lat": 48.78388363,
      "long": -84.70581622
    },
    "48478537": {
      "en": "White Lake",
      "fr": "Lac White",
      "lat": 48.76947927,
      "long": -85.63550402
    },
    "48478545": {
      "en": "Wabikoba Lake",
      "fr": "Lac Wabikoba",
      "lat": 48.78473805,
      "long": -85.75470572
    },
    "48478627": {
      "en": "Knob Lake",
      "fr": "Lac Knob",
      "lat": 48.79810471,
      "long": -86.45410781
    },
    "48479104": {
      "en": "Crooked Pine Lake",
      "fr": "Lac Crooked Pine",
      "lat": 48.78449354,
      "long": -91.09363562
    },
    "48479132": {
      "en": "Rawn Reservoir",
      "fr": "R��servoir Rawn",
      "lat": 48.78510386,
      "long": -91.5369341
    },
    "48479240": {
      "en": "Little Turtle Lake",
      "fr": "Lac Little Turtle",
      "lat": 48.79108522,
      "long": -92.69941004
    },
    "48488048": {
      "en": "Nellie Lake",
      "fr": "Lac Nellie",
      "lat": 48.79529743,
      "long": -80.79279003
    },
    "48488055": {
      "en": "Devonshire Lake",
      "fr": "Lac Devonshire",
      "lat": 48.79950885,
      "long": -80.91968217
    },
    "48488155": {
      "en": "Aitken Lake",
      "fr": "Lac Aitken",
      "lat": 48.79090284,
      "long": -81.92548084
    },
    "48488232": {
      "en": "Lisgar Lake",
      "fr": "Lac Lisgar",
      "lat": 48.80451364,
      "long": -82.53021737
    },
    "48488459": {
      "en": "Gagegenha Lake",
      "fr": "Lac Gagegenha",
      "lat": 48.80310968,
      "long": -84.99280363
    },
    "48488520": {
      "en": "Kwinkwaga Lake",
      "fr": "Lac Kwinkwaga",
      "lat": 48.80793144,
      "long": -85.33222024
    },
    "48488659": {
      "en": "Lake Superior 8 - Jackfish Bay",
      "fr": "Lac Sup��rieur 8 - Baie Jackfish",
      "lat": 48.80011883,
      "long": -86.98328278
    },
    "48488711": {
      "en": "Hays Lake",
      "fr": "Lac Hays",
      "lat": 48.80610027,
      "long": -87.18079261
    },
    "48488825": {
      "en": "Lake Superior 5 - Pie Island",
      "fr": "Lac Sup��rieur 5 - '��le Pie",
      "lat": 48.6019376,
      "long": -87.76972099
    },
    "48489017": {
      "en": "Henderson Lake",
      "fr": "Lac Henderson",
      "lat": 48.81372944,
      "long": -90.29431898
    },
    "48489107": {
      "en": "Mercutio Lake",
      "fr": "Lac Mercutio",
      "lat": 48.81610975,
      "long": -91.11689003
    },
    "48489123": {
      "en": "Osinawi Lake",
      "fr": "Lac Osinawi",
      "lat": 48.80048473,
      "long": -91.38300339
    },
    "48489140": {
      "en": "Steep Rock Lake",
      "fr": "Lac Steep Rock",
      "lat": 48.79792124,
      "long": -91.66638971
    },
    "48489141": {
      "en": "Colin Lake",
      "fr": "Lac Colin",
      "lat": 48.80091196,
      "long": -91.6950152
    },
    "48489257": {
      "en": "Rainy Lake",
      "fr": "Lac Rainy",
      "lat": 48.76111693,
      "long": -92.98108736
    },
    "48498103": {
      "en": "Frederick House River",
      "fr": "Rivi��re Frederick House",
      "lat": 48.82752398,
      "long": -81.06610556
    },
    "48498129": {
      "en": "Mattagami River",
      "fr": "Rivi��re Mattagami",
      "lat": 48.82929398,
      "long": -81.49048314
    },
    "48498621": {
      "en": "Bamoos Lake",
      "fr": "Lac Bamoos",
      "lat": 48.81708665,
      "long": -86.35419323
    },
    "48498905": {
      "en": "Hicks Lake",
      "fr": "Lac Hicks",
      "lat": 48.81751371,
      "long": -89.09113257
    },
    "48499005": {
      "en": "Savanne Lake",
      "fr": "Lac Savanne",
      "lat": 48.8328945,
      "long": -90.09809089
    },
    "48499058": {
      "en": "Union Lake",
      "fr": "Lac Union",
      "lat": 48.8283168,
      "long": -90.96863559
    },
    "48499140": {
      "en": "Seine River Diversion",
      "fr": "Canal de la rivi��re Seine",
      "lat": 48.81391245,
      "long": -91.68531061
    },
    "48508555": {
      "en": "Black River",
      "fr": "Rivi��re Black",
      "lat": 48.87653493,
      "long": -85.88141476
    },
    "48508657": {
      "en": "Jackfish Lake",
      "fr": "Lac Jackfish",
      "lat": 48.83210126,
      "long": -86.94751617
    },
    "48508825": {
      "en": "Lake Superior 4 - Black Bay area",
      "fr": "Lac Sup��rieur 4 - Environs de la baie Black",
      "lat": 48.68549469,
      "long": -88.45362014
    },
    "48509030": {
      "en": "Lac des Mille Lacs",
      "fr": "Lac des Mille Lacs",
      "lat": 48.84888568,
      "long": -90.49439229
    },
    "48509132": {
      "en": "Icy Lake",
      "fr": "Lac Icy",
      "lat": 48.83313853,
      "long": -91.53491995
    },
    "48518103": {
      "en": "Pickerel Lake",
      "fr": "Lac Pickerel",
      "lat": 48.85230426,
      "long": -81.044316
    },
    "48518558": {
      "en": "Pan Lake",
      "fr": "Lac Pan",
      "lat": 48.85370777,
      "long": -85.97168578
    },
    "48518724": {
      "en": "Whitesand Lake",
      "fr": "Lac Whitesand",
      "lat": 48.84693278,
      "long": -87.38159834
    },
    "48528038": {
      "en": "Moseley Lake",
      "fr": "Lac Moseley",
      "lat": 48.87391073,
      "long": -80.62500434
    },
    "48528455": {
      "en": "Gourlay Lake",
      "fr": "Lac Gourlay",
      "lat": 48.86792903,
      "long": -84.91669277
    },
    "48528653": {
      "en": "Santoy Lake",
      "fr": "Lac Santoy",
      "lat": 48.86292402,
      "long": -86.88190336
    },
    "48528708": {
      "en": "Sand Lake",
      "fr": "Lac Sand",
      "lat": 48.90693036,
      "long": -87.06769444
    },
    "48529051": {
      "en": "Bedivere Lake",
      "fr": "Lac Bedivere",
      "lat": 48.86811173,
      "long": -90.8494339
    },
    "48529202": {
      "en": "Dovetail Lake",
      "fr": "Lac Dovetail",
      "lat": 48.88013557,
      "long": -92.0402912
    },
    "48538347": {
      "en": "Minnipuka Lake, Lower",
      "fr": "Lac Minnipuka, Lower",
      "lat": 48.89649356,
      "long": -83.79529348
    },
    "48538448": {
      "en": "Beaton Lake",
      "fr": "Lac Beaton",
      "lat": 48.8754974,
      "long": -84.79218101
    },
    "48538733": {
      "en": "Pays Plat River",
      "fr": "Rivi��re Pays Plat",
      "lat": 48.87970865,
      "long": -87.55860036
    },
    "48539131": {
      "en": "Marmion Lake",
      "fr": "Lac Marmion",
      "lat": 48.87513073,
      "long": -91.5474932
    },
    "48548050": {
      "en": "Tom Lake",
      "fr": "Lac Tom",
      "lat": 48.90809041,
      "long": -80.84363235
    },
    "48548108": {
      "en": "Reaume Lake",
      "fr": "Lac Reaume",
      "lat": 48.89728717,
      "long": -81.14001917
    },
    "48548400": {
      "en": "Pichogen Lake",
      "fr": "Lac Pichogen",
      "lat": 48.89948427,
      "long": -84.00501035
    },
    "48548425": {
      "en": "Kabinakagami Lake",
      "fr": "Lac Kabinakagami",
      "lat": 48.9080902,
      "long": -84.40631663
    },
    "48548720": {
      "en": "Ross Lake, Upper and Lower",
      "fr": "Lac Ross, Upper et Lower",
      "lat": 48.90393962,
      "long": -87.33582197
    },
    "48549119": {
      "en": "Marmion Lake, Upper",
      "fr": "Lac Marmion, Upper",
      "lat": 48.91468153,
      "long": -91.3252031
    },
    "48549218": {
      "en": "Manion Lake",
      "fr": "Lac Manion",
      "lat": 48.91150763,
      "long": -92.31580398
    },
    "48549300": {
      "en": "Big Sawbill Lake",
      "fr": "Lac Big Sawbill",
      "lat": 48.9011316,
      "long": -93.00190038
    },
    "48549349": {
      "en": "Off Lake",
      "fr": "Lac Off",
      "lat": 48.90070429,
      "long": -93.82502074
    },
    "48549352": {
      "en": "Pony Lake",
      "fr": "Lac Pony",
      "lat": 48.90869989,
      "long": -93.85608765
    },
    "48558223": {
      "en": "Griffin Lake",
      "fr": "Lac Griffin",
      "lat": 48.91248486,
      "long": -82.3883106
    },
    "48558723": {
      "en": "Hornblende Lake",
      "fr": "Lac Hornblende",
      "lat": 48.9144987,
      "long": -87.37970626
    },
    "48559000": {
      "en": "Lac du Milieu",
      "fr": "Lac du Milieu",
      "lat": 48.92749901,
      "long": -90.00470709
    },
    "48559134": {
      "en": "Finlayson Lake (Seine River)",
      "fr": "Lac Finlayson (Rivi��re Seine)",
      "lat": 48.90931042,
      "long": -91.58972955
    },
    "48559304": {
      "en": "Tupman Lake",
      "fr": "Lac Tupman",
      "lat": 48.91449829,
      "long": -93.0755088
    },
    "48568038": {
      "en": "Doucette Lake",
      "fr": "Lac Doucette",
      "lat": 48.91431601,
      "long": -80.64081246
    },
    "48568153": {
      "en": "Oke Lake",
      "fr": "Lac Oke",
      "lat": 48.9373262,
      "long": -81.87830067
    },
    "48568704": {
      "en": "Lower Lake",
      "fr": "Lac Lower",
      "lat": 48.92810957,
      "long": -87.05829503
    },
    "48569240": {
      "en": "Heron Lake",
      "fr": "Lac Heron",
      "lat": 48.93109989,
      "long": -92.67041835
    },
    "48569331": {
      "en": "Calder Lake",
      "fr": "Lac Calder",
      "lat": 48.94568722,
      "long": -93.53278434
    },
    "48569338": {
      "en": "Jackfish Lake",
      "fr": "Lac Jackfish",
      "lat": 48.94068234,
      "long": -93.59638299
    },
    "48569339": {
      "en": "Jackfish Lake, West",
      "fr": "Lac Jackfish, West",
      "lat": 48.93653194,
      "long": -93.66608516
    },
    "48578228": {
      "en": "Esmee Lake",
      "fr": "Lac Esmee",
      "lat": 48.94269726,
      "long": -82.46130867
    },
    "48578230": {
      "en": "Pratt Lake",
      "fr": "Lac Pratt",
      "lat": 48.94593212,
      "long": -82.49799082
    },
    "48578231": {
      "en": "Shack Lake",
      "fr": "Lac Shack",
      "lat": 48.95673534,
      "long": -82.52472422
    },
    "48578407": {
      "en": "Gull Lake",
      "fr": "Lac Gull",
      "lat": 48.96192324,
      "long": -84.12891176
    },
    "48578814": {
      "en": "Lake Superior 6 - Nipigon Bay",
      "fr": "Lac Sup��rieur 6 - Baie Nipigon",
      "lat": 48.90009436,
      "long": -88.06769476
    },
    "48579112": {
      "en": "Farley Lake",
      "fr": "Lac Farley",
      "lat": 48.96192276,
      "long": -91.20502485
    },
    "48579157": {
      "en": "Turtle Lake",
      "fr": "Lac Turtle",
      "lat": 48.94812875,
      "long": -91.9483112
    },
    "48579211": {
      "en": "Sandbeach Lake",
      "fr": "Lac Sandbeach",
      "lat": 48.95612434,
      "long": -92.19892163
    },
    "48579216": {
      "en": "Pettit Lake",
      "fr": "Lac Pettit",
      "lat": 48.95209601,
      "long": -92.26752517
    },
    "48579251": {
      "en": "Otukamamoan (Trout) Lake",
      "fr": "Lac Otukamamoan (Trout)",
      "lat": 48.96173952,
      "long": -92.86359469
    },
    "48579308": {
      "en": "Weller Lake",
      "fr": "Lac Weller",
      "lat": 48.94233032,
      "long": -93.13269877
    },
    "48579346": {
      "en": "Burditt Lake",
      "fr": "Lac Burditt",
      "lat": 48.95649043,
      "long": -93.77332396
    },
    "48588323": {
      "en": "Brunswick Lake",
      "fr": "Lac Brunswick",
      "lat": 48.98731391,
      "long": -83.38940957
    },
    "48588715": {
      "en": "Charlotte Lake",
      "fr": "Lac Charlotte",
      "lat": 48.95893231,
      "long": -87.27020917
    },
    "48588723": {
      "en": "Cleaver Lake",
      "fr": "Lac Cleaver",
      "lat": 48.96949139,
      "long": -87.37970627
    },
    "48588745": {
      "en": "Buckaday Lake",
      "fr": "Lac Buckaday",
      "lat": 48.98053873,
      "long": -87.75220395
    },
    "48588843": {
      "en": "Unknown Lake",
      "fr": "Lac Inconnu",
      "lat": 48.98108798,
      "long": -88.72193082
    },
    "48588917": {
      "en": "Smiley Lake",
      "fr": "Lac Smiley",
      "lat": 48.95588041,
      "long": -89.2946849
    },
    "48589121": {
      "en": "Lizard Lake",
      "fr": "Lac Lizard",
      "lat": 48.97669325,
      "long": -91.35279101
    },
    "48589149": {
      "en": "Crowrock Lake",
      "fr": "Lac Crowrock",
      "lat": 48.97168834,
      "long": -91.8277057
    },
    "48598106": {
      "en": "Frederick House River",
      "fr": "Rivi��re Frederick House",
      "lat": 48.99891073,
      "long": -81.10138391
    },
    "48598228": {
      "en": "Keenoa Lake",
      "fr": "Lac Keenoa",
      "lat": 48.98890088,
      "long": -82.45660897
    },
    "48598656": {
      "en": "Cairngorm Lake",
      "fr": "Lac Cairngorm",
      "lat": 48.99189132,
      "long": -86.93720125
    },
    "48598914": {
      "en": "DeCourcey Lake",
      "fr": "Lac DeCourcey",
      "lat": 48.98932769,
      "long": -89.23670149
    },
    "48599348": {
      "en": "Kishkutena Lake, Little",
      "fr": "Lac Kishkutena, Little",
      "lat": 48.99750606,
      "long": -93.80890747
    },
    "49008416": {
      "en": "Cameron Lake",
      "fr": "Lac Cameron",
      "lat": 49.01093447,
      "long": -84.27722725
    },
    "49009002": {
      "en": "Muskeg Lake",
      "fr": "Lac Muskeg",
      "lat": 49.01728173,
      "long": -90.05188729
    },
    "49009157": {
      "en": "Clearwater West Lake",
      "fr": "Lac Clearwater West",
      "lat": 49.00348765,
      "long": -91.96863593
    },
    "49009224": {
      "en": "Eltrut Lake",
      "fr": "Lac Eltrut",
      "lat": 49.00568488,
      "long": -92.41352132
    },
    "49009306": {
      "en": "Pickwick Lake",
      "fr": "Lac Pickwick",
      "lat": 48.99390504,
      "long": -93.08661722
    },
    "49009330": {
      "en": "Loonhaunt Lake",
      "fr": "Lac Loonhaunt",
      "lat": 49.01233763,
      "long": -93.50391471
    },
    "49009437": {
      "en": "Rainy River",
      "fr": "Rivi��re Rainy",
      "lat": 48.71808702,
      "long": -94.58692279
    },
    "49018019": {
      "en": "Findlay Lake",
      "fr": "Lac Findlay",
      "lat": 49.02228724,
      "long": -80.31549498
    },
    "49018450": {
      "en": "Lake Placid",
      "fr": "Lac Placid",
      "lat": 49.02692564,
      "long": -84.83380702
    },
    "49018529": {
      "en": "Garnham Lake",
      "fr": "Lac Garnham",
      "lat": 49.00928644,
      "long": -85.49140001
    },
    "49018550": {
      "en": "Agonzon Lake",
      "fr": "Lac Agonzon",
      "lat": 49.02448417,
      "long": -85.83002317
    },
    "49018727": {
      "en": "Beavertrap Lake",
      "fr": "Lac Beavertrap",
      "lat": 49.01648846,
      "long": -87.45471851
    },
    "49018802": {
      "en": "Ozone Creek",
      "fr": "Ruisseau Ozone",
      "lat": 49.01673256,
      "long": -88.04071723
    },
    "49018808": {
      "en": "Fire Hill Lake",
      "fr": "Lac Fire Hill",
      "lat": 49.02210365,
      "long": -88.12799753
    },
    "49019205": {
      "en": "Grey Trout Lake",
      "fr": "Lac Grey Trout",
      "lat": 49.02472787,
      "long": -92.08380931
    },
    "49028253": {
      "en": "Oscar Lake",
      "fr": "Lac Oscar",
      "lat": 49.03870555,
      "long": -82.87970482
    },
    "49028259": {
      "en": "Powell Lake",
      "fr": "Lac Powell",
      "lat": 49.0250947,
      "long": -82.98328151
    },
    "49028643": {
      "en": "Prairie Lake",
      "fr": "Lac Prairie",
      "lat": 49.0239348,
      "long": -86.71161525
    },
    "49028846": {
      "en": "Cliff Lake",
      "fr": "Lac Cliff",
      "lat": 49.041879,
      "long": -88.77832733
    },
    "49028904": {
      "en": "Walotka Lake",
      "fr": "Lac Walotka",
      "lat": 49.04548005,
      "long": -89.07642313
    },
    "49028912": {
      "en": "Eaglehead Lake",
      "fr": "Lac Eaglehead",
      "lat": 49.04609039,
      "long": -89.20142317
    },
    "49029009": {
      "en": "Kaogomok Lake, Upper",
      "fr": "Lac Kaogomok, Upper",
      "lat": 49.04029198,
      "long": -90.16608411
    },
    "49029208": {
      "en": "South Crook Lake",
      "fr": "Lac South Crook",
      "lat": 49.04792123,
      "long": -92.13391919
    },
    "49029210": {
      "en": "Mount Lake",
      "fr": "Lac Mount",
      "lat": 49.01313119,
      "long": -92.18000074
    },
    "49029253": {
      "en": "Sakwite Lake",
      "fr": "Lac Sakwite",
      "lat": 49.03028201,
      "long": -92.9002158
    },
    "49038259": {
      "en": "Cooper Lake",
      "fr": "Lac Cooper",
      "lat": 49.04187937,
      "long": -82.98328152
    },
    "49038325": {
      "en": "Foster Lake",
      "fr": "Lac Foster",
      "lat": 49.03089302,
      "long": -83.42358928
    },
    "49038509": {
      "en": "Tocheri Lake",
      "fr": "Lac Tocheri",
      "lat": 49.0515228,
      "long": -85.15472998
    },
    "49038807": {
      "en": "Limestone Creek",
      "fr": "Ruisseau Limestone",
      "lat": 49.04932533,
      "long": -88.10529245
    },
    "49039208": {
      "en": "Crook Lake",
      "fr": "Lac Crook",
      "lat": 49.05951791,
      "long": -92.1355061
    },
    "49039304": {
      "en": "Vista Lake",
      "fr": "Lac Vista",
      "lat": 49.06372927,
      "long": -93.07862162
    },
    "49039323": {
      "en": "Kaiashkons Lake",
      "fr": "Lac Kaiashkons",
      "lat": 49.05530639,
      "long": -93.39692006
    },
    "49048101": {
      "en": "Commando Lake",
      "fr": "Lac Commando",
      "lat": 49.06232627,
      "long": -81.0191085
    },
    "49048235": {
      "en": "Saganash Lake",
      "fr": "Lac Saganash",
      "lat": 49.04108594,
      "long": -82.57941175
    },
    "49048306": {
      "en": "Opasatika Lake",
      "fr": "Lac Opasatika",
      "lat": 49.07428904,
      "long": -83.13440462
    },
    "49049208": {
      "en": "Secret Lake",
      "fr": "Lac Secret",
      "lat": 49.0789271,
      "long": -92.14002271
    },
    "49049212": {
      "en": "Rutter Lake",
      "fr": "Lac Rutter",
      "lat": 49.0737391,
      "long": -92.20020339
    },
    "49057933": {
      "en": "Joe Lake",
      "fr": "Lac Joe",
      "lat": 49.08728973,
      "long": -79.55029698
    },
    "49057938": {
      "en": "Patten River",
      "fr": "Rivi��re Patten",
      "lat": 49.12293426,
      "long": -79.63550209
    },
    "49058112": {
      "en": "Rawcourt Lake",
      "fr": "Lac Rawcourt",
      "lat": 49.08008749,
      "long": -81.20911101
    },
    "49058134": {
      "en": "Mattagami River",
      "fr": "Rivi��re Mattagami",
      "lat": 49.08088092,
      "long": -81.58862774
    },
    "49058205": {
      "en": "Groundhog River",
      "fr": "Rivi��re Groundhog",
      "lat": 49.0833223,
      "long": -82.09998045
    },
    "49058300": {
      "en": "Bourinot Lake",
      "fr": "Lac Bourinot",
      "lat": 49.07569285,
      "long": -82.99780789
    },
    "49058446": {
      "en": "West Larkin Lake",
      "fr": "Lac West Larkin",
      "lat": 49.07428894,
      "long": -84.77551844
    },
    "49058505": {
      "en": "Shekak Lake",
      "fr": "Lac Shekak",
      "lat": 49.09009702,
      "long": -85.08502782
    },
    "49058632": {
      "en": "Killala Lake",
      "fr": "Lac Killala",
      "lat": 49.0803313,
      "long": -86.52692281
    },
    "49058815": {
      "en": "Helen Lake",
      "fr": "Lac Helen",
      "lat": 49.07673011,
      "long": -88.27808304
    },
    "49058915": {
      "en": "Starnes Lake",
      "fr": "Lac Starnes",
      "lat": 49.07813385,
      "long": -89.25940659
    },
    "49059009": {
      "en": "Ricestalk Lake",
      "fr": "Lac Ricestalk",
      "lat": 49.09571191,
      "long": -90.15253431
    },
    "49059136": {
      "en": "Little Gull Lake",
      "fr": "Lac Little Gull",
      "lat": 49.07471571,
      "long": -91.59778622
    },
    "49059335": {
      "en": "Pipestone Lake",
      "fr": "Lac Pipestone",
      "lat": 49.09949584,
      "long": -93.54389277
    },
    "49068102": {
      "en": "Lillabelle Lake",
      "fr": "Lac Lillabelle",
      "lat": 49.10871299,
      "long": -81.03308556
    },
    "49068246": {
      "en": "Kapuskasing River",
      "fr": "Rivi��re de Kapuskasing",
      "lat": 49.09833691,
      "long": -82.75641377
    },
    "49068305": {
      "en": "Penelton Lake",
      "fr": "Lac Penelton",
      "lat": 49.09650584,
      "long": -83.0927176
    },
    "49068441": {
      "en": "Haken Lake",
      "fr": "Lac Haken",
      "lat": 49.103891,
      "long": -84.69440269
    },
    "49068515": {
      "en": "Granitehill Lake",
      "fr": "Lac Granitehill",
      "lat": 49.08649594,
      "long": -85.26471538
    },
    "49068529": {
      "en": "Macutagon Lake",
      "fr": "Lac Macutagon",
      "lat": 49.10309749,
      "long": -85.47693469
    },
    "49068547": {
      "en": "Kaginu Lake",
      "fr": "Lac Kaginu",
      "lat": 49.08789971,
      "long": -85.78192746
    },
    "49068844": {
      "en": "Shillabeer Lake",
      "fr": "Lac Shillabeer",
      "lat": 49.11090977,
      "long": -88.7327951
    },
    "49068909": {
      "en": "Arrowroot Lake",
      "fr": "Lac Arrowroot",
      "lat": 49.10810212,
      "long": -89.1558299
    },
    "49069141": {
      "en": "Sandford Lake",
      "fr": "Lac Sandford",
      "lat": 49.11090956,
      "long": -91.69190246
    },
    "49078027": {
      "en": "Mistango Lake",
      "fr": "Lac Mistango",
      "lat": 49.11951625,
      "long": -80.45721867
    },
    "49078851": {
      "en": "Sturge Lake",
      "fr": "Lac Sturge",
      "lat": 49.12793857,
      "long": -88.84528293
    },
    "49079136": {
      "en": "Irene Lake",
      "fr": "Lac Irene",
      "lat": 49.1245204,
      "long": -91.60858945
    },
    "49079152": {
      "en": "White Otter Lake",
      "fr": "Lac White Otter",
      "lat": 49.11109265,
      "long": -91.88159979
    },
    "49079342": {
      "en": "Katimiagamak Lake",
      "fr": "Lac Katimiagamak",
      "lat": 49.12232297,
      "long": -93.71473022
    },
    "49087947": {
      "en": "Abbotsford Lake",
      "fr": "Lac Abbotsford",
      "lat": 49.13868133,
      "long": -79.78558759
    },
    "49088251": {
      "en": "Graveyard Lake",
      "fr": "Lac Graveyard",
      "lat": 49.13172314,
      "long": -82.84601342
    },
    "49088546": {
      "en": "Little Mose Lake",
      "fr": "Lac Little Mose",
      "lat": 49.1373382,
      "long": -85.76300656
    },
    "49088548": {
      "en": "Manitouwadge Lake",
      "fr": "Lac Manitouwadge",
      "lat": 49.13312677,
      "long": -85.80640257
    },
    "49088914": {
      "en": "Mawn Lake",
      "fr": "Lac Mawn",
      "lat": 49.12708405,
      "long": -89.22931626
    },
    "49089241": {
      "en": "Entwine Lake",
      "fr": "Lac Entwine",
      "lat": 49.13532355,
      "long": -92.68390716
    },
    "49098114": {
      "en": "Lower Deception Lake",
      "fr": "Lac Lower Deception",
      "lat": 49.15473349,
      "long": -81.23639374
    },
    "49098243": {
      "en": "Kapuskasing River",
      "fr": "Rivi��re Kapuskasing",
      "lat": 49.1457002,
      "long": -82.71558125
    },
    "49098305": {
      "en": "Rufus Lake",
      "fr": "Lac Rufus",
      "lat": 49.15973827,
      "long": -83.08972688
    },
    "49098509": {
      "en": "Obakamiga Lake",
      "fr": "Lac Obakamiga",
      "lat": 49.11469419,
      "long": -85.1196958
    },
    "49098542": {
      "en": "Gaugino Lake",
      "fr": "Lac Gaugino",
      "lat": 49.14148859,
      "long": -85.70160517
    },
    "49098545": {
      "en": "Mose Lake",
      "fr": "Lac Mose",
      "lat": 49.14789728,
      "long": -85.74890744
    },
    "49098639": {
      "en": "Islington Lake",
      "fr": "Lac Islington",
      "lat": 49.14209888,
      "long": -86.65112941
    },
    "49098825": {
      "en": "Purdom Lake",
      "fr": "Lac Purdom",
      "lat": 49.15192542,
      "long": -88.42078329
    },
    "49098923": {
      "en": "Max Lake",
      "fr": "Lac Max",
      "lat": 49.14508942,
      "long": -89.37409169
    },
    "49099211": {
      "en": "Pekagoning Lake",
      "fr": "Lac Pekagoning",
      "lat": 49.15009409,
      "long": -92.19110916
    },
    "49099336": {
      "en": "Schistose Lake",
      "fr": "Lac Schistose",
      "lat": 49.15430541,
      "long": -93.6010217
    },
    "49108115": {
      "en": "Blue Lake",
      "fr": "Lac Blue",
      "lat": 49.18732627,
      "long": -81.27130587
    },
    "49108243": {
      "en": "Kapuskasing River",
      "fr": "Rivi��re de Kapuskasing",
      "lat": 49.16828322,
      "long": -82.71112568
    },
    "49108545": {
      "en": "Wowun Lake",
      "fr": "Lac Wowun",
      "lat": 49.18110041,
      "long": -85.74030148
    },
    "49108700": {
      "en": "Catlonite Lake",
      "fr": "Lac Catlonite",
      "lat": 49.17829271,
      "long": -87.00690345
    },
    "49108927": {
      "en": "Jolly Lake",
      "fr": "Lac Jolly",
      "lat": 49.16791656,
      "long": -89.45941887
    },
    "49109109": {
      "en": "Scotch Lake",
      "fr": "Lac Scotch",
      "lat": 49.17389788,
      "long": -91.1547319
    },
    "49109322": {
      "en": "Bluffpoint Lake",
      "fr": "Lac Bluffpoint",
      "lat": 49.17469117,
      "long": -93.37690054
    },
    "49118029": {
      "en": "Cabin Lake",
      "fr": "Lac Cabin",
      "lat": 49.18250454,
      "long": -80.48169379
    },
    "49118058": {
      "en": "Dora Lake",
      "fr": "Lac Dora",
      "lat": 49.18531213,
      "long": -80.96991417
    },
    "49118109": {
      "en": "Frederick House River",
      "fr": "Rivi��re Frederick House",
      "lat": 49.19312462,
      "long": -81.14752653
    },
    "49118126": {
      "en": "North Driftwood River",
      "fr": "Rivi��re North Driftwood",
      "lat": 49.18549521,
      "long": -81.43549049
    },
    "49118837": {
      "en": "Eskwanonwatin Lake",
      "fr": "Lac Eskwanonwatin",
      "lat": 49.165109,
      "long": -88.6185983
    },
    "49119202": {
      "en": "Dibble Lake",
      "fr": "Lac Dibble",
      "lat": 49.19672497,
      "long": -92.03443188
    },
    "49128138": {
      "en": "Mattagami River",
      "fr": "Rivi��re Mattagami",
      "lat": 49.20209676,
      "long": -81.64502426
    },
    "49128304": {
      "en": "Flatt Lake",
      "fr": "Lac Flatt",
      "lat": 49.20368359,
      "long": -83.0658011
    },
    "49128453": {
      "en": "Second Government Lake",
      "fr": "Lac Second Government",
      "lat": 49.19648133,
      "long": -84.89691742
    },
    "49128855": {
      "en": "Little Sturge Lake",
      "fr": "Lac Little Sturge",
      "lat": 49.21192296,
      "long": -88.90833228
    },
    "49128937": {
      "en": "Lac des Iles",
      "fr": "Lac des Iles",
      "lat": 49.20227935,
      "long": -89.60498777
    },
    "49129150": {
      "en": "Nora Lake",
      "fr": "Lac Nora",
      "lat": 49.2050868,
      "long": -91.84442938
    },
    "49138003": {
      "en": "Endelman Lake",
      "fr": "Lac Endelman",
      "lat": 49.21113005,
      "long": -80.04071464
    },
    "49138042": {
      "en": "Chin Lake",
      "fr": "Lac Chin",
      "lat": 49.22608363,
      "long": -80.69330275
    },
    "49138102": {
      "en": "Abitibi River",
      "fr": "Rivi��re Abitibi",
      "lat": 49.32532678,
      "long": -81.28168187
    },
    "49138241": {
      "en": "Kapuskasing River",
      "fr": "Rivi��re de Kapuskasing",
      "lat": 49.27070023,
      "long": -82.62659198
    },
    "49139352": {
      "en": "Kakagi Lake",
      "fr": "Lac Kakagi",
      "lat": 49.2147302,
      "long": -93.83753301
    },
    "49148223": {
      "en": "Wabicock Lake",
      "fr": "Lac Wabicock",
      "lat": 49.22309281,
      "long": -82.35937997
    },
    "49148753": {
      "en": "Kilgour Lake",
      "fr": "Lac Kilgour",
      "lat": 49.2432951,
      "long": -87.8938056
    },
    "49148756": {
      "en": "Cosgrave Lake",
      "fr": "Lac Cosgrave",
      "lat": 49.22968426,
      "long": -87.92829047
    },
    "49149128": {
      "en": "Kay Lake",
      "fr": "Lac Kay",
      "lat": 49.23670304,
      "long": -91.47333552
    },
    "49158148": {
      "en": "Departure Lake",
      "fr": "Lac Departure",
      "lat": 49.24329549,
      "long": -81.7963915
    },
    "49158205": {
      "en": "Groundhog River",
      "fr": "Rivi��re Groundhog",
      "lat": 49.25031452,
      "long": -82.06909667
    },
    "49158649": {
      "en": "Steel Lake",
      "fr": "Lac Steel",
      "lat": 49.20313403,
      "long": -86.84528231
    },
    "49158826": {
      "en": "Elizabeth Lake",
      "fr": "Lac Elizabeth",
      "lat": 49.25653969,
      "long": -88.43408898
    },
    "49158832": {
      "en": "Frazer Lake",
      "fr": "Lac Frazer",
      "lat": 49.25232826,
      "long": -88.52918178
    },
    "49158856": {
      "en": "Muskrat Lake",
      "fr": "Lac Muskrat",
      "lat": 49.25312169,
      "long": -88.94300027
    },
    "49159216": {
      "en": "Beak Lake",
      "fr": "Lac Beak",
      "lat": 49.2815028,
      "long": -92.25501302
    },
    "49159258": {
      "en": "Manitou Lake, Lower",
      "fr": "Lac Manitou, Lower",
      "lat": 49.26471807,
      "long": -92.96863628
    },
    "49159445": {
      "en": "Lake of the Woods",
      "fr": "Lac des Bois",
      "lat": 49.24970328,
      "long": -94.75080233
    },
    "49168107": {
      "en": "Louise Lake",
      "fr": "Lac Louise",
      "lat": 49.27308069,
      "long": -81.11499479
    },
    "49168108": {
      "en": "Margaret Lake",
      "fr": "Lac Margaret",
      "lat": 49.27613244,
      "long": -81.13440398
    },
    "49168201": {
      "en": "Watersnake Lake",
      "fr": "Lac Watersnake",
      "lat": 49.26368122,
      "long": -82.00580319
    },
    "49168530": {
      "en": "Mooseskull Lake",
      "fr": "Lac Mooseskull",
      "lat": 49.26569517,
      "long": -85.49408559
    },
    "49168626": {
      "en": "Kagiano Lake",
      "fr": "Lac Kagiano",
      "lat": 49.31012871,
      "long": -86.40582906
    },
    "49168821": {
      "en": "Cox Lake",
      "fr": "Lac Cox",
      "lat": 49.27289712,
      "long": -88.3563912
    },
    "49169100": {
      "en": "Savoy Lake",
      "fr": "Lac Savoy",
      "lat": 49.2761318,
      "long": -91.01001752
    },
    "49169322": {
      "en": "Lawrence Lake",
      "fr": "Lac Lawrence",
      "lat": 49.26752566,
      "long": -93.37329948
    },
    "49178525": {
      "en": "Poppy Lake",
      "fr": "Lac Poppy",
      "lat": 49.29291686,
      "long": -85.40918567
    },
    "49178955": {
      "en": "Hine Lake",
      "fr": "Lac Hine",
      "lat": 49.29871489,
      "long": -89.9188917
    },
    "49179236": {
      "en": "Meggisi Lake",
      "fr": "Lac Meggisi",
      "lat": 49.28528695,
      "long": -92.60669769
    },
    "49179243": {
      "en": "Scattergood Lake",
      "fr": "Lac Scattergood",
      "lat": 49.29688362,
      "long": -92.71692722
    },
    "49188156": {
      "en": "Shackleton Lake",
      "fr": "Lac Shackleton",
      "lat": 49.29932576,
      "long": -81.92639643
    },
    "49188928": {
      "en": "Whistle Lake",
      "fr": "Lac Whistle",
      "lat": 49.31391267,
      "long": -89.47388423
    },
    "49189351": {
      "en": "Cedar Tree Lake",
      "fr": "Lac Cedar Tree",
      "lat": 49.30951781,
      "long": -93.8596888
    },
    "49198147": {
      "en": "Ouellet Lake",
      "fr": "Lac Ouellet",
      "lat": 49.31232626,
      "long": -81.78473379
    },
    "49198447": {
      "en": "Wicksteed Lake",
      "fr": "Lac Wicksteed",
      "lat": 49.31812442,
      "long": -84.78388029
    },
    "49198524": {
      "en": "Fields Lake",
      "fr": "Lac Fields",
      "lat": 49.31293639,
      "long": -85.41101673
    },
    "49199203": {
      "en": "WE66-23 Lake",
      "fr": "Lac WE66-23",
      "lat": 49.31928358,
      "long": -92.05970046
    },
    "49199208": {
      "en": "Bending Lake",
      "fr": "Lac Bending",
      "lat": 49.32032117,
      "long": -92.13770342
    },
    "49199221": {
      "en": "Wapageisi Lake",
      "fr": "Lac Wapageisi",
      "lat": 49.32233531,
      "long": -92.35071618
    },
    "49199333": {
      "en": "Rowan Lake",
      "fr": "Lac Rowan",
      "lat": 49.31971071,
      "long": -93.56031127
    },
    "49208028": {
      "en": "Lac La France",
      "fr": "Lac La France",
      "lat": 49.33252897,
      "long": -80.47082954
    },
    "49208748": {
      "en": "Barbara Lake",
      "fr": "Lac Barbara",
      "lat": 49.34388106,
      "long": -87.80109318
    },
    "49208853": {
      "en": "Black Sturgeon Lake",
      "fr": "Lac Black Sturgeon",
      "lat": 49.35810218,
      "long": -88.88050027
    },
    "49209151": {
      "en": "Horseshoe Lake",
      "fr": "Lac Horseshoe",
      "lat": 49.34790909,
      "long": -91.85358468
    },
    "49218106": {
      "en": "Sucker River",
      "fr": "Rivi��re Sucker",
      "lat": 49.34809291,
      "long": -81.10248259
    },
    "49218142": {
      "en": "Sand Lake",
      "fr": "Lac Sand",
      "lat": 49.34333212,
      "long": -81.79468253
    },
    "49218222": {
      "en": "Gravel Lake",
      "fr": "Lac Gravel",
      "lat": 49.3515108,
      "long": -82.35608409
    },
    "49218523": {
      "en": "Flanders Lake",
      "fr": "Lac Flanders",
      "lat": 49.36231384,
      "long": -85.3747008
    },
    "49218823": {
      "en": "Oskawe Lake",
      "fr": "Lac Oskawe",
      "lat": 49.34967936,
      "long": -88.37720421
    },
    "49218901": {
      "en": "Circle Lake",
      "fr": "Lac Circle",
      "lat": 49.36011633,
      "long": -89.01880597
    },
    "49219015": {
      "en": "Pakashkan Lake",
      "fr": "Lac Pakashkan",
      "lat": 49.3555386,
      "long": -90.27191916
    },
    "49228019": {
      "en": "South Floodwood Lake",
      "fr": "Lac South Floodwood",
      "lat": 49.37592498,
      "long": -80.31219912
    },
    "49229346": {
      "en": "Caviar Lake",
      "fr": "Lac Caviar",
      "lat": 49.37470337,
      "long": -93.77503302
    },
    "49229354": {
      "en": "Dogpaw Lake",
      "fr": "Lac Dogpaw",
      "lat": 49.37470336,
      "long": -93.90613658
    },
    "49238022": {
      "en": "Bragg Lake",
      "fr": "Lac Bragg",
      "lat": 49.38569061,
      "long": -80.36829045
    },
    "49238148": {
      "en": "Indian Lake",
      "fr": "Lac Indian",
      "lat": 49.38233359,
      "long": -81.79541496
    },
    "49238208": {
      "en": "Bonner Lake",
      "fr": "Lac Bonner",
      "lat": 49.38672811,
      "long": -82.13190189
    },
    "49238612": {
      "en": "Waboosekon Lake",
      "fr": "Lac Waboosekon",
      "lat": 49.38471369,
      "long": -86.19690566
    },
    "49238714": {
      "en": "Wig Lake",
      "fr": "Lac Wig",
      "lat": 49.38507983,
      "long": -87.24298754
    },
    "49238732": {
      "en": "Trapnarrows Lake",
      "fr": "Lac Trapnarrows",
      "lat": 49.40149827,
      "long": -87.53851987
    },
    "49238919": {
      "en": "Gennis Lake",
      "fr": "Lac Gennis",
      "lat": 49.39008457,
      "long": -89.32941399
    },
    "49239218": {
      "en": "Stormy Lake",
      "fr": "Lac Stormy",
      "lat": 49.38971814,
      "long": -92.30780846
    },
    "49248028": {
      "en": "Starvation Lake",
      "fr": "Lac Starvation",
      "lat": 49.41248504,
      "long": -80.45392281
    },
    "49248033": {
      "en": "Little Abitibi Lake",
      "fr": "Lac Little Abitibi",
      "lat": 49.41089812,
      "long": -80.54303417
    },
    "49248043": {
      "en": "Humestone Lake",
      "fr": "Lac Humestone",
      "lat": 49.41590299,
      "long": -80.72082964
    },
    "49248115": {
      "en": "Eddie Lake",
      "fr": "Lac Eddie",
      "lat": 49.39393031,
      "long": -81.24890599
    },
    "49248227": {
      "en": "Kapuskasing River",
      "fr": "Rivi��re de Kapuskasing",
      "lat": 49.36829547,
      "long": -82.46442153
    },
    "49249008": {
      "en": "Grew Lake",
      "fr": "Lac Grew",
      "lat": 49.40650297,
      "long": -90.12219988
    },
    "49249247": {
      "en": "Manitou Lake, Upper",
      "fr": "Lac Manitou, Upper",
      "lat": 49.40693002,
      "long": -92.79541848
    },
    "49258044": {
      "en": "Zinger Lake",
      "fr": "Lac Zinger",
      "lat": 49.42231169,
      "long": -80.74249713
    },
    "49258501": {
      "en": "Nagagami Lake",
      "fr": "Lac Nagagami",
      "lat": 49.42188418,
      "long": -85.04181496
    },
    "49259034": {
      "en": "Wawang Lake",
      "fr": "Lac Wawang",
      "lat": 49.42652247,
      "long": -90.55219269
    },
    "49268005": {
      "en": "Sproule Lake",
      "fr": "Lac Sproule",
      "lat": 49.43030733,
      "long": -80.08801693
    },
    "49268011": {
      "en": "Wasicho Lake",
      "fr": "Lac Wasicho",
      "lat": 49.43232148,
      "long": -80.18658874
    },
    "49268055": {
      "en": "Thorning Lake",
      "fr": "Lac Thorning",
      "lat": 49.44349088,
      "long": -80.91418908
    },
    "49268210": {
      "en": "Remi Lake",
      "fr": "Lac Remi",
      "lat": 49.42951375,
      "long": -82.15271489
    },
    "49268226": {
      "en": "Kapuskasing River",
      "fr": "Rivi��re Kapuskasing",
      "lat": 49.48108845,
      "long": -82.41528822
    },
    "49268716": {
      "en": "Wintering Lake",
      "fr": "Lac Wintering",
      "lat": 49.43470142,
      "long": -87.2855901
    },
    "49269006": {
      "en": "Holly Lake",
      "fr": "Lac Holly",
      "lat": 49.4397061,
      "long": -90.08802019
    },
    "49269007": {
      "en": "Loganberry Lake",
      "fr": "Lac Loganberry",
      "lat": 49.44672515,
      "long": -90.1236037
    },
    "49269132": {
      "en": "Little Sandbar Lake",
      "fr": "Petit lac Sandbar",
      "lat": 49.44928852,
      "long": -91.53961976
    },
    "49269220": {
      "en": "Long Lake",
      "fr": "Lac Long",
      "lat": 49.4497157,
      "long": -92.34253749
    },
    "49269432": {
      "en": "Buck Lake",
      "fr": "Lac Buck",
      "lat": 49.42792598,
      "long": -94.52503325
    },
    "49278027": {
      "en": "Shirley Lake",
      "fr": "Lac Shirley",
      "lat": 49.44971649,
      "long": -80.457707
    },
    "49278203": {
      "en": "Audrey Lake",
      "fr": "Lac Audrey",
      "lat": 49.45227988,
      "long": -82.04968751
    },
    "49278521": {
      "en": "Bound Lake",
      "fr": "Lac Bound",
      "lat": 49.45789491,
      "long": -85.33130481
    },
    "49278547": {
      "en": "Ramsay Lake",
      "fr": "Lac Ramsay",
      "lat": 49.45209654,
      "long": -85.78668826
    },
    "49278738": {
      "en": "Parks Lake",
      "fr": "Lac Parks",
      "lat": 49.45649095,
      "long": -87.62299256
    },
    "49279053": {
      "en": "Selwyn Lake",
      "fr": "Lac Selwyn",
      "lat": 49.45868798,
      "long": -90.88800823
    },
    "49279317": {
      "en": "Tadpole Lake",
      "fr": "Lac Tadpole",
      "lat": 49.46509649,
      "long": -93.29749383
    },
    "49279332": {
      "en": "Atikwa Lake",
      "fr": "Lac Atikwa",
      "lat": 49.46473026,
      "long": -93.54889772
    },
    "49288440": {
      "en": "Nagagamisis Lake",
      "fr": "Lac Nagagamisis",
      "lat": 49.47730414,
      "long": -84.65723233
    },
    "49288533": {
      "en": "White Otter Lake",
      "fr": "Lac White Otter",
      "lat": 49.47467957,
      "long": -85.54688105
    },
    "49289135": {
      "en": "Sandbar Lake",
      "fr": "Lac Sandbar",
      "lat": 49.46808734,
      "long": -91.59528384
    },
    "49298146": {
      "en": "Mattagami River",
      "fr": "Rivi��re Mattagami",
      "lat": 49.53290735,
      "long": -81.68158437
    },
    "49308022": {
      "en": "Baker Lake",
      "fr": "Lac Baker",
      "lat": 49.50928682,
      "long": -80.37360053
    },
    "49308045": {
      "en": "Pierre Lake",
      "fr": "Lac Pierre",
      "lat": 49.50293914,
      "long": -80.71503131
    },
    "49308500": {
      "en": "Hiawatha Lake",
      "fr": "Lac Hiawatha",
      "lat": 49.51532902,
      "long": -85.01190774
    },
    "49308650": {
      "en": "Long Lake",
      "fr": "Lac Long",
      "lat": 49.47510672,
      "long": -86.89050942
    },
    "49309002": {
      "en": "Kearns Lake",
      "fr": "Lac Kearns",
      "lat": 49.50873688,
      "long": -90.01221451
    },
    "49309309": {
      "en": "Pikwans Lake",
      "fr": "Lac Pikwans",
      "lat": 49.51032356,
      "long": -93.15741812
    },
    "49309336": {
      "en": "Populus Lake",
      "fr": "Lac Populus",
      "lat": 49.50708866,
      "long": -93.61280155
    },
    "49318349": {
      "en": "Coppell Lake",
      "fr": "Lac Coppell",
      "lat": 49.52289746,
      "long": -83.81281067
    },
    "49318711": {
      "en": "Gamsby Lake",
      "fr": "Lac Gamsby",
      "lat": 49.51789235,
      "long": -87.18158618
    },
    "49318720": {
      "en": "South Beatty Lake",
      "fr": "Lac South Beatty",
      "lat": 49.52088307,
      "long": -87.34851738
    },
    "49318809": {
      "en": "Blackwater River",
      "fr": "Rivi��re Blackwater",
      "lat": 49.5203337,
      "long": -88.14270709
    },
    "49319011": {
      "en": "Weaver Lake",
      "fr": "Lac Weaver",
      "lat": 49.53028228,
      "long": -90.19690696
    },
    "49319237": {
      "en": "Whitewater Lake",
      "fr": "Lac Whitewater",
      "lat": 49.53193005,
      "long": -92.62079686
    },
    "49319350": {
      "en": "Dryberry Lake",
      "fr": "Lac Dryberry",
      "lat": 49.52930544,
      "long": -93.83692272
    },
    "49328016": {
      "en": "Tweed Lake, Lower",
      "fr": "Lac Tweed, Lower",
      "lat": 49.53449435,
      "long": -80.26410343
    },
    "49329111": {
      "en": "Sowden Lake",
      "fr": "Lac Sowden",
      "lat": 49.54932518,
      "long": -91.19751762
    },
    "49329123": {
      "en": "Cecil Lake",
      "fr": "Lac Cecil",
      "lat": 49.5394985,
      "long": -91.39160948
    },
    "49329236": {
      "en": "Rock Lake",
      "fr": "Lac Rock",
      "lat": 49.54450329,
      "long": -92.59742039
    },
    "49329238": {
      "en": "Minnehaha Lake",
      "fr": "Lac Minnehaha",
      "lat": 49.52393444,
      "long": -92.64502783
    },
    "49329404": {
      "en": "Black Lake",
      "fr": "Lac Black",
      "lat": 49.53888794,
      "long": -94.08130756
    },
    "49338047": {
      "en": "Montreuil Lake",
      "fr": "Lac Montreuil",
      "lat": 49.55152313,
      "long": -80.79388876
    },
    "49338135": {
      "en": "Abimatinu Lake",
      "fr": "Lac Abimatinu",
      "lat": 49.54932582,
      "long": -81.57892321
    },
    "49338211": {
      "en": "Maxwell Lake",
      "fr": "Lac Maxwell",
      "lat": 49.55231651,
      "long": -82.17719001
    },
    "49339140": {
      "en": "Indian Lake",
      "fr": "Lac Indian",
      "lat": 49.54889789,
      "long": -91.66638984
    },
    "49339501": {
      "en": "Shoal Lake",
      "fr": "Lac Shoal",
      "lat": 49.57068718,
      "long": -95.01520677
    },
    "49348018": {
      "en": "Tweed Lake",
      "fr": "Lac Tweed",
      "lat": 49.56653781,
      "long": -80.29529241
    },
    "49349132": {
      "en": "Paguchi Lake",
      "fr": "Lac Paguchi",
      "lat": 49.57331197,
      "long": -91.53998599
    },
    "49349149": {
      "en": "Mameigwess Lake",
      "fr": "Lac Mameigwess",
      "lat": 49.55091204,
      "long": -91.82550854
    },
    "49349153": {
      "en": "Mud Lake",
      "fr": "Lac Mud",
      "lat": 49.57373919,
      "long": -91.89160964
    },
    "49349237": {
      "en": "Dinorwic Lake",
      "fr": "Lac Dinorwic",
      "lat": 49.56531628,
      "long": -92.6250083
    },
    "49358050": {
      "en": "Harris Lake",
      "fr": "Lac Harris",
      "lat": 49.59168426,
      "long": -80.82300255
    },
    "49358210": {
      "en": "Gurney Lake",
      "fr": "Lac Gurney",
      "lat": 49.57508262,
      "long": -82.16443366
    },
    "49358607": {
      "en": "Koandowango Lake",
      "fr": "Lac Koandowango",
      "lat": 49.5936981,
      "long": -86.12689835
    },
    "49367959": {
      "en": "Burntbush Lake",
      "fr": "Lac Burntbush",
      "lat": 49.60010716,
      "long": -79.98138849
    },
    "49368017": {
      "en": "Tweed Lake, North",
      "fr": "Lac Tweed, Nord",
      "lat": 49.61048313,
      "long": -80.27917912
    },
    "49368019": {
      "en": "Wakwayowkastic Lake",
      "fr": "Lac Wakwayowkastic",
      "lat": 49.60950656,
      "long": -80.30640081
    },
    "49368756": {
      "en": "Empire Lake",
      "fr": "Lac Empire",
      "lat": 49.61591478,
      "long": -87.93720167
    },
    "49369245": {
      "en": "Godson Lake",
      "fr": "Lac Godson",
      "lat": 49.60791881,
      "long": -92.76160503
    },
    "49378230": {
      "en": "Francklyn Lake",
      "fr": "Lac Francklyn",
      "lat": 49.62092001,
      "long": -82.4965871
    },
    "49378437": {
      "en": "Claire Lake",
      "fr": "Lac Claire",
      "lat": 49.61670846,
      "long": -84.61279874
    },
    "49378625": {
      "en": "McKay Lake",
      "fr": "Lac McKay",
      "lat": 49.61329037,
      "long": -86.43799465
    },
    "49379132": {
      "en": "Victoria Lake",
      "fr": "Lac Victoria",
      "lat": 49.62452047,
      "long": -91.54322087
    },
    "49379151": {
      "en": "Gustauson Lake",
      "fr": "Lac Gustauson",
      "lat": 49.62232318,
      "long": -91.85639235
    },
    "49379233": {
      "en": "Dinorwic Lake",
      "fr": "Lac Dinorwic",
      "lat": 49.62671766,
      "long": -92.55719823
    },
    "49379405": {
      "en": "Andy Lake",
      "fr": "Lac Andy",
      "lat": 49.62909791,
      "long": -94.08631246
    },
    "49388158": {
      "en": "Groundhog River",
      "fr": "Rivi��re Groundhog",
      "lat": 49.63373743,
      "long": -81.9547168
    },
    "49388432": {
      "en": "Redpine Lake",
      "fr": "Lac Redpine",
      "lat": 49.63392038,
      "long": -84.54169276
    },
    "49398221": {
      "en": "Pearce Lake",
      "fr": "Lac Pearce",
      "lat": 49.65168174,
      "long": -82.35059096
    },
    "49398226": {
      "en": "Owlet Lake",
      "fr": "Lac Owlet",
      "lat": 49.65033896,
      "long": -82.4414113
    },
    "49398928": {
      "en": "Roaring River",
      "fr": "Rivi��re Roaring",
      "lat": 49.65168127,
      "long": -89.47821779
    },
    "49398940": {
      "en": "Holinshead Lake",
      "fr": "Lac Holinshead",
      "lat": 49.65430577,
      "long": -89.67578865
    },
    "49399131": {
      "en": "Barrel Lake",
      "fr": "Lac Barrel",
      "lat": 49.65931052,
      "long": -91.53443181
    },
    "49399157": {
      "en": "Unnamed Lake",
      "fr": "Lac sans nom",
      "lat": 49.6633388,
      "long": -91.95752764
    },
    "49399247": {
      "en": "Trap Lake",
      "fr": "Lac Trap",
      "lat": 49.66028698,
      "long": -92.78852155
    },
    "49408017": {
      "en": "Kesagami Lake, Upper",
      "fr": "Lac Kesagami, Upper",
      "lat": 49.67328831,
      "long": -80.28583197
    },
    "49408258": {
      "en": "Raft Lake",
      "fr": "Lac Raft",
      "lat": 49.66730671,
      "long": -82.97559117
    },
    "49408734": {
      "en": "Blackwater Lake",
      "fr": "Lac Blackwater",
      "lat": 49.67109059,
      "long": -87.56861025
    },
    "49408800": {
      "en": "Sturgeon (Namewaminikan) River",
      "fr": "Rivi��re Sturgeon (Namewaminikan)",
      "lat": 49.68152757,
      "long": -88.00519487
    },
    "49409222": {
      "en": "Avery Lake",
      "fr": "Lac Avery",
      "lat": 49.68250381,
      "long": -92.38300385
    },
    "49409246": {
      "en": "Mile Lake",
      "fr": "Lac Mile",
      "lat": 49.68152722,
      "long": -92.77973249
    },
    "49409415": {
      "en": "Blindfold Lake",
      "fr": "Lac Blindfold",
      "lat": 49.66932007,
      "long": -94.25251125
    },
    "49418015": {
      "en": "George Lake",
      "fr": "Lac George",
      "lat": 49.67908665,
      "long": -80.26019719
    },
    "49418224": {
      "en": "Ghost Lake",
      "fr": "Lac Ghost",
      "lat": 49.674692,
      "long": -82.39972428
    },
    "49418245": {
      "en": "Allan Lake",
      "fr": "Lac Allan",
      "lat": 49.67591268,
      "long": -82.75409452
    },
    "49419033": {
      "en": "Little Metionga Lake",
      "fr": "Petit lac Metionga",
      "lat": 49.68329741,
      "long": -90.535286
    },
    "49419058": {
      "en": "Mattawa Lake",
      "fr": "Lac Mattawa",
      "lat": 49.69312404,
      "long": -90.98029346
    },
    "49419132": {
      "en": "Gooch Lake",
      "fr": "Lac Gooch",
      "lat": 49.69251364,
      "long": -91.54938543
    },
    "49419141": {
      "en": "Heathwalt Lake",
      "fr": "Lac Heathwalt",
      "lat": 49.69831197,
      "long": -91.69501536
    },
    "49419240": {
      "en": "Butler Lake",
      "fr": "Lac Butler",
      "lat": 49.6760951,
      "long": -92.65992044
    },
    "49419341": {
      "en": "Lake 305",
      "fr": "Lac 305",
      "lat": 49.69153691,
      "long": -93.69220835
    },
    "49419344": {
      "en": "Roddy Lake",
      "fr": "Lac Roddy",
      "lat": 49.67652226,
      "long": -93.72919566
    },
    "49428223": {
      "en": "Bovril Lake",
      "fr": "Lac Bovril",
      "lat": 49.70392784,
      "long": -82.39270524
    },
    "49428241": {
      "en": "Zadi Lake",
      "fr": "Lac Zadi",
      "lat": 49.70173056,
      "long": -82.67828883
    },
    "49428246": {
      "en": "St. Amand Lake",
      "fr": "Lac St. Amand",
      "lat": 49.71112997,
      "long": -82.76752226
    },
    "49428653": {
      "en": "Kenogamisis Lake",
      "fr": "Lac Kenogamisis",
      "lat": 49.69111017,
      "long": -86.87909587
    },
    "49428657": {
      "en": "Kenogamisis Lake",
      "fr": "Lac Kenogamisis",
      "lat": 49.69892267,
      "long": -86.94049726
    },
    "49428704": {
      "en": "Magnet Lake",
      "fr": "Lac Magnet",
      "lat": 49.7045379,
      "long": -87.06769457
    },
    "49428736": {
      "en": "Beatty Lake",
      "fr": "Lac Beatty",
      "lat": 49.7158904,
      "long": -87.60193547
    },
    "49428751": {
      "en": "Windigokan Lake",
      "fr": "Lac Windigokan",
      "lat": 49.70111987,
      "long": -87.84131542
    },
    "49428752": {
      "en": "Knox Lake",
      "fr": "Lac Knox",
      "lat": 49.7119231,
      "long": -87.85791699
    },
    "49428758": {
      "en": "Sturgeon (Namewaminikan) River",
      "fr": "Rivi��re Sturgeon (Namewaminikan)",
      "lat": 49.6989226,
      "long": -87.97083207
    },
    "49429313": {
      "en": "Eagle Lake",
      "fr": "Lac Eagle",
      "lat": 49.6815272,
      "long": -93.0697106
    },
    "49429402": {
      "en": "Kilvert Lake",
      "fr": "Lac Kilvert",
      "lat": 49.69672488,
      "long": -94.03888814
    },
    "49429508": {
      "en": "High Lake",
      "fr": "Lac High",
      "lat": 49.70069207,
      "long": -95.14020683
    },
    "49438158": {
      "en": "Groundhog River",
      "fr": "Rivi��re Groundhog",
      "lat": 49.72010219,
      "long": -81.96808352
    },
    "49438205": {
      "en": "Torrance Lake",
      "fr": "Lac Torrance",
      "lat": 49.70813929,
      "long": -82.08521002
    },
    "49438606": {
      "en": "Pagwachuan Lake",
      "fr": "Lac Pagwachuan",
      "lat": 49.71753845,
      "long": -86.08862931
    },
    "49438749": {
      "en": "Brookbank Creek",
      "fr": "Ruisseau Brookbank",
      "lat": 49.72113941,
      "long": -87.82221142
    },
    "49439015": {
      "en": "Empire Lake",
      "fr": "Lac Empire",
      "lat": 49.71930818,
      "long": -90.2547073
    },
    "49439024": {
      "en": "Brightsand Lake",
      "fr": "Lac Brightsand",
      "lat": 49.72528961,
      "long": -90.40692903
    },
    "49439028": {
      "en": "Metionga Lake",
      "fr": "Lac Metionga",
      "lat": 49.72028473,
      "long": -90.46863559
    },
    "49439110": {
      "en": "Crystal Lake",
      "fr": "Lac Crystal",
      "lat": 49.72950098,
      "long": -91.16803767
    },
    "49439118": {
      "en": "Wintering Lake",
      "fr": "Lac Wintering",
      "lat": 49.72889062,
      "long": -91.31220275
    },
    "49439150": {
      "en": "Arethusa Lake",
      "fr": "Lac Arethusa",
      "lat": 49.72748677,
      "long": -91.83911941
    },
    "49439350": {
      "en": "Porcus Lake",
      "fr": "Lac Porcus",
      "lat": 49.7258997,
      "long": -93.84638321
    },
    "49439410": {
      "en": "Dogtooth Lake",
      "fr": "Lac Dogtooth",
      "lat": 49.71790407,
      "long": -94.18219874
    },
    "49439418": {
      "en": "Longbow Lake",
      "fr": "Lac Longbow",
      "lat": 49.71973511,
      "long": -94.30750395
    },
    "49448043": {
      "en": "Sand Lake",
      "fr": "Lac Sand",
      "lat": 49.74530978,
      "long": -80.71722861
    },
    "49448221": {
      "en": "Douglas Lake",
      "fr": "Lac Douglas",
      "lat": 49.73450646,
      "long": -82.36298111
    },
    "49448711": {
      "en": "Wildgoose Lake",
      "fr": "Lac Wildgoose",
      "lat": 49.72651055,
      "long": -87.17499441
    },
    "49448751": {
      "en": "Sturgeon (Namewaminikan) River",
      "fr": "Rivi��re Sturgeon (Namewaminikan)",
      "lat": 49.73890064,
      "long": -87.88440626
    },
    "49448755": {
      "en": "Sturgeon (Namewaminikan) River",
      "fr": "Rivi��re Sturgeon (Namewaminikan)",
      "lat": 49.72388598,
      "long": -87.94721146
    },
    "49449227": {
      "en": "Hartman Lake",
      "fr": "Lac Hartman",
      "lat": 49.74970352,
      "long": -92.45020359
    },
    "49449244": {
      "en": "Wabigoon Lake",
      "fr": "Lac Wabigoon",
      "lat": 49.73810682,
      "long": -92.71881939
    },
    "49458016": {
      "en": "Kesagami Lake, Little",
      "fr": "Lac Kesagami, Little",
      "lat": 49.74909399,
      "long": -80.27631049
    },
    "49458221": {
      "en": "Guilfoyle Lake",
      "fr": "Lac Guilfoyle",
      "lat": 49.75531945,
      "long": -82.36108903
    },
    "49458232": {
      "en": "Eleanor Lake",
      "fr": "Lac Eleanor",
      "lat": 49.7495211,
      "long": -82.53809104
    },
    "49459342": {
      "en": "Winnange Lake",
      "fr": "Lac Winnange",
      "lat": 49.75891973,
      "long": -93.70081432
    },
    "49459348": {
      "en": "#625 (Fish) Lake",
      "fr": "Lac no 625 (Fish)",
      "lat": 49.75251103,
      "long": -93.79828749
    },
    "49468158": {
      "en": "Mattagami River",
      "fr": "Rivi��re Mattagami",
      "lat": 49.80408657,
      "long": -81.99158207
    },
    "49469141": {
      "en": "Kukukus Lake",
      "fr": "Lac Kukukus",
      "lat": 49.77210349,
      "long": -91.68640942
    },
    "49469400": {
      "en": "Hawk Lake",
      "fr": "Lac Hawk",
      "lat": 49.77430057,
      "long": -94.00141256
    },
    "49469406": {
      "en": "Percy Lake",
      "fr": "Lac Percy",
      "lat": 49.76813601,
      "long": -94.10028954
    },
    "49469421": {
      "en": "Breakneck Lake",
      "fr": "Lac Breakneck",
      "lat": 49.76532837,
      "long": -94.34272125
    },
    "49478359": {
      "en": "Banks Lake",
      "fr": "Lac Banks",
      "lat": 49.7847383,
      "long": -83.98999582
    },
    "49478408": {
      "en": "Pike Lake",
      "fr": "Lac Pike",
      "lat": 49.78028273,
      "long": -84.1304988
    },
    "49478410": {
      "en": "Calstock Lake",
      "fr": "Lac Calstock",
      "lat": 49.77588819,
      "long": -84.16278641
    },
    "49478657": {
      "en": "Hutchison Lake",
      "fr": "Lac Hutchison",
      "lat": 49.78589778,
      "long": -86.95252121
    },
    "49478737": {
      "en": "Sturgeon (Namewaminikan) River - upstream Hwy 801",
      "fr": "Rivi��re Sturgeon (Namewaminikan) - en amont de la route 801",
      "lat": 49.78528738,
      "long": -87.62610541
    },
    "49479129": {
      "en": "Press Lake",
      "fr": "Lac Press",
      "lat": 49.79230614,
      "long": -91.48529852
    },
    "49479240": {
      "en": "Thunder Lake",
      "fr": "Lac Thunder",
      "lat": 49.7772914,
      "long": -92.6657188
    },
    "49479502": {
      "en": "Whitefish Lake",
      "fr": "Lac Whitefish",
      "lat": 49.78931514,
      "long": -95.03962088
    },
    "49488218": {
      "en": "Bennet Lake",
      "fr": "Lac Bennet",
      "lat": 49.80408655,
      "long": -82.30188491
    },
    "49488324": {
      "en": "Shannon Lake",
      "fr": "Lac Shannon",
      "lat": 49.79187945,
      "long": -83.38910451
    },
    "49488358": {
      "en": "Stoddart Lake",
      "fr": "Lac Stoddart",
      "lat": 49.80512405,
      "long": -83.97168527
    },
    "49488402": {
      "en": "St. Joseph Lake",
      "fr": "Lac St. Joseph",
      "lat": 49.80030227,
      "long": -84.03131664
    },
    "49488407": {
      "en": "Wilmot Lake",
      "fr": "Lac Wilmot",
      "lat": 49.79889845,
      "long": -84.12329665
    },
    "49488409": {
      "en": "Constance Lake",
      "fr": "Lac Constance",
      "lat": 49.80512404,
      "long": -84.15692703
    },
    "49488410": {
      "en": "West Lake",
      "fr": "Lac West",
      "lat": 49.78473829,
      "long": -84.15741531
    },
    "49488429": {
      "en": "Shekak River",
      "fr": "Rivi��re Shekak",
      "lat": 49.80329296,
      "long": -84.49548916
    },
    "49488552": {
      "en": "Klotz Lake",
      "fr": "Lac Klotz",
      "lat": 49.80188906,
      "long": -85.86279918
    },
    "49488958": {
      "en": "Kashishibog Lake",
      "fr": "Lac Kashishibog",
      "lat": 49.80793126,
      "long": -89.97083272
    },
    "49489054": {
      "en": "Bell Lake",
      "fr": "Lac Bell",
      "lat": 49.81049466,
      "long": -90.91529102
    },
    "49489420": {
      "en": "Island Lake",
      "fr": "Lac Island",
      "lat": 49.79108521,
      "long": -94.33381012
    },
    "49489452": {
      "en": "Pickerel Lake",
      "fr": "Lac Pickerel",
      "lat": 49.79450314,
      "long": -94.87110276
    },
    "49498343": {
      "en": "Pivabiska Lake",
      "fr": "Lac Pivabiska",
      "lat": 49.81311967,
      "long": -83.70691468
    },
    "49498411": {
      "en": "Louise Lake",
      "fr": "Lac Louise",
      "lat": 49.81928419,
      "long": -84.17609208
    },
    "49498603": {
      "en": "Castlebar Lake",
      "fr": "Lac Castlebar",
      "lat": 49.82508241,
      "long": -86.04608781
    },
    "49499010": {
      "en": "Sparkling Lake",
      "fr": "Lac Sparkling",
      "lat": 49.81409579,
      "long": -90.17719265
    },
    "49499154": {
      "en": "Amik Lake",
      "fr": "Lac Amik",
      "lat": 49.83069723,
      "long": -91.91248371
    },
    "49499221": {
      "en": "Big Sandy (Sandybeach) Lake",
      "fr": "Lac Big Sandy (Sandybeach)",
      "lat": 49.82312883,
      "long": -92.35639254
    },
    "49508346": {
      "en": "Wolverine Lake",
      "fr": "Lac Wolverine",
      "lat": 49.83210161,
      "long": -83.75580386
    },
    "49508348": {
      "en": "Hanlan Lake",
      "fr": "Lac Hanlan",
      "lat": 49.83069779,
      "long": -83.79669743
    },
    "49508354": {
      "en": "Fushimi Lake",
      "fr": "Lac Fushimi",
      "lat": 49.82288529,
      "long": -83.88471015
    },
    "49508830": {
      "en": "Lake Nipigon",
      "fr": "Lac Nipigon",
      "lat": 49.83332199,
      "long": -88.50000706
    },
    "49509311": {
      "en": "Wabigoon River",
      "fr": "Rivi��re Wabigoon",
      "lat": 49.8419276,
      "long": -93.1879968
    },
    "49509350": {
      "en": "Little Joe Lake",
      "fr": "Lac Little Joe",
      "lat": 49.84571172,
      "long": -93.85859026
    },
    "49509355": {
      "en": "Island Lake",
      "fr": "Lac Island",
      "lat": 49.83448125,
      "long": -93.93110005
    },
    "49518005": {
      "en": "Lawagamau (Kattawagami) Lake",
      "fr": "Lac Lawagamau (Kattawagami)",
      "lat": 49.83210182,
      "long": -80.07910584
    },
    "49518123": {
      "en": "Takwata Lake",
      "fr": "Lac Takwata",
      "lat": 49.84528534,
      "long": -81.3864183
    },
    "49518740": {
      "en": "Pinel Lake",
      "fr": "Lac Pinel",
      "lat": 49.85590506,
      "long": -87.67249215
    },
    "49519100": {
      "en": "Darkwater Lake",
      "fr": "Lac Darkwater",
      "lat": 49.85193753,
      "long": -91.00360893
    },
    "49519342": {
      "en": "Augite Lake",
      "fr": "Lac Augite",
      "lat": 49.86310676,
      "long": -93.71442519
    },
    "49519425": {
      "en": "Black Sturgeon Lakes",
      "fr": "Lacs Black Sturgeon",
      "lat": 49.85370728,
      "long": -94.43299229
    },
    "49528404": {
      "en": "Kabinakagami River",
      "fr": "Rivi��re Kabinakagami",
      "lat": 49.87391067,
      "long": -84.0726985
    },
    "49528757": {
      "en": "North Wind Lake",
      "fr": "Lac North Wind",
      "lat": 49.85193776,
      "long": -87.96271441
    },
    "49528922": {
      "en": "Crevasse Lake",
      "fr": "Lac Crevasse",
      "lat": 49.86731852,
      "long": -89.37030764
    },
    "49529018": {
      "en": "Rude Lake",
      "fr": "Lac Rude",
      "lat": 49.87012606,
      "long": -90.3133011
    },
    "49529223": {
      "en": "Tablerock Lake",
      "fr": "Lac Tablerock",
      "lat": 49.875497,
      "long": -92.38001316
    },
    "49529410": {
      "en": "Silver Lake",
      "fr": "Lac Silver",
      "lat": 49.87653446,
      "long": -94.17859769
    },
    "49529452": {
      "en": "Pelicanpouch Lake",
      "fr": "Lac Pelicanpouch",
      "lat": 49.85529416,
      "long": -94.87030932
    },
    "49538129": {
      "en": "Abitibi River",
      "fr": "Rivi��re Abitibi",
      "lat": 49.74530974,
      "long": -81.48053453
    },
    "49538331": {
      "en": "Ritchie Lake",
      "fr": "Lac Ritchie",
      "lat": 49.87891559,
      "long": -83.5197198
    },
    "49539053": {
      "en": "Lyon Lake",
      "fr": "Lac Lyon",
      "lat": 49.89069487,
      "long": -90.88251515
    },
    "49539117": {
      "en": "Towers Lake",
      "fr": "Lac Towers",
      "lat": 49.88892482,
      "long": -91.28669008
    },
    "49539222": {
      "en": "Tom Chief Lake",
      "fr": "Lac Tom Chief",
      "lat": 49.87732806,
      "long": -92.36249607
    },
    "49539224": {
      "en": "Crossecho Lake",
      "fr": "Lac Crossecho",
      "lat": 49.8964931,
      "long": -92.38910741
    },
    "49539345": {
      "en": "Little Gordon Lake",
      "fr": "Lac Little Gordon",
      "lat": 49.89289191,
      "long": -93.76331437
    },
    "49539435": {
      "en": "Winnipeg River",
      "fr": "Rivi��re Winnipeg",
      "lat": 49.88111206,
      "long": -94.58802164
    },
    "49539500": {
      "en": "Malachi Lake",
      "fr": "Lac Malachi",
      "lat": 49.89032834,
      "long": -95.00641776
    },
    "49548002": {
      "en": "Whaleshead Lake",
      "fr": "Lac Whaleshead",
      "lat": 49.90192605,
      "long": -80.03332947
    },
    "49549056": {
      "en": "Bell Creek",
      "fr": "Ruisseau Bell",
      "lat": 49.89972807,
      "long": -90.93329641
    },
    "49549235": {
      "en": "Gullwing Lake",
      "fr": "Lac Gullwing",
      "lat": 49.91169084,
      "long": -92.59168316
    },
    "49549350": {
      "en": "Daniels Lake",
      "fr": "Lac Daniels",
      "lat": 49.90870002,
      "long": -93.83753314
    },
    "49549412": {
      "en": "Plum Lake",
      "fr": "Lac Plum",
      "lat": 49.91010379,
      "long": -94.2152188
    },
    "49549414": {
      "en": "Cliff Lake",
      "fr": "Lac Cliff",
      "lat": 49.90729617,
      "long": -94.24500397
    },
    "49558605": {
      "en": "Fernow Lake",
      "fr": "Lac Fernow",
      "lat": 49.91828311,
      "long": -86.0529848
    },
    "49558900": {
      "en": "Cry Lake",
      "fr": "Lac Cry",
      "lat": 49.92652265,
      "long": -89.01111564
    },
    "49569014": {
      "en": "Harmon Lake",
      "fr": "Lac Harmon",
      "lat": 49.94391758,
      "long": -90.23419952
    },
    "49569322": {
      "en": "Wabigoon River",
      "fr": "Rivi��re Wabigoon",
      "lat": 49.94812877,
      "long": -93.38001348
    },
    "49569332": {
      "en": "Edward Lake",
      "fr": "Lac Edward",
      "lat": 49.94928842,
      "long": -93.54969127
    },
    "49569503": {
      "en": "Scot Lake, South",
      "fr": "Lac Scot, South",
      "lat": 49.93671506,
      "long": -95.05640558
    },
    "49577937": {
      "en": "Lower Detour Lake",
      "fr": "Lac Lower Detour",
      "lat": 49.94111065,
      "long": -79.62140306
    },
    "49578018": {
      "en": "Kesagami River",
      "fr": "Rivi��re Kesagami",
      "lat": 49.95008278,
      "long": -80.30579051
    },
    "49578159": {
      "en": "Howells Lake",
      "fr": "Lac Howells",
      "lat": 49.94013395,
      "long": -81.97998541
    },
    "49578305": {
      "en": "Wanzatika Lake",
      "fr": "Lac Wanzatika",
      "lat": 49.96070274,
      "long": -83.08112104
    },
    "49578644": {
      "en": "Burrows Lake",
      "fr": "Lac Burrows",
      "lat": 49.95227965,
      "long": -86.73828777
    },
    "49578922": {
      "en": "Obonga Lake",
      "fr": "Lac Obonga",
      "lat": 49.98291912,
      "long": -89.30750246
    },
    "49579111": {
      "en": "Penassi Lake",
      "fr": "Lac Penassi",
      "lat": 49.95148587,
      "long": -91.19550353
    },
    "49579257": {
      "en": "Rugby Lake",
      "fr": "Lac Rugby",
      "lat": 49.95789443,
      "long": -92.96363152
    },
    "49579358": {
      "en": "Big Island Lake",
      "fr": "Lac Big Island",
      "lat": 49.95172979,
      "long": -93.97821923
    },
    "49579414": {
      "en": "Cross Lake",
      "fr": "Lac Cross",
      "lat": 49.96393681,
      "long": -94.23420075
    },
    "49579439": {
      "en": "Gun Lake",
      "fr": "Lac Gun",
      "lat": 49.95868775,
      "long": -94.65503828
    },
    "49588118": {
      "en": "Little Abitibi River",
      "fr": "Petite rivi��re Abitibi",
      "lat": 49.97309298,
      "long": -81.30859847
    },
    "49588555": {
      "en": "Shacabac Lake",
      "fr": "Lac Shacabac",
      "lat": 49.966684,
      "long": -85.92041641
    },
    "49588615": {
      "en": "Chipman Lake",
      "fr": "Lac Chipman",
      "lat": 49.98371279,
      "long": -86.23969142
    },
    "49589046": {
      "en": "Sturgeon Lake",
      "fr": "Lac Sturgeon",
      "lat": 49.97467927,
      "long": -90.76880663
    },
    "49589200": {
      "en": "Minnitaki Lake",
      "fr": "Lac Minnitaki",
      "lat": 49.97193259,
      "long": -91.95801598
    },
    "49589354": {
      "en": "Shrub Lake",
      "fr": "Lac Shrub",
      "lat": 49.97248176,
      "long": -93.90522116
    },
    "49597941": {
      "en": "Mosquito Lake",
      "fr": "Lac Mosquito",
      "lat": 49.98011212,
      "long": -79.70190847
    },
    "49597951": {
      "en": "Hopper Lake",
      "fr": "Lac Hopper",
      "lat": 49.98932842,
      "long": -79.85193293
    },
    "49599117": {
      "en": "Lake of Bays",
      "fr": "Lac de Bays",
      "lat": 49.98432278,
      "long": -91.28778873
    },
    "49599135": {
      "en": "Bawden Lake",
      "fr": "Lac Bawden",
      "lat": 49.99048731,
      "long": -91.58972974
    },
    "49599344": {
      "en": "Canyon Lake",
      "fr": "Lac Canyon",
      "lat": 49.98188118,
      "long": -93.7393886
    },
    "49599503": {
      "en": "Scot Lake, North",
      "fr": "Lac Scot, Nord",
      "lat": 49.98548215,
      "long": -95.05030207
    },
    "50008135": {
      "en": "Pinard Creek",
      "fr": "Ruisseau Pinard",
      "lat": 50.03449434,
      "long": -81.56689935
    },
    "50008726": {
      "en": "Onaman Lake",
      "fr": "Lac Onaman",
      "lat": 50.00470881,
      "long": -87.43579777
    },
    "50009330": {
      "en": "Eye Lake",
      "fr": "Lac Eye",
      "lat": 50.01532847,
      "long": -93.5072108
    },
    "50009400": {
      "en": "Favel Lake",
      "fr": "Lac Favel",
      "lat": 49.99329474,
      "long": -93.97779199
    },
    "50009453": {
      "en": "Cygnet Lake",
      "fr": "Lac Cygnet",
      "lat": 49.99372191,
      "long": -94.88001394
    },
    "50019413": {
      "en": "Old Man Lake",
      "fr": "Lac Old Man",
      "lat": 50.0324793,
      "long": -94.22278719
    },
    "50028137": {
      "en": "Abitibi River",
      "fr": "Rivi��re Abitibi",
      "lat": 50.03833956,
      "long": -81.56580071
    },
    "50028138": {
      "en": "Foxville Creek",
      "fr": "Ruisseau Foxville",
      "lat": 50.03333467,
      "long": -81.63330562
    },
    "50028402": {
      "en": "Kabinakagami River",
      "fr": "Rivi��re Kabinakagami",
      "lat": 50.04090289,
      "long": -84.04181473
    },
    "50028905": {
      "en": "Pishidgi Lake",
      "fr": "Lac Pishidgi",
      "lat": 50.02808516,
      "long": -89.0766064
    },
    "50029401": {
      "en": "Keys Lake",
      "fr": "Lac Keys",
      "lat": 50.03791144,
      "long": -94.02271389
    },
    "50029404": {
      "en": "Tom Lake",
      "fr": "Lac Tom",
      "lat": 50.03650763,
      "long": -94.06440091
    },
    "50029448": {
      "en": "Gooseneck Lake",
      "fr": "Lac Gooseneck",
      "lat": 50.03589722,
      "long": -94.81031178
    },
    "50038254": {
      "en": "McLeister Lake",
      "fr": "Lac McLeister",
      "lat": 50.03449426,
      "long": -82.89880897
    },
    "50039021": {
      "en": "Seseganaga Lake",
      "fr": "Lac Seseganaga",
      "lat": 50.06592687,
      "long": -90.35303503
    },
    "50039104": {
      "en": "Gibraltar Lake",
      "fr": "Lac Gibraltar",
      "lat": 50.05249908,
      "long": -91.07581357
    },
    "50039330": {
      "en": "Clay Lake (Wabigoon River)",
      "fr": "Lac Clay (Rivi��re Wabigoon)",
      "lat": 50.04932506,
      "long": -93.48542125
    },
    "50049010": {
      "en": "Wapikaimaski Lake",
      "fr": "Lac Wapikaimaski",
      "lat": 50.04792151,
      "long": -90.13941191
    },
    "50049122": {
      "en": "Dominion Lake",
      "fr": "Lac Dominion",
      "lat": 50.06568265,
      "long": -91.37329902
    },
    "50049448": {
      "en": "Winnipeg River",
      "fr": "Rivi��re Winnipeg",
      "lat": 50.10370729,
      "long": -94.78223561
    },
    "50058311": {
      "en": "Missinaibi River (lower)",
      "fr": "Rivi��re Missinaibi (tron�_on inf.)",
      "lat": 50.06568321,
      "long": -83.20221484
    },
    "50058900": {
      "en": "Wabinosh Lake",
      "fr": "Lac Wabinosh",
      "lat": 50.07929367,
      "long": -88.99030267
    },
    "50059125": {
      "en": "Burnt Dam (Nagron) Lake",
      "fr": "Lac Burnt Dam  (Nagron)",
      "lat": 50.08753323,
      "long": -91.43219797
    },
    "50059236": {
      "en": "Mold Lake",
      "fr": "Lac Mold",
      "lat": 50.09931293,
      "long": -92.60639267
    },
    "50059403": {
      "en": "Delaney Lake",
      "fr": "Lac Delaney",
      "lat": 50.09308723,
      "long": -94.04859281
    },
    "50059439": {
      "en": "Big Sand Lake",
      "fr": "Lac Big Sand",
      "lat": 50.10889529,
      "long": -94.62861008
    },
    "50068212": {
      "en": "Mattagami River",
      "fr": "Rivi��re Mattagami",
      "lat": 50.06153289,
      "long": -82.16083266
    },
    "50068756": {
      "en": "Weewullee Lake",
      "fr": "Lac Weewullee",
      "lat": 50.09333183,
      "long": -87.93140341
    },
    "50068928": {
      "en": "Maggotte Lake",
      "fr": "Lac Maggotte",
      "lat": 50.10071698,
      "long": -89.46558359
    },
    "50068941": {
      "en": "Sandison Lake",
      "fr": "Lac Sandison",
      "lat": 50.11609782,
      "long": -89.6922072
    },
    "50069446": {
      "en": "Roughrock Lake",
      "fr": "Lac Roughrock",
      "lat": 50.10749147,
      "long": -94.75940846
    },
    "50078808": {
      "en": "Ombabika River",
      "fr": "Rivi��re Ombabika",
      "lat": 50.12110282,
      "long": -88.13690885
    },
    "50078852": {
      "en": "Castle Lake",
      "fr": "Lac Castle",
      "lat": 50.12708421,
      "long": -88.87219961
    },
    "50078913": {
      "en": "Bukemiga Lake",
      "fr": "Lac Bukemiga",
      "lat": 50.11090987,
      "long": -89.22193117
    },
    "50079050": {
      "en": "Eady Lake",
      "fr": "Lac Eady",
      "lat": 50.12348299,
      "long": -90.83161185
    },
    "50079354": {
      "en": "Meandering Lake",
      "fr": "Lac Meandering",
      "lat": 50.1160975,
      "long": -93.90613672
    },
    "50079355": {
      "en": "Wabigoon River",
      "fr": "Rivi��re Wabigoon",
      "lat": 50.12293343,
      "long": -93.92292139
    },
    "50079408": {
      "en": "Toothpick Lake",
      "fr": "Lac Toothpick",
      "lat": 50.11451056,
      "long": -94.12690094
    },
    "50088747": {
      "en": "Elbow Lake",
      "fr": "Lac Elbow",
      "lat": 50.1297088,
      "long": -87.79321978
    },
    "50088905": {
      "en": "Waweig Lake",
      "fr": "Lac Waweig",
      "lat": 50.12372726,
      "long": -89.09888426
    },
    "50089138": {
      "en": "Botsford Lake",
      "fr": "Lac Botsford",
      "lat": 50.14508938,
      "long": -91.64252519
    },
    "50099115": {
      "en": "Singapore Lake",
      "fr": "Lac Singapore",
      "lat": 50.16370513,
      "long": -91.25861395
    },
    "50099300": {
      "en": "Ord Lake",
      "fr": "Lac Ord",
      "lat": 50.15308488,
      "long": -93.01270384
    },
    "50099308": {
      "en": "Cedar Lake",
      "fr": "Lac Cedar",
      "lat": 50.20948136,
      "long": -93.13800906
    },
    "50099339": {
      "en": "Wabigoon River",
      "fr": "Rivi��re Wabigoon",
      "lat": 50.1422816,
      "long": -93.65052141
    },
    "50099358": {
      "en": "Mission Lake",
      "fr": "Lac Mission",
      "lat": 50.15833382,
      "long": -93.97919583
    },
    "50099359": {
      "en": "Grassy Narrows Lake",
      "fr": "Lac Grassy Narrows",
      "lat": 50.14148811,
      "long": -94.02863432
    },
    "50099400": {
      "en": "Garden Lake",
      "fr": "Lac Garden",
      "lat": 50.15668587,
      "long": -94.00641752
    },
    "50099403": {
      "en": "English River",
      "fr": "Rivi��re English",
      "lat": 50.15393928,
      "long": -94.06031158
    },
    "50099444": {
      "en": "Blueberry Lake",
      "fr": "Lac Blueberry",
      "lat": 50.15229128,
      "long": -94.74329518
    },
    "50107951": {
      "en": "Robin Lake",
      "fr": "Lac Robin",
      "lat": 50.17530257,
      "long": -79.84381528
    },
    "50108017": {
      "en": "Knight Lake",
      "fr": "Lac Knight",
      "lat": 50.16687969,
      "long": -80.28943311
    },
    "50108024": {
      "en": "Ministik Lake",
      "fr": "Lac Ministik",
      "lat": 50.1629124,
      "long": -80.38110794
    },
    "50108753": {
      "en": "Frank Lake",
      "fr": "Lac Frank",
      "lat": 50.16370538,
      "long": -87.89691855
    },
    "50109203": {
      "en": "Richardson Lake",
      "fr": "Lac Richardson",
      "lat": 50.1680996,
      "long": -92.06220306
    },
    "50109252": {
      "en": "Thaddeus Lake",
      "fr": "Lac Thaddeus",
      "lat": 50.17151751,
      "long": -92.88141718
    },
    "50109343": {
      "en": "Wabigoon River",
      "fr": "Rivi��re Wabigoon",
      "lat": 50.16968638,
      "long": -93.71973531
    },
    "50109356": {
      "en": "Victor Lake",
      "fr": "Lac Victor",
      "lat": 50.17109017,
      "long": -93.94861721
    },
    "50109400": {
      "en": "Garden Lake",
      "fr": "Lac Garden",
      "lat": 49.52069979,
      "long": -89.81690196
    },
    "50109412": {
      "en": "Big Fox Lake (English River)",
      "fr": "Lac Big Fox (Rivi��re English)",
      "lat": 50.18048957,
      "long": -94.21021397
    },
    "50109419": {
      "en": "Lount Lake (English River)",
      "fr": "Lac Lount (Rivi��re English)",
      "lat": 50.17090704,
      "long": -94.30750404
    },
    "50118633": {
      "en": "Twin Lake, Lower",
      "fr": "Lac Twin, Lower",
      "lat": 50.18110049,
      "long": -86.54321938
    },
    "50119124": {
      "en": "Marchington Lake",
      "fr": "Lac Marchington",
      "lat": 50.19953276,
      "long": -91.40082591
    },
    "50119356": {
      "en": "Slant Lake",
      "fr": "Lac Slant",
      "lat": 50.19532113,
      "long": -93.9426968
    },
    "50119502": {
      "en": "Tetu Lake",
      "fr": "Lac Tetu",
      "lat": 50.18189331,
      "long": -95.03821715
    },
    "50128616": {
      "en": "Jemar Lake",
      "fr": "Lac Jemar",
      "lat": 50.19269719,
      "long": -86.27161285
    },
    "50129010": {
      "en": "Kawaweogama Lake",
      "fr": "Lac Kawaweogama",
      "lat": 50.19709145,
      "long": -90.18610385
    },
    "50129145": {
      "en": "Mills Lake",
      "fr": "Lac Mills",
      "lat": 50.19349026,
      "long": -91.73529867
    },
    "50129441": {
      "en": "Snook Lake",
      "fr": "Lac Snook",
      "lat": 50.19532107,
      "long": -94.68891285
    },
    "50138034": {
      "en": "Nettogami Lake",
      "fr": "Lac Nettogami",
      "lat": 50.20032694,
      "long": -80.54419394
    },
    "50139025": {
      "en": "Fog Lake",
      "fr": "Lac Fog",
      "lat": 50.21869788,
      "long": -90.41889201
    },
    "50139255": {
      "en": "Square Lake",
      "fr": "Lac Square",
      "lat": 50.22651019,
      "long": -92.92829221
    },
    "50148907": {
      "en": "Mattice Lake",
      "fr": "Lac Mattice",
      "lat": 50.24048753,
      "long": -89.12219971
    },
    "50149405": {
      "en": "Indian Lake (English River)",
      "fr": "Lac Indian (Rivi��re English)",
      "lat": 50.23011117,
      "long": -94.08692293
    },
    "50149424": {
      "en": "Separation Lake (English River)",
      "fr": "Lac Separation (Rivi��re English)",
      "lat": 50.24591925,
      "long": -94.39551677
    },
    "50149454": {
      "en": "Trout Lake",
      "fr": "Lac Trout",
      "lat": 50.22467897,
      "long": -94.91553646
    },
    "50158639": {
      "en": "Cordingley Lake",
      "fr": "Lac Cordingley",
      "lat": 50.2417084,
      "long": -86.66248212
    },
    "50158957": {
      "en": "Redhead Lake",
      "fr": "Lac Redhead",
      "lat": 50.25971354,
      "long": -89.95832059
    },
    "50159131": {
      "en": "Stranger Lake",
      "fr": "Lac Stranger",
      "lat": 50.23590971,
      "long": -91.52362869
    },
    "50159240": {
      "en": "Lac Seul",
      "fr": "Lac Seul",
      "lat": 50.32508201,
      "long": -92.48719102
    },
    "50159354": {
      "en": "Wabigoon River",
      "fr": "Rivi��re Wabigoon",
      "lat": 50.25452525,
      "long": -93.90192532
    },
    "50168857": {
      "en": "Randolph Lake",
      "fr": "Lac Randolph",
      "lat": 50.27753588,
      "long": -88.96082272
    },
    "50169022": {
      "en": "Heathcote Lake",
      "fr": "Lac Heathcote",
      "lat": 50.28290687,
      "long": -90.38141643
    },
    "50178823": {
      "en": "Little Jackfish River (Lower)",
      "fr": "Rivi��re Little Jackfish (tron�_on inf.)",
      "lat": 50.29108573,
      "long": -88.37799782
    },
    "50178853": {
      "en": "Jojo Lake",
      "fr": "Lac Jojo",
      "lat": 50.30231617,
      "long": -88.87140619
    },
    "50179333": {
      "en": "Sup Lake",
      "fr": "Lac Sup",
      "lat": 50.30390272,
      "long": -93.55860247
    },
    "50179400": {
      "en": "Ball Lake (English River)",
      "fr": "Lac Ball (Rivi��re English)",
      "lat": 50.27088266,
      "long": -93.99140289
    },
    "50187941": {
      "en": "Corner Lakes",
      "fr": "Lacs Corner",
      "lat": 50.29291734,
      "long": -79.66083184
    },
    "50188640": {
      "en": "Alph Lake",
      "fr": "Lac Alph",
      "lat": 50.3203217,
      "long": -86.64411055
    },
    "50189308": {
      "en": "Perrault Lake",
      "fr": "Lac Perrault",
      "lat": 50.29108537,
      "long": -93.1408167
    },
    "50189318": {
      "en": "Cliff Lake",
      "fr": "Lac Cliff",
      "lat": 50.17090712,
      "long": -93.30109504
    },
    "50189400": {
      "en": "Ball Lake (English River)",
      "fr": "Lac Ball (Rivi��re English)",
      "lat": 50.30011851,
      "long": -94.00000885
    },
    "50189445": {
      "en": "Umfreville Lake (English River)",
      "fr": "Lac Umfreville (Rivi��re English)",
      "lat": 50.28089236,
      "long": -94.8061004
    },
    "50198650": {
      "en": "Esnagami Lake",
      "fr": "Lac Esnagami",
      "lat": 50.32331241,
      "long": -86.84168142
    },
    "50208201": {
      "en": "Mattagami River",
      "fr": "Rivi��re Mattagami",
      "lat": 50.21613496,
      "long": -82.17529801
    },
    "50208623": {
      "en": "Wababimiga Lake",
      "fr": "Lac Wababimiga",
      "lat": 50.34388129,
      "long": -86.37360265
    },
    "50209125": {
      "en": "Rapid Lake",
      "fr": "Lac Rapid",
      "lat": 50.32868317,
      "long": -91.40918775
    },
    "50209147": {
      "en": "Expanse Lake",
      "fr": "Lac Expanse",
      "lat": 50.34089017,
      "long": -91.78351648
    },
    "50209359": {
      "en": "Tide Lake",
      "fr": "Lac Tide",
      "lat": 50.33789927,
      "long": -93.9835904
    },
    "50219130": {
      "en": "Hik Lake",
      "fr": "Lac Hik",
      "lat": 50.35248687,
      "long": -91.51001787
    },
    "50229020": {
      "en": "Smye Lake",
      "fr": "Lac Smye",
      "lat": 50.36988199,
      "long": -90.34442913
    },
    "50229332": {
      "en": "Toole Lake",
      "fr": "Lac Toole",
      "lat": 50.36811172,
      "long": -93.52552142
    },
    "50229335": {
      "en": "Marshalok Lake",
      "fr": "Lac Marshalok",
      "lat": 50.37610732,
      "long": -93.58503072
    },
    "50229354": {
      "en": "Maynard Lake (English River)",
      "fr": "Lac Maynard (Rivi��re English)",
      "lat": 50.35749157,
      "long": -93.87110258
    },
    "50238015": {
      "en": "Kesagami Lake",
      "fr": "Lac Kesagami",
      "lat": 50.37293441,
      "long": -80.22998487
    },
    "50248308": {
      "en": "Martison Lake",
      "fr": "Lac Martison",
      "lat": 50.40473356,
      "long": -83.14270559
    },
    "50249021": {
      "en": "Silver Lake",
      "fr": "Lac Silver",
      "lat": 50.41169107,
      "long": -90.3532182
    },
    "50258702": {
      "en": "O'Sullivan Lake",
      "fr": "Lac O'Sullivan",
      "lat": 50.42170108,
      "long": -87.05658629
    },
    "50258905": {
      "en": "Caribou Lake",
      "fr": "Lac Caribou",
      "lat": 50.44593189,
      "long": -89.1071851
    },
    "50259457": {
      "en": "Routine Lake",
      "fr": "Lac Routine",
      "lat": 50.40253543,
      "long": -94.94141541
    },
    "50269123": {
      "en": "Bury Lake",
      "fr": "Lac Bury",
      "lat": 50.4365323,
      "long": -91.39112136
    },
    "50269313": {
      "en": "Wabaskang Lake",
      "fr": "Lac Wabaskang",
      "lat": 50.39209856,
      "long": -93.1688929
    },
    "50269326": {
      "en": "Anishinabi Lake",
      "fr": "Lac Anishinabi",
      "lat": 50.44013322,
      "long": -93.44330705
    },
    "50269350": {
      "en": "Oak Lake (English River)",
      "fr": "Lac Oak (Rivi��re English)",
      "lat": 50.43811903,
      "long": -93.78711819
    },
    "50269456": {
      "en": "Grant Lake",
      "fr": "Lac Grant",
      "lat": 50.4390955,
      "long": -94.94300233
    },
    "50279013": {
      "en": "Sassenach Lake",
      "fr": "Lac Sassenach",
      "lat": 50.45832195,
      "long": -90.23108682
    },
    "50279226": {
      "en": "Spruce Lake",
      "fr": "Lac Spruce",
      "lat": 50.46393701,
      "long": -92.44501574
    },
    "50279454": {
      "en": "Werner Lake",
      "fr": "Lac Werner",
      "lat": 50.45288945,
      "long": -94.90332947
    },
    "50288715": {
      "en": "Abamasagi Lake",
      "fr": "Lac Abamasagi",
      "lat": 50.49488223,
      "long": -87.21472844
    },
    "50288946": {
      "en": "Granite Lake",
      "fr": "Lac Granite",
      "lat": 50.46973556,
      "long": -89.76801295
    },
    "50289455": {
      "en": "Gordon Lake",
      "fr": "Lac Gordon",
      "lat": 50.46949101,
      "long": -94.92859803
    },
    "50289506": {
      "en": "Reynar Lake",
      "fr": "Lac Reynar",
      "lat": 50.46808718,
      "long": -95.10279242
    },
    "50298820": {
      "en": "Zigzag Lake",
      "fr": "Lac Zigzag",
      "lat": 50.48389582,
      "long": -88.32801005
    },
    "50299025": {
      "en": "Savant Lake",
      "fr": "Lac Savant",
      "lat": 50.48230875,
      "long": -90.42749802
    },
    "50309140": {
      "en": "Theatre Lake",
      "fr": "Lac Theatre",
      "lat": 50.49909332,
      "long": -91.67688806
    },
    "50309433": {
      "en": "Wyder Lake",
      "fr": "Lac Wyder",
      "lat": 50.5161219,
      "long": -94.5590911
    },
    "50309457": {
      "en": "Trapline Lake",
      "fr": "Lac Trapline",
      "lat": 50.50452519,
      "long": -94.94770205
    },
    "50309502": {
      "en": "Wilson Lake",
      "fr": "Lac Wilson",
      "lat": 50.49488163,
      "long": -95.03309026
    },
    "50318724": {
      "en": "Meta Lake",
      "fr": "Lac Meta",
      "lat": 50.51648867,
      "long": -87.3721992
    },
    "50319113": {
      "en": "Ragged Wood Lake",
      "fr": "Lac Ragged Wood",
      "lat": 50.51673252,
      "long": -91.22278636
    },
    "50319225": {
      "en": "Birmingham Lake",
      "fr": "Lac Birmingham",
      "lat": 50.52668116,
      "long": -92.41718371
    },
    "50319331": {
      "en": "Zizania Lake",
      "fr": "Lac Zizania",
      "lat": 50.52393449,
      "long": -93.50580709
    },
    "50338728": {
      "en": "Ara Lake",
      "fr": "Lac Ara",
      "lat": 50.55048524,
      "long": -87.46832961
    },
    "50339220": {
      "en": "Wapesi Lake",
      "fr": "Lac Wapesi",
      "lat": 50.55750392,
      "long": -92.34558945
    },
    "50339401": {
      "en": "Conifer Lake",
      "fr": "Lac Conifer",
      "lat": 50.5590907,
      "long": -94.03113684
    },
    "50349334": {
      "en": "Wegg Lake",
      "fr": "Lac Wegg",
      "lat": 50.57373918,
      "long": -93.57941552
    },
    "50349446": {
      "en": "Walleye Lake",
      "fr": "Lac Walleye",
      "lat": 50.54828742,
      "long": -94.77002867
    },
    "50349507": {
      "en": "Snowshoe Lake",
      "fr": "Lac Snowshoe",
      "lat": 50.57373905,
      "long": -95.12049264
    },
    "50368127": {
      "en": "Abitibi River",
      "fr": "Rivi��re Abitibi",
      "lat": 50.42109108,
      "long": -81.56970702
    },
    "50369448": {
      "en": "Silver Fox Lake",
      "fr": "Lac Silver Fox",
      "lat": 50.57532599,
      "long": -94.7941986
    },
    "50379032": {
      "en": "Fitchie Lake",
      "fr": "Lac Fitchie",
      "lat": 50.61811198,
      "long": -90.53711722
    },
    "50379116": {
      "en": "Carling Lake",
      "fr": "Lac Carling",
      "lat": 50.62232335,
      "long": -91.28022048
    },
    "50379443": {
      "en": "Dowswell Lake",
      "fr": "Lac Dowswell",
      "lat": 50.62012581,
      "long": -94.71692808
    },
    "50379457": {
      "en": "Chase Lake",
      "fr": "Lac Chase",
      "lat": 50.6217127,
      "long": -94.93531193
    },
    "50388946": {
      "en": "Wabakimi Lake",
      "fr": "Lac Wabakimi",
      "lat": 50.64331956,
      "long": -89.781929
    },
    "50389503": {
      "en": "Wingiskus Lake",
      "fr": "Lac Wingiskus",
      "lat": 50.64508916,
      "long": -95.06141061
    },
    "50408407": {
      "en": "Pitukupi Lake",
      "fr": "Lac Pitukupi",
      "lat": 50.65729701,
      "long": -84.10571865
    },
    "50408815": {
      "en": "Mojikit Lake",
      "fr": "Lac Mojikit",
      "lat": 50.67371518,
      "long": -88.26831768
    },
    "50409409": {
      "en": "Confusion Lake",
      "fr": "Lac Confusion",
      "lat": 50.67011365,
      "long": -94.15131513
    },
    "50409453": {
      "en": "Eagle Lake",
      "fr": "Lac Eagle",
      "lat": 50.6715174,
      "long": -94.87299503
    },
    "50409459": {
      "en": "Eden Lake",
      "fr": "Lac Eden",
      "lat": 50.66193487,
      "long": -94.98218696
    },
    "50428702": {
      "en": "Melchett Lake",
      "fr": "Lac Melchett",
      "lat": 50.70533149,
      "long": -87.01642519
    },
    "50439042": {
      "en": "De Lesseps Lake",
      "fr": "Lac De Lesseps",
      "lat": 50.70008219,
      "long": -90.70630674
    },
    "50439054": {
      "en": "Arc Lake",
      "fr": "Lac Arc",
      "lat": 50.71692788,
      "long": -90.90668523
    },
    "50439107": {
      "en": "St. Raphael Lake",
      "fr": "Lac St. Raphael",
      "lat": 50.71668372,
      "long": -91.15222974
    },
    "50439428": {
      "en": "Kilburn Lake",
      "fr": "Lac Kilburn",
      "lat": 50.69269664,
      "long": -94.48072197
    },
    "50439445": {
      "en": "Ghost (Talon) Lake",
      "fr": "Lac Ghost (Talon)",
      "lat": 50.71473031,
      "long": -94.7368866
    },
    "50449310": {
      "en": "Wenasaga Lake",
      "fr": "Lac Wenasaga",
      "lat": 50.72870749,
      "long": -93.1502162
    },
    "50449501": {
      "en": "Trident Lake",
      "fr": "Lac Trident",
      "lat": 50.75653937,
      "long": -95.00220651
    },
    "50459330": {
      "en": "Pakwash Lake",
      "fr": "Lac Pakwash",
      "lat": 50.75049702,
      "long": -93.48169824
    },
    "50469032": {
      "en": "Minchin Lake",
      "fr": "Lac Minchin",
      "lat": 50.76709882,
      "long": -90.54358698
    },
    "50469408": {
      "en": "Longlegged Lake",
      "fr": "Lac Longlegged",
      "lat": 50.7838832,
      "long": -94.17438645
    },
    "50479322": {
      "en": "Griffith Mine - South Pit",
      "fr": "Mine Griffith - fosse sud",
      "lat": 50.79969137,
      "long": -93.37409324
    },
    "50489320": {
      "en": "Griffith Mine - Iron Bay (Tailings Pond)",
      "fr": "Mine Griffith - baie Iron (bassin de r��sidus)",
      "lat": 50.80652731,
      "long": -93.34473532
    },
    "50499050": {
      "en": "Miniss Lake",
      "fr": "Lac Miniss",
      "lat": 50.81653728,
      "long": -90.84058415
    },
    "50499257": {
      "en": "Bluffy Lake",
      "fr": "Lac Bluffy",
      "lat": 50.82593652,
      "long": -92.9508143
    },
    "50499320": {
      "en": "Bruce Lake",
      "fr": "Lac Bruce",
      "lat": 50.81513327,
      "long": -93.31531637
    },
    "50499322": {
      "en": "Griffith Mine - North Pit",
      "fr": "Mine Griffith - fosse nord",
      "lat": 50.81891745,
      "long": -93.36860007
    },
    "50499448": {
      "en": "Aegean Lake",
      "fr": "Lac Aegean",
      "lat": 50.8214808,
      "long": -94.9074189
    },
    "50508710": {
      "en": "Ogoki Lake",
      "fr": "Lac Ogoki",
      "lat": 50.83612983,
      "long": -87.17041696
    },
    "50509243": {
      "en": "Whitemud Lake",
      "fr": "Lac Whitemud",
      "lat": 50.84473537,
      "long": -92.73249149
    },
    "50509500": {
      "en": "Mather Lake",
      "fr": "Lac Mather",
      "lat": 50.83533577,
      "long": -95.00391551
    },
    "50519151": {
      "en": "Otatakan Lake",
      "fr": "Lac Otatakan",
      "lat": 50.85071689,
      "long": -91.8513877
    },
    "50529017": {
      "en": "McCrea Lake",
      "fr": "Lac McCrea",
      "lat": 50.85871262,
      "long": -90.28961963
    },
    "50538342": {
      "en": "Pledger Lake",
      "fr": "Lac Pledger",
      "lat": 50.88031953,
      "long": -83.69470781
    },
    "50539041": {
      "en": "Bertaud Lake",
      "fr": "Lac Bertaud",
      "lat": 50.89948407,
      "long": -90.69971498
    },
    "50539403": {
      "en": "Upper Medicine Stone Lake",
      "fr": "Lac Upper Medicine Stone",
      "lat": 50.89569963,
      "long": -94.05970138
    },
    "50548843": {
      "en": "Whiteclay Lake",
      "fr": "Lac Whiteclay",
      "lat": 50.91333921,
      "long": -88.71863525
    },
    "50549305": {
      "en": "Trout Lake River",
      "fr": "Rivi��re Trout Lake",
      "lat": 50.90192529,
      "long": -93.09192764
    },
    "50558946": {
      "en": "Webster Lake",
      "fr": "Lac Webster",
      "lat": 50.9290862,
      "long": -89.78022007
    },
    "50559105": {
      "en": "Lake St. Joseph",
      "fr": "Lac St. Joseph",
      "lat": 50.97730388,
      "long": -91.08051346
    },
    "50559335": {
      "en": "Two Island Lake",
      "fr": "Lac Two Island",
      "lat": 50.92652242,
      "long": -93.5808194
    },
    "50569005": {
      "en": "Greenbush Lake",
      "fr": "Lac Greenbush",
      "lat": 50.93952319,
      "long": -90.10321822
    },
    "50569416": {
      "en": "Onnie Lake",
      "fr": "Lac Onnie",
      "lat": 50.9375087,
      "long": -94.26770926
    },
    "50569443": {
      "en": "Hansen Lake",
      "fr": "Lac Hansen",
      "lat": 50.92609508,
      "long": -94.70081486
    },
    "50578750": {
      "en": "Kagianagami Lake",
      "fr": "Lac Kagianagami",
      "lat": 50.93152775,
      "long": -87.8632883
    },
    "50579347": {
      "en": "Petersen Lake",
      "fr": "Lac Petersen",
      "lat": 50.9473354,
      "long": -93.79139076
    },
    "50589018": {
      "en": "Pashkokogan Lake",
      "fr": "Lac Pashkokogan",
      "lat": 50.98291917,
      "long": -90.30078909
    },
    "50589340": {
      "en": "Gullrock Lake",
      "fr": "Lac Gullrock",
      "lat": 50.97467916,
      "long": -93.6168912
    },
    "51009223": {
      "en": "Jubilee Lake",
      "fr": "Lac Jubilee",
      "lat": 51.01069001,
      "long": -92.39972774
    },
    "51009341": {
      "en": "Keg Lake",
      "fr": "Lac Keg",
      "lat": 50.99549215,
      "long": -93.68531163
    },
    "51017939": {
      "en": "Harricanaw River",
      "fr": "Rivi��re Harricanaw",
      "lat": 51.0280859,
      "long": -79.64331484
    },
    "51029343": {
      "en": "Chukini River",
      "fr": "Rivi��re Chukini",
      "lat": 51.02588766,
      "long": -93.73749671
    },
    "51029345": {
      "en": "Balmer Creek",
      "fr": "Ruisseau Balmer",
      "lat": 51.03388326,
      "long": -93.74610268
    },
    "51029352": {
      "en": "Red Lake",
      "fr": "Lac Red",
      "lat": 51.0211269,
      "long": -93.8729948
    },
    "51029424": {
      "en": "Crystal Lake",
      "fr": "Lac Crystal",
      "lat": 51.03168594,
      "long": -94.40052182
    },
    "51029455": {
      "en": "Donald Lake",
      "fr": "Lac Donald",
      "lat": 51.03809459,
      "long": -94.91059278
    },
    "51038055": {
      "en": "Abitibi River",
      "fr": "Rivi��re Abitibi",
      "lat": 51.06409657,
      "long": -80.91138169
    },
    "51038059": {
      "en": "Cheepash River",
      "fr": "Rivi��re Cheepash",
      "lat": 51.06031239,
      "long": -80.97168444
    },
    "51038905": {
      "en": "Gremm Lake",
      "fr": "Lac Gremm",
      "lat": 51.04889828,
      "long": -89.08802016
    },
    "51039026": {
      "en": "Lake St. Joseph",
      "fr": "Lac St. Joseph",
      "lat": 51.04389329,
      "long": -90.43390682
    },
    "51039235": {
      "en": "Uchi Lake",
      "fr": "Lac Uchi",
      "lat": 51.05249908,
      "long": -92.58661746
    },
    "51039349": {
      "en": "Red Lake",
      "fr": "Lac Red",
      "lat": 51.04871479,
      "long": -93.95502608
    },
    "51048926": {
      "en": "Greenmantle Lake",
      "fr": "Lac Greenmantle",
      "lat": 51.06873468,
      "long": -89.426094
    },
    "51048957": {
      "en": "Frain Lake",
      "fr": "Lac Frain",
      "lat": 51.07929372,
      "long": -89.95142376
    },
    "51049317": {
      "en": "Little Trout Lake",
      "fr": "Lac Little Trout",
      "lat": 51.05671045,
      "long": -93.24109764
    },
    "51049413": {
      "en": "Red Lake",
      "fr": "Lac Red",
      "lat": 51.06733049,
      "long": -94.21381523
    },
    "51059035": {
      "en": "Lake St. Joseph",
      "fr": "Lac St. Joseph",
      "lat": 51.07673019,
      "long": -90.72388495
    },
    "51059208": {
      "en": "Jeanette Lake",
      "fr": "Lac Jeanette",
      "lat": 51.08973057,
      "long": -92.13642201
    },
    "51059244": {
      "en": "Confederation Lake",
      "fr": "Lac Confederation",
      "lat": 51.10529449,
      "long": -92.70880989
    },
    "51059402": {
      "en": "Hammell Lake",
      "fr": "Lac Hammell",
      "lat": 51.0936977,
      "long": -94.04468676
    },
    "51078849": {
      "en": "Kilbarry Lake",
      "fr": "Lac Kilbarry",
      "lat": 51.12012633,
      "long": -88.82080817
    },
    "51079244": {
      "en": "Rowe Lake",
      "fr": "Lac Rowe",
      "lat": 51.11872222,
      "long": -92.73749643
    },
    "51079300": {
      "en": "Joyce Lake",
      "fr": "Lac Joyce",
      "lat": 51.13233304,
      "long": -93.01410784
    },
    "51088043": {
      "en": "North French River",
      "fr": "Rivi��re des Fran�_ais Nord",
      "lat": 51.14368644,
      "long": -80.72571269
    },
    "51088757": {
      "en": "I291 Lake",
      "fr": "Lac I291",
      "lat": 51.13831487,
      "long": -87.96631571
    },
    "51098050": {
      "en": "Moose River",
      "fr": "Rivi��re Moose",
      "lat": 51.14533438,
      "long": -80.81891341
    },
    "51098522": {
      "en": "Quantz Lake",
      "fr": "Lac Quantz",
      "lat": 51.15790734,
      "long": -85.37860734
    },
    "51099009": {
      "en": "Osnaburgh Lake",
      "fr": "Lac Osnaburgh",
      "lat": 51.13733815,
      "long": -90.11780566
    },
    "51099125": {
      "en": "Bamaji Lake",
      "fr": "Lac Bamaji",
      "lat": 51.13068522,
      "long": -91.46051849
    },
    "51118843": {
      "en": "Luella Lake",
      "fr": "Lac Luella",
      "lat": 51.18708191,
      "long": -88.72888921
    },
    "51119046": {
      "en": "Carpenter Lake",
      "fr": "Lac Carpenter",
      "lat": 51.19031662,
      "long": -90.75861398
    },
    "51129206": {
      "en": "Hailstone Lake",
      "fr": "Lac Hailstone",
      "lat": 51.20032629,
      "long": -92.10608755
    },
    "51129241": {
      "en": "Premier Lake",
      "fr": "Lac Premier",
      "lat": 51.20429352,
      "long": -92.69471079
    },
    "51129245": {
      "en": "Woman Lake",
      "fr": "Lac Woman",
      "lat": 51.20093658,
      "long": -92.75440319
    },
    "51137935": {
      "en": "Missisicabi River",
      "fr": "Rivi��re Missisicabi",
      "lat": 51.25293945,
      "long": -79.65472845
    },
    "51149432": {
      "en": "Orange Lake",
      "fr": "Lac Orange",
      "lat": 51.23468888,
      "long": -94.53638616
    },
    "51158837": {
      "en": "Weese Lake",
      "fr": "Lac Weese",
      "lat": 51.26148379,
      "long": -88.6275098
    },
    "51158859": {
      "en": "Shabuskwia Lake",
      "fr": "Lac Shabuskwia",
      "lat": 51.25611267,
      "long": -88.99579605
    },
    "51159315": {
      "en": "Trout Lake",
      "fr": "Lac Trout",
      "lat": 51.19873927,
      "long": -93.30939603
    },
    "51169350": {
      "en": "Little Vermilion Lake",
      "fr": "Lac Little Vermilion",
      "lat": 51.27649803,
      "long": -93.84021897
    },
    "51178720": {
      "en": "Makokibatan Lake",
      "fr": "Lac Makokibatan",
      "lat": 51.27369091,
      "long": -87.35718468
    },
    "51179229": {
      "en": "Grace Lake",
      "fr": "Lac Grace",
      "lat": 51.28730136,
      "long": -92.49860478
    },
    "51199057": {
      "en": "Wright Lake",
      "fr": "Lac Wright",
      "lat": 51.3267302,
      "long": -90.95972491
    },
    "51199113": {
      "en": "Obaskaka Lake",
      "fr": "Lac Obaskaka",
      "lat": 51.31733077,
      "long": -91.20612392
    },
    "51208024": {
      "en": "Moose River",
      "fr": "Rivi��re Moose",
      "lat": 51.32428951,
      "long": -80.45111546
    },
    "51209258": {
      "en": "Shabu Lake",
      "fr": "Lac Shabu",
      "lat": 51.31409576,
      "long": -92.939706
    },
    "51209335": {
      "en": "Coli Lake",
      "fr": "Lac Coli",
      "lat": 51.31531641,
      "long": -93.59003579
    },
    "51218348": {
      "en": "Albany River",
      "fr": "Rivi��re Albany",
      "lat": 51.25312228,
      "long": -84.16248146
    },
    "51229306": {
      "en": "Blair Lake",
      "fr": "Lac Blair",
      "lat": 51.37391021,
      "long": -93.11469386
    },
    "51239300": {
      "en": "Unknown Lake",
      "fr": "Lac Inconnu",
      "lat": 51.39893463,
      "long": -93.01331444
    },
    "51249221": {
      "en": "Birch Lake",
      "fr": "Lac Birch",
      "lat": 51.40693029,
      "long": -92.35071658
    },
    "51249426": {
      "en": "Bigshell Lake",
      "fr": "Lac Bigshell",
      "lat": 51.39032856,
      "long": -94.42420354
    },
    "51249456": {
      "en": "Musclow Lake",
      "fr": "Lac Musclow",
      "lat": 51.40473281,
      "long": -94.9464205
    },
    "51258644": {
      "en": "Teabeau Lake",
      "fr": "Lac Teabeau",
      "lat": 51.42188433,
      "long": -86.73609075
    },
    "51279103": {
      "en": "Dobie Lake",
      "fr": "Lac Dobie",
      "lat": 51.46869798,
      "long": -91.04999597
    },
    "51289015": {
      "en": "Pickle Lake",
      "fr": "Lac Pickle",
      "lat": 51.96570738,
      "long": -90.23719063
    },
    "51289024": {
      "en": "Kapkichi Lake",
      "fr": "Lac Kapkichi",
      "lat": 51.46253348,
      "long": -90.38831363
    },
    "51289330": {
      "en": "Nungesser Lake",
      "fr": "Lac Nungesser",
      "lat": 51.47010159,
      "long": -93.55799236
    },
    "51298758": {
      "en": "Triangular Lake",
      "fr": "Lac Triangular",
      "lat": 51.4868867,
      "long": -87.93329575
    },
    "51308844": {
      "en": "Bolster Lake",
      "fr": "Lac Bolster",
      "lat": 51.50312199,
      "long": -88.73358898
    },
    "51309020": {
      "en": "Ponsford Lake",
      "fr": "Lac Ponsford",
      "lat": 51.50611259,
      "long": -90.33942446
    },
    "51309309": {
      "en": "Guernsey Lake",
      "fr": "Lac Guernsey",
      "lat": 51.50049713,
      "long": -93.16388824
    },
    "51309341": {
      "en": "Pedlar Lake",
      "fr": "Lac Pedlar",
      "lat": 51.51068996,
      "long": -93.69550462
    },
    "51328746": {
      "en": "Eabamet Lake",
      "fr": "Lac Eabamet",
      "lat": 51.52393505,
      "long": -87.83362531
    },
    "51328858": {
      "en": "Snowdrift Lake",
      "fr": "Lac Snowdrift",
      "lat": 51.53150333,
      "long": -88.96723164
    },
    "51328901": {
      "en": "Snowflake Lake",
      "fr": "Lac Snowflake",
      "lat": 51.53748477,
      "long": -89.01642599
    },
    "51329002": {
      "en": "Kawinogans River",
      "fr": "Rivi��re Kawinogans",
      "lat": 51.52509455,
      "long": -90.02692436
    },
    "51329328": {
      "en": "Pringle Lake",
      "fr": "Lac Pringle",
      "lat": 51.53931547,
      "long": -93.45661295
    },
    "51329356": {
      "en": "Kirkness Lake",
      "fr": "Lac Kirkness",
      "lat": 51.53229639,
      "long": -93.92670586
    },
    "51349503": {
      "en": "Irwin Lake",
      "fr": "Lac Irwin",
      "lat": 51.57532608,
      "long": -95.05780973
    },
    "51358505": {
      "en": "Muswabik Lake",
      "fr": "Lac Muswabik",
      "lat": 51.57789033,
      "long": -85.07721571
    },
    "51358837": {
      "en": "Miminiska Lake",
      "fr": "Lac Miminiska",
      "lat": 51.5531098,
      "long": -88.59851815
    },
    "51358915": {
      "en": "Crerar Lake",
      "fr": "Lac Crerar",
      "lat": 51.58112489,
      "long": -89.25189971
    },
    "51359130": {
      "en": "Lang Lake",
      "fr": "Lac Lang",
      "lat": 51.58570235,
      "long": -91.52442241
    },
    "51359244": {
      "en": "Wavell Lake",
      "fr": "Lac Wavell",
      "lat": 51.57788976,
      "long": -92.69892229
    },
    "51398955": {
      "en": "Kawinogans River",
      "fr": "Rivi��re Kawinogans",
      "lat": 51.65070493,
      "long": -89.91608451
    },
    "51399256": {
      "en": "Mamakwash Lake",
      "fr": "Lac Mamakwash",
      "lat": 51.66291172,
      "long": -92.93470119
    },
    "51408804": {
      "en": "Opikeigen Lake",
      "fr": "Lac Opikeigen",
      "lat": 51.66748974,
      "long": -88.06861077
    },
    "51418852": {
      "en": "Troutfly Lake",
      "fr": "Lac Troutfly",
      "lat": 51.69953314,
      "long": -88.8786086
    },
    "51428930": {
      "en": "Monmonawson Lake",
      "fr": "Lac Monmonawson",
      "lat": 51.71033632,
      "long": -89.49280558
    },
    "51429429": {
      "en": "Cairns Lake",
      "fr": "Lac Cairns",
      "lat": 51.70533103,
      "long": -94.49689651
    },
    "51438740": {
      "en": "Gifford Lake",
      "fr": "Lac Gifford",
      "lat": 51.7097261,
      "long": -87.64520976
    },
    "51449508": {
      "en": "Frances Lake",
      "fr": "Lac Frances",
      "lat": 51.73670305,
      "long": -95.14252659
    },
    "51458945": {
      "en": "Badesdawa Lake",
      "fr": "Lac Badesdawa",
      "lat": 51.75873718,
      "long": -89.74610157
    },
    "51459120": {
      "en": "Morris Lake",
      "fr": "Lac Morris",
      "lat": 51.75892016,
      "long": -91.30939552
    },
    "51459323": {
      "en": "Silcox Lake",
      "fr": "Lac Silcox",
      "lat": 51.75373201,
      "long": -93.37470379
    },
    "51459342": {
      "en": "Berens Lake",
      "fr": "Lac Berens",
      "lat": 51.75812651,
      "long": -93.71442557
    },
    "51469215": {
      "en": "Sleep Lake",
      "fr": "Lac Sleep",
      "lat": 51.76233806,
      "long": -92.24219611
    },
    "51489207": {
      "en": "Kamungishkamo Lake",
      "fr": "Lac Kamungishkamo",
      "lat": 51.80310956,
      "long": -92.0936365
    },
    "51489359": {
      "en": "Pikangikum Lake",
      "fr": "Lac Pikangikum",
      "lat": 51.80231595,
      "long": -93.99610292
    },
    "51509105": {
      "en": "Upturnedroot Lake",
      "fr": "Lac Upturnedroot",
      "lat": 51.82868337,
      "long": -91.07770601
    },
    "51569249": {
      "en": "Madden Lake",
      "fr": "Lac Madden",
      "lat": 51.92829262,
      "long": -92.81440092
    },
    "51579157": {
      "en": "Whitestone Lake",
      "fr": "Lac Whitestone",
      "lat": 51.94672531,
      "long": -91.96112917
    },
    "52009103": {
      "en": "Kinloch Lake",
      "fr": "Lac Kinloch",
      "lat": 51.9470916,
      "long": -91.02503268
    },
    "52018830": {
      "en": "Ozhiski Lake",
      "fr": "Lac Ozhiski",
      "lat": 51.98053906,
      "long": -88.51880629
    },
    "52028802": {
      "en": "Kemp Lake",
      "fr": "Lac Kemp",
      "lat": 52.0253389,
      "long": -88.03168455
    },
    "52029444": {
      "en": "Donaldson Lake",
      "fr": "Lac Donaldson",
      "lat": 52.03589745,
      "long": -94.73920622
    },
    "52038711": {
      "en": "Beteau Lake (Attawapiskat River)",
      "fr": "Lac Beteau (Rivi��re Attawapiskat)",
      "lat": 52.05372032,
      "long": -87.19361055
    },
    "52038911": {
      "en": "Totogan Lake",
      "fr": "Lac Totogan",
      "lat": 52.06311958,
      "long": -89.19049842
    },
    "52049410": {
      "en": "Barton Lake",
      "fr": "Lac Barton",
      "lat": 52.03229643,
      "long": -94.0647065
    },
    "52058752": {
      "en": "Richter Lake",
      "fr": "Lac Richter",
      "lat": 52.09449176,
      "long": -87.87390864
    },
    "52059011": {
      "en": "Menako Lake",
      "fr": "Lac Menako",
      "lat": 52.08088074,
      "long": -90.18610421
    },
    "52059228": {
      "en": "Tutu Lake",
      "fr": "Lac Tutu",
      "lat": 52.07648603,
      "long": -92.4669277
    },
    "52088554": {
      "en": "Streatfeild Lake",
      "fr": "Lac Streatfeild",
      "lat": 52.14509005,
      "long": -85.91138358
    },
    "52089200": {
      "en": "Kishikas Lake",
      "fr": "Lac Kishikas",
      "lat": 52.14893481,
      "long": -91.9441004
    },
    "52099213": {
      "en": "Nabimina Lake",
      "fr": "Lac Nabimina",
      "lat": 52.14588303,
      "long": -92.22351943
    },
    "52108518": {
      "en": "Kapiskau Lake",
      "fr": "Lac Kapiskau",
      "lat": 52.1765232,
      "long": -85.30109285
    },
    "52118820": {
      "en": "Kabania Lake",
      "fr": "Lac Kabania",
      "lat": 52.18970658,
      "long": -88.34693127
    },
    "52128140": {
      "en": "Albany River",
      "fr": "Rivi��re Albany",
      "lat": 52.22571778,
      "long": -81.6713919
    },
    "52128621": {
      "en": "Attawapiskat River",
      "fr": "Rivi��re Attawapiskat",
      "lat": 52.20972625,
      "long": -86.35968696
    },
    "52139323": {
      "en": "Matchett Lake",
      "fr": "Lac Matchett",
      "lat": 52.21070227,
      "long": -93.37439871
    },
    "52139344": {
      "en": "McInnes Lake",
      "fr": "Lac McInnes",
      "lat": 52.21692783,
      "long": -93.7418915
    },
    "52148753": {
      "en": "Attawapiskat Lake",
      "fr": "Lac Attawapiskat",
      "lat": 52.24372273,
      "long": -87.89752928
    },
    "52149046": {
      "en": "Horseshoe Lake",
      "fr": "Lac Horseshoe",
      "lat": 52.23310239,
      "long": -90.76020111
    },
    "52159357": {
      "en": "Grist Lake",
      "fr": "Lac Grist",
      "lat": 52.25031405,
      "long": -93.95942088
    },
    "52179334": {
      "en": "Hampton Lake",
      "fr": "Lac Hampton",
      "lat": 52.28388342,
      "long": -93.55170591
    },
    "52188512": {
      "en": "Missisa Lake",
      "fr": "Lac Missisa",
      "lat": 52.31208231,
      "long": -85.19800446
    },
    "52198610": {
      "en": "Highbank Lake",
      "fr": "Lac Highbank",
      "lat": 52.31928439,
      "long": -86.18250186
    },
    "52209102": {
      "en": "Stirland Lake",
      "fr": "Lac Stirland",
      "lat": 52.33674008,
      "long": -91.0405357
    },
    "52209201": {
      "en": "Pakhoan Lake",
      "fr": "Lac Pakhoan",
      "lat": 52.33008717,
      "long": -92.02301892
    },
    "52209338": {
      "en": "Culverson Lake",
      "fr": "Lac Culverson",
      "lat": 52.33673986,
      "long": -93.63691103
    },
    "52218624": {
      "en": "Fishtrap Lake",
      "fr": "Lac Fishtrap",
      "lat": 52.3615207,
      "long": -86.40613476
    },
    "52218941": {
      "en": "Brock Lake",
      "fr": "Lac Brock",
      "lat": 52.35248726,
      "long": -89.68579893
    },
    "52258630": {
      "en": "Kitchie Lake",
      "fr": "Lac Kitchie",
      "lat": 52.41791719,
      "long": -86.51441117
    },
    "52259033": {
      "en": "Chilton Lake",
      "fr": "Lac Chilton",
      "lat": 52.4196869,
      "long": -90.54749356
    },
    "52278924": {
      "en": "Wigwascence Lake",
      "fr": "Lac Wigwascence",
      "lat": 52.44831248,
      "long": -89.4058306
    },
    "52289310": {
      "en": "Margot Lake",
      "fr": "Lac Margot",
      "lat": 52.47431316,
      "long": -93.15082692
    },
    "52309052": {
      "en": "Donnelly Lake",
      "fr": "Lac Donnelly",
      "lat": 52.49872741,
      "long": -90.87299417
    },
    "52309135": {
      "en": "Westin Lake (Upper Windigo Lake)",
      "fr": "Lac Westin (Lac Upper Windigo)",
      "lat": 52.48951105,
      "long": -91.57770631
    },
    "52309450": {
      "en": "Black Birch Lake",
      "fr": "Lac Black Birch",
      "lat": 52.50031399,
      "long": -94.86908918
    },
    "52319255": {
      "en": "North Spirit Lake",
      "fr": "Lac North Spirit",
      "lat": 52.51569502,
      "long": -92.91529219
    },
    "52328644": {
      "en": "Goods Lake",
      "fr": "Lac Goods",
      "lat": 52.54310029,
      "long": -86.74549038
    },
    "52349336": {
      "en": "Kennedy Lake",
      "fr": "Lac Kennedy",
      "lat": 52.58149087,
      "long": -93.60498969
    },
    "52358750": {
      "en": "Mameigwess Lake",
      "fr": "Lac Mameigwess",
      "lat": 52.55231652,
      "long": -87.89521
    },
    "52358935": {
      "en": "Schryburt Lake",
      "fr": "Lac Schryburt",
      "lat": 52.58869335,
      "long": -89.58942444
    },
    "52359110": {
      "en": "Berry Lake",
      "fr": "Lac Berry",
      "lat": 52.57532652,
      "long": -91.16639028
    },
    "52359132": {
      "en": "Windigo Lake",
      "fr": "Lac Windigo",
      "lat": 52.58149104,
      "long": -91.53559206
    },
    "52388953": {
      "en": "Cordick Lake",
      "fr": "Lac Cordick",
      "lat": 52.64069528,
      "long": -89.88800853
    },
    "52399508": {
      "en": "Perreault Lake",
      "fr": "Lac Perreault",
      "lat": 52.66590237,
      "long": -95.13752192
    },
    "52409123": {
      "en": "Agutua Lake",
      "fr": "Lac Agutua",
      "lat": 52.67231138,
      "long": -91.3805017
    },
    "52409303": {
      "en": "Hawley Lakes",
      "fr": "Lacs Hawley",
      "lat": 52.65192549,
      "long": -93.04889822
    },
    "52409415": {
      "en": "Deer Lake",
      "fr": "Lac Deer",
      "lat": 52.64789708,
      "long": -94.18531215
    },
    "52418915": {
      "en": "Sims Lake",
      "fr": "Lac Sims",
      "lat": 52.68293166,
      "long": -89.25251028
    },
    "52419018": {
      "en": "Skinner Lake",
      "fr": "Lac Skinner",
      "lat": 52.68610541,
      "long": -90.30579432
    },
    "52428614": {
      "en": "Koper Lake",
      "fr": "Lac Koper",
      "lat": 52.71570777,
      "long": -86.24579542
    },
    "52428620": {
      "en": "Muketei River",
      "fr": "Rivi��re Muketei",
      "lat": 52.70069311,
      "long": -86.3469307
    },
    "52458618": {
      "en": "Muketei River",
      "fr": "Rivi��re Muketei",
      "lat": 52.75971412,
      "long": -86.31281205
    },
    "52468603": {
      "en": "McFaulds Lake",
      "fr": "Lac McFaulds",
      "lat": 52.76832009,
      "long": -86.05719673
    },
    "52468634": {
      "en": "Muketei River",
      "fr": "Rivi��re Muketei",
      "lat": 52.76893041,
      "long": -86.56800013
    },
    "52479322": {
      "en": "Northwind Lake",
      "fr": "Lac Northwind",
      "lat": 52.79548017,
      "long": -93.3783051
    },
    "52479336": {
      "en": "Setting Net Lake",
      "fr": "Lac Setting Net",
      "lat": 52.76429118,
      "long": -93.60248729
    },
    "52508956": {
      "en": "Assin (Asinne) Lake",
      "fr": "Lac Assin (Asinne)",
      "lat": 52.83789989,
      "long": -89.93250322
    },
    "52509040": {
      "en": "North Caribou Lake",
      "fr": "Lac North Caribou",
      "lat": 52.79651799,
      "long": -90.70880961
    },
    "52509327": {
      "en": "Sandy Lake",
      "fr": "Lac Sandy",
      "lat": 52.83948651,
      "long": -93.46332711
    },
    "52528645": {
      "en": "Leaver Lake",
      "fr": "Lac Leaver",
      "lat": 52.87531469,
      "long": -86.76300754
    },
    "52539122": {
      "en": "Weagamow Lake",
      "fr": "Lac Weagamow",
      "lat": 52.8853241,
      "long": -91.35212039
    },
    "52539153": {
      "en": "Nikip Lake",
      "fr": "Lac Nikip",
      "lat": 52.89728695,
      "long": -91.89380758
    },
    "52549132": {
      "en": "Opakopa Lake",
      "fr": "Lac Opakopa",
      "lat": 52.90033873,
      "long": -91.52973275
    },
    "52559357": {
      "en": "Favourable Lake",
      "fr": "Lac Favourable",
      "lat": 52.87348306,
      "long": -93.93158898
    },
    "52568224": {
      "en": "Attawapiskat River",
      "fr": "Rivi��re Attawapiskat",
      "lat": 52.91871098,
      "long": -82.42029364
    },
    "52568723": {
      "en": "Winisk Lake",
      "fr": "Lac Winisk",
      "lat": 52.93891328,
      "long": -87.39331782
    },
    "52588548": {
      "en": "Attawapiskat River",
      "fr": "Rivi��re Attawapiskat",
      "lat": 52.97388654,
      "long": -85.81220157
    },
    "52599120": {
      "en": "Atikomik Lake",
      "fr": "Lac Atikomik",
      "lat": 52.9931122,
      "long": -91.31281376
    },
    "52599140": {
      "en": "Magiss Lake",
      "fr": "Lac Magiss",
      "lat": 52.96289976,
      "long": -91.69361221
    },
    "53019302": {
      "en": "Sandy Lake",
      "fr": "Lac Sandy",
      "lat": 53.01929614,
      "long": -93.03711852
    },
    "53028421": {
      "en": "Attawapiskat River",
      "fr": "Rivi��re Attawapiskat",
      "lat": 53.0479223,
      "long": -84.35718399
    },
    "53088816": {
      "en": "No Name Lake 21",
      "fr": "Lac No Name 21",
      "lat": 53.14832486,
      "long": -88.27271269
    },
    "53089247": {
      "en": "Kadota Lake",
      "fr": "Lac Kadota",
      "lat": 53.13831473,
      "long": -92.78473809
    },
    "53189334": {
      "en": "Opasquia Lake",
      "fr": "Lac Opasquia",
      "lat": 53.29090257,
      "long": -93.56031211
    },
    "53399059": {
      "en": "Garrett Lake",
      "fr": "Lac Garrett",
      "lat": 53.64533398,
      "long": -90.98420052
    },
    "53409115": {
      "en": "Asipoquobah Lake",
      "fr": "Lac Asipoquobah",
      "lat": 53.66651316,
      "long": -91.24909319
    },
    "53449317": {
      "en": "East Lake",
      "fr": "Lac East",
      "lat": 53.72071222,
      "long": -93.18610555
    },
    "53459000": {
      "en": "Big Trout Lake",
      "fr": "Lac Big Trout",
      "lat": 53.78333456,
      "long": -90.00721048
    },
    "53469252": {
      "en": "Lingman Lake",
      "fr": "Lac Lingman",
      "lat": 53.85468443,
      "long": -92.85193799
    },
    "53489256": {
      "en": "Durell Lake",
      "fr": "Lac Durell",
      "lat": 53.80512387,
      "long": -92.92530226
    },
    "53498930": {
      "en": "Angling Lake",
      "fr": "Lac Angling",
      "lat": 53.82471644,
      "long": -89.51471765
    },
    "53499034": {
      "en": "Fawn Lake",
      "fr": "Lac Fawn",
      "lat": 53.81952837,
      "long": -90.54358762
    },
    "53499208": {
      "en": "Sachigo Lake",
      "fr": "Lac Sachigo",
      "lat": 53.81733097,
      "long": -92.13300465
    },
    "53499248": {
      "en": "Pullan Lake",
      "fr": "Lac Pullan",
      "lat": 53.82648619,
      "long": -92.80170604
    },
    "53519301": {
      "en": "Seeber Lake",
      "fr": "Lac Seeber",
      "lat": 53.86469418,
      "long": -92.99640826
    },
    "53529127": {
      "en": "Two River Lake",
      "fr": "Lac Two River",
      "lat": 53.86011668,
      "long": -91.43799711
    },
    "53548406": {
      "en": "Opinnagau Lake (East)",
      "fr": "Lac Opinnagau (est)",
      "lat": 53.91388921,
      "long": -84.10669579
    },
    "53558358": {
      "en": "Opinnagau River",
      "fr": "Rivi��re Opinnagau",
      "lat": 53.93451911,
      "long": -83.98578511
    },
    "53559104": {
      "en": "Bearskin Lake",
      "fr": "Lac Bearskin",
      "lat": 53.74451606,
      "long": -91.69190341
    },
    "53588614": {
      "en": "Wild Berry Lake",
      "fr": "Lac Wild Berry",
      "lat": 53.97669425,
      "long": -86.24390358
    },
    "54069028": {
      "en": "Fat Lake",
      "fr": "Lac Fat",
      "lat": 54.10810263,
      "long": -90.45942018
    },
    "54088502": {
      "en": "Pine Lake",
      "fr": "Lac Pine",
      "lat": 54.14649416,
      "long": -85.03961853
    },
    "54098541": {
      "en": "Shamattawa Lake (Winisk River)",
      "fr": "Lac Shamattawa (Rivi��re Winisk)",
      "lat": 54.16510983,
      "long": -85.68909386
    },
    "54099211": {
      "en": "Little Sachigo Lake",
      "fr": "Lac Little Sachigo",
      "lat": 54.14832465,
      "long": -92.20050963
    },
    "54099256": {
      "en": "Pierce Lake",
      "fr": "Lac Pierce",
      "lat": 54.16291199,
      "long": -92.95081506
    },
    "54158444": {
      "en": "Sutton Lake",
      "fr": "Lac Sutton",
      "lat": 54.25391607,
      "long": -84.69769948
    },
    "54179112": {
      "en": "Swan Lake",
      "fr": "Lac Swan",
      "lat": 54.26929643,
      "long": -91.19361236
    },
    "54208500": {
      "en": "Spruce Lake",
      "fr": "Lac Spruce",
      "lat": 54.33448246,
      "long": -85.01361758
    },
    "54228433": {
      "en": "Aquatuk Lake",
      "fr": "Lac Aquatuk",
      "lat": 54.36872322,
      "long": -84.55499926
    },
    "54229142": {
      "en": "Withers Lake",
      "fr": "Lac Withers",
      "lat": 54.35608839,
      "long": -91.68830248
    },
    "54249234": {
      "en": "Stull Lake",
      "fr": "Lac Stull",
      "lat": 54.40192572,
      "long": -92.55610063
    },
    "54308439": {
      "en": "Hawley Lake",
      "fr": "Lac Hawley",
      "lat": 54.5039161,
      "long": -84.62531181
    },
    "54308446": {
      "en": "Raft Lake (North)",
      "fr": "Lac Raft (North)",
      "lat": 54.51233894,
      "long": -84.74719907
    },
    "54309125": {
      "en": "Sherman Lake",
      "fr": "Lac Sherman",
      "lat": 54.50312212,
      "long": -91.41669599
    },
    "54319214": {
      "en": "Echoing Lake",
      "fr": "Lac Echoing",
      "lat": 54.52070017,
      "long": -92.23999948
    },
    "54458440": {
      "en": "Sutton River",
      "fr": "Rivi��re Sutton",
      "lat": 54.74231945,
      "long": -84.61328793
    },
    "55008524": {
      "en": "Winisk River",
      "fr": "Rivi��re Winisk",
      "lat": 55.00611337,
      "long": -85.41608369
    },
    "55108247": {
      "en": "Brant River",
      "fr": "Rivi��re Brant",
      "lat": 55.13233426,
      "long": -82.9289002
    },
    "55158345": {
      "en": "Sutton River",
      "fr": "Rivi��re Sutton",
      "lat": 55.20173118,
      "long": -83.7136295
    },
    "55178505": {
      "en": "Winisk River",
      "fr": "Rivi��re Winisk",
      "lat": 55.26813734,
      "long": -85.1168893
    },
    "55598738": {
      "en": "Severn River",
      "fr": "Rivi��re Severn",
      "lat": 55.98688723,
      "long": -87.62830394
    },
    "56068739": {
      "en": "Pipowitan River",
      "fr": "Rivi��re Pipowitan",
      "lat": 56.11310794,
      "long": -87.66248367
    },
    "56308810": {
      "en": "Majikun Creek",
      "fr": "Ruisseau Majikun",
      "lat": 56.50788333,
      "long": -88.17420271
    },
    "56328815": {
      "en": "Tamuna River",
      "fr": "Rivi��re Tamuna",
      "lat": 56.53333499,
      "long": -88.2551964
    },
    "56408837": {
      "en": "Mintiagan Creek",
      "fr": "Ruisseau Mintiagan",
      "lat": 56.68311524,
      "long": -88.62891483
    }
  },
  "spp": {
    "31": {
      "en": "Sturgeon",
      "fr": "Esturgeon de lac"
    },
    "41": {
      "en": "Longnose Gar",
      "fr": "L��pisost�� osseux"
    },
    "51": {
      "en": "Bowfin",
      "fr": "Poisson-castor"
    },
    "63": {
      "en": "Gizzard Shad",
      "fr": "Alose �� g��sier"
    },
    "71": {
      "en": "Pink Salmon",
      "fr": "Saumon rose"
    },
    "73": {
      "en": "Coho Salmon",
      "fr": "Saumon coho"
    },
    "75": {
      "en": "Chinook Salmon",
      "fr": "Saumon chinook"
    },
    "76": {
      "en": "Rainbow Trout",
      "fr": "Truite arc-en-ciel"
    },
    "77": {
      "en": "Atlantic Salmon",
      "fr": "Saumon atlantique"
    },
    "78": {
      "en": "Brown Trout",
      "fr": "Truite brune"
    },
    "80": {
      "en": "Brook Trout",
      "fr": "Truite mouchet��e"
    },
    "81": {
      "en": "Lake Trout",
      "fr": "Truite de lac"
    },
    "82": {
      "en": "Splake",
      "fr": "Truite moulac"
    },
    "83": {
      "en": "Aurora Trout",
      "fr": "Truite Aurora"
    },
    "87": {
      "en": "Siscowet",
      "fr": "Siscowet"
    },
    "91": {
      "en": "Lake Whitefish",
      "fr": "Grand cor��gone"
    },
    "93": {
      "en": "Cisco(Lake Herring)",
      "fr": "Cisco de lac (hareng de lac)"
    },
    "102": {
      "en": "Round Whitefish",
      "fr": "M��nomini rond"
    },
    "121": {
      "en": "Rainbow Smelt",
      "fr": "�_perlan arc-en-ciel"
    },
    "131": {
      "en": "Northern Pike",
      "fr": "Brochet"
    },
    "132": {
      "en": "Muskellunge",
      "fr": "Maskinong��"
    },
    "151": {
      "en": "Goldeye",
      "fr": "Laquaiche aux yeux d'or"
    },
    "152": {
      "en": "Mooneye",
      "fr": "Laquaiche argent��e"
    },
    "161": {
      "en": "Quillback Carpsucker",
      "fr": "Couette"
    },
    "162": {
      "en": "Longnose Sucker",
      "fr": "Meunier rouge"
    },
    "163": {
      "en": "White Sucker",
      "fr": "Meunier noir"
    },
    "166": {
      "en": "Bigmouth Buffalo",
      "fr": "Buffalo �� grande bouche"
    },
    "177": {
      "en": "Redhorse Sucker",
      "fr": "Suceur rouge"
    },
    "181": {
      "en": "Goldfish",
      "fr": "Poisson dor��"
    },
    "186": {
      "en": "Common Carp",
      "fr": "Carpe"
    },
    "233": {
      "en": "Brown Bullhead",
      "fr": "Barbotte brune"
    },
    "234": {
      "en": "Channel Catfish",
      "fr": "Barbue de rivi��re"
    },
    "271": {
      "en": "Ling (Burbot)",
      "fr": "Lotte"
    },
    "301": {
      "en": "White Perch",
      "fr": "Bar-perche"
    },
    "302": {
      "en": "White Bass",
      "fr": "Bar blanc"
    },
    "311": {
      "en": "Rock Bass",
      "fr": "Crapet de roche"
    },
    "313": {
      "en": "Pumpkinseed",
      "fr": "Crapet-soleil"
    },
    "314": {
      "en": "Bluegill",
      "fr": "Crapet arlequin"
    },
    "316": {
      "en": "Smallmouth Bass",
      "fr": "Achigan �� petite bouche"
    },
    "317": {
      "en": "Largemouth Bass",
      "fr": "Achigan �� grande bouche"
    },
    "318": {
      "en": "White Crappie",
      "fr": "Marigane blanche"
    },
    "319": {
      "en": "Black Crappie",
      "fr": "Marigane noire"
    },
    "331": {
      "en": "Yellow Perch",
      "fr": "Perchaude"
    },
    "332": {
      "en": "Sauger",
      "fr": "Dor�� noir"
    },
    "334": {
      "en": "Walleye",
      "fr": "Dor��"
    },
    "371": {
      "en": "Freshwater Drum",
      "fr": "Malachigan"
    },
    "400": {
      "en": "Salmon Hybrid",
      "fr": "Hybrides de Saumon"
    },
    "450": {
      "en": "Whitefish hybrid",
      "fr": "Grand cor��gone (hybride)"
    }
  },
  "pops": {
    "1": "General",
    "2": "Sensitive"
  },
  "lens": {
    "15": "15-20cm",
    "20": "20-25cm",
    "25": "25-30cm",
    "30": "30-35cm",
    "35": "35-40cm",
    "40": "40-45cm",
    "45": "45-50cm",
    "50": "50-55cm",
    "55": "55-60cm",
    "60": "60-65cm",
    "65": "65-70cm",
    "70": "70-75cm",
    "75": ">75cm"
  },
  "causes": {
    "1": "Mercury",
    "2": "PCB",
    "3": "Dioxin-like PCBs",
    "4": "Dioxins/Furans",
    "5": "Toxaphene",
    "6": "PFAS",
    "7": "Selenium",
    "8": "Arsenic",
    "11": "Chromium",
    "12": "Photomirex",
    "13": "Mirex",
    "14": "Lead",
    "15": "Cadmium",
    "51": "HG_PCB",
    "52": "PCB_Hg"
  }
}

var dataout = {}

Object.keys(datain).map(k => {
  dataout[k] = Object.keys(datain[k]).map(l => {
    var value = datain[k][l]

    return  Object.assign(
      { id: l },
      isString(value) ? { value } : value
    )
  })
})

module.exports = dataout
