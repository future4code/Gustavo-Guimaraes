import styled from "styled-components"
import React from "react";
import Pagina1 from "./Pagina1"

class Pagina2 extends React.Component { 


    render( ) { 
        return (
            <div>
            <h1 id="title"> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR  </h1>
            <form id="survey-form">
              <label for="curso"> 5. Qual curso?</label>
              <input type="text" id="curso" name="curso" placeholder="Coloque seu curso" autofocus  required />
              <label for="ensino" > 6. Qual a unidade de ensino? </label>
              <input type="text" id="ensino" name="ensino"  placeholder="Instituição de ensino" />
            </form>
            </div>
        )

    }
}

export default Pagina2