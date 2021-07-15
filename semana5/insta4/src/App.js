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
    ]
  }

  render() {

    let postComponente = this.state.posts.map((post, index) => {
      return (
        <Post key={index}
        nomeUsuario={this.state.postsposts.nomeUsuario}
        fotoUsuario={this.state.posts.fotoUsuario}
        fotoPost={this.state.posts.fotoPost}
      />
      )
    })


    return (
      <div>
        <MainContainer>
          <Post>  </Post>
        </MainContainer>
        <MainContainer>

        </MainContainer>
        <MainContainer>
          <Post
            nomeUsuario={'Claudete'}
            fotoUsuario={AnotherJhin}
            fotoPost={AlternativeJhin}
          />
        </MainContainer>
      </div>
    );
  }
}

export default App;
