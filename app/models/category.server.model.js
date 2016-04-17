'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Validation
 */
function validateLength (v) {
	// a custom validation function for checking string length to be used by the model
	return v.length <= 15;
}


/**
 * Category Schema
 */
var CategorySchema = new Schema({
	created:{
		type:Date,
		default:Date.now
	},
	description:{
		type:String,
		default:'',
		trim:true
	},
	name:{
		type:String,
		default:'',
		trim:true,
		required: 'Name cannot be blank',
		validate:[validateLength,'Name must be 15 chars in length or less']
	}
});

mongoose.model('Category', CategorySchema);
