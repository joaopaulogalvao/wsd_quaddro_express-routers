'use strict';


let Schema = require('mongoose').Schema; // definição de estrutura da minha collection, nesse caso, user
let mongoose = require('mongoose');

let schema = new Schema({
	//firstname: String
	firstname: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	createdAt: {type: Date, set: Date.now}

});
									
module.exports = mongoose.model('users',schema);