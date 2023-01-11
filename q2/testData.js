const mongoose = require("mongoose");

const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Post Four",
    body: "This is post four",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Post Five",
    body: "This is post five",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Post Three",
    body: "This is post three",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Post Six",
    body: "This is post Six",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Post Seven",
    body: "This is post Seven",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Post Eight",
    body: "This is post Eight",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Post Nine",
    body: "This is post Nine",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Post ten",
    body: "This is post ten",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Post eleven",
    body: "This is post eleven",
  },
];

module.exports = posts;
