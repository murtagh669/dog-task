import { useEffect, useState } from "react";

import axios from "axios";

export default () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((resp) => {
        setBreeds(Object.keys(resp.data.message));
      })
      .catch((err) => {
        console.log("error fetching list");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { breeds, isLoading };
};
