import styled from "styled-components";
import useForm from "../../hooks/useForm";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { goToCadastro, goToHome } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99.8%;

  height: 70vh;
`;

const ContainerInputs = styled.div`
  flex-grow: 1;
  justify-self: center;
  height: 60vh;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 300px;
    height: 40px;
    color: black;
  }
`;

const BotaoLogar = styled(Button)`
  margin: 15px 0px 5px 0px;
  display: block;
  width: 150px;
`;

const BotaoCadastrar = styled(Button)`
  margin: 15px 0px 5px 0px;
  display: block;
  width: 330px;
  color: black;
  text-align: center;
`;

function Login({ buttonText, setButtonText }) {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  useUnprotectedPage();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login();
  };

  const login = () => {
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((resp) => {
        console.log(resp.data.token);
        localStorage.setItem("token", resp.data.token);
        clear();
        goToHome(history);
        setButtonText("Logout");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  // Mudar para um arquivo requests depois agrupando users e home

  return (
    <ContainerGeral>
      <h1>Login</h1>

      <form onSubmit={onSubmitForm}>
        <ContainerInputs>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            required
          />

          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            margin="normal"
            type="password"
            required
          />
          <BotaoLogar type="submit" variant="contained" color="primary">
            Logar
          </BotaoLogar>
          <BotaoCadastrar
            onClick={() => goToCadastro(history)}
            text-color={"neutralColor"}
          >
            Ainda não possui conta? Cadastre-se!
          </BotaoCadastrar>
        </ContainerInputs>
      </form>
    </ContainerGeral>
  );
}

export default Login;
