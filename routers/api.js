'use strict';

var Router = require('express').Router; // o express já oferece o recurse Router

var router = new Router(); // nova instância de um roteador do express

var controllers = require('../controllers');


router
	.route('/users') // it concatenates with the 
	.get(controllers.users.list)
	.post(controllers.users.create);

router
	.route('/users/:id')
	.get(controllers.users.get) //It will get one, because I am passing the ID
 	.put(controllers.users.update) //Put method updates
 	.delete(controllers.users.delete);

 	module.exports = router; // exports é como se tornasse o método público