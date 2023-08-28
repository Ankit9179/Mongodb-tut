import express from "express";
import connectToMongo from "./dataBase.js";
// instance of express
const app = express();

app.get("/", async (req, res) => {
  try {
    const db = await connectToMongo();
    const collection = db.collection("user");
    const resdata = await collection.find().toArray();
    res.json(resdata);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
    });
  }
});

app.listen(8080);
