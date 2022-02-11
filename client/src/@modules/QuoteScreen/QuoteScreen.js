import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import FavouriteQuotes from "./FavouriteQuotes";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    padding: "20px",
    width: "80%",
    marginTop: "20px",
    paddingBottom: "20px",
  },
  quote: {
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: 30,
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-between",
    color: "#004976",
    flexDirection: "row",
  },
  quoteTitle: {
    marginRight: "10px",
  },
  author: {
    textAlign: "right",
    color: "#004976",
  },
  buttonNewQuote: {
    backgroundColor: "#004976",
    color: "white",
    "&:hover": {
      backgroundColor: "#004976",
      color: "white",
    },
  },
  favouriteIcon: {
    color: "#004976",
    "&:hover": {
      cursor: "pointer",
    },
  },
  cardAction: { display: "flex", justifyContent: "space-around" },
});

const QuoteScreen = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState({});
  const [favouritesList, setFavouritesList] = useState([]);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/quote/random`, requestOptions)
      .then((response) => response.text())
      .then((res) => {
        setQuote(JSON.parse(res));
        getFavourites();
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleNewQuoteBtnClick = () => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/quote/change/${quote._id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((res) => setQuote(JSON.parse(res)))
      .catch((error) => console.log("error", error));
  };

  const getFavourites = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/quote/favourites`, requestOptions)
      .then((response) => response.text())
      .then((res) => setFavouritesList(JSON.parse(res)))
      .catch((error) => console.log("error", error));
  };

  const favIconHandler = () => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/quote/updateFavouriteStatus/${quote._id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((res) => {
        setQuote(JSON.parse(res));
        getFavourites();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Header />
      <div className={classes.root}>
        {" "}
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.quote} variant="h1">
              <q className={classes.quoteTitle}>{quote?.quote}</q>
              {quote.favourite ? (
                <FavoriteIcon
                  className={classes.favouriteIcon}
                  onClick={favIconHandler}
                />
              ) : (
                <FavoriteBorderIcon
                  className={classes.favouriteIcon}
                  onClick={favIconHandler}
                />
              )}
            </Typography>
            <br></br>
            <div>
              <p className={classes.author}>({quote?.author})</p>
              <p></p>
            </div>
          </CardContent>

          <CardActions className={classes.cardAction}>
            <Button
              className={classes.buttonNewQuote}
              startIcon={<LoopIcon />}
              variant="contained"
              onClick={handleNewQuoteBtnClick}
            >
              New Quote
            </Button>
          </CardActions>
        </Card>
      </div>
      <FavouriteQuotes setQuote={setQuote} favouritesList={favouritesList} />
    </div>
  );
};

export default QuoteScreen;
