package com.example.backend.dto;

public class ShelterRequest {

    private String shelterName;
    private String location;
    private Integer capacity;
    private Integer occupied;
    private String status;

    public ShelterRequest() {
    }

    public ShelterRequest(String shelterName, String location,
                          Integer capacity, Integer occupied,
                          String status) {
        this.shelterName = shelterName;
        this.location = location;
        this.capacity = capacity;
        this.occupied = occupied;
        this.status = status;
    }

    public String getShelterName() {
        return shelterName;
    }

    public void setShelterName(String shelterName) {
        this.shelterName = shelterName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Integer getOccupied() {
        return occupied;
    }

    public void setOccupied(Integer occupied) {
        this.occupied = occupied;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}