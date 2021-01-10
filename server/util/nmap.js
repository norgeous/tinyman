const { Subnet } = require('netmap');
 
const nmapPromise = () => {
  const subnet = new Subnet('192.168.0.0');
  return subnet.scanForOpenPorts([22, 80, 515, 8080, 8384, 9010, 9100]);
};


 module.exports = nmapPromise;
