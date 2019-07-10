var compressjs = require('compressjs')
var algorithm = compressjs.Lzp3
var data = new Buffer('Example data', 'utf8')
var compressed = algorithm.compressFile(data)
var decompressed = algorithm.decompressFile(compressed)
// convert from array back to string
var data2 = new Buffer(decompressed).toString('utf8')
