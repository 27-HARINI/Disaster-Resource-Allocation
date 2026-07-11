package com.example.backend.service.impl;

import com.example.backend.dto.AllocationRequest;
import com.example.backend.entity.*;
import com.example.backend.repository.*;
import com.example.backend.service.AllocationService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AllocationServiceImpl implements AllocationService {

    private final AllocationRepository allocationRepository;
    private final DisasterRepository disasterRepository;
    private final ResourceRepository resourceRepository;
    private final VolunteerRepository volunteerRepository;
    private final NgoRepository ngoRepository;
    private final ShelterRepository shelterRepository;

    public AllocationServiceImpl(
            AllocationRepository allocationRepository,
            DisasterRepository disasterRepository,
            ResourceRepository resourceRepository,
            VolunteerRepository volunteerRepository,
            NgoRepository ngoRepository,
            ShelterRepository shelterRepository) {

        this.allocationRepository = allocationRepository;
        this.disasterRepository = disasterRepository;
        this.resourceRepository = resourceRepository;
        this.volunteerRepository = volunteerRepository;
        this.ngoRepository = ngoRepository;
        this.shelterRepository = shelterRepository;
    }

    @Override
    public String allocateResource(AllocationRequest request) {

        Disaster disaster = disasterRepository.findById(request.getDisasterId()).orElse(null);
        if (disaster == null) return "Disaster Not Found";

        Resource resource = resourceRepository.findById(request.getResourceId()).orElse(null);
        if (resource == null) return "Resource Not Found";

        Volunteer volunteer = volunteerRepository.findById(request.getVolunteerId()).orElse(null);
        if (volunteer == null) return "Volunteer Not Found";

        Ngo ngo = ngoRepository.findById(request.getNgoId()).orElse(null);
        if (ngo == null) return "NGO Not Found";

        Shelter shelter = shelterRepository.findById(request.getShelterId()).orElse(null);
        if (shelter == null) return "Shelter Not Found";

        if (resource.getAvailableQuantity() < request.getQuantityAllocated()) {
            return "Insufficient Resources Available";
        }

        resource.setAvailableQuantity(
                resource.getAvailableQuantity() - request.getQuantityAllocated());

        resourceRepository.save(resource);

        Allocation allocation = new Allocation();

        allocation.setDisaster(disaster);
        allocation.setResource(resource);
        allocation.setVolunteer(volunteer);
        allocation.setNgo(ngo);
        allocation.setShelter(shelter);
        allocation.setQuantityAllocated(request.getQuantityAllocated());
        allocation.setAllocationDate(LocalDate.now());
        allocation.setStatus(request.getStatus());

        allocationRepository.save(allocation);

        return "Resource Allocated Successfully";
    }

    @Override
    public String updateAllocation(Long id, AllocationRequest request) {

        Allocation allocation = allocationRepository.findById(id).orElse(null);

        if (allocation == null) {
            return "Allocation Not Found";
        }

        Disaster disaster = disasterRepository.findById(request.getDisasterId()).orElse(null);
        Resource resource = resourceRepository.findById(request.getResourceId()).orElse(null);
        Volunteer volunteer = volunteerRepository.findById(request.getVolunteerId()).orElse(null);
        Ngo ngo = ngoRepository.findById(request.getNgoId()).orElse(null);
        Shelter shelter = shelterRepository.findById(request.getShelterId()).orElse(null);

        if (disaster == null || resource == null || volunteer == null
                || ngo == null || shelter == null) {
            return "Invalid Allocation Details";
        }

        allocation.setDisaster(disaster);
        allocation.setResource(resource);
        allocation.setVolunteer(volunteer);
        allocation.setNgo(ngo);
        allocation.setShelter(shelter);
        allocation.setQuantityAllocated(request.getQuantityAllocated());
        allocation.setStatus(request.getStatus());

        allocationRepository.save(allocation);

        return "Allocation Updated Successfully";
    }

    @Override
    public List<Allocation> getAllAllocations() {
        return allocationRepository.findAll();
    }

    @Override
    public Allocation getAllocationById(Long id) {
        return allocationRepository.findById(id).orElse(null);
    }

    @Override
    public String deleteAllocation(Long id) {

        if (!allocationRepository.existsById(id)) {
            return "Allocation Not Found";
        }

        allocationRepository.deleteById(id);

        return "Allocation Deleted Successfully";
    }
}