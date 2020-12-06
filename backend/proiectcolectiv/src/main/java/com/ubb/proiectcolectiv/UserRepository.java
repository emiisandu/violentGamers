package com.ubb.proiectcolectiv;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("SELECT U.username FROM User U WHERE U.username = :name")
    String findByName(String name);

    @Query("SELECT DISTINCT U.username, U.password FROM User U WHERE U.username = :name AND U.password= :password")
    String findUserPassMatch(String name, String password);

    User findDistinctByEmailAndPassword(String email, String password);

    @Query("SELECT U.first_name FROM User U WHERE U.email = :email")
    String findDistinctByEmail(String email);

}
