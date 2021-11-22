import { useEffect, useState } from 'react';

export const useRequest = (request, options, memo) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(false);
    request(...options)
      .then((res) => setData(res))
      .catch((er) => setError(er))
      .finally(() => setLoading(false));
  }, [...memo]);
  return [data, loading, error];
};
