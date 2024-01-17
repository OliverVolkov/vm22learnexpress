const express = require('express');
const nunjucks = require('nunjucks')
const app = express();
const port = 3000;
nunjucks.configure('views', {
    autoescape: true,
express: app, 
}),

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  //console.log('someone visited')
});

app.get('/page2', (req, res) => {
    res.sendFile(__dirname + '/page2.html');
    //console.log('someone visited')
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});