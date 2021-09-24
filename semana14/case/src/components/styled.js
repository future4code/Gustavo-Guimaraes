import styled from "styled-components";


export const CardInteiro = styled.div `
    height: 500px;
    width: 250px;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin: 1rem;
    border-radius: 15px;
    p {
        max-width: 90%;
        flex-wrap: wrap;
        text-align: center;
    }
`

export const CardImagem = styled.img `
    margin: 1rem;
    height: 75%;
    width: 80%;
    object-fit: contain;
`