const quote = require("../models/quote");

module.exports.getRandomQuote = async () => {
  try {
    const count = await quote.countDocuments().exec();
    const random = Math.floor(Math.random() * count);
    const data = await quote.findOne().skip(random).exec();

    return { status: 200, data: data };
  } catch (e) {
    console.log(e);
    return { status: 500, data: e };
  }
};

module.exports.getChangedQuote = async (existingQuoteId) => {
  try {
    let data;
    const count = await quote.countDocuments().exec();

    do {
      const random = Math.floor(Math.random() * count);
      data = await quote.findOne().skip(random).exec();
    } while (data && data._id == existingQuoteId);

    return { status: 200, data: data };
  } catch (e) {
    console.log(e);
    return { status: 500, data: e };
  }
};

module.exports.updateFavouriteStatus = async (quoteId) => {
  try {
    const qt = await quote.findById(quoteId);
    qt.favourite = !qt.favourite;
    const data = await quote.findOneAndUpdate({ _id: quoteId }, qt, {
      new: true,
      useFindAndModify: false,
    });

    return { status: 200, data: data };
  } catch (e) {
    console.log(e);
    return { status: 500, data: e };
  }
};

module.exports.getFavouriteQuotes = async () => {
  try {
    const data = await quote.find({ favourite: true });

    return { status: 200, data: data };
  } catch (e) {
    console.log(e);
    return { status: 500, data: e };
  }
};
