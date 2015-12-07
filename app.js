'user strict';

var express = require('express');
var app = express();
var routers = require('./routers/index.js'); // a partir de onde estou até o index

//console.log(controllers.users);



//Fazer as configurações depois da instância e antes de iniciar(do listen)
app.use('/api',routers.api);


app.listen(3000, serverLogInit);

function serverLogInit () {
	console.log('> localhost: 3000');
}

module.exports = app; // when I export the app, I export all its behaviors / exports makes it visible for whom is calling it - public/private concept