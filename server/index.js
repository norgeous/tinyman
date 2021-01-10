const express = require('express');
const app = express();
const Nmap = require('./pages/nmap');

const nmap = new Nmap();

app.get('/nmap', nmap.getHandleRequest());

app.listen(process.env.PORT || 8080);
