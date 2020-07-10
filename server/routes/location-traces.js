var express = require('express');
var router = express.Router();
const db = require('../db');
var mongodb = require('mongodb');

// Returns the complete list of all location traces
router.get('/locations', function (req, res) {
    db.get().collection('locationTraces').find({}).toArray()
        .then((result) => {
            if (result.toString() !== '') res.status(200).send(result);
            else res.status(400).send("Location Traces empty.");
        }).catch(() => {
        res.status(400).send("An error occurred in the database.");
    });
});

router.post('/location-trace', function (req, res) {
    //TODO: Also increment numVisitedByInfected in city collection

    db.get().collection('locationTraces').insertOne(req.body)
        .then(() => {
            res.status(200).send("ok");
        }).catch(() => {
        res.status(400).send("An error occurred in the database.");
    });
});

router.delete('/locations', function (req, res) {
    req.body.forEach(id => {
        db.get().collection('locationTraces').remove({ _id: new mongodb.ObjectID(id) })
            .then(() => {
                console.log("Location trace removal successful.");
                if (req.body.indexOf(id) === req.body.length-1)
                    res.status(200).send("ok");
            }).catch(() => {
            res.status(400).send("An error occurred in the database.");
        });
    });
});

module.exports = router;
