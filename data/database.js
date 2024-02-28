const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient

let _db;

const connectToDb = async () => {
    const client = await MongoClient.connect("mongodb://localhost:27017")
    _db = client.db("WDE-shop")
}


const getDb = () => {
    if (!_db) {
        throw new Error("Database not found!")
    }
    return _db
}

module.exports = {
    getDb: getDb,
    connectToDb: connectToDb
}

