'use  strict';

const { MongoClient } = require('mongodb');
const DATABASE_URL = 'mongodb://ViniciusMartinsS:Vinicius15@ds257698.mlab.com:57698/cars'

let DATABASE = null;

module.exports.connection = async () => {
  try {
    if (DATABASE) {
      return DATABASE
    }

    DATABASE = await MongoClient.connect(
      DATABASE_URL, { useNewUrlParser: true }
    )
    .db('cars')

    return DATABASE
  } catch (err) {
    console.error('An error has occurred while connection to Mongo', err)
  }
}
