const OSRM = require('osrm.js')

var osrm = new OSRM("http://34.248.178.101")

osrm.route({
  coordinates: [[13.438640,52.519930], [13.415852,52.513191]],
  steps: true,
  alternatives: false,
  overview: 'simplified',
  geometries: 'polyline'
}, function(err, result) {
  console.log('osmr result ' + result);
});