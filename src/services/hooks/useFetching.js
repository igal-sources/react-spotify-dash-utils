import { useState, useEffect } from "react";
import axios from "axios";

export const useFetching = (url, query, interval = null) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(true);
  const [queryParams, setQueryParams] = useState(query);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${url}`, {
          params: { queryParams }
        });

        if (!response) {
          throw new Error("Something went wrong");
        }

        const json = await response.data;

        if (json) {
          setData(json);
        }
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchData();

    const reloadInterval = interval && setInterval(() => setReload(state => !state), interval);

    return () => {
      clearInterval(reloadInterval);
    };
  }, [url, reload]);

  return { loading, data, error };
};
