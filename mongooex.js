import mongoose from "mongoose";

//schema
const MongoShema = new mongoose.Schema({
  name: String,
  age: Number,
});

//model
const MongoModel = mongoose.model("User", MongoShema);

//mongog connection
const mongoconnection = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/student");
  console.log(`connection successfully with`);
  const newData = new MongoModel({
    name: "thomsan",
    age: 55,
  });
  await newData.save();
  console.log("added data successfully");
};
mongoconnection();
