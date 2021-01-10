const nmap = require('libnmap');

const opts = {
  range: [
    '192.168.0.0/24',
  ]
};

class nmapper {
  constructor() {
    this.nmapResults = ['loading'];
    this.scanStartTime = 0;
    this.scanEndTime = 0;
    this.start();
  }

  start() {
    console.log('starting scan');
    this.scanStartTime = Date.now();
      
    nmap.scan(opts, (err, report) => {
      if (err) throw new Error(err);
    
      this.nmapResults = report;

      this.scanEndTime = Date.now();
      const duration = this.scanEndTime - this.scanStartTime;
      console.log(`scan took ${(duration / 1000) / 60}min`);
      console.log(`starting next scan in ${duration*2}s`);
  
      setTimeout(this.start, duration * 2); // recurse
    });
  }

  getResults() {
    return this.nmapResults;
  }
}

module.exports = nmapper;
