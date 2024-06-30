import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//configure env
dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World!<h1>");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on mode ${process.env.DEV_MODE} on port ${PORT}`.yellow.bold);
})