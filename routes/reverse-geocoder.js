let express = require('express');
let axios = require('axios');
let router = express.Router();
require('dotenv').config({ path: '../client/.env' });

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

router.get('/api/reverse-geocode', function (req, res) {
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_API_KEY}&address=${req.body.lat},${req.body.lng}`)
    .then((results) => {
      const formattedAddress = results.data.results[0].formatted_address;
      return formattedAddress;
    }).then((address) => {
      res.status(200).send({
        formattedAddress: address,
      });
    }).catch(() => {
      res.status(400).send('error reverse geocoding');
    })
});

module.exports = router;