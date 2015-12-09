'use strict';

let Users = require('../models/index.js').users; // não precisaria do index.js

module.exports = {

	list: list,
	create: create, //objeto
	get: get,
	update: update,
	delete: del 

};

function filterByPermission (array) {
	//process
	return processData;
}

function list (req, res) {
		// body...
	Users
		.find({}) // vazio para pegar todos
		.then((users)=>users)
		.then(filterByPermission)
		.catch(function(err){
			console.log('Error ');
		});
		
		//res.json(users); // if you do not pass anything it is 200
		// .exec()(err, data) {
		// 	if (err) return throw err;
		// }) callback hell
};

function create (req, res) {
	// body...
	// user = new User(req.body);

	//user
		// .save()
		// .then()

	console.log(req.body);

	res
		.status(201)
		.json({
			message: 'created'
		});
}

function get (req, res) {
	// body...
	console.log(req.params);

	var user = {name: 'Seahawks'};

	res
		.json(user);
}

function update (req, res) {
	// body...
	res.json({
		message: 'updated'
	});
}

function del (req, res) {
	// body...
	res.json({
		message: 'deleted'
	});
}