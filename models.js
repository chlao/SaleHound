var Mongoose = require('mongoose');

var SaleSchema = new Mongoose.Schema({
	"store": String,
	"description": String, 
	"imageURL": String
});

exports.Sale = Mongoose.model('Sale', SaleSchema); 

var MyStoresSchema = new Mongoose.Schema({
	"name": String, 
	"imageURL": String
}); 

exports.MyStores = Mongoose.model('MyStores', MyStoresSchema);

/*
	Schema = mongoose.Schema, 
	bcrypt = require('bcrypt'), 
	SALT_WORK_FACTOR = 10;  // salt prevents rainbow table attacks 

// Schema for user accounts 
var UserSchema = new Mongoose.Schema({
	"user": {type: String, required: true, index: {unique:true}}, 
	"password": {type: String, required: true},  
	"email": String; 
}); 

/* Accomplishes goal of always hasing the password 
   when a document is saved to the database
   - Because passwords are not hashed until the document is saved,
     be careful if you're interacting w/ documents that were not retreived
     from the database, as any passwords will still be in cleartext
   - Mongoose middleware is not invoked on update() opeations, so you must
     use a save() if you want to update user passwords
*/
/*  
UserSchema.pre('save', function(next){
	var user = this; 

	// only hash the password if it has been modified (or is new)
	if(!user.isModified('password')) return next(); 

	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err,salt){
		if (err) return next(err); 

		// hash the password along w/ our new salt
		bcrypt.hash(user.password, salt, function(err,hash){
				if(err) return next(err); 

				// override the cleartex password w/ the hashed one
				user.password = hash; 
				next(); 
		}); 
	});  
}); 

// Password verification 
UserSchema.methods.comparePassword = function(candidatePassword, cb {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if (err) return cb(err); 
		cb(null, isMatch); 
	}); 
}); 

// Mongoose Models contruct documents 
// exports.User = Mongoose.model('User', UserSchema);

module.exports = mongoose.model('User', UserSchema);
*/