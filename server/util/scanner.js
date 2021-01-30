import internalIp from 'internal-ip';
import getMAC from 'getmac';
import nmap from 'node-nmap';
import oui from 'oui';

const sortByIp = (ao) => ao.sort((a, b) => a.ip.split('.')[0] - b.ip.split('.')[0] || a.ip.split('.')[1] - b.ip.split('.')[1] || a.ip.split('.')[2] - b.ip.split('.')[2] || a.ip.split('.')[3] - b.ip.split('.')[3]);

const getDeviceType = ({hostname, mac, osNmap, vendorNmap, vendorOui, openPorts}) => {
  // console.log(hostname, osNmap, vendorNmap, vendorOui, openPorts);
  if (openPorts?.some(oP => oP.port === 53)) return 'router';
  if (openPorts?.some(oP => ['wsdapi','microsoft-ds'].includes(oP.service))) return 'windows'; //osNmap: 'Microsoft Windows XP SP2',
  if (vendorOui?.includes('OnePlus')) return 'phone';
  if (vendorOui?.startsWith('Raspberry Pi')) return 'pi';
  if (vendorOui === 'Espressif Inc.') return 'sonoff';
  if (hostname?.includes('zhimi-airpurifier')) return 'airpurifier';
  if (mac?.startsWith('04:CF:8C:F8:')) return 'robovac';
  if (hostname?.includes('Chromecast')) return 'chromecast';
  return 'unknown'
};

const nmapFullPromise = async () => {
  return new Promise(async (resolve, reject) => {
    const quickscan = new nmap.OsAndPortScan('192.168.0.0/24');
 
    quickscan.on('complete', function(data){
      resolve(data);
    });
     
    quickscan.on('error', function(error){
      reject(error);
    });
     
    quickscan.startScan();
  });
};

const scanner = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const nF = sortByIp(await nmapFullPromise());
            
      const out = nF.map((device) => {
        const { hostname, ip, mac, openPorts, osNmap, vendor: vendorNmap } = device;
        const mac2 = ip === internalIp.v4.sync() ? getMAC() : mac;
        const vendorOui = mac2 ? oui(mac2).split('\n')[0] : null;
        const all = {
          ip,
          hostname,
          mac: mac2,
          osNmap,
          vendorNmap,
          vendorOui,
          openPorts,
        };

        return ({
          type: getDeviceType(all),
          seen: Date.now(),
          ...all,
        });
      });
      
      console.log(JSON.stringify(out, null, '  '));
      resolve(out);
    } catch (e) {
      reject(e);
    }
  });
};

export default scanner;
