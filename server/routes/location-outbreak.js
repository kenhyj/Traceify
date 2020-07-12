var express = require('express');
var router = express.Router();
const db = require('../db');
var mongodb = require('mongodb');

router.get('/api/location-outbreak', function (req, res) {
  db.get().collection('locationOutbreak').find({}).toArray()
      .then((result) => {
          if (result.toString() !== '') res.status(200).send(result);
          else res.status(400).send("Location Outbreaks empty.");
      }).catch(() => {
      res.status(400).send("An error occurred in the database.");
  });
});

module.exports = router;
