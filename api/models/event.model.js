const mongoose = require("mongoose");

const Event = mongoose.model(
  "Event",
  new mongoose.Schema({
    id: Number,
    color: String,
    from: Date,
    to: Date,
    title: String
  })
);

module.exports = Event;