'user strict';

var express = require('express');
var app = express();
var routers = require('./routers/index.js'); // a partir de onde estou até o index
var config = require('./config.js');
var mongoose = require('mongoose');

//console.log(controllers.users);



//Fazer as configurações depois da instância e antes de iniciar(do listen)
app.use('/api',routers.api);




var urlDatabase = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(urlDatabase);

mongoose.connection.once('open',function(){
	app.listen(3000, () => console.log('> localhost: 3000'));
})


mongoose.connection.on('error', function(err){
	console.log('database not connected!');
});


module.exports = app; // when I export the app, I export all its behaviors / exports makes it visible for whom is calling it - public/private concept