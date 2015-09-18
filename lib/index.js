// --------------------
// co-bluebird module
// --------------------

// modules
    bluebird = require('bluebird');
var co = require('co-use'),

// exports
module.exports = co.use(bluebird);
