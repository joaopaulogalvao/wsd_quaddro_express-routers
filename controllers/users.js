'use strict';

module.exports = {

	list: list,
	create: create, //objeto
	get: get,
	update: update,
	delete: del 

};

function list (req, res) {
		// body...
	var users = [
		{name: 'Seahawks'},
		{name: '49ers'}
	];

	res.json(users); // if you do not pass anything it is 200

};

function create (req, res) {
	// body...
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