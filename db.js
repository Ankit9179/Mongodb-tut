import { MongoClient } from "mongodb";
const url = "mongodb://127.0.0.1:27017"; //url
const client = new MongoClient(url);
const dbsN = "student";

const dbConnection = async () => {
  try {
    await client.connect();
    console.log("mongo connection success full");
    const db = client.db(dbsN);
    return db;
  } catch (error) {
    console.log("connection error", error);
  }
};

export default dbConnection;
