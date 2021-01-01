import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

import Header from '../../card/Header';
import Card from '../../card/Card';

const Sonoff = ({ip}) => {
  const [now, setNow] = useState(0);
  const [timeOfNextUpdate, setTimeOfNextUpdate] = useState(0);
  const [status, setStatus] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if(status !== 'error') {
      const polling = setInterval(() => { setNow(Date.now()); }, 80);
      return () => clearInterval(polling);
    }
  }, [status]);

  useEffect(() => {
    if(!['error', 'loading', 'offline'].includes(status)) {
      const fetchData = async () => {
        try {
          setStatus('loading');
          const res = await fetch(`http://192.168.0.40:9009/sonoff?ip=${ip}&action=status`);
          const json = await res.json();
          setData(json);
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
  }, [ip, now]); // eslint-disable-line react-hooks/exhaustive-deps

  const header = <Header title={`sonoff: ${data?.Status.FriendlyName[0] || ip}`} />;

  return (
    <Card status={status}>
      <div key="1" className="card-front">{header}no data</div>
      <div key="2" className="card-front">
        {header}
        <pre>{JSON.stringify(data, null, '  ')}</pre>
      </div>
    </Card>
  );
};

export default Sonoff;
