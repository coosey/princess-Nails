const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist/index.html"), function(err) {
    if (err) res.status(500).send(err)
  })
})