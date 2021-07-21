import styled from "styled-components"
import React from "react";
import Pagina1 from "./Pagina1"

class Pagina3 extends React.Component { 

    render( ) { 
        return (
          <div> 
            <h1 id="title"> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO  </h1>
            <form id="survey-form">
              <label for="curso"> 5. Por que você não terminou um curso de graduação?</label>
              <input type="text" id="curso" name="curso" placeholder="Coloque seu motivo" autofocus  required />
              <label for="motivo-complementar" > 6. Você fez algum curso complementar? </label>
              <select id="curso-complementar">
              <option label="Nenhum"></option>
              <option label="Curso técnico"></option>
              <option label="Curso de Inglês"></option>
              </select>
            </form>
          </div>  
        )

    }
}

export default Pagina3