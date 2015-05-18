new function() {
	this.userSearch = '';
	
	this.findUser = function() {
		console.log('searching for ' + this.userSearch)
		var users = UserService.listUsers();
		var out = [];
		for(var i = 0; i < users.length; i++) {
			if(users[i].name.contains(this.userSearch)) {
				out.push(users[i]);
			}
		}
		this.results = out;
	};
	
	this.results = [];
}