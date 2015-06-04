// --------------------
// co-bluebird module
// --------------------

// modules
var co = require('co'),
    bluebird = require('bluebird');

// exports
var cob = bluebird.method(co);

cob.wrap = function(fn) {
    return bluebird.method(co.wrap(fn));
};

cob['default'] = cob.co = cob;

module.exports = cob;
