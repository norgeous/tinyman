import nmap from '../util/scanner.js';

const sortByIp = (ao) => ao.sort((a, b) => a.ip.split('.')[0] - b.ip.split('.')[0] || a.ip.split('.')[1] - b.ip.split('.')[1] || a.ip.split('.')[2] - b.ip.split('.')[2] || a.ip.split('.')[3] - b.ip.split('.')[3]);

class Nmap {
  constructor() {
    this.status = 'init';
    this.nmapResults = [];
    this.scanStartTime = 0;
    this.scanEndTime = 0;
    this.start();
  }

  async start() {
    this.status = 'scanning';
    console.log('starting scan');
    this.scanStartTime = Date.now();
    const newNmapResults = await nmap().catch(e => {
      throw e;
    });

    const oldNmapResults = this.nmapResults;

    const ips = newNmapResults.reduce((acc, currentValue) => [...acc, currentValue.ip], []);

    const combined = sortByIp([
      ...oldNmapResults.filter(d => !ips.includes(d.ip)),
      ...newNmapResults,
    ]);
 
    this.nmapResults = combined;

    this.scanEndTime = Date.now();
    
    const duration = this.scanEndTime - this.scanStartTime;
    console.log(`scan took ${(duration / 1000) / 60}min`);
    console.log(`starting next scan in ${((duration * 2) / 1000) / 60}min`);
    
    this.status = 'waiting';
    setTimeout(() => {
      this.start(); // recurse
    }, duration * 2); 
  }

  getHandleRequest() {
    return (req, res) => {
      return res.send({
        status: this.status,
        result: this.nmapResults
      });
    }
  }
}

export default Nmap;
