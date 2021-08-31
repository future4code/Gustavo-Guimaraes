import useProtectedPage from "../../hooks/useProtectedPage";

function AdicionarPost() {
  useProtectedPage();

  return (
    <div>
      <p>oi</p>
    </div>
  );
}

export default AdicionarPost;
