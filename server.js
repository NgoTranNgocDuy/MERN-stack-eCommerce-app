const express = require("express");
const colors = require("colors");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World!<h1>");
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold);
})