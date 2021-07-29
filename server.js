var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.render('homepage');
});

app.listen(PORT, () => console.log('Now listening'));