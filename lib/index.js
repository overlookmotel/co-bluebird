// --------------------
// co-bluebird module
// --------------------

// modules
var co = require('co'),
    bluebird = require('bluebird');

// exports
var cob = bluebird.method(co);

cob.wrap = function(fn) { // jshint ignore:line
    return bluebird.method(co.wrap.apply(this, arguments));
};

cob['default'] = cob.co = cob;

module.exports = cob;
