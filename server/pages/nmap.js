const nmap = require('../util/nmap');

class Nmap {
  constructor() {
    this.nmapResults = ['loading'];
    this.scanStartTime = 0;
    this.scanEndTime = 0;
    this.start();
  }

  async start() {
    console.log('starting scan');
    this.scanStartTime = Date.now();
    const opts = {
      ports: '1-65535',
      range: ['192.168.0.0/24'],
    };
    this.nmapResults = await nmap(opts);
    this.scanEndTime = Date.now();

    const duration = this.scanEndTime - this.scanStartTime;
    console.log(`scan took ${(duration / 1000) / 60}min`);
    console.log(`starting next scan in ${((duration * 2) / 1000) / 60}min`);
  
    setTimeout(this.start, duration * 2); // recurse
  }

  handleRequest(req, res) {
      return res.send(this.nmapResults);
  }
}

module.exports = Nmap;
