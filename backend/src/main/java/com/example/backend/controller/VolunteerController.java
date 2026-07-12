package com.example.backend.controller;

import com.example.backend.dto.VolunteerRequest;
import com.example.backend.entity.Volunteer;
import com.example.backend.service.VolunteerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/volunteers")
@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://honest-blessing-production-2f17.up.railway.app"
})
public class VolunteerController {

    private final VolunteerService volunteerService;

    public VolunteerController(VolunteerService volunteerService) {
        this.volunteerService = volunteerService;
    }

    @PostMapping
    public String addVolunteer(@RequestBody VolunteerRequest request) {
        return volunteerService.addVolunteer(request);
    }

    @GetMapping
    public List<Volunteer> getAllVolunteers() {
        return volunteerService.getAllVolunteers();
    }

    @GetMapping("/{id}")
    public Volunteer getVolunteerById(@PathVariable Long id) {
        return volunteerService.getVolunteerById(id);
    }

    @PutMapping("/{id}")
    public String updateVolunteer(@PathVariable Long id,
                                  @RequestBody VolunteerRequest request) {
        return volunteerService.updateVolunteer(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteVolunteer(@PathVariable Long id) {
        return volunteerService.deleteVolunteer(id);
    }
}