package com.example.backend.dto;

public class DashboardResponse {

    private long totalUsers;
    private long totalDisasters;
    private long totalResources;
    private long totalVolunteers;
    private long totalNgos;
    private long totalShelters;
    private long totalAllocations;

    public DashboardResponse() {
    }

    public DashboardResponse(long totalUsers,
                             long totalDisasters,
                             long totalResources,
                             long totalVolunteers,
                             long totalNgos,
                             long totalShelters,
                             long totalAllocations) {

        this.totalUsers = totalUsers;
        this.totalDisasters = totalDisasters;
        this.totalResources = totalResources;
        this.totalVolunteers = totalVolunteers;
        this.totalNgos = totalNgos;
        this.totalShelters = totalShelters;
        this.totalAllocations = totalAllocations;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalDisasters() {
        return totalDisasters;
    }

    public void setTotalDisasters(long totalDisasters) {
        this.totalDisasters = totalDisasters;
    }

    public long getTotalResources() {
        return totalResources;
    }

    public void setTotalResources(long totalResources) {
        this.totalResources = totalResources;
    }

    public long getTotalVolunteers() {
        return totalVolunteers;
    }

    public void setTotalVolunteers(long totalVolunteers) {
        this.totalVolunteers = totalVolunteers;
    }

    public long getTotalNgos() {
        return totalNgos;
    }

    public void setTotalNgos(long totalNgos) {
        this.totalNgos = totalNgos;
    }

    public long getTotalShelters() {
        return totalShelters;
    }

    public void setTotalShelters(long totalShelters) {
        this.totalShelters = totalShelters;
    }

    public long getTotalAllocations() {
        return totalAllocations;
    }

    public void setTotalAllocations(long totalAllocations) {
        this.totalAllocations = totalAllocations;
    }
}