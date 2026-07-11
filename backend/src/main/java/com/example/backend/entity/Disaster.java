package com.example.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "disasters")
public class Disaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String disasterType;

    private String location;

    private String severity;

    private String description;

    private String status;

    private LocalDateTime reportedTime;

    public Disaster() {
    }

    public Disaster(Long id, String disasterType, String location,
                    String severity, String description,
                    String status, LocalDateTime reportedTime) {

        this.id = id;
        this.disasterType = disasterType;
        this.location = location;
        this.severity = severity;
        this.description = description;
        this.status = status;
        this.reportedTime = reportedTime;
    }

    public Long getId() {
        return id;
    }

    public String getDisasterType() {
        return disasterType;
    }

    public void setDisasterType(String disasterType) {
        this.disasterType = disasterType;
    }

    public void setId(Long id) {
        this.id = id;
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

    public LocalDateTime getReportedTime() {
        return reportedTime;
    }

    public void setReportedTime(LocalDateTime reportedTime) {
        this.reportedTime = reportedTime;
    }
}