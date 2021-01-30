import fetch from 'node-fetch';

import useEndpoint from '../../hooks/useEndpoint';
import Header from '../../card/Header';
import Card from '../../card/Card';

const Sonoff = ({device: {ip, hostname}}) => {
  const { status, data } = useEndpoint(`http://192.168.0.40:9009/sonoff?ip=${ip}&action=status`);

  const header = <Header title={`sonoff: ${data?.Status.FriendlyName[0] || ip}`} />;

  return (
    <Card status={status}>
      <div key="1" className="card-front" style={{background:'#f0f'}}>
        {header}
        {hostname}
        <div>Power: {data?.Status.Power}</div>
        <button onClick={async () => {
          await fetch(`http://192.168.0.40:9009/sonoff?ip=${ip}&action=Power%20TOGGLE`);
        }}>toggle</button>
      </div>
      <div key="2" className="card-front">
        {header}
        <pre>{JSON.stringify(data, null, '  ')}</pre>
      </div>
    </Card>
  );
};

export default Sonoff;
