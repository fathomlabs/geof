const parse = require('csv-parse')
const fs = require('fs')

var shp = require('shp')
var project = require('proj4')

// the data are a mess O_O
// we grab the bulk of metadata for each netry from FishGuide.txt
// then we take the only clearly aspecified coords from the shapefile
// finally we convert from WGS84 to WGS84 Google / Web Mercator (EPSG:3857)
const input = fs.readFileSync('./FishGuide.txt', 'utf8')
const geojson = shp.readFileSync('./GUIDELOCATIONS_NAD83')
var coords = {}
var strtonum = str => {
  var num = Number(str)
  return Math.round(num * 10000) / 10000
}
geojson.features.forEach(entry => {
  var wbid = entry.properties.WATERBODYC.trim()
  var wbcoords = {
    lat: strtonum(entry.properties.LATITUDE.trim()),
    lon: strtonum(entry.properties.LONGITUDE.trim())
  }
  coords[wbid] = wbcoords
})

    // "GUIDE_WATERBODY_CODE": 45157904,
    // "GUIDE_LOCNAME_ENG": "Lake of Bays",
    // "GUIDE_LOCNAME_FR": "Lac de Bays",
    // "LATITUDE": 451502,
    // "LONGITUDE": 785954,
    // "SPECIES_CODE": 81,
    // "SPECNAME": "Lake Trout",
    // "NOM_D_ESPECE": "Truite de lac",
    // "POPULATION_TYPE_ID": 2,
    // "POPULATION_TYPE_DESC": "Sensitive",
    // "LENGTH_CATEGORY_ID": 25,
    // "LENGTH_CATEGORY_LABEL": "25-30cm",
    // "ADV_LEVEL": 8,
    // "ADV_CAUSE_ID": 1,
    // "ADV_CAUSE_DESC": "Mercury",
    // "GUIDE_YEAR": "",
    // "GUIDE_LOCDESC
var d = {
  wb: {}, // waterbodies
  spp: {}, // species
  pops: {}, // populations
  causes: {},
  adv: {} // advisories
}

var parseone = (entry, i) => {
  // waterbody entry
  var wbid = entry.GUIDE_WATERBODY_CODE
  var geo = coords[wbid]
  var wbentry = d.wb[wbid] || {
    name: {
      en: entry.GUIDE_LOCNAME_ENG,
      fr: entry.GUIDE_LOCNAME_FR
    },
    loc: geo,
    advisories: []
  }
  wbentry.advisories.push(i)
  d.wb[wbid] = wbentry

  // species entry
  var spid = entry.SPECIES_CODE
  var spentry = d.spp[spid] || {
    name: {
      en: entry.SPECNAME,
      fr: entry.NOM_D_ESPECE
    },
    lengths: {}
  }
  var lenid = entry.LENGTH_CATEGORY_ID
  spentry.lengths[lenid] = {
    id: lenid,
    label: entry.LENGTH_CATEGORY_LABEL
  }
  d.spp[spid] = spentry

  // population entry
  var popid = entry.POPULATION_TYPE_ID
  d.pops[popid] = d.pops[popid] || {
    id: popid,
    desc: entry.POPULATION_TYPE_DESC
  }

  // causes entry
  var causeid = entry.ADV_CAUSE_ID
  d.causes[causeid] = entry.ADV_CAUSE_DESC

  // advisory entry
  var advid = i
  var adventry = {
    wb: wbid,
    sp: spid,
    len: lenid,
    pop: popid,
    level: entry.ADV_LEVEL,
    cause: causeid
  }
  d.adv[i] = adventry
}

parse(input, {
  cast: true,
  relax: true,
  relax_column_count: true,
  columns: true,
  delimiter: "\t"
}, function (err, data) {
  if (err) throw err
  data.forEach(parseone)
  fs.writeFileSync('./data/geof.json', JSON.stringify(d, null, 2))
  Object.keys(d).forEach(key => {
    fs.writeFileSync(`./data/${key}.json`, JSON.stringify(d[key], null, 2))
  })
})