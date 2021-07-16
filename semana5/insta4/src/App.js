import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import FaceJhin from './img/face_dark_jhin.jpg'
import DarkJhin from './img/dark_cosmic_jhin.jpg'
import AnotherJhin from './img/card_dark_jhin.jpg'
import AlternativeJhin from './img/alternative_dark_jhin.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`



class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoPost:'https://picsum.photos/50/50',
        fotoUsuario: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario:'Jorgito',
        fotoUsuario:FaceJhin,
        fotoPost:DarkJhin
      },
      {
        nomeUsuario: 'Claudete',
        fotoUsuario: AnotherJhin,
        fotoPost: AlternativeJhin
      }
      ],
      valorInputUsuario: "",
      valorInputFoto: "",
      valorInputPost: ""

  }


  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value })
  }

  onChangeInputFoto = (event) => {
    this.setState({valorInputFoto: event.target.value })
  }

  onChangeInputPost = (event) => {
    this.setState({valorInputPost: event.target.value })
  }
  
  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost:this.state.valorInputPost
    }
    const novosPosts = [...this.state.posts, novoPost]
    this.setState({
      posts: novosPosts,
      valorInputUsuario: "",
      valorInputFoto: "",
      valorInputPost: ""
    })

/*     this.setState({posts:[...this.state.posts, novoPost] }) */
  }

  render() {

    let novoPost = this.state.posts.map((umPost) => {
      return (
        <div>
          <MainContainer>
            <Post
             fotoPost = {umPost.fotoPost}
             fotoUsuario = {umPost.fotoUsuario}
             nomeUsuario = {umPost.nomeUsuario}
            />
          </MainContainer>
        </div>
      )
    })
    
    
    return (
      <MainContainer>
      {novoPost}
        <input
         value={this.state.valorInputUsuario}
         onChange={this.onChangeInputUsuario}
         placeholder={"Nome de Usuario"}
        />
        <input
         value={this.state.valorInputFoto}
         onChange={this.onChangeInputFoto}
         placeholder={"Foto de Perfil"}
         type = {Image}
        />
        <input
         value={this.state.valorInputPost}
         onChange={this.onChangeInputPost}
         placeholder={"Foto do post"}
         type = {Image}
        />
        <button onClick={this.adicionarPost}>Adicionar</button>
     </MainContainer>
      )

    
  } 
}

export default App;
