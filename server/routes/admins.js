var express = require('express');
var router = express.Router();
const db = require('../db');
const { response } = require('express');

/* GET admin users listing. */
router.get('/admins/:email', function (req, res) {
    let email = req.params.email;
    db.get().collection('users').find({ email: `${email}` }).toArray()
        .then((result) => {
            if (result.toString() !== '') res.status(200).send("ok");
            else res.status(400).send("The provided email is not an Admin.");
        }).catch(() => {
        res.status(400).send("An error occurred in the database.");
    });
});

router.post('/admins/location-trace', function (req, res) {
    //TODO: Also increment numVisitedByInfected in city collection

    db.get().collection('locationTraces').insertOne(req.body)
        .then(() => {
            res.status(200).send("ok");
        }).catch(() => {
        res.status(400).send("An error occurred in the database.");
    });
});

router.post('/expose',(req,res)=>{
    const oneRow = req.body;
    let places = [];
    // const time = oneRow.date.toISOString().slice(0,10);
    const time = oneRow.date;
    console.log(time);
    const locations = oneRow.locations;
    return db.get().collection('locationTraces').find({$and:[{date: "2020-03-16T00:00:00Z"},{$and:[{"location.lat":49.260738},{"location.lng":-123.245758}]}]}).toArray()
    .then((result1)=>{
        console.log(result1);
        if(locations[0].loc!=='' && result1.length !== 0){
            places.push(locations[0].loc);
        }
        return db.get().collection('locationTraces').find({$or:[{date: {$regex: /^`${time}`/i}},{$and:[{"location.lat":locations[1].lat},{"location.lng":locations[1].lng}]}]}).toArray()
    }).then((result2)=>{
        console.log(result2);
        if(locations[1].loc!=='' && result2.length !== 0){
            places.push(locations[1].loc);
        }
        return db.get().collection('locationTraces').find({$and:[{date: {$regex: `/^${time}/i`}},{$and:[{"location.lat":locations[2].lat},{"location.lng":locations[2].lng}]}]}).toArray()
    }).then((result)=>{
        console.log(result);
        if(locations[2].loc!=='' && result.length !== 0){
            places.push(locations[2].loc);
        }
        res.json(places);
    })
    .catch(()=> {console.log('didn t find')} )
    


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
    
    
    
})

module.exports = router;
