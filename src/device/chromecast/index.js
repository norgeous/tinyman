import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

const Chromecast = ({ip}) => {
  //:8008/setup/eureka_info?options=detail
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=info`);
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const chromecastDo = async (action) => {
    try {
      const res = await fetch(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=${action}`);
      const text = await res.text();
      alert(text);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  return (
    <div>
      {data?.name}
      chromecast @ {ip}
      <div>
        <button onClick={() => chromecastDo('info')}>info</button>
        <button onClick={() => chromecastDo('status')}>status</button>
        <button onClick={() => chromecastDo('mute')}>mute</button>
        <button onClick={() => chromecastDo('unmute')}>unmute</button>
        <button onClick={() => chromecastDo('pause')}>pause</button>
        <button onClick={() => chromecastDo('unpause')}>unpause</button>
        <button onClick={() => chromecastDo('stop')}>stop</button>
      </div>
      {JSON.stringify(data)}
    </div>
  );
};

export default Chromecast;
