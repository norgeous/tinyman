import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

import Header from '../../card/Header';
import Card from '../../card/Card';

const Chromecast = ({ip}) => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=status`);
        const json = await res.json();
        setStatus(json);
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
      if(['info', 'status'].includes(action)) alert(text);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  const header = <Header title={status?.name || ip} />;

  return (
    <Card status={'unknown'}>
      <div>
        {header}
        chromecast @ {ip}
        {/* <div>app: {status?.applications[0].displayName}</div> */}
        <div>player_state: {status?.player_state}</div>
        {/* <div>muted: {status?.volume.muted?'yes':'no'}</div> */}
        <div>
          <button onClick={() => chromecastDo('status')}>status</button>
        </div>
        <div>
          <button onClick={() => chromecastDo('mute')}>mute</button>
          <button onClick={() => chromecastDo('unmute')}>unmute</button>
        </div>
        <div>
          <button onClick={() => chromecastDo('pause')}>pause</button>
          <button onClick={() => chromecastDo('play')}>play</button>
          <button onClick={() => chromecastDo('stop')}>stop</button>
        </div>
        <div>
          <button onClick={() => chromecastDo('mungo')}>mungo</button>
        </div>
      </div>
      <div>
        {header}
        <pre>{JSON.stringify(status)}</pre>
      </div>
    </Card>
  );
};

export default Chromecast;
