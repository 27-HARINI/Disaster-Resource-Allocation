package com.example.backend.service;

import com.example.backend.dto.ShelterRequest;
import com.example.backend.entity.Shelter;

import java.util.List;

public interface ShelterService {

    String addShelter(ShelterRequest request);

    List<Shelter> getAllShelters();

    Shelter getShelterById(Long id);

    String updateShelter(Long id, ShelterRequest request);

    String deleteShelter(Long id);
}