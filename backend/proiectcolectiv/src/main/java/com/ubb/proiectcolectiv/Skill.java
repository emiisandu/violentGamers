import java.util.Date;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Skill {
    private @Id @GeneratedValue int id;

    private String name;

    private String description;

    private String knowledgeLevel;

    private String experience;

    public Skill(int id, String name, String description, String knowledgeLevel, String experience) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.knowledgeLevel = knowledgeLevel;
        this.experience = experience;
    }

    public Skill(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getKnowledgeLevel() {
        return knowledgeLevel;
    }

    public void setKnowledgeLevel(String knowledgeLevel) {
        this.knowledgeLevel = knowledgeLevel;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    @Override
    public String toString() {
        return "Skill{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", knowledgeLevel='" + knowledgeLevel + '\'' +
                ", experience='" + experience + '\'' +
                '}';
    }
}