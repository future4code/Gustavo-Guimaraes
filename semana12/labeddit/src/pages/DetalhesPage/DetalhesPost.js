import useProtectedPage from "../../hooks/useProtectedPage";

function DetalhesPost() {
  useProtectedPage();

  return (
    <div>
      <p>oi</p>
    </div>
  );
}

export default DetalhesPost;
