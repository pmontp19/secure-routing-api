'use strict'

const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: (process.env.AWS_REGION || 'eu-west-1')
});
console.log('aws bindings updated')

var docClient = new AWS.DynamoDB.DocumentClient()
var table = "BCN_Accidents";
var id = "2018S001070";
var params = {
  TableName: table,
  Key:{
    "id": id
  }
};
docClient.get(params, function(err, data) {
  if (err) {
    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  }
});