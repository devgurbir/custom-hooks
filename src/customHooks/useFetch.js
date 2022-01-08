import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState({});
  const fetcher = async (url) => {
    return await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setResponse({ loading: false, data: res.items, error: false });
      })
      .catch((err) => {
        setResponse({
          loading: false,
          data: false,
          error: err
        });
      });
  };

  useEffect(() => {
    fetcher(url);
  }, [url]);

  return response;
};

export default useFetch;
