package com.ubb.proiectcolectiv;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface SkillRepository extends CrudRepository<Skill, Integer> {
    @Query("SELECT id FROM Skill S WHERE S.name = :name")
    String findByName(String name);
}
