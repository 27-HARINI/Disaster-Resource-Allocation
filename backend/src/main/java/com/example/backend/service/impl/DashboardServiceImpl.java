package com.example.backend.service.impl;

import com.example.backend.dto.DashboardResponse;
import com.example.backend.repository.AllocationRepository;
import com.example.backend.repository.DisasterRepository;
import com.example.backend.repository.NgoRepository;
import com.example.backend.repository.ResourceRepository;
import com.example.backend.repository.ShelterRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.VolunteerRepository;
import com.example.backend.service.DashboardService;
import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final UserRepository userRepository;
    private final DisasterRepository disasterRepository;
    private final ResourceRepository resourceRepository;
    private final VolunteerRepository volunteerRepository;
    private final NgoRepository ngoRepository;
    private final ShelterRepository shelterRepository;
    private final AllocationRepository allocationRepository;

    public DashboardServiceImpl(
            UserRepository userRepository,
            DisasterRepository disasterRepository,
            ResourceRepository resourceRepository,
            VolunteerRepository volunteerRepository,
            NgoRepository ngoRepository,
            ShelterRepository shelterRepository,
            AllocationRepository allocationRepository) {

        this.userRepository = userRepository;
        this.disasterRepository = disasterRepository;
        this.resourceRepository = resourceRepository;
        this.volunteerRepository = volunteerRepository;
        this.ngoRepository = ngoRepository;
        this.shelterRepository = shelterRepository;
        this.allocationRepository = allocationRepository;
    }

    @Override
    public DashboardResponse getDashboardData() {

        DashboardResponse response = new DashboardResponse();

        response.setTotalUsers(userRepository.count());
        response.setTotalDisasters(disasterRepository.count());
        response.setTotalResources(resourceRepository.count());
        response.setTotalVolunteers(volunteerRepository.count());
        response.setTotalNgos(ngoRepository.count());
        response.setTotalShelters(shelterRepository.count());
        response.setTotalAllocations(allocationRepository.count());

        return response;
    }
}