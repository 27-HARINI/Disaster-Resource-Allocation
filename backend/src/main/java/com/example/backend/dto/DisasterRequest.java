package com.example.backend.dto;

public class DisasterRequest {

    private String disasterType;
    private String location;
    private String severity;
    private String description;
    private String status;

    public DisasterRequest() {
    }

    public DisasterRequest(String disasterType, String location,
                           String severity, String description,
                           String status) {
        this.disasterType = disasterType;
        this.location = location;
        this.severity = severity;
        this.description = description;
        this.status = status;
    }

    public String getDisasterType() {
        return disasterType;
    }

    public void setDisasterType(String disasterType) {
        this.disasterType = disasterType;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}