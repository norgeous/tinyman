const nmap = require('libnmap');

function nmapPromise(opts) {
  return new Promise((fulfill, reject) => {
    nmap.scan(opts, (err, report) => {
      if (err) reject(err);
      fulfill(report);
    });
  });
 }

 module.exports = nmapPromise;
