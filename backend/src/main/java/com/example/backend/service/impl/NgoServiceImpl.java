package com.example.backend.service.impl;

import com.example.backend.dto.NgoRequest;
import com.example.backend.entity.Ngo;
import com.example.backend.repository.NgoRepository;
import com.example.backend.service.NgoService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NgoServiceImpl implements NgoService {

    private final NgoRepository ngoRepository;

    public NgoServiceImpl(NgoRepository ngoRepository) {
        this.ngoRepository = ngoRepository;
    }

    @Override
    public String addNgo(NgoRequest request) {

        Ngo ngo = new Ngo();

        ngo.setNgoName(request.getNgoName());
        ngo.setContactPerson(request.getContactPerson());
        ngo.setPhone(request.getPhone());
        ngo.setEmail(request.getEmail());
        ngo.setLocation(request.getLocation());
        ngo.setSpecialization(request.getSpecialization());

        ngoRepository.save(ngo);

        return "NGO Added Successfully";
    }

    @Override
    public List<Ngo> getAllNgos() {
        return ngoRepository.findAll();
    }

    @Override
    public Ngo getNgoById(Long id) {
        return ngoRepository.findById(id).orElse(null);
    }

    @Override
    public String updateNgo(Long id, NgoRequest request) {

        Ngo ngo = ngoRepository.findById(id).orElse(null);

        if (ngo == null) {
            return "NGO Not Found";
        }

        ngo.setNgoName(request.getNgoName());
        ngo.setContactPerson(request.getContactPerson());
        ngo.setPhone(request.getPhone());
        ngo.setEmail(request.getEmail());
        ngo.setLocation(request.getLocation());
        ngo.setSpecialization(request.getSpecialization());

        ngoRepository.save(ngo);

        return "NGO Updated Successfully";
    }

    @Override
    public String deleteNgo(Long id) {

        if (!ngoRepository.existsById(id)) {
            return "NGO Not Found";
        }

        ngoRepository.deleteById(id);

        return "NGO Deleted Successfully";
    }
}