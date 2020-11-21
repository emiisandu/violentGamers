package com.ubb.proiectcolectiv;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="user_projects", schema = "pc")
@Data
public class UserProjectHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_project_id")
    private int user_project_id;

    @Column(name="user_id")
    @NotNull
    private int user_id;

    @Column(name="project_name")
    @NotNull
    private String project_name;

    @Column(name="project_runtime")
    @NotNull
    private String project_runtime;

    @Column(name="role")
    private String role;

    @Column(name="description")
    private String description;

    public UserProjectHistory(){

    }

    public UserProjectHistory(int user_project_id, int user_id, String project_name, String project_runtime, String role, String description){
        this.user_project_id = user_project_id;
        this.user_id = user_id;
        this.project_name= project_name;
        this.project_runtime = project_runtime;
        this.role = role;
        this.description = description;
    }

    public UserProjectHistory(int user_id, String project_name, String project_runtime, String role, String description){
        this.user_id = user_id;
        this.project_name= project_name;
        this.project_runtime = project_runtime;
        this.role = role;
        this.description = description;
    }

}
