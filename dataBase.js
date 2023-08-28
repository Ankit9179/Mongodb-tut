import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbs = "student";

const connectToMongo = async () => {
  try {
    await client.connect();
    console.log("connection successful");
    const db = client.db(dbs);
    return db;
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
