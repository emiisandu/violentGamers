package com.ubb.proiectcolectiv;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    @Query("SELECT username FROM User U WHERE U.username = :name")
    String findByName(String name);
}
