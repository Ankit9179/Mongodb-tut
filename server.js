import express from "express";
import connectToMongo from "./dataBase.js";
// instance of express
const app = express();
app.use(express.json());

// //get req
// app.get("/", async (req, res) => {
//   try {
//     const db = await connectToMongo();
//     const collection = db.collection("user");
//     const resdata = await collection.find().toArray();
//     res.json(resdata);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       error,
//     });
//   }
// });

// //post req
// app.post("/create", async (req, res) => {
//   try {
//     const db = await connectToMongo(); //db is our data base in mongo db like student
//     const collection = db.collection("user"); //collection

//     const data = req.body;
//     console.log(data);

//     //insert doc
//     const result = collection.insertOne(data); //get data from client
//     res.json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //update
// app.put("/update/:name", async (req, res) => {
//   try {
//     const db = await connectToMongo(); //db is our data base in mongo db like student
//     const collection = db.collection("user"); //collection
//     console.log(req.body);
//     console.log(req.params);
//     const result = collection.updateOne(
//       { name: req.params.name },
//       { $set: req.body }
//     );
//     res.json("updated");
//   } catch (error) {
//     console.log(error);
//   }
// });

// delete
app.delete("/delete/:name", async (req, res) => {
  try {
    const db = await connectToMongo(); //db is our data base in mongo db like student
    const collection = db.collection("user"); //collection
    const data = req.params.name;
    const result = collection.deleteOne({ name: data });
    res.send("deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080);
