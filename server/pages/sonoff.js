import fetch from 'node-fetch';

class Sonoff {
  constructor(nmap) {
    this.nmap = nmap;
    this.status = 'init';
    this.sonoffResults = [];
    this.scanStartTime = 0;
    this.scanEndTime = 0;
    this.start();
  }

  async start() {
    this.status = 'scanning';
    console.log('starting scan');
    this.scanStartTime = Date.now();

    // await fetch(`http://${ip}/cm?cmnd=${action}`);

    // await fetch(`http://192.168.0.40:8080/sonoff?ip=${ip}&action=status`);
    // await fetch(`http://192.168.0.40:8080/sonoff?ip=${ip}&action=Power%20TOGGLE`);
    
    const sonoffs = this.nmap.nmapResults.filter(d => d.type === 'sonoff');
    const urlsToFetch = sonoffs.map(d => `http://${d.ip}/cm?cmnd=status`);

    const results = await Promise.all(urlsToFetch.map(url => fetch(url)))
      .then(resp => Promise.all( resp.map(r => r.json()) ));
    
    console.log(results);
    this.sonoffResults = results;

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
    console.log('sonoff devices', this.nmap.nmapResults.filter(d => d.type === 'sonoff'));
    return (req, res) => {
      return res.send({
        status: this.status,
        result: this.sonoffResults,
      });
    }
  }
}

export default Sonoff;
