import React from 'react';
import styled from 'styled-components'
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno  from './components/CardPequeno';


const BoxEstilizada = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
` 

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E35AQHJkGmWp1urMQ/profile-framedphoto-shrink_200_200/0/1620340520956?e=1626285600&v=beta&t=RyEofUhmIudkyD4NfX8jQkNP4CdBB_znNTuRI90ecEc"
          nome="Gustavo" 
          descricao="Olá, sou Gustavo! Um eterno aluno de 24 anos agora aprendendo desenvolvimento front-end e logo back-end, já formado em Relações Internacionais. Estou não apenas disposto, mas também preparado e animado para qualquer desafio que venha pela frente."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
          imagem="data:image/png;base64,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"
          titulo="Email: "
         texto="gustavo.carvg@gmail.com"
        />
      </div>

      <CardPequeno 
        imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAb1BMVEX///8AAABAQEDV1dXx8fFFRUW8vLyYmJhLS0vDw8PAwMC5ubnGxsbZ2dmfn5+bm5uOjo6qqqp0dHTk5OTr6+thYWFwcHDm5uaAgIAlJSVdXV0uLi6KiooQEBAWFhZpaWkeHh47OzsiIiIyMjJRUVEAFP1KAAADMElEQVR4nO3da2/aMBiGYUzPZ7Z2R7bRbvv/v3HqqvCk2HFMSHBe+74/IYWU+NJrpFKlLBZEREREREREREREREREREQWOs19AfPp3t3lvoS5dO8cGG+9UoDxvzcKMBaiAKNFUT1Gm6JyjPcUVWPsUlSM4VNUi/EQoKgUI0xRJUYXRYUY3RTOneS+uOMWo6gMI05RFcZFD0VFGP0U1WAEKAJ7ZouxWZ69b7nJefWjFqC4W9x0Yyy9Iy9Zr3/EghSLCIZvscy6gPFahSkiGMVadFJ0Y5RqEdggj9uDHRiFWkQpujDKtOih6MAo0iLwXvG485QQxmWBFjGK2+ZBAOO5PIsYxUf3oXkYwCjOIk7h9sIwbtFHsReGbYt+in0wTFv8SKBoYZwXbJFGkY5h2CKVIhnDrkU6RSqGWYt9KBIxrFr4FD+3FJ8D60zBMGoRoPjSHAtRJGHYtNifIgXDpMXXARQJGBYthlG0MK6LsfApfiVROHffPC2MYc8iRrGJUvRhmLMIUDw1x/ooejCsWQzfIP0YxiwOm4o+jNvwi84zn+J5S5EyFX0YV3mWNaQYRdpUFIMxDkURGGNROPfQnHZlFGM8itZk2MTwKX4PpjCO4X88cwiF6W0yNkV8Mq7zLDItn2L4e4VxDJ/i28EU8W0yW4wAxfaG5OEUzl00P8QOxlQUBjFiFJ8Oomhtk1sTGFNStCbDAoZPsR6RIo5xnmfJXU07Fa/FtsmsMKanMLNN/I9nRPF9JAoj2+Q4FCYwfIr1JBQGtsnxKGY/GcekiGPc5AFQx6WY9WT4v2dMSzHjyfAp/kxM4dyqeYF5TUYOijhGtslYvVy+7+zvESja2+Rl53bNs/UM72s9nZDC2j2Zk1oY+zs7FgoLhYXCQmGhsFBYKCwUFgoLhYXCQmGhsFBYKCwUFgoLhYXCQmGhsFBYKCwUFirNYnWx00PSTYpFWvhf5dVxN3+VFn3/TgoLLLDAogkLhYXCQmGhsFBYKCwUFgoLhYXCQmGhsFBYKCwUFgoLhYXCQmGh6rV48s5L+boit86woEM6Sck/7TTltOq+nJqIiIiIiIiIiIiIiIiIiGbTPwzGQiLwCiAAAAAAAElFTkSuQmCC"
        titulo="Endereço: "
        texto="Faria Lima Limers "
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formação Full Stack intensiva pensada da melhor maneira para o mercado de trabalho! Muita prática para quem quer aprender fazendo e deseja um bom portfólio que demonstre sua aprendizagem." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFVhp4B5Cdw2w/company-logo_200_200/0/1558552876567?e=1634169600&v=beta&t=JFl13CZTnJw2PLWW-kP7V8uqxVR2Bkix7NvwXj6fCEw" 
          nome="Che Lagarto" 
          descricao="Recepção  de  hospédes;  realização  de  check-ins;  controle  de  reservas;  atendimento  ao  público  em  geral;  manutenção  de  um  ambiente acolhedor e confortável para os hóspedes" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
