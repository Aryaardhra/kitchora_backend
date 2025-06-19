import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import connectDB from "./configs/db.js";

dotenv.config();
//app config

const app = express();
const PORT = process.env.PORT || 4002;
connectDB();

const allowedOrigins = [ "http://localhost:5173" ]

//middlewares

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));



//api endpoints

app.get("/", (req,res) => {
    res.send("API working")
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});