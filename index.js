const express = require('express')
const app = express()
const port = 3000
app.use(express.json()) // Para habilitar envio de JSON al servidor
app.set('view engine', 'pug'); //usa la libreria de pug 
app.set('views','./views'); //busca las vistas en estas carpetas 
const pug = require('pug');
app.use(express.static('public'));
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.render('home')
  })

app.get('/about', (req, res) => {
    res.render('about')
}) 

app.get('/what', (req, res) => {
    res.render('what')
})

app.get('/where', (req, res) => {
    res.render('where')
})

app.get('/contact', (req, res) => {
    res.render('contact')
}) 

app.post('/sendForm', urlencodedParser, async (req, res, next) => {
let userName = req.body.fname
res.send(`Thank you ${userName} for getting in touch. We will contact you as soon as possible`);        
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })