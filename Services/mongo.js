"use  strict";

const { MongoClient } = require("mongodb");
const { ObjectID } = require("mongodb");

class Database {
  constructor(conn) {
    this.conn = conn;
  }

  static async connection() {
    try {
      const connect = await MongoClient.connect(
        "mongodb://viniciusMartins:Vinicius15@ds243798.mlab.com:43798/cars",
        { useNewUrlParser: true }
      );
      return connect;
    } catch (error) {
      return error;
    }
  }

  async getVehicles() {
    try {
      const conn = await this.conn;
      const db = conn.db("cars").collection("car");
      const retorno = await db.find().toArray();
      return retorno;
    } catch (error) {
      return error;
    }
  }

  async getVehicle(id) {
    try {
      const conn = await this.conn;
      const db = conn.db("cars").collection("car");
      const retorno = await db
        .find({
          _id: new ObjectID(id)
        })
        .toArray();
      return retorno;
    } catch (error) {
      console.log(error);
    }
  }

  async insertVehicle(informations) {
    try {
      const conn = await this.conn;
      const db = conn.db("cars").collection("car");
      return db.insertOne({ informations });
    } catch (error) {
      return error;
    }
  }

  async updateVehicle(id, informations) {
    const conn = await this.conn;
    const db = conn.db("cars").collection("car");
    return await db.update(
      {
        _id: new ObjectID(id)
      },
      {
        $set: {
          "informations.marca": informations.marca,
          "informations.modelo": informations.modelo,
          "informations.versao": informations.versao
        }
      }
    );
  }

  async deleteVehicle(id) {
    const conn = await this.conn;
    const db = conn.db("cars").collection("car");
    return await db.deleteOne({ _id: new ObjectID(id) });
  }
}
module.exports = Database;
