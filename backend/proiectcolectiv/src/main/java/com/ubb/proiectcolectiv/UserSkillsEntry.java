package com.ubb.proiectcolectiv;

<<<<<<< Updated upstream
import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@IdClass(UserSkillsId.class)
@Table(name = "user_skills", schema = "pc")
=======
import javax.persistence.*;

@Entity
@Table(name = "user_skills", schema = "pc")

>>>>>>> Stashed changes
public class UserSkillsEntry {
    @Id
    @Column(name="user_id")
    private int userId;

    @Id
    @Column(name="skill_id")
    private int skillId;

<<<<<<< Updated upstream
    @Column(name = "\"knowledgeLvl\"")
    private String knowledgeLvl;

    @Column(name = "experience")
    private String experience;

    public UserSkillsEntry(String knowledgeLvl, String experience) {
        this.knowledgeLvl = knowledgeLvl;
        this.experience = experience;
    }

    public UserSkillsEntry(int userId, int skillId, String knowledgeLvl, String experience) {
        this.userId = userId;
        this.skillId = skillId;
        this.knowledgeLvl = knowledgeLvl;
        this.experience = experience;
    }

    public UserSkillsEntry(){ }
=======
    @Column(name="knowledgeLvl")
    private String knowledgeLvl;

    @Column(name="experience")
    private String experience;
>>>>>>> Stashed changes
}
