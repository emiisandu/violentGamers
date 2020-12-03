package com.ubb.proiectcolectiv;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="project", schema = "pc")
@Data
public class Project{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="project_id")
    private int project_id;

    @Column(name="project_name")
    private String project_name;

    @Column(name="project_runtime")
    private String project_runtime;

    @Column(name="description")
    private String description;

    public Project(){

    }

    public Project(int project_id, String project_name, String project_runtime, String description){
        this.project_id=project_id;
        this.project_name=project_name;
        this.project_runtime=project_runtime;
        this.description=description;
    }
}