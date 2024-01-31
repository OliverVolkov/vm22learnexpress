const express = require('express');
const nunjucks = require('nunjucks')
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}))
nunjucks.configure('views', {
    autoescape: true,
express: app, 
}),

app.get('/', (req, res) => {
  res.render('index.njk');
  //console.log('someone visited')
});

app.get('/page2', (req, res) => {
    res.render('page2.njk');
    //console.log('someone visited')
  });
  
app.get('/form', (req, res) => {
    res.render('form.njk' , req.query);
  console.log(req.query);
    //console.log('someone visited')
});

app.get('/circle', (req, res) => {
  res.render('circle.njk');

  //console.log('someone visited')
});

app.post('/circle', (req, res) => {
 res.render; 

  //console.log('someone visited')
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});