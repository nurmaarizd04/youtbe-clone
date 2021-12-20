import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchAxios(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(``);
  const [status, setStatus] = useState(true);

  const fetcAxios = async () => {
    setLoading(true);
    try {
      let response = await axios.get(url);
      if (status) {
        setData(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetcAxios();
    return () => {
      setStatus(false);
      setData();
    };
  }, [url]);

  return { data, loading, error };
}

export default FetchAxios;
