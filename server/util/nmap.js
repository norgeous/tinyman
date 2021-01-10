const nmap = require('libnmap');

function nmapPromise(opts) {
  return new Promise((fulfill, reject) => {
    const opts = {
      ports: '1-65535',
      range: ['192.168.0.0/24'],
    };
    
    nmap.scan(opts, (err, report) => {
      if (err) reject(err);
      fulfill(report);
    });
  });
 }

 module.exports = nmapPromise;
