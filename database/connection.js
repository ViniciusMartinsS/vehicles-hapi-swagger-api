'use  strict';

const { MongoClient } = require('mongodb');
const DATABASE_URL = 'YOUR MLAB URL HERE!!'

let DATABASE = null;

module.exports.connection = async () => {
  try {
    if (DATABASE) {
      return DATABASE
    }

    connection = await MongoClient.connect(
      DATABASE_URL, { useNewUrlParser: true }
    )
    DATABASE = connection.db('cars')

    return DATABASE
  } catch (err) {
    console.error('An error has occurred while connection to Mongo', err)
  }
}
