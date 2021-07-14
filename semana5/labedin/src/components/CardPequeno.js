import React from 'react';
import styled from 'styled.components';

const BoxEstilizada = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
` 

const CardPequeno = (props) => {
    return (
        <BoxEstilizada>
            <img src={props.imagem}/>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </BoxEstilizada>
    )
}

export default CardPequeno;