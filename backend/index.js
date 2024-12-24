import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import {createNote} from './controller/createNote.js';
import { getAllNotes } from "./controller/getAllNotes.js";



dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const corsOptions ={
  origin:'*', 
  credentials:true,           
  optionSuccessStatus:200,
}
app.use(cors(corsOptions));



app.get("/", (req, res)=>{
    res.json("server is running");
});

app.post("/createNote", createNote);
app.get("/getAllNotes", getAllNotes);
  

// Server Setup
const PORT = process.env.PORT || 5001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`)); 