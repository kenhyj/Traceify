let express = require('express');
let router = express.Router();
const db = require('../db');


router.put('/api/expose',(req,res)=>{
    const oneRow = req.body;
    let places = [];
    const time = oneRow.date.slice(0,10);
    console.log(time);
    const locations = oneRow.locations;
    return db.get().collection('locationTraces').find({$and:[{date: {$regex: new RegExp('^' + time)}},
    {$and:[{"location.lat":locations[0].lat},{"location.lng":locations[0].lng}]}]}).toArray()
    .then((result1)=>{
        console.log(result1);
        if(locations[0].loc!=='' && result1.length !== 0){
            places.push({
                place: locations[0].loc,
                date:time,});
        }
        return db.get().collection('locationTraces').find({$and:[{date: {$regex: new RegExp('^' + time)}},
        {$and:[{"location.lat":locations[1].lat},{"location.lng":locations[1].lng}]}]}).toArray()
    }).then((result2)=>{
        console.log(result2);
        if(locations[1].loc!=='' && result2.length !== 0){
            places.push({
                place: locations[1].loc,
                date:time,});
        }
        return db.get().collection('locationTraces').find({$and:[{date: {$regex: new RegExp('^' + time)}},
        {$and:[{"location.lat":locations[2].lat},{"location.lng":locations[2].lng}]}]}).toArray()
    }).then((result)=>{
        console.log(result);
        if(locations[2].loc!=='' && result.length !== 0){
            places.push({
                place: locations[2].loc,
                date:time,});
        }
        res.json(places);
    })
    .catch(()=> {console.log('didn t find');
                  res.status(400).json('error in finding')} )
    


    // let queryPromise = new Promise((res,rej)=>{
    //     let places = [];
    //     fields.map(oneRow=>{
    //         const time = oneRow.date.toISOString().slice(0,10);
            
    //         let regexp = new RegExp("^"+time);
    //         console.log('time:' + time);
    //         oneRow.locations.map(oneLoc=>{
                

    //             // ,{location:{lat:oneLoc.lat,lng:oneLoc.lng}}
    //             console.log('reach here');
    //             db.get().collection('locationTraces').find({date: {$regex: /^2020-03-16/i}}).toArray()
    //             .then(()=>{
    //                 places.push(oneLoc.loc);
    //             })
    //             .catch( ()=> {console.log('didn t find')} ) 
    //         })
    //     })
    //     res(places);

    // })

    // queryPromise.then((places)=>{
    //     res.json(places);
    // })
    
    
    
});

module.exports = router;
