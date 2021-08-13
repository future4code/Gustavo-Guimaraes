import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";

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
  div {
    margin: 10px;
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
    id: "",
  });

  const pegaPerfis = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo-guimaraes/person";

    axios
      .get(url)
      .then((resp) => {
        setPerfis({
          name: resp.data.profile.name,
          photo: resp.data.profile.photo,
          bio: resp.data.profile.bio,
          age: resp.data.profile.age,
          id: resp.data.profile.id,
        });
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  const matchPositivo = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo-guimaraes/choose-person";
    const body = {
      id: perfis.id,
      choice: true,
    };

    axios
      .post(url, body)
      .then((resp) => {
        pegaPerfis();
        if (resp.data.isMatch === true) {
          return alert("Foi um Match :)");
        } else {
          return alert("Não foi dessa vez");
        }
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  const matchNegativo = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo-guimaraes/choose-person";
    const body = {
      id: perfis.id,
      choice: false,
    };

    axios
      .post(url, body)
      .then((resp) => {
        pegaPerfis();
      })
      .catch((erro) => {
        alert(erro);
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
          <strong>
            {" "}
            <span>{name} - </span> <span> {age}</span>{" "}
          </strong>
          <p>{bio}</p>
        </div>
      </Card>
      <FooterBotoes>
        <Button variant="contained" color="secondary" onClick={matchNegativo}>
          <ClearOutlinedIcon fontSize="large" />
        </Button>
        <Button variant="contained" color="secondary" onClick={matchPositivo}>
          <FavoriteIcon fontSize="large" />
        </Button>
      </FooterBotoes>
    </div>
  );
}

export default Perfis;
