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
    9100,
  ])
  .then(results => results.map(host => {
    return {
      ...host,
      ports: host.ports.reduce((acc, port) => {
        return acc.push(port.open ? port : null);
      }, []),
    };
  }));
};


 module.exports = nmapPromise;
