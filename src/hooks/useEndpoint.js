import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

const useEndpoint = (endpoint, postProcessor) => {
  const [now, setNow] = useState(0);
  const [timeOfNextUpdate, setTimeOfNextUpdate] = useState(0);
  const [status, setStatus] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if(status !== 'offline') {
      const polling = setInterval(() => { setNow(Date.now()); }, 200);
      return () => clearInterval(polling);
    }
  }, [status]);

  useEffect(() => {
    if(!['loading', 'offline'].includes(status)) {
      const fetchData = async () => {
        try {
          setStatus('loading');
          const res = await fetch(endpoint);
          const json = await res.json();
          setData(postProcessor ? postProcessor(json) : json);
          setTimeOfNextUpdate(Date.now() + (json?.ENUM_TIME*1000||0) + 10000);
          setStatus(`done`);
        } catch (e) {
          console.log(e);
          setStatus('offline');
        }
      };
      if(now > timeOfNextUpdate) fetchData();
      else setStatus(`${Math.ceil(timeOfNextUpdate - Date.now())}ms`)
    }
  }, [endpoint, now]); // eslint-disable-line react-hooks/exhaustive-deps

  return { status, data, setData };
}

export default useEndpoint;
