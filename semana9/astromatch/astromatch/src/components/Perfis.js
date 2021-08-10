import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 350px;
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  flex-direction: column;

  img {
    height: 250px;
    width: 300px;
  }
`;

const FooterBotoes = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    height: 90px;
    width: 90px;
    border-radius: 50%;
  }
`;

function Perfis() {
  const [perfis, setPerfis] = useState({
    name: "",
    photo: "",
    bio: "",
    age: 0,
  });

  const pegaPerfis = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person";

    axios
      .get(url)
      .then((resp) => {
        setPerfis({
          name: resp.data.profile.name,
          photo: resp.data.profile.photo,
          bio: resp.data.profile.bio,
          age: resp.data.profile.age,
        });
        console.log(perfis);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    pegaPerfis();
  }, []);

  const perfisParaExibir = perfis;

  const { photo, name, age, bio } = perfisParaExibir;
  return (
    <div>
      <Card>
        <img src={photo} />
        <div>
          <span>{name} </span> <span> {age}</span>
          <p>{bio}</p>
        </div>
      </Card>
      <FooterBotoes>
        <button>Não</button>
        <button onClick={pegaPerfis}>Sim</button>
      </FooterBotoes>
    </div>
  );
}

export default Perfis;
