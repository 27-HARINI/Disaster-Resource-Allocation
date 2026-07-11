package com.example.backend.service;

import com.example.backend.dto.VolunteerRequest;
import com.example.backend.entity.Volunteer;

import java.util.List;

public interface VolunteerService {

    String addVolunteer(VolunteerRequest request);

    List<Volunteer> getAllVolunteers();

    Volunteer getVolunteerById(Long id);

    String updateVolunteer(Long id, VolunteerRequest request);

    String deleteVolunteer(Long id);
}