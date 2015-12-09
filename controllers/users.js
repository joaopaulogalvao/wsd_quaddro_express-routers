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
		.find({}, '-__v') // retorna todos os usuários mas não quero password, o traço é menos, seria, menos password, se quiser outro, espaço e outro. esse __v é um field que o mongoose cria
		.then(function(users){
			res.json(users);
		});
		
		//res.json(users); // if you do not pass anything it is 200
		// .exec()(err, data) {
		// 	if (err) return throw err;
		// }) callback hell
};

function create(req, res) {
  let user = new Users(req.body);

  let success = function(status) {
    console.log(status);
     res
      .status(201)
      .json({
        message: 'created'
      });
  };

  let error = function(err) {
    console.log(err);
    res.status(400).json({
      message: 'algo errado'
    });
  };

  user
    .save()
    .then(success, error);
}

function get (req, res) {
	// body...
	console.log(req.params);

	var ObjectId = require('mongodb').ObjectId;

	Users
		.findOne({_id: ObjectId(req.param.id), active: true})

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