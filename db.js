const MongoClient = require('mongodb').MongoClient;
require('dotenv').config({ path: '../client/.env' });

const URI = process.env.DB_CONNECTION;
let db;

function connect(callback) {
  console.log('URI: ' + URI);
  MongoClient.connect(URI, { useUnifiedTopology: true }, (err, database) => {
    if (err) return console.error(err);
    db = database.db('traceify');
    console.log('Connected to Database');
    callback();
  });
}

function get() {
  return db;
}

function close() {
  db.close();
}

module.exports = {
  connect,
  get,
  close,
};
