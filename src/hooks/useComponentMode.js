import { useEffect, useState } from 'react';

const useComponentMode = (cmode = 'create') => {
  const [mode, setMode] = useState('');
  useEffect(() => setMode(cmode), '');

  return {
    mode,
  };
};

export default useComponentMode;
