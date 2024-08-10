import { useEffect } from "react";
import { useState } from "react";

// fn = function
const useFetch = (fn, giaTriMacDinh) => {
  // false chưa load xong, true là load xong
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(giaTriMacDinh);
  const [message, setMesssage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(false);
      try {
        const dataFromApi = await fn();
        setData(dataFromApi);
        setMesssage("Lấy dữ liệu thành công");
      } catch (error) {
        setError(error);
        setMesssage("Không thấy lấy dữ liệu");
      }
      setIsLoading(true);
      // data
      // error => buoc viet o trong try/catch
      // message
    }

    fetchData();
  }, [fn]);

  return { isLoading, data, message, error };
};

export default useFetch;
