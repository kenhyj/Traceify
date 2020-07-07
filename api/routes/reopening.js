var express = require('express');
var router = express.Router();
const Reopening = require('../models/Reopening');

/* GET messages listing. */
/* SAMPLE REST */
router.get('/', function (req, res, next) {
  res.send('this is the Reopening endpoint');
});

/* get specific provincial territorial reopen details */
router.get('/getreopen', (req, res) => {
  Reopening.find({
    province: req.body.province,
  })
    .then((data) => {
      console.log('Reopening...', data);
      res.json(data);
    })
    .catch((error) => {
      // console.error("Error", error);
      res.status(404).json('Error: ' + error);
    });
});

module.exports = router;
