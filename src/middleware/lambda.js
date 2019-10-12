var AWS = require('aws-sdk');

const invokeLambda = (lambda, params) => new Promise((resolve, reject) => {
  lambda.invoke(params, (error, data) => {
    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
});

async function computeRoute(origin, destination) {
  var lambda = new AWS.Lambda();
  var params = {
    FunctionName: 'computeAndScoreRoute', /* required */
    Payload: JSON.stringify({
      'x1': origin[0],
      'y1': origin[1],
      'x2': destination[0],
      'y2': destination[1]
    })
  };

  const result = await invokeLambda(lambda, params)
  return result.Payload
}

module.exports = computeRoute