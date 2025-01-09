package com.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.User;
import com.service.UserService;
import com.util.JwtUtil;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
    private UserService userService;

	 @Autowired
	    private JwtUtil jwtUtil;

	    @PostMapping("/register")
	    public ResponseEntity<String> registerUser(@RequestBody User user) {
	        userService.registerUser(user);
	        return ResponseEntity.ok("User registered successfully");
	    }

	    @PostMapping("/login")
	    public ResponseEntity<String> loginUser(@RequestBody User user) {
	        Optional<String> token = userService.login(user.getMobileNumber(), user.getPassword());
	        return token.map(t -> ResponseEntity.ok("Bearer " + t))
	                    .orElseGet(() -> ResponseEntity.status(401).body("Invalid credentials"));
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<User> getUser(@PathVariable Long id) {
	        User user = userService.getUserById(id);
	        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User user) {
	        userService.updateUser(id, user);
	        return ResponseEntity.ok("User updated successfully");
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
	        userService.deleteUser(id);
	        return ResponseEntity.ok("User deleted successfully");
	    }
}
