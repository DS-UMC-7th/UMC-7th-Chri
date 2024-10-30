import { useState, useEffect } from 'react';
import { axiosInstance } from "../apis/axios-instance.js";

const useCustomFetch = (url) => {
  const [data, setData] = useState(null); // 초기값을 null로 설정
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 기본값을 true로 설정
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false); // 요청을 새로 시작할 때는 에러 상태를 false로 설정
      try {
        const response = await axiosInstance.get(url);
        setData(response.data); // response.data로 필요한 데이터만 설정
      } catch (error) {
        console.error('Error fetching data:', error); // 에러 로깅
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError }; // 상태 이름을 일관되게 수정
};

export default useCustomFetch;
