const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passpost = require("passport");

const path = require("path");

const app = express();

app.unsubscribe(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connect"))
  .catch(err => console.log(err));
