package com.ubb.proiectcolectiv;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="user", schema = "pc")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="username")
    @NotNull
    private String username;

    @Column(name="password")
    @NotNull
    private String password;

    @Column(name="first_name")
    @NotNull
    private String first_name;

    @Column(name="last_name")
    @NotNull
    private String last_name;

    @Column(name="email")
    @NotNull
    private String email;

    public User(){

    }
    public User(int id, String username, String password, String first_name, String last_name, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
    public User(String username, String password, String first_name, String last_name, String email) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
}
