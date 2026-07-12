package com.example.backend.controller;

import com.example.backend.dto.AllocationRequest;
import com.example.backend.entity.Allocation;
import com.example.backend.service.AllocationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/allocations")
@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://honest-blessing-production-2f17.up.railway.app"
})
public class AllocationController {

    private final AllocationService allocationService;

    public AllocationController(AllocationService allocationService) {
        this.allocationService = allocationService;
    }

    @PostMapping
    public String allocate(@RequestBody AllocationRequest request) {
        return allocationService.allocateResource(request);
    }

    @GetMapping
    public List<Allocation> getAllAllocations() {
        return allocationService.getAllAllocations();
    }

    @GetMapping("/{id}")
    public Allocation getAllocation(@PathVariable Long id) {
        return allocationService.getAllocationById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteAllocation(@PathVariable Long id) {
        return allocationService.deleteAllocation(id);
    }
    @PutMapping("/{id}")
    public String updateAllocation(@PathVariable Long id,
                                   @RequestBody AllocationRequest request) {
        return allocationService.updateAllocation(id, request);
    }
}
