import readableBytes from 'readable-bytes';
import { DateTime } from 'luxon';

import Controls from './Controls';

import './CardBack.css';

const CardBack = ({
  header,
  RAM_TOTAL,
  GPU_RAM_TOTAL,
  NET_LOCAL_IP,
  PI_VERSION,
  HOST_OS_PRETTY_NAME,
  HOST_KERNEL,
  HOST_START,
  HOST_USERS,
  NET_OPEN_PORTS,
  ENUM_TIME,
  NODE_V,
  NPM_V,
  NET_ETH_TX,
  NET_ETH_RX,
  NET_WLAN_TX,
  NET_WLAN_RX,
  DISK_READ,
  DISK_WRITTEN,
  endpoint,
}) => {

  return (
    <div className="card-back">
      {header}
      <footer>
        <div>{NET_LOCAL_IP}</div>
        <div>Raspberry Pi {PI_VERSION}</div>
        <div>total RAM: {readableBytes(RAM_TOTAL  + GPU_RAM_TOTAL, 10)}</div>
        <Controls endpoint={endpoint}/>
        <div>{HOST_OS_PRETTY_NAME}</div>
        <div>kernel: {HOST_KERNEL}</div>
        <div>{HOST_START}</div>
        <div>(started {DateTime.fromFormat(HOST_START, 'yyyy-MM-dd HH:mm:ss').toRelative()})</div>
        <div>{HOST_USERS} user(s)</div>
        <div>open ports: {NET_OPEN_PORTS}</div>
        <div>last enum: {ENUM_TIME}</div>
        {NODE_V ? <div>node: {NODE_V}, npm: {NPM_V}</div> : null}
        {(NET_ETH_TX || NET_ETH_RX) ? 
          <div className="tile">
            <div>ETHERNET ⬆️ {readableBytes(NET_ETH_TX, 10)}</div>
            <div>ETHERNET ⬇️ {readableBytes(NET_ETH_RX, 10)}</div>
          </div> :
          null
        }

        {(NET_WLAN_TX || NET_WLAN_RX) ?
          <div className="tile">
            <div>WIFI ⬆️ {readableBytes(NET_WLAN_TX, 10)}</div>
            <div>WIFI ⬇️ {readableBytes(NET_WLAN_RX, 10)}</div>
          </div> :
          null
        }
        <div>read: {DISK_READ ? readableBytes(DISK_READ, 10) : '?'}</div> 
        <div>written: {DISK_WRITTEN ? readableBytes(DISK_WRITTEN, 10): '?'}</div> 
      </footer>
    </div>
  );
};

export default CardBack;
