// Import Modules
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
console.log(`Process ${process.env.DATABASE_URL}`);
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})