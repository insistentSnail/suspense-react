import { useEffect, useState } from 'react';

export const useRequest = (url, fetch) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        console.log(res.data, 'success');
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, fetch]);

  if (loading) {
    throw Promise.resolve(null);
  } else {
    return { data };
  }
};
