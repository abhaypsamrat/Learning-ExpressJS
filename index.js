const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about/:name", (req, res) => {
  res.send("Hello About!" + req.params.name);
});
app.get("/contact", (req, res) => {
  // res.send('hello contact!')
  res.sendFile(path.join(__dirname, "index.html"));
  // res.json({"harry": 34})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
