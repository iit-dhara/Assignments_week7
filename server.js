var express = require("express"),
    http = require("http"),
    // import the mongoose library
    mongoose = require("mongoose"),
    app = express(),
    list = [
    	{"id": 1,
    		"cards" :{"suit":"spades","rank":"a"}
    		
    	},
    	{"id": 2,
    		"cards" :{"suit":"diamonds","rank":"5"}
    		
    	},

    	{"id": 3,
    		"cards" :{"suit":"clubs","rank":"k"}
    		
    	},

    	{"id": 4,
    		"cards" :{"suit":"hearts","rank":"10"}
    		
    	},
    	{"id": 5,
    		"cards" :{"suit":"clubs","rank":"2"}
    		
    	}
    ]
    
    http.createServer(app).listen(3000);

    mongoose.connect('mongodb://localhost/test');

    app.use(function(err, req, res, next){
	  res.status(404).json(err);
	});
    
    	app.get("/hands/handId/cards",function(req,res){
    	// res.json(list.id);\
    	list.map(function(c){
    		res.json(c.cards);   
    	});
    		
    });

    app.get("/handId",function(req,res){
    	// res.json(list.id);\
    	list.map(function(c){
    		res.json(c.id);   
    	});
    		
    });


		var CardSchema = mongoose.Schema({
		"id"	: Number,
		"suit" : String,
		"rank" : String
		});

		var Card = mongoose.model("Cards", CardSchema);

		var c1 = new Card({"id": 1,
	    		"cards" :{"suit":"spades","rank":"a"}
	    		
	    	});

		var c2 = new Card({"id": 2,
    			"cards" :{"suit":"diamonds","rank":"5"}
    		
    			});

		var c3 = new Card({"id": 3,
	    		"cards" :{"suit":"clubs","rank":"k"}
	    		
	    	});

		var c4 = new Card({"id": 4,
	    		"cards" :{"suit":"hearts","rank":"10"}
	    		
	    	});
		var c5 = new Card({"id": 5,
	    		"cards" :{"suit":"clubs","rank":"2"}
	    		
	    	});


		c1.save(function (err,result) {
			if (err !== null) {
			// object was not saved!
			console.log("error");
			} else {
			console.log("the object 1 was saved!");
			}
		});

		c2.save(function (err,result) {
			if (err !== null) {
			// object was not saved!
			console.log("error");
			} else {
			console.log("the object 2 was saved!");
			}
		});

		c3.save(function (err,result) {
			if (err !== null) {
			// object was not saved!
			console.log("error");
			} else {
			console.log("the object 3 was saved!");
			}
		});

		c4.save(function (err,result) {
			if (err !== null) {
			// object was not saved!
			console.log("error");
			} else {
			console.log("the object 4 was saved!");
			}
		});

		c5.save(function (err,result) {
			if (err !== null) {
			// object was not saved!
			console.log("error");
			} else {
			console.log("the object 5 was saved!");
			}
		});


		console.log('Server started on port 3000')
