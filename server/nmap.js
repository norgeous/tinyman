const nmap = require('node-nmap');
// nmap.nmapLocation = 'nmap'; //default

class nmapper {
  constructor() {
    this.nmapResults = [];
    this.error = null;
    this.scan = new nmap.OsAndPortScan('192.168.0.0/24');
    this.config();
    this.start();
  }

  config() {
    this.scan.on('complete', (data) => {
      console.log('got results');
      this.nmapResults = data;
      this.error = null;
    });
  
    this.scan.on('error', (error) => {
      console.log(error);
      this.nmapResults = null;
      this.error = error;
    });
  }
  
  start() {
    this.scan.startScan();
    setInterval(() => {
      this.scan.startScan();
    }, 60000);
  }

  getResults() {
    // console.log('getResults', this.nmapResults.length, this.error);
    return this.nmapResults || this.error;
  }
}

module.exports = nmapper;
