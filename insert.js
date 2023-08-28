import dbConnection from "./db.js";

const insertDataFunc = async () => {
  try {
    const db = await dbConnection();
    const collection = db.collection("user");
    const data = [
      { name: "tt", age: 5 },
      { name: "vv", age: 55 },
    ];
    const res = await collection.insertMany(data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

insertDataFunc();
