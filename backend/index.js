// dependices
const express = require("Express");
const mongoose = require("mongoose");
const cors = require("cors");
const quoteHelper = require("./helpers/quote.helper");
var app = express();

app.use(cors());

// local dependices
const quote = require("./routes/quote.router");

//port
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/quote", quote);

//running server
app.listen(port, () => {
  console.log("Running on port " + port);
});

mongoose
  .connect("mongodb://127.0.0.1/prenda", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("[ Mongoose Connected ]");
    quoteHelper.addQuotesFromExternalURL();
  });
