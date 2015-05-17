var User = Java.type('org.jsc.example.app.User');
var Util = Java.type('org.jsc.Util');

new function() {
	this.user = new User();
	
	this.save = function(user) {
		if(!user.name) {
			console.log('Omg! No name!');
			throw "The user has no name. Add a name.";
		}
		console.log('Save: ' + user);
		
		// userService is automatically available to scripts, based on @Named UserService
		userService.save(user);
	};
	
	this.formatName = function(user) {
		return Util.upperFirst(user.name);
	};
};
