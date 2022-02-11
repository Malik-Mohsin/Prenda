const express = require("Express");
const router = express.Router();
const quoteController = require("../controllers/quote.controller");

//get random quote
router.get("/random", async (_, res) => {
  const response = await quoteController.getRandomQuote();
  res.status(response.status).json(response.data);
});

//change quote
router.get("/change/:id", async (req, res) => {
  const existingQuoteId = req.params.id;
  const response = await quoteController.getChangedQuote(existingQuoteId);
  res.status(response.status).json(response.data);
});

//update favourite status for a quote
router.get("/updateFavouriteStatus/:id", async (req, res) => {
  const existingQuoteId = req.params.id;
  const response = await quoteController.updateFavouriteStatus(existingQuoteId);
  res.status(response.status).json(response.data);
});

//get all favourite quotes
router.get("/favourites", async (req, res) => {
  const response = await quoteController.getFavouriteQuotes();
  res.status(response.status).json(response.data);
});

module.exports = router;
