package com.example.backend.controller;

import com.example.backend.dto.DisasterRequest;
import com.example.backend.entity.Disaster;
import com.example.backend.service.DisasterService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/disasters")
@CrossOrigin(origins = "http://localhost:3000")
public class DisasterController {

    private final DisasterService disasterService;

    public DisasterController(DisasterService disasterService) {
        this.disasterService = disasterService;
    }

    // Register Disaster
    @PostMapping
    public String addDisaster(@RequestBody DisasterRequest request) {
        return disasterService.addDisaster(request);
    }

    // View All Disasters
    @GetMapping
    public List<Disaster> getAllDisasters() {
        return disasterService.getAllDisasters();
    }

    // View Disaster by ID
    @GetMapping("/{id}")
    public Disaster getDisasterById(@PathVariable Long id) {
        return disasterService.getDisasterById(id);
    }

    // Update Disaster
    @PutMapping("/{id}")
    public String updateDisaster(@PathVariable Long id,
                                 @RequestBody DisasterRequest request) {
        return disasterService.updateDisaster(id, request);
    }

    // Delete Disaster
    @DeleteMapping("/{id}")
    public String deleteDisaster(@PathVariable Long id) {
        return disasterService.deleteDisaster(id);
    }
}