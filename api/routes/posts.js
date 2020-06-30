var express = require('express');
var router = express.Router();
const Post = require('../models/Post');

/* GET messages listing. */
/* SAMPLE REST */
router.get('/', function (req, res, next) {
  res.send('this is the posts endpoint');
});

/* get all the listed messages for rendering the MsgTable */
router.get('/getall', (req,res) => {
  Post.find( {
  }).then( (data) => {
    console.log('All tweets:', data);
    res.json(data);
  }).catch( (error) => {
    // console.error("Error", error);
    res.status(404).json('Error: ' + error);
  })
});

/* get specific messsage */
router.get('/getspecific', (req,res) => {
  Post.find({
    username: req.body.username,
    tweet: req.body.tweet,
  }).then( (data) => {
    console.log('Searched tweets:', data);
    res.json(data);
  }).catch( (error) => {
    // console.error("Error", error);
    res.status(404).json('Error: ' + error);
  }) 
});

/* add a message 
post or put? 
Fixme: i can put duplicates because object Id is unique each time, i don't want that*/
router.put('/', (req, res) => {
  const newPost = new Post(
    {
      username: req.body.username,
      tweet: req.body.tweet,
      date: req.body.date,
    } 
  );
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

/* delete a specific message */
router.delete('/delspecific', (req, res) => {
  Post.deleteOne(
    {
      username: req.body.username,
      tweet: req.body.tweet,
      date: req.body.date,
    }
  ).then( (data) => {
    res.json(data);
  }).catch( (error) => {
    // console.error("Error", error);
    res.status(404).json('Error: ' + error);
  })
});

/* deleta all messages */
// https://kb.objectrocket.com/mongo-db/how-to-use-the-mongoose-deletemany-method-931
router.delete('/delall', (req, res) => {
  Post.deleteMany(
    {}
  ).then( (data) => {
    res.json(data);
  }).catch( (error) => {
    // console.error("Error", error);
    res.status(404).json('Error: ' + error);
  })
});

/* edit a message. OPTIONAL */
// router.put('/', (req,res) => {
//   Post.
// });

module.exports = router;
