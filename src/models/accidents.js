const dynamoose = require('dynamoose');
var AWS = require('aws-sdk');
var Schema = dynamoose.Schema;

var AccidentSchema = new Schema({

	id: {
		type: String,
		index: true
	},
	lat: {
		type: Number
	},
	lon: {
		type: Number
	},
	mildInjureds: {
		type: Number
	},
	seriousInjureds: {
		type: Number
	},
	deaths: {
		type: Number
	},
	totalInvolvedPeople: {
		type: Number
	},
	vehiclesInvolved: {
		type: Number
	},
	hour: {
		type: Number
	},
	monthOfYear: {
		type: Number
	},
	dayOfWeek: {
		type: Number
	},
	year: {
		type: Number
	}
},
{
	throughput: {read: 15, write: 5}
});

var AccidentsModel = dynamoose.model('BCN_Accidents', AccidentSchema);

AccidentsModel.scan().exec(function (err, accidents) {
  // Look at all the dogs
  console.log(accidents)

});
