import { useEffect, useState } from 'react';
import { errorHandler } from '../utils/errorHandler';

export const useRequest = (request, options, memo) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getRequest = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await request(...options);
        setData(res);
      } catch (e) {
        setError(true);
        errorHandler(e);
      } finally {
        setLoading(false);
      }
    };
    getRequest();
  }, [...memo]);
  return [data, loading, error];
};
