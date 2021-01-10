const { Subnet } = require('netmap');
const Arpping = require('arpping');
 
const nmapPromise = async () => {
  const arpping = new Arpping();
  const subnet = new Subnet('192.168.0.0');
  return new Promise(async (resolve, reject) => {
    try {
      const arp = await arpping.findMyInfo();
      const hosts = await subnet.getHosts();
      const ports = await subnet.scanForOpenPorts([
        '1-1024',
        22,
        80,
        3000,
        8080,
        8384,
        9010,
      ])
      .then(results => results.map(host => {
        return {
          ...host,
          ports: host.ports
            .filter(port => port.open)
            .map(port => ({...port, open: undefined})),
        };
      }));
      resolve({arp, hosts, ports});
    } catch (e) {
      reject(e);
    }
  });
};


 module.exports = nmapPromise;
