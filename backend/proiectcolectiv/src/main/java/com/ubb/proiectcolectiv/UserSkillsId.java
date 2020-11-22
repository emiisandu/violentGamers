package com.ubb.proiectcolectiv;

import javax.persistence.Embeddable;
import java.io.Serializable;

public class UserSkillsId  implements Serializable{
    private int userId;
    private int skillId;

    public UserSkillsId(){
    }

    public UserSkillsId(int userId, int skillId) {
        this.userId = userId;
        this.skillId = skillId;
    }
}

