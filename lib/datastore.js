const datastore = require("@google-cloud/datastore");
// const Promise = require("bluebird");


function Datastore(options) {
	this._options = options;
	this._datastoreClient = datastore(options);
	this._namespace = ""; // empty namespace
}

Datastore.prototype.setNamespace = function(namespace) {
	this._namespace = namespace;
}
Datastore.prototype.getNamespace = function() {
	return this._namespace;
}

Datastore.prototype.save = function(obj) {
	console.dir("Datastore.save")
	console.dir(obj,{depth:5})

	// create a key
	this._datastoreClient.key(obj._kind)
}




Datastore.prototype.KindWithSchema = function(
		kind, key_schema, columns_schema) 
{

	if (!columns_schema) {
		// there is no key_shcema
		columns_schema = key_schema;

		// default is INTEGER as the key
		key_schema = Datastore.INT;
	}

	var Kind = function(obj) {
		if (Array.isArray(obj)) {
			// convert the array to object properties
			obj.forEach( (property,i) => {
				this[this._columns_schema[i].name] = property;
			});
		} else {
			// copy the properties
			for ( let key in obj) {
				this[key] = obj[key];
			}
		}
	};

	Kind.prototype._key_schema = key_schema;
	Kind.prototype._kind = kind;
	Kind.prototype._columns_schema = columns_schema;
	Kind.prototype._datastore = this;
	Kind.prototype.save = function() {
		return this._datastore.save(this);
	}

	return Kind;
}


Datastore.STRING 	 = 0;
Datastore.INT		 = 1;
Datastore.INTEGER	 = 1;
Datastore.DOUBLE 	 = 2;
Datastore.NUMBER 	 = 2;
module.exports = Datastore;