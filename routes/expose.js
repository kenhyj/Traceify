let express = require('express');
let router = express.Router();
const db = require('../db');


router.put('/api/expose',(req,res)=>{
    const oneRow = req.body;
    let places = [];
    const time = oneRow.date.slice(0,10);
    const locations = oneRow.locations;
    return db.get().collection('locationTraces').find({$and:[{date: {$regex: new RegExp('^' + time)}},
    {$and:[{"location.lat":locations[0].lat},{"location.lng":locations[0].lng}]}]}).toArray()
    .then((result1)=>{
        if(locations[0].loc!=='' && result1.length !== 0){
            places.push({
                place: locations[0].loc,
                date:time,});
        }
        return db.get().collection('locationTraces').find({$and:[{date: {$regex: new RegExp('^' + time)}},
        {$and:[{"location.lat":locations[1].lat},{"location.lng":locations[1].lng}]}]}).toArray()
    }).then((result2)=>{
        if(locations[1].loc!=='' && result2.length !== 0){
            places.push({
                place: locations[1].loc,
                date:time,});
        }
        return db.get().collection('locationTraces').find({$and:[{date: {$regex: new RegExp('^' + time)}},
        {$and:[{"location.lat":locations[2].lat},{"location.lng":locations[2].lng}]}]}).toArray()
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
