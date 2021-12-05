import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { errorHandler } from '../utils/errorHandler';

export const useRequest = (request, options, memo) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const history = useHistory();

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
        history.push('/404');
      } finally {
        setLoading(false);
      }
    };
    getRequest();
  }, [...memo]);
  return [data, loading, error];
};
