/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { errorHandler } from '../utils/errorHandler';

export const useRequest = (request, options, memo) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(false);
    request(...options)
      .then((res) => setData(res))
      .catch((e)=>{
        setError(true);
        errorHandler(e);
      })
      .finally(() => setLoading(false));
  }, [...memo]);
  return [data, loading, error];
};
