const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

const app = express();
const port = 7000; // do not use 3000 it's for front end

app.use(bodyParser.json());
const postsRoute = require('./routes/posts');
const reopeningsRoute = require('./routes/reopenings');

// Middlewares
app.use('/posts', postsRoute);
app.use('/reopenings', reopeningsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('This is Traceify API!');
});

// CONNECT TO MONGO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true }
  // () => console.log('Connected to DB!')
);

mongoose.connection.on('connected', () => {
  console.log('mongoDB is connected');
});

// WE START LISTENING TO THE SERVER
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
// https://www.youtube.com/watch?v=vjf774RKrLc&t=345s
// https://www.youtube.com/watch?v=kJA9rDX7azM
// https://www.youtube.com/watch?v=Law7wfdg_ls
