import { useState, useEffect } from 'react';
import { axiosInstance } from "../apis/axios-instance.js";

const useCustomFetch = (url) => {
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false); 
      try {
        const response = await axiosInstance.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error); 
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError }; 
};

export default useCustomFetch;
