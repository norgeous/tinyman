const { Subnet } = require('netmap');
 
const nmapPromise = () => {
  const subnet = new Subnet('192.168.0.0');
  return subnet.scanForOpenPorts([
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
      ports: host.ports.filter(port => port.open),
    };
  }));
};


 module.exports = nmapPromise;
