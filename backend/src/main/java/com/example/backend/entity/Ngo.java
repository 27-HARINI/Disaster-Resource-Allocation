package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ngos")
public class Ngo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String ngoName;

    private String contactPerson;

    private String phone;

    private String email;

    private String location;

    private String specialization;

    public Ngo() {
    }

    public Ngo(Long id, String ngoName, String contactPerson,
               String phone, String email,
               String location, String specialization) {
        this.id = id;
        this.ngoName = ngoName;
        this.contactPerson = contactPerson;
        this.phone = phone;
        this.email = email;
        this.location = location;
        this.specialization = specialization;
    }

    public Long getId() {
        return id;
    }

    public String getNgoName() {
        return ngoName;
    }

    public void setNgoName(String ngoName) {
        this.ngoName = ngoName;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContactPerson() {
        return contactPerson;
    }

    public void setContactPerson(String contactPerson) {
        this.contactPerson = contactPerson;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }
}