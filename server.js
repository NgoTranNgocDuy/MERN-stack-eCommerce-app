import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//configure env
dotenv.config();
// database config
connectDB();
const app = express();
// middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("<h1>Hello World!<h1>");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on mode ${process.env.DEV_MODE} on port ${PORT}`.yellow.bold);
})