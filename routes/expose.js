let express = require('express');
let router = express.Router();
const db = require('../db');
let E = 0.001;


router.put('/api/expose',(req,res)=>{
    const oneRow = req.body;
    let places = [];
    const time = oneRow.date.slice(0,10);
    const locations = oneRow.locations;
    return db.get().collection('locationTraces').find({$and:[{'date': {$regex: new RegExp('^' + time)}},
    {$and:[{'location.lat':{$gt: locations[0].lat-E}}, {'location.lat':{$lt: locations[0].lat+E}},
    {'location.lng':{$gt: locations[0].lng-E}},{'location.lng':{$lt: locations[0].lng+E}}]}]}).toArray()
    .then((result1)=>{
        if(locations[0].loc!=='' && result1.length !== 0){
            places.push({
                place: locations[0].loc,
                date:time,});
        }
        return db.get().collection('locationTraces').find({$and:[{'date': {$regex: new RegExp('^' + time)}},
        {$and:[{'location.lat':{$gt: locations[1].lat-E}}, {'location.lat':{$lt: locations[1].lat+E}},
        {'location.lng':{$gt: locations[1].lng-E}},{'location.lng':{$lt: locations[1].lng+E}}]}]}).toArray()
    }).then((result2)=>{
        if(locations[1].loc!=='' && result2.length !== 0){
            places.push({
                place: locations[1].loc,
                date:time,});
        }
        return db.get().collection('locationTraces').find({$and:[{'date': {$regex: new RegExp('^' + time)}},
        {$and:[{'location.lat':{$gt: locations[2].lat-E}}, {'location.lat':{$lt: locations[2].lat+E}},
        {'location.lng':{$gt: locations[2].lng-E}},{'location.lng':{$lt: locations[2].lng+E}}]}]}).toArray()
    }).then((result)=>{
        if(locations[2].loc!=='' && result.length !== 0){
            places.push({
                place: locations[2].loc,
                date:time,});
        }
        res.json(places);
    })
    .catch(()=> { res.status(400).json('error in finding')})
})

module.exports = router;
