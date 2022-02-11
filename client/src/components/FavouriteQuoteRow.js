import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#004976",
    padding: "10px",
    "&:hover": {
      backgroundColor: "aliceblue;",
      cursor: "pointer",
    },
  },
}));

const FavouritQuoteRowItem = ({ quote, setQuote }) => {
  const classes = useStyles();

  const handleClick = () => {
    setQuote(quote);
  };

  return (
    <div>
      <div className={classes.root} onClick={handleClick}>
        <h3>{quote.quote}</h3>
        <h6>{quote.author}</h6>
      </div>
      <Divider />
    </div>
  );
};
export default FavouritQuoteRowItem;
