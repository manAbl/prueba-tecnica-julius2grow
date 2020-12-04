import { useEffect, useState } from 'react';
import { errorsHandler } from '../services/notifications.js';

const useGetData = (apiMethod, reload) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await apiMethod().catch(errorsHandler);
    if (res && res.data) {
      const { data } = await res.json();
      setData(data);
    }
    setLoading(false);
  }, [reload]);

  return {
    data,
    loading,
  };
};

export default useGetData;
