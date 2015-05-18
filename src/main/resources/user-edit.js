new function() {
	var user = UserService.findById(request.getParameter('id'));
	console.log('got user: ' + user.name)
	this.user = user;
	this.save = function(user) {
		console.log('saving user: ' + user.id);
		UserService.save(user);
		response.sendRedirect('/user-manager')
	}
}