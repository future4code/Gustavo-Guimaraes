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
  render() {
    return (
      <div>
        <MainContainer>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>
        <MainContainer>
          <Post
            nomeUsuario={'Jorgito'}
            fotoUsuario={FaceJhin}
            fotoPost={DarkJhin}
          />
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
