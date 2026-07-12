package com.example.backend.controller;

import com.example.backend.dto.ShelterRequest;
import com.example.backend.entity.Shelter;
import com.example.backend.service.ShelterService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shelters")
@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://honest-blessing-production-2f17.up.railway.app"
})
public class ShelterController {

    private final ShelterService shelterService;

    public ShelterController(ShelterService shelterService) {
        this.shelterService = shelterService;
    }

    @PostMapping
    public String addShelter(@RequestBody ShelterRequest request) {
        return shelterService.addShelter(request);
    }

    @GetMapping
    public List<Shelter> getAllShelters() {
        return shelterService.getAllShelters();
    }

    @GetMapping("/{id}")
    public Shelter getShelterById(@PathVariable Long id) {
        return shelterService.getShelterById(id);
    }

    @PutMapping("/{id}")
    public String updateShelter(@PathVariable Long id,
                                @RequestBody ShelterRequest request) {
        return shelterService.updateShelter(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteShelter(@PathVariable Long id) {
        return shelterService.deleteShelter(id);
    }
}