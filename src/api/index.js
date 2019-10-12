var express = require('express');
var router = express.Router();
//const accidents = require('../controllers/accidents')

/* POST method route. */
router.route('/')
  .get(async (req, res, next) => {
  // TODO aqui irá la llamada a AWS
    const data =
      res.send('well done');
  })
module.exports = router;