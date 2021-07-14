import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		valorInputComentario: "",
	}


	guardaValorInputComentario = (event) => {
		this.setState({
			valorInputComentario: event.target.value
		});
		console.log(this.state.valorInputComentario)
	}


	render() {

		/* 	let blocoComentario
			if (this.state.valorInputComentario !== "") {
				blocoComentario = <p>{this.state.valorInputComentario}</p>
			} */

		return (
			<CommentContainer>
				<InputComentario
					placeholder={'Comentário'}
					value={this.state.valorInputComentario}
					onChange={this.guardaValorInputComentario}
				/>
				<button onClick={this.props.aoEnviar}>Enviar</button>
				<br />
				{/* {blocoComentario} */}

			</CommentContainer>
		)
	}
}


