import { Home } from "./components/Home";
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
      default:
        return <Home />;
    }
  };

  return <div> {trocaPagina()} </div>;
}

export default App;
