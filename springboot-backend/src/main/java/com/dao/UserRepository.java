package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

import com.bean.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	 @Procedure(procedureName = "create_user")
	    void createUser(String firstName, String lastName, String mobileNumber, String password, String createdBy);

	    @Procedure(procedureName = "update_user")
	    void updateUser(Long id, String firstName, String lastName, String mobileNumber, String password, String updatedBy);

	    @Procedure(procedureName = "delete_user")
	    void deleteUser(Long id);

	    @Procedure(procedureName = "get_user_by_id")
	    User getUserById(Long id);

	    User findByMobileNumber(String mobileNumber);
}
