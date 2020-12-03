package com.ubb.proiectcolectiv;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="user_projects", schema = "pc")
@Data
public class UserProjectHistory {
    @Column(name="user_id")
    @NotNull
    private int user_id;

    @Column(name="project_id")
    @NotNull
    private int project_id;

    @Column(name="role")
    private String role;

    public UserProjectHistory(){

    }

    public UserProjectHistory(int user_id, int user_project_id, String role){
        this.user_id = user_id;
        this.user_project_id = user_project_id;
        this.role = role;
    }

}
