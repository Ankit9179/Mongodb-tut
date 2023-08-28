import dbConnection from "./db.js";

const findData = async () => {
  try {
    const db = await dbConnection();
    const collection = db.collection("user");

    const res = await collection.find().toArray();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

findData();
