import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

const Chromecast = ({ip}) => {
  //:8008/setup/eureka_info?options=detail
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=get`);
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const click1 = async (control) => {
    try {
      const res = await fetch(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=pause`);
      const text = await res.text();
      alert(text);
    } catch (e) {
      console.log(e);
    }
  };
  const click2 = async (control) => {
    try {
      const res = await fetch(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=unpause`);
      const text = await res.text();
      alert(text);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {data?.name}
      chromecast @ {ip}
      <div>
        <button onClick={click1}>pause</button>
        <button onClick={click2}>unpause</button>
      </div>
      {data}
    </div>
  );
};

export default Chromecast;
