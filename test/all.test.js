// --------------------
// co-bluebird module
// Tests
// --------------------

// modules
var chai = require('chai'),
	expect = chai.expect,
	Bluebird = require('bluebird'),
	cob = require('../lib/');

// init
chai.config.includeStack = true;

// tests

/* jshint expr: true */
/* global describe, it */

describe('co', function() {
	it('returns a bluebird promise', function() {
		var r = cob(function() {});
		expect(r).to.be.instanceof(Bluebird);
	});
});

describe('co.wrap', function() {
	it('returns a function that returns a bluebird promise', function() {
		var f = cob.wrap(function() {});
		var r = f();
		expect(r).to.be.instanceof(Bluebird);
	});
});
