const quote = require("../models/quote");
const axios = require("axios");

module.exports.addQuotesFromExternalURL = async () => {
  const quotesExternalURL =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  try {
    quote.deleteMany({}).then(() => {
      console.log("All existing data removed from database...");
      let config = {
        method: "get",
        url: quotesExternalURL,
        headers: {},
      };

      axios(config)
        .then(async (response) => {
          await quote.create(response.data.quotes, (err) => {
            if (err) {
              console.log(
                "Error while adding Quotes from external URL in to database..."
              );
            } else {
              console.log(
                "Updated Quotes re-added into database from external URL..."
              );
            }
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  } catch (e) {
    console.log(e);
  }
};
