package com.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.bean.User;
import com.dao.UserRepository;
import com.util.JwtUtil;

@Service
public class UserService {
	
	@Autowired
    private UserRepository userRepository;

	@Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreatedBy("System");
        user.setUpdatedBy("System");
        user.setCreatedDate(new Date());
        return userRepository.save(user);
    }

    public Optional<String> login(String mobileNumber, String password) {
        User user = userRepository.findByMobileNumber(mobileNumber);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            String token = jwtUtil.generateToken(mobileNumber);
            return Optional.of(token);
        }
        return Optional.empty();
    }

    public User getUserById(Long id) {
        return userRepository.getUserById(id);
    }

    public void updateUser(Long id, User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setUpdatedBy("System");
        user.setUpdatedDate(new Date());
        userRepository.updateUser(id, user.getFirstName(), user.getLastName(), user.getMobileNumber(), user.getPassword(), user.getUpdatedBy());
    }

    public void deleteUser(Long id) {
        userRepository.deleteUser(id);
    }
}
