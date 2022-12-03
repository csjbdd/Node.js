const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

console.log("hello");

app.use(express.static(path.join(__dirname,"src")));

app.listen(PORT, () => { console.log(`server is running ${PORT}`)});