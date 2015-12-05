'user strict';

var express = require('express');
var app = express();
var controllers = require('./controllers');

console.log(controllers.users);

app
	.route('/users')
	.get(controllers.users.list)
	.post(controllers.users.create);

app
	.route('/users/:id')
	.get(controllers.users.get) //It will get one, because I am passing the ID
 	.put(controllers.users.update) //Put method updates
 	.delete(controllers.users.delete);


app.listen(3000, serverLogInit);

function serverLogInit () {
	console.log('> localhost: 3000');
}

module.exports = app; // when I export the app, I export all its behaviors / exports makes it visible for whom is calling it - public/private concept