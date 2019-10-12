const dynamoose = require('dynamoose');
var AWS = require('aws-sdk');
var Schema = dynamoose.Schema;

var IncidentSchema = new Schema({

	id: {
		type: String,
		index: true
	},
	districtCode: {
		type: Number
	},
	districtName: {
		type: String
	},
	incidentCode: {
		type: String
	},
	month: {
		type: Number
	},
	year: {
		type: Number
	},
	neighborhoodCode: {
		type: Number
	},
	neighborhoodName: {
		type: String
	}
},
{
	throughput: {read: 15, write: 5}
});

var IncidentsModel = dynamoose.model('BCN_Incidents', IncidentSchema);

IncidentsModel.scan().exec(function (err, incidents) {
  // Look at all the dogs
  console.log(incidents)

});
