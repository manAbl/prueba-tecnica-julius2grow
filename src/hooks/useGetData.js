import { useEffect, useState } from 'react';
import { errorsHandler } from '../services/notifications.js';

const useGetData = (apiMethod, reload) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await apiMethod().catch(errorsHandler);
    if (res) {
      try {
        const { data } = await res.json();
        setData(data);
      } catch {
        // Ignore, probably too many request response
      }
    }
    setLoading(false);
  }, [reload]);

  return {
    data,
    loading,
  };
};

export default useGetData;
