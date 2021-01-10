const nmap = require('node-nmap');

class nmapper {
  constructor() {
    this.nmapResults = ['loading'];
    this.error = null;
    this.scan = null;
    this.scanStartTime = 0;
    this.scanEndTime = 0;
    this.start();
  }

  start() {
    console.log('starting scan');
    this.scanStartTime = Date.now();
    // this.scan = new nmap.QuickScan('192.168.0.0/24');
    this.scan = new nmap.OsAndPortScan('192.168.0.0/24');

    this.scan.on('complete', (data) => {
      this.nmapResults = data;
      this.error = null;
      this.scanEndTime = Date.now();
      const duration = this.scanEndTime - this.scanStartTime;
      console.log(`scan took ${duration}ms`);
      console.log('starting next scan in 60s');
      setInterval(this.start, 60 * 1000);
    });
  
    this.scan.on('error', (error) => {
      console.log(error);
      this.nmapResults = null;
      this.error = error;
    });
    
    this.scan.startScan();
  }

  getResults() {
    // console.log('getResults', this.nmapResults.length, this.error);
    return this.nmapResults || this.error;
  }
}

module.exports = nmapper;
