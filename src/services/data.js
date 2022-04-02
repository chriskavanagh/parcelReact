import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /* const { data: response } = await axios.get(
          `https://course-api.com/react-store-products`
        ); */
        const response = await axios.get(
          `https://course-api.com/react-store-products`
        );
        setData(response.data);
        console.log(`loading is ${loading}`);
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
    console.log(data);
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
