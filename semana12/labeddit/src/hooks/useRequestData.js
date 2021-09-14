import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  const pegaPost = (url) => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, tente novamente");
      });
  };

  useEffect(() => {
    pegaPost(url);
  }, [url]);

  return { data, pegaPost };
};

export default useRequestData;
