const express = require('express')
const app = express();
const open = require('open');
const path = require('path');

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000, () => {
  open('http://localhost:8000');

  console.log('Example app listening on port 8000!');
});