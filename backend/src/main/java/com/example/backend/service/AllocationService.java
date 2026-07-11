package com.example.backend.service;

import com.example.backend.dto.AllocationRequest;
import com.example.backend.entity.Allocation;

import java.util.List;

public interface AllocationService {

    String allocateResource(AllocationRequest request);

    List<Allocation> getAllAllocations();

    Allocation getAllocationById(Long id);

    String deleteAllocation(Long id);
    String updateAllocation(Long id, AllocationRequest request);
}