import useProtectedPage from "../../hooks/useProtectedPage";

function AdicionarPost() {
  useProtectedPage();

  return <div>Teste</div>;
}

export default AdicionarPost;
