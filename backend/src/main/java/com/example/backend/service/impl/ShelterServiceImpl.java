package com.example.backend.service.impl;

import com.example.backend.dto.ShelterRequest;
import com.example.backend.entity.Shelter;
import com.example.backend.repository.ShelterRepository;
import com.example.backend.service.ShelterService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShelterServiceImpl implements ShelterService {

    private final ShelterRepository shelterRepository;

    public ShelterServiceImpl(ShelterRepository shelterRepository) {
        this.shelterRepository = shelterRepository;
    }

    @Override
    public String addShelter(ShelterRequest request) {

        Shelter shelter = new Shelter();

        shelter.setShelterName(request.getShelterName());
        shelter.setLocation(request.getLocation());
        shelter.setCapacity(request.getCapacity());
        shelter.setOccupied(request.getOccupied());
        shelter.setStatus(request.getStatus());

        shelterRepository.save(shelter);

        return "Shelter Added Successfully";
    }

    @Override
    public List<Shelter> getAllShelters() {
        return shelterRepository.findAll();
    }

    @Override
    public Shelter getShelterById(Long id) {
        return shelterRepository.findById(id).orElse(null);
    }

    @Override
    public String updateShelter(Long id, ShelterRequest request) {

        Shelter shelter = shelterRepository.findById(id).orElse(null);

        if (shelter == null) {
            return "Shelter Not Found";
        }

        shelter.setShelterName(request.getShelterName());
        shelter.setLocation(request.getLocation());
        shelter.setCapacity(request.getCapacity());
        shelter.setOccupied(request.getOccupied());
        shelter.setStatus(request.getStatus());

        shelterRepository.save(shelter);

        return "Shelter Updated Successfully";
    }

    @Override
    public String deleteShelter(Long id) {

        if (!shelterRepository.existsById(id)) {
            return "Shelter Not Found";
        }

        shelterRepository.deleteById(id);

        return "Shelter Deleted Successfully";
    }
}