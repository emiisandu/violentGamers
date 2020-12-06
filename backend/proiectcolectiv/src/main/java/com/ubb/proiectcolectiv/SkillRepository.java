package com.ubb.proiectcolectiv;

import com.ubb.proiectcolectiv.Skill;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface SkillRepository  extends CrudRepository<Skill, Long> {
    @Override
    <S extends Skill> S save(S s);

    @Override
    <S extends Skill> Iterable<S> saveAll(Iterable<S> iterable);

    @Override
    Optional<Skill> findById(Long aLong);

    @Override
    boolean existsById(Long aLong);

    @Override
    Iterable<Skill> findAll();

    @Override
    Iterable<Skill> findAllById(Iterable<Long> iterable);

    @Override
    long count();

    @Override
    void deleteById(Long aLong);

    @Override
    void delete(Skill skill);

    @Override
    void deleteAll(Iterable<? extends Skill> iterable);

    @Override
    void deleteAll();
}
