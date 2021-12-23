const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));