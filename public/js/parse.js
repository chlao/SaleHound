
$(document).ready(function(){

	Parse.initialize("d18mp4SVBEVkw2wvFkIq42wF8wLN5CiPrujuLYrt",
					 "sUDAf5ScDikUT4IlXQO4v7zKXECr4ehi4T9vXt6L");

	//var SaleObject = Parse.Object.extend('SaleObject'); 
	//var sale = new SaleObject(); 

	// When the log in submit button is clicked 
	$("#submitBtn").click(function(e){
		var self = this; 
		var username = this.$("#login-username").val();
		var password = this.$("#login-password").val();

		Parse.User.logIn(username, password, {
		success: function(user) {
		  new ManageTodosView();
		  self.undelegateEvents();
		  delete self;
		},

		error: function(user, error) {
		  self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
		  self.$(".login-form button").removeAttr("disabled");
		}
	}); 

	
}); 


