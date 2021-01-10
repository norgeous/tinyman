const { Subnet } = require('netmap');
 
const nmapPromise = async () => {
  const subnet = new Subnet('192.168.0.0');
  // return subnet.scanForOpenPorts([
  //   22,
  //   80,
  //   3000,
  //   8080,
  //   8384,
  //   9010,
  // ])
  // .then(results => results.map(host => {
  //   return {
  //     ...host,
  //     ports: host.ports
  //       .filter(port => port.open)
  //       .map(port => ({...port, open: undefined})),
  //   };
  // }));

  return new Promise(async (resolve, reject) => {
    try {
      const hosts = await subnet.getHosts();
      const ports = await subnet.scanForOpenPorts([
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
      resolve({hosts, ports});
    } catch (e) {
      reject(e);
    }


  });
};


 module.exports = nmapPromise;
