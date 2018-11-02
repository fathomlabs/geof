var bzip = require('compressjs').Bzip2
var fs = require('fs')
var stream = require('stream')

var raw = fs.readFileSync('./data.json')
console.log('data read into memory')
var compdata = bzip.compressFile(raw, null, 9)
console.log('data compressed in memory')
var comp = fs.writeFileSync('./data.json.bzip2', compdata)
console.log('compressed data written to file')
var reraw = bzip.decompressFile(compdata)
console.log('data decompressed in memory')
fs.writeFileSync('./data.json.bzip.decommp', reraw)
console.log('decompressed data written to file')