import dbConnection from "./db.js";

const deleteDocument = async () => {
  try {
    const db = await dbConnection();
    const collection = db.collection("user");
    const data = { name: "vv" };
    const res = await collection.deleteOne(data);
    console.log(res.deletedCount);
  } catch (error) {
    console.log(error);
  }
};
deleteDocument();
