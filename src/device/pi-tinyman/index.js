import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

import Card from './Card';
import CardFront from './CardFront';
import CardBack from './CardBack';

const PiTinyMan = ({ip}) => {
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
          const res = await fetch(`http://${ip}:9009/sysinfo`);
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

  const header = (
    <header>
      <h2 className="title">{data?.HOST_NAME || ip}</h2>
    </header>
  );

  return (
    <Card status={status}>
      {data ? [
        <CardFront header={header} {...data} />,
        <CardBack header={header} {...data} ip={ip}/>
      ] : [
        <div className="card-front">{header}no data</div>,
        <div className="card-front">{header}no data</div>,
      ]}
    </Card>
  );
};

export default PiTinyMan;
