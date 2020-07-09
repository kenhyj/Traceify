var express = require('express');
var router = express.Router();
const Reopening = require('../models/Reopening');

/* GET messages listing. */
/* SAMPLE REST */
router.get('/', function (req, res, next) {
  res.send('this is the Reopening endpoint');
});

router.get('/getall', (req, res) => {
  Reopening.find({})
    .then((data) => {
      // console.log('Reopening...', data);
      res.json(data);
    })
    .catch((error) => {
      // console.error("Error", error);
      res.status(404).json('Error: ' + error);
    });
});

/* get specific provincial territorial reopen details 
one possible debug: your dotenv might be using the wrong database */
router.get('/getprovince', (req, res) => {
  Reopening.find({
    province: req.body.province,
  })
    .then((data) => {
      // console.log('Reopening...', data);
      res.json(data);
    })
    .catch((error) => {
      // console.error("Error", error);
      res.status(404).json('Error: ' + error);
    });
});

/* get specific provincial territorial reopen details using abbreviation of province territory
one possible debug: your dotenv might be using the wrong database */
router.get('/getprovince/:abbr', (req, res) => {
  Reopening.find({
    abbr: req.params.abbr,
  })
    .then((data) => {
      // console.log('Reopening...', data);
      res.json(data);
    })
    .catch((error) => {
      // console.error("Error", error);
      res.status(404).json('Error: ' + error);
    });
});

/* get specific provincial territorial reopen details using abbreviation of province territory
one possible debug: your dotenv might be using the wrong database */
router.get('/getprovince/:abbr', (req, res) => {
  Reopening.find({
    abbr: req.params.abbr,
  })
    .then((data) => {
      // console.log('Reopening...', data);
      res.json(data);
    })
    .catch((error) => {
      // console.error("Error", error);
      res.status(404).json('Error: ' + error);
    });
});

// do not use, this is simply there to help test if I'm accessing the proper database and collection //
router.put('/newprovince', (req, res) => {
  const newPost = new Reopening({
    province: req.body.province,
    abbr: req.body.abbr,
    current_stage: req.body.current_stage,
    phases: req.body.phases,
    more: req.body.more,
  });
  res.setHeader('Content-Type', 'application/json');
  newPost
    .save()
    .then((result) => {
      res.sendStatus(200);
      console.log(result);
    })
    .catch((err) => {
      res.sendStatus(404);
      console.error(err);
    });
});

module.exports = router;
