// --------------------
// co-bluebird module
// Tests
// --------------------

// modules
var chai = require('chai'),
	expect = chai.expect,
	cob = require('../lib/');

// init
chai.config.includeStack = true;

// tests

/* jshint expr: true */
/* global describe, it */
describe('Tests', function() {
	it('Test', function() {
		expect(cob).to.be.ok;
	});
});
