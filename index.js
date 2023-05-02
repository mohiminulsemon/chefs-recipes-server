const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const information = require("./chefinformation.json");

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/information", (req, res) => {
  res.send(information);
});

app.get("/information/:id", (req, res) => {
  const id = req.params.id;
  const item = information?.find((pd) => pd.id == id);
  res.send({ item });
});

// app.listen(5000, () => {
//     console.log('Server is running');
// })

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});

module.exports = app;
