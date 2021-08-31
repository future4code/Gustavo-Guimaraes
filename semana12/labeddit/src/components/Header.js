import styled from "styled-components";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolbar } from "./styled";
import Button from "@material-ui/core/Button";
import { goToHome, goToLogin } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Header({ buttonText, setButtonText }) {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const buttonAction = () => {
    if (token) {
      localStorage.removeItem("token");
      setButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToHome(history)} color="inherit">
          F.R.I.E.N.D.S
        </Button>
        <Button onClick={() => buttonAction(history)} color="inherit">
          {buttonText}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}
