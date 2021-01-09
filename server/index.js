const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const nmap = require('node-nmap');
nmap.nmapLocation = 'nmap'; //default

app.get('/ping', function (req, res) {
  return res.send('pong');
 });

app.get('/nmap', function (req, res) {
  let quickscan = new nmap.QuickScan('127.0.0.1 google.com');
  return res.send(quickscan);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
