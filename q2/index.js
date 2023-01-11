const express = require("express");
const Post = require("./models/Posts.js");
const posts = require("./testData.js");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 4000;
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.use(express.json());

// Post.insertMany(posts);
const mainRoutes = require("./routes/main");
app.use(mainRoutes);

app.use(express.static(path.join(__dirname + "/public")));


mongoose
  .connect(
    "mongodb+srv://test:test123@cluster0.kztggbu.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
