import dbConnection from "./db.js";

const updataDocument = async () => {
  try {
    const db = await dbConnection();
    const collection = db.collection("user");
    const res = await collection.updateMany(
      { name: "tt" },
      { $set: { age: 1000 } }
    );
    console.log(res.modifiedCount);
  } catch (error) {
    console.log(error);
  }
};

updataDocument();
