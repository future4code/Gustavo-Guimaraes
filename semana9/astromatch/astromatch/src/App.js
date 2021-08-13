import { Home } from "./components/Home";
import Perfis from "./components/Perfis";
import React, { useState } from "react";
import { Matches } from "./components/Matches";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("Home");

  const mudaParaMatches = () => {
    setPaginaAtual("Matches");
  };

  const mudaParaHome = () => {
    setPaginaAtual("Home");
  };

  const trocaPagina = () => {
    switch (paginaAtual) {
      case "Home":
        return (
          <Home mudaParaMatches={mudaParaMatches} paginaAtual={paginaAtual} />
        );

      case "Matches":
        return (
          <Matches mudaParaHome={mudaParaHome} paginaAtual={paginaAtual} />
        );
    }
  };

  return <div> {trocaPagina()} </div>;
}

export default App;
