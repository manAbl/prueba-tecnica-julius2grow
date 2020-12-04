import { useEffect, useState } from 'react';
import { errorsHandler } from '../services/notifications.js';

const useGetData = (apiMethod, reload, reduxData) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!reduxData) {
    useEffect(async () => {
      if (!loading) {
        setLoading(true);
      }
      const res = await apiMethod().catch(errorsHandler);
      if (res) {
        console.log(res);
        const { data } = await res.json();
        setData(data);
      }
      setLoading(false);
    }, [reload]);
  }

  return {
    data,
    loading,
  };
};

export default useGetData;
