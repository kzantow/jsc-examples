package org.jsc.example.app;

import java.util.List;
import java.util.UUID;

import javax.inject.Inject;
import javax.inject.Named;

import org.jsc.app.Service;
import org.jsc.db.Db;

@Named("userService")
@Service
public class UserService {
	@Inject Db db;
	
	public User findById(String id) {
		User u = new User();
		u.setId(id);
		return db.findById(u);
	}
	
	public void save(User user) {
		if(user.getId() == null) {
			user.setId(UUID.randomUUID().toString());
		}
		db.save(user);
	}
	
	public void delete(User user) {
		db.delete(user);
	}
	
	public List<User> listUsers() {
		return db.list(User.class);
	}
}
