import { useEffect, useState } from 'react';
import { errorsHandler } from '../services/notifications.js';

const useGetData = apiMethod => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const res = await apiMethod().catch(errorsHandler);
    const { data } = await res.json();
    setData(data);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
  };
};

export default useGetData;
