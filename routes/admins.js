let express = require('express');
let router = express.Router();
const db = require('../db');

/* GET admin users listing. */
router.get('/api/admins/:email', function (req, res) {
    let email = req.params.email;
    db.get().collection('users').find({ email: `${email}` }).toArray()
        .then((result) => {
            if (result.toString() !== '') res.status(200).send('ok');
            else res.status(400).send('The provided email is not an Admin.');
        }).catch(() => {
        res.status(400).send('An error occurred in the database.');
    });
});

module.exports = router;
