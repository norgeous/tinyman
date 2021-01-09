const express = require('express');
const path = require('path');
const app = express();
const nmapper = require('./nmap');

const scan = new nmapper();

// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get('/nmap', async (req, res) => {
  return res.send(scan.getResults());
});

app.listen(process.env.PORT || 8080);
