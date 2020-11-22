package com.ubb.proiectcolectiv;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
<<<<<<< Updated upstream
@Table(name = "\"Categorii\"", schema = "pc")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="\"ID\"")
    private int ID;

    @Column(name = "\"Denumire\"")
    @NotNull
    private String Denumire;

    @Column(name = "Descriere")
    private int description;

    public Category(String Denumire, int description) {
        this.Denumire = Denumire;
        this.description = description;
    }

    public Category(int id, String Denumire, int description) {
        this.ID = id;
        this.Denumire = Denumire;
        this.description = description;
    }

    public Category(){ }

    public int getId() {
        return ID;
    }
=======
@Table(name = "Categorii", schema = "pc")
public class Category {

    public Category() {
    }

    public Category(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Category(int id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;

    @Column(name="Denumire")
    @NotNull
    private String name;

    @Column(name = "Descriere")
    private String description;


>>>>>>> Stashed changes
}
