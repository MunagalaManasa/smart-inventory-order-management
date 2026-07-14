package com.inventory.smartinventory.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;


@Entity
@Table(name = "users")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;



    @NotBlank(message = "Name is required")
    @Column(nullable = false)
    private String name;



    @Email(message = "Enter a valid email")
    @NotBlank(message = "Email is required")
    @Column(nullable = false, unique = true)
    private String email;



    @NotBlank(message = "Password is required")
    @Column(nullable = false)
    private String password;



    // USER or ADMIN
    @Column(nullable = false)
    private String role = "USER";



    public User() {

    }



    public User(Integer id,
                String name,
                String email,
                String password,
                String role) {

        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;

    }



    public Integer getId() {

        return id;

    }



    public void setId(Integer id) {

        this.id = id;

    }



    public String getName() {

        return name;

    }



    public void setName(String name) {

        this.name = name;

    }



    public String getEmail() {

        return email;

    }



    public void setEmail(String email) {

        this.email = email;

    }



    public String getPassword() {

        return password;

    }



    public void setPassword(String password) {

        this.password = password;

    }



    public String getRole() {

        return role;

    }



    public void setRole(String role) {

        this.role = role;

    }


}