// import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

import useEndpoint from '../../hooks/useEndpoint';
import Header from '../../card/Header';
import Card from '../../card/Card';
import VolumeSlider from './volume';
import ToggleButton from './ToggleButton';

const hmsToSec = hms => hms.split(':').reduce((acc,time) => (60 * acc) + +time);
const secToHms = sec => new Date(sec * 1000).toISOString().substr(11, 8);

const Chromecast = ({ip}) => {
  const postProcessor = data => ({
    ...data,
    ...(data?.time && {elapsed: hmsToSec(data?.time.split(' ')[0])}),
    ...(data?.time && {total: hmsToSec(data?.time.split(' ')[2])}),
  });
  const { status, data, setData } = useEndpoint(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=status`, postProcessor);

  const chromecastDo = async (action, dataKey, finalState) => {
    try {
      dataKey && setData(d => ({ ...d, [dataKey]: 'LOADING' }));
      await fetch(`http://192.168.0.40:9009/chromecast?ip=${ip}&action=${action}`);
      dataKey && setData(d => ({ ...d, [dataKey]: finalState }));
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };
  
  const changeVolumeRemote = async (value) => {
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
      <div style={{background: '#f0f'}}>
        {header}
        <div>{data?.display_name}</div>
        {data?.player_state ? <div>
          <h2>{data?.title}</h2>
          <div>{data?.time}</div>
          {data?.elapsed && data?.total && 
            <div>{secToHms(data?.elapsed)} / {secToHms(data?.total)} ({Math.round((data?.elapsed / data?.total) * 100)}%)</div>
          }
          <button onClick={() => chromecastDo('rewind')}>rewind by 30 sec</button>
          <div>
            <button onClick={() => chromecastDo('mute')}>mute</button>
            <button onClick={() => chromecastDo('unmute')}>unmute</button>
          </div>
          <div>
            <div>volume: {data?.volume}%</div>
            <VolumeSlider
              value={data?.volume || 0}
              onChange={v => setData(d => ({ ...d, volume: v}))}
              onRelease={changeVolumeRemote}
            />
            <div>muted: {data?.volume_muted === 'True' ? 'yes' : 'no'}</div>
          </div>
          <div>
            <ToggleButton
              state={data?.player_state}
              buttons={{
                LOADING: <button onClick={() => {}}>Loading</button>,
                PLAYING: <button onClick={() => chromecastDo('pause', 'player_state', 'PAUSED')}>pause</button>,
                PAUSED: <button onClick={() => chromecastDo('play', 'player_state', 'PLAYING')}>play</button>,
              }}
            />
            <button onClick={() => chromecastDo('stop')}>stop</button>
          </div>
        </div> : null}
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
