import useForm from "../../hooks/useForm";

import { useHistory } from "react-router-dom";
import { goToCadastro, goToHome } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import Friends from "../../assets/Friends.png";
import {
  ContainerGeral,
  ContainerInputs,
  BotaoLogar,
  BotaoCadastrar,
} from "./styled";

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

  
  return (
    <ContainerGeral>
      <h1>Login</h1>

      <form onSubmit={onSubmitForm}>
        <ContainerInputs>
          <img src={Friends} />
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
