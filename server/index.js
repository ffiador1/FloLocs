import express from "express";
import cors from "cors";
require("dotenv").config();
const mongoose = require("mongoose");
// import "./loadEnvironment.mjs";
// import records from "./routes/record.mjs";

mongoose.connect("mongodb+srv://ffiador:FloLocs1@cluster0.xfwanj8.mongodb.net/?retryWrites=true&w=majority");


// IMPORT YOUR SCHEMAS HERE
// const NameOfSchema = require("./models/Filename");


const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// IMPORT YOUR API ROUTES HERE
//app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});