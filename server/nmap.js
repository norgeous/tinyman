const nmap = require('node-nmap');

class nmapper {
  constructor() {
    this.nmapResults = [];
    this.error = null;
    this.scan = null;
    this.scanStartTime = 0;
    this.scanEndTime = 0;
    this.start();
  }

  config() {
    this.scanStartTime = Date.now();
    this.scan = new nmap.QuickScan('192.168.0.0/24');
    // this.scan = new nmap.OsAndPortScan('192.168.0.0/24');

    this.scan.on('complete', (data) => {
      console.log('got results');
      this.nmapResults = data;
      this.error = null;
      this.scanEndTime = Date.now();
      console.log(`scan took ${this.scanEndTime - this.scanStartTime}ms`);
    });
  
    this.scan.on('error', (error) => {
      console.log(error);
      this.nmapResults = null;
      this.error = error;
    });
  }
  
  start() {
    console.log('starting scan');
    this.config();
    this.scan.startScan();
    setInterval(() => {
      console.log('starting scan (from interval)');
      this.config();
      this.scan.startScan();
    }, 60 * 1000);
  }

  getResults() {
    // console.log('getResults', this.nmapResults.length, this.error);
    return this.nmapResults || this.error;
  }
}

module.exports = nmapper;
