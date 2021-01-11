package com.ubb.proiectcolectiv;

import com.sun.istack.NotNull;

import java.util.Date;
import java.util.Objects;

import javax.persistence.*;

//@Entity
//public class Skill {
//    private @Id @GeneratedValue int id;
//
//    private String name;
//
//    private String description;
//
//    private String knowledgeLevel;
//
//    private String experience;
//
//    public Skill(int id, String name, String description, String knowledgeLevel, String experience) {
//        this.id = id;
//        this.name = name;
//        this.description = description;
//        this.knowledgeLevel = knowledgeLevel;
//        this.experience = experience;
//    }
//
//    public Skill(){}
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public String getKnowledgeLevel() {
//        return knowledgeLevel;
//    }
//
//    public void setKnowledgeLevel(String knowledgeLevel) {
//        this.knowledgeLevel = knowledgeLevel;
//    }
//
//    public String getExperience() {
//        return experience;
//    }
//
//    public void setExperience(String experience) {
//        this.experience = experience;
//    }
//
//    @Override
//    public String toString() {
//        return "Skill{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", description='" + description + '\'' +
//                ", knowledgeLevel='" + knowledgeLevel + '\'' +
//                ", experience='" + experience + '\'' +
//                '}';}
//}
@Entity
@Table(name = "skill-uri", schema = "pc")
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "denumire")
    @NotNull
    private String name;

    @Column(name = "id_categorie")
    private int categoryId;

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Skill(String name, int categoryId) {
        this.name = name;
        this.categoryId = categoryId;
    }

    public Skill(int id, String name, int categoryId) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
    }
    public Skill(){ }
}
