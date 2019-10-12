var express = require('express');
var router = express.Router();
const computeRoute = require('../middleware/lambda')

/* GET method route. */
router.route('/directions')
  .get(async (req, res, next) => {
    const origin = req.query.origin.split(",")
    const destination = req.query.destination.split(",")
    const data = await computeRoute(origin, destination)
    if (data !== undefined) {
      res.status(200).send(data)
    } else {
      res.status(500).send('something broke')
    }

  })
module.exports = router;