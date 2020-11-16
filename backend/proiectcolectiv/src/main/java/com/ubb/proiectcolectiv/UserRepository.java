package com.ubb.proiectcolectiv;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("SELECT username FROM User U WHERE U.username = :name")
    String findByName(String name);

    @Query("SELECT DISTINCT username, password FROM User U WHERE U.username = :name AND U.password= :password")
    String findUserPassMatch(String name, String password);

    //Easier:
    //User findByUsernameAndPassword(String username, String password);
}
