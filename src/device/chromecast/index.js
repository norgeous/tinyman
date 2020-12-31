import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

import Header from '../../card/Header';
import Card from '../../card/Card';
import VolumeSlider from './volume';

const Chromecast = ({ip}) => {
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
          const res = await fetch(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=status`);
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
  
  const setVolume = async (value) => {
    try {
      await fetch(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=set-volume&volume=${value}`);
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  const header = <Header title={`chromecast: ${data?.name || ip}`} />;

  return (
    <Card status={status}>
      <div>
        {header}
        <div>app: {data?.display_name}</div>
        <h2>{data?.title}</h2>
        <div>player_state: {data?.player_state}</div>
        <div>muted: {data?.volume_muted === 'True'?'yes':'no'}</div>
        <div>volume: {data?.volume}</div>
        <div>
          <button onClick={() => chromecastDo('status')}>status</button>
        </div>
        <div>
          <button onClick={() => chromecastDo('mute')}>mute</button>
          <button onClick={() => chromecastDo('unmute')}>unmute</button>
        </div>
        <div>
          <VolumeSlider value={data?.volume} onChange={setVolume} />
        </div>
        <div>
          <button onClick={() => chromecastDo('pause')}>pause</button>
          <button onClick={() => chromecastDo('play')}>play</button>
          <button onClick={() => chromecastDo('stop')}>stop</button>
        </div>
        <div>
          <button onClick={() => chromecastDo('cast')}>cast</button>
        </div>
      </div>
      <div>
        {header}
        <pre>{JSON.stringify(data, null, '  ')}</pre>
      </div>
    </Card>
  );
};

export default Chromecast;
