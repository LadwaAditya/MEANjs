'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Category = mongoose.model('Category');

/**
 * Globals
 */
var user, category;

/**
 * Unit tests
 */

describe('Category Model',function () {
	describe('Saving',function () {
		it('saves new record');

		it('throws validation error when name is empty');

		it('throws validation error when name longer than 15 chars');

		it('throws validation error for duplicate category name');
	})
});
