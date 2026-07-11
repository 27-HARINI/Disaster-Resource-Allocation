package com.example.backend.service.impl;

import com.example.backend.dto.VolunteerRequest;
import com.example.backend.entity.Volunteer;
import com.example.backend.repository.VolunteerRepository;
import com.example.backend.service.VolunteerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteerServiceImpl implements VolunteerService {

    private final VolunteerRepository volunteerRepository;

    public VolunteerServiceImpl(VolunteerRepository volunteerRepository) {
        this.volunteerRepository = volunteerRepository;
    }

    @Override
    public String addVolunteer(VolunteerRequest request) {

        Volunteer volunteer = new Volunteer();

        volunteer.setFullName(request.getFullName());
        volunteer.setPhone(request.getPhone());
        volunteer.setEmail(request.getEmail());
        volunteer.setSkill(request.getSkill());
        volunteer.setAvailability(request.getAvailability());
        volunteer.setAssignedTask(request.getAssignedTask());

        volunteerRepository.save(volunteer);

        return "Volunteer Added Successfully";
    }

    @Override
    public List<Volunteer> getAllVolunteers() {
        return volunteerRepository.findAll();
    }

    @Override
    public Volunteer getVolunteerById(Long id) {
        return volunteerRepository.findById(id).orElse(null);
    }

    @Override
    public String updateVolunteer(Long id, VolunteerRequest request) {

        Volunteer volunteer = volunteerRepository.findById(id).orElse(null);

        if (volunteer == null) {
            return "Volunteer Not Found";
        }

        volunteer.setFullName(request.getFullName());
        volunteer.setPhone(request.getPhone());
        volunteer.setEmail(request.getEmail());
        volunteer.setSkill(request.getSkill());
        volunteer.setAvailability(request.getAvailability());
        volunteer.setAssignedTask(request.getAssignedTask());

        volunteerRepository.save(volunteer);

        return "Volunteer Updated Successfully";
    }

    @Override
    public String deleteVolunteer(Long id) {

        if (!volunteerRepository.existsById(id)) {
            return "Volunteer Not Found";
        }

        volunteerRepository.deleteById(id);

        return "Volunteer Deleted Successfully";
    }
}