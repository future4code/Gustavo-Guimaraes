import {CardInteiro, CardImagem} from "./styled"

function Card({name, image, cardVirado, setPageDetalhes, pegarCartaAleatoria, textoExtra  }) {

    const cardDetalhes = () => { 
        if (cardVirado) { 
            setPageDetalhes(true)
            pegarCartaAleatoria() 
        }

    }

    return (
     <CardInteiro onClick={cardDetalhes} >
         <h3>{name}</h3>
         <CardImagem src={image}/>
         {textoExtra && <p>Lorem ipsum {name} dolor sit amet </p>}
         
     </CardInteiro>
    );
  }
  
  export default Card;
  