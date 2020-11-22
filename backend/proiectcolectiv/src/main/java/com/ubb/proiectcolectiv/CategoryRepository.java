package com.ubb.proiectcolectiv;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Integer> {
    @Query("SELECT ID FROM Category C WHERE Denumire = :name")
    String findByName(String name);
}
