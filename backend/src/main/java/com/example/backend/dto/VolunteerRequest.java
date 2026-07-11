package com.example.backend.dto;

public class VolunteerRequest {

    private String fullName;
    private String phone;
    private String email;
    private String skill;
    private String availability;
    private String assignedTask;

    public VolunteerRequest() {
    }

    public VolunteerRequest(String fullName, String phone,
                            String email, String skill,
                            String availability, String assignedTask) {
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
        this.skill = skill;
        this.availability = availability;
        this.assignedTask = assignedTask;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
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

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getAssignedTask() {
        return assignedTask;
    }

    public void setAssignedTask(String assignedTask) {
        this.assignedTask = assignedTask;
    }
}