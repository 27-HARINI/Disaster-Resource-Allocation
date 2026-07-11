package com.example.backend.dto;

public class ResourceRequest {

    private String resourceName;
    private String resourceType;
    private Integer quantity;
    private Integer availableQuantity;
    private String location;
    private String status;

    public ResourceRequest() {
    }

    public ResourceRequest(String resourceName, String resourceType,
                           Integer quantity, Integer availableQuantity,
                           String location, String status) {
        this.resourceName = resourceName;
        this.resourceType = resourceType;
        this.quantity = quantity;
        this.availableQuantity = availableQuantity;
        this.location = location;
        this.status = status;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    public String getResourceType() {
        return resourceType;
    }

    public void setResourceType(String resourceType) {
        this.resourceType = resourceType;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getAvailableQuantity() {
        return availableQuantity;
    }

    public void setAvailableQuantity(Integer availableQuantity) {
        this.availableQuantity = availableQuantity;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}