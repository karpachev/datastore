var Datastore = require("./lib/datastore.js")


var ds = new Datastore({
	projectId: "zeta-bebop-142321"
});


var Test = ds.KindWithSchema(
	"Test",
	["page_id", "period", "date"],
	[
		{
			name: "first_name",
			type: Datastore.STRING
		}
		, {
			name: "last_name",
			type: Datastore.STRING
		}
		, {
			name: "age",
			type: Datastore.INT,
			excludeFromIndexes: true
		}
	]
);

var Insights = ds.KindWithSchema(
	"Insights",
	["page_id", "period", "date"],
	[
		{
			name: "name",
			type: Datastore.STRING
		}
		, {
			name: "age",
			type: Datastore.INT,
			excludeFromIndexes: true
		}
	]
);

var t1 = new Test(["vasil", "karpachev", 13]);
console.dir(t1);
var t1_insights = new Insights(["vasil karpachev", 13]);
console.dir(t1_insights);
var t2_insights = new Insights({ name: "ivan petrov", age: 15 });
console.dir(t2_insights.name);

t1.save();

/*
Test.save({
	first_name : "vasil", 
	last_name: "karpachev", 
	age : 13
}).then(t0=>{

});


var t1 = new Test(["vasil", "karpachev", 13]);
t1.save()
	.then(t1_db=>{

	});


var t2 = new Test({
	first_name : "vasil", 
	last_name: "karpachev", 
	age : 13
});
t2.save()
	.then(t2_db=>{

	});




Test.get({first_name:"vasil"})
	.then(results_db=>{

	});

Test.get()






var Map = new ds.Map(
		"Insights",
		[ "page_id", "period", "date" ],
		Datastore.INT
	);

Map.get({
	page_id: 123123,
	period: "day",
	date: "20160120"
}).then( record_db => {

});


Map.get({
	page_id: 123123,
	period: "day",
	date: { "$gt" : "20160120" }
}).then( records_db => { 
});

*/