import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

const Chromecast = ({ip}) => {
  //:8008/setup/eureka_info?options=detail
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://${ip}:8008/setup/eureka_info?options=detail`);
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>chromecast @ {ip} {typeof data}</>
};

export default Chromecast;
