const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quoteSchema = new Schema(
  {
    quote: { type: String },
    author: { type: String },
    favourite: { type: Boolean, default: false },
  },
  {
    collection: "Quote",
    timestamps: true,
  }
);

module.exports = mongoose.model("Quote", quoteSchema);
