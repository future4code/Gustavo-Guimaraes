import useForm from "../../hooks/useForm";
import TextField from "@material-ui/core/TextField";

import { useHistory } from "react-router-dom";
import { goToHome, goToLogin } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {
  ContainerGeral,
  ContainerInputs,
  BotaoLogar,
  BotaoCadastrar,
} from "./styled";

function Cadastro() {
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  useUnprotectedPage();

  const onSubmitForm = (event) => {
    event.preventDefault();
    cadastrar();
  };

  const cadastrar = ({ buttonText, setButtonText }) => {
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((resp) => {
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
          <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
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
          <BotaoLogar type={"submit"} variant="contained" color="primary">
            Cadastrar-se
          </BotaoLogar>
          <BotaoCadastrar
            onClick={() => goToLogin(history)}
            text-color={"neutralColor"}
          >
            Já possui conta? Clique aqui!
          </BotaoCadastrar>
        </ContainerInputs>
      </form>
    </ContainerGeral>
  );
}

export default Cadastro;
