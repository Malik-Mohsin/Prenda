import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavouritQuoteRowItem from "../../components/FavouriteQuoteRow";
import Tooltip from "@mui/material/Tooltip";

const useStyles = makeStyles({
  dev: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  root: {
    padding: "20px",
    width: "80%",
  },
  title: {
    fontWeight: "600",
    fontSize: 30,
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-between",
    color: "#004976",
    flexDirection: "row",
  },
  author: {
    textAlign: "right",
    color: "#004976",
  },
  error: {
    textAlign: "center",
    color: "#004976",
  },
  expandIcon: {
    color: "#004976",
  },
  panelSummary: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  cardAction: { display: "flex", justifyContent: "space-around" },
});

const FavouriteQuotes = ({ setQuote, favouritesList }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.dev}>
        {" "}
        <Accordion className={classes.root}>
          <Tooltip title="Click to expand/Collapse">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.panelSummary}
            >
              <Typography className={classes.title}>
                Favourite Quotes
              </Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            {favouritesList.length ? (
              favouritesList.map((quote, index) => {
                return (
                  <FavouritQuoteRowItem
                    key={index}
                    quote={quote}
                    setQuote={setQuote}
                  />
                );
              })
            ) : (
              <p className={classes.error}>
                No quotes have been marked as favourite yet.
              </p>
            )}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FavouriteQuotes;
