import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdicionarPost from "../pages/AddPage/AdicionarPost";
import Cadastro from "../pages/CadastroPage/Cadastro";
import DetalhesPost from "../pages/DetalhesPage/DetalhesPost";
import Home from "../pages/HomePage/Home";
import Login from "../pages/LoginPage/Login";

function Router({ buttonText, setButtonText }) {
  return (
    <Switch>
      <Route exact path="/login">
        <Login buttonText={buttonText} setButtonText={setButtonText} />
      </Route>
      <Route exact path="/cadastro">
        <Cadastro buttonText={buttonText} setButtonText={setButtonText} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/detalhe/:id">
        <DetalhesPost />
      </Route>
      <Route exact path="/adicionar-post ">
        <AdicionarPost />
      </Route>
      <Route>
        <div>Erro</div>
      </Route>
    </Switch>
  );
}

export default Router;
