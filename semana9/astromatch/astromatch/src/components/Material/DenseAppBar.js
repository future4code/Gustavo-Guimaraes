import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import PeopleIcon from "@material-ui/icons/People";
import People from "@material-ui/icons/People";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function DenseAppBar(props) {
  const classes = useStyles();

  const escolheBotao = () => {
    switch (props.paginaAtual) {
      case "Home":
        return (
          <Toolbar variant="dense">
            <Typography variant="h7" color="secundary">
              <h2>Astromatch </h2>
            </Typography>
            <Button variant="contained" onClick={props.mudaParaMatches}>
              <PeopleIcon />
              <SwapHorizIcon />
            </Button>
          </Toolbar>
        );

      case "Matches":
        return (
          <Toolbar variant="dense">
            <Typography variant="h7" color="secundary">
              <h2>Astromatch </h2>
            </Typography>
            <Button variant="contained" onClick={props.mudaParaHome}>
              <PeopleIcon />
              <SwapHorizIcon />
            </Button>
          </Toolbar>
        );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">{escolheBotao()}</AppBar>
    </div>
  );
}

export default DenseAppBar;
