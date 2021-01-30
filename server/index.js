import path from 'path';
import express from 'express';
import cors from 'cors';
import url from 'url';

import Nmap from './pages/nmap.js';
import Sonoff from './pages/sonoff.js';

const app = express();
const nmap = new Nmap();
const sonoff = new Sonoff(nmap);

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/nmap', cors(), nmap.getHandleRequest());
app.get('/sonoff', cors(), sonoff.getHandleRequest());
// app.get('/sysinfo', cors(), sysinfo.getHandleRequest());

app.listen(process.env.PORT || 8080);
