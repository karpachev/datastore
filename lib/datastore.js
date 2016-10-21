const datastore = require('@google-cloud/datastore');
const Promise = require('bluebird');


function Datastore(options) {
	this._options = options;
	this._datastoreClient = datastore(options);
}


module.exports = Datastore