import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/student");
console.log("connection successfully");

//schema
const booksSchema = new mongoose.Schema({
  title: String,
  price: Number,
});
//model
const booksModel = mongoose.model("Books", booksSchema);

// //get
// app.get("/books", async (req, res) => {
//   try {
//     const data = await booksModel.find();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //post
// app.post("/books/add", async (req, res) => {
//   console.log(req.body);
//   try {
//     const { title, price } = req.body;
//     const data = new booksModel({ title, price });
//     data.save();
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//   }
// });

// //put
// app.put("/books/update/:id", async (req, res) => {
//   console.log(req.params);
//   try {
//     const {id} = req.body
//     const { title, price } = req.body;
//     const data = await booksModel.findByIdAndUpdate(id,{title,price})
//     res.json(data);
//   } catch (error) {
//     console.log(error);
//   }
// });

//delete
app.delete("/books/delete/:id", async (req, res) => {
  console.log(req.params);
  try {
    const { id } = req.params;
    await booksModel.findByIdAndRemove(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log("app listening");
});
