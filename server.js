const express = require('express');
const hbs = require('hbs'); // dynamic template engine

var app = express();
var port = process.env.PORT || 5000;
app.set('view engine', 'hbs'); // setting view engine type 
app.use(express.static(__dirname + '/public')); //middleware


app.get('/', (req, res) => {
	res.render('image.hbs');
});

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});