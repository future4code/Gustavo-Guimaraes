import { Button } from "@material-ui/core";
import axios from "axios"
import { useEffect, useState } from "react";
import Card from  "../../components/Card"
import {ContainerCards,Page } from "./styled"


function Home() {
    const [data, setData] = useState({})
    const [cardVirado, setCardVirado] = useState(false)
    const [pageDetalhes, setPageDetalhes] = useState(false)
    const [cardAleatorio, setCardAleatorio] = useState("")

useEffect(() => { 
    axios.get('tarot.json').then((resp) => { 
         setData(resp.data)

    }).catch((error) => {
    alert(error)    })
 
}, [ ])    

    const embaralharCartas = () => { 
        setCardVirado(!cardVirado)

    }

    const voltarInicio = () => { 
        setPageDetalhes(false);
        setCardVirado(false);
        setCardAleatorio("")
    }

    const pegarCartaAleatoria = ( ) => { 
        setCardAleatorio(data.cards[Math.floor(Math.random() * data.cards.length)]);
        

    }

    const cardsTarot = data.cards && data.cards.map((card) => { 
        return (
            <Card key={card.name} name={card.name} image={`${data.imagesUrl}${card.image}`} />

        )
    })

    const cardsVirado = data.cards && data.cards.map((card) => { 
        return (
            <Card key={card.name} image={data.imageBackCard} cardVirado={cardVirado} setPageDetalhes={setPageDetalhes} pegarCartaAleatoria={pegarCartaAleatoria} cardAleatorio={cardAleatorio} />

        )
    })

    if(pageDetalhes) { 
        return (
            <Page>
                <Button variant="outlined" onClick={voltarInicio}>Voltar</Button>
                <ContainerCards>
                    <Card name={cardAleatorio.name} image={`${data.imagesUrl}${cardAleatorio.image}`} textoExtra={true}/>
                </ContainerCards>
            </Page>


        )
    }

    return (
        <Page>
            <Button variant="outlined" onClick={embaralharCartas}> {cardVirado ? <span> Ver faces desviradas</span> : <span>Embaralhar as cartas </span> }</Button>
            <ContainerCards>
                {cardVirado ? cardsVirado : cardsTarot}                
            </ContainerCards>
      </Page>
    );
  }
  
  export default Home;
  