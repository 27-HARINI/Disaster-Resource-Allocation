package com.example.backend.service.impl;

import com.example.backend.dto.DisasterRequest;
import com.example.backend.entity.Disaster;
import com.example.backend.repository.DisasterRepository;
import com.example.backend.service.DisasterService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DisasterServiceImpl implements DisasterService {

    private final DisasterRepository disasterRepository;

    public DisasterServiceImpl(DisasterRepository disasterRepository) {
        this.disasterRepository = disasterRepository;
    }

    @Override
    public String addDisaster(DisasterRequest request) {

        Disaster disaster = new Disaster();

        disaster.setDisasterType(request.getDisasterType());
        disaster.setLocation(request.getLocation());
        disaster.setSeverity(request.getSeverity());
        disaster.setDescription(request.getDescription());
        disaster.setStatus(request.getStatus());

        disaster.setReportedTime(LocalDateTime.now());

        disasterRepository.save(disaster);

        return "Disaster Registered Successfully";
    }

    @Override
    public List<Disaster> getAllDisasters() {
        return disasterRepository.findAll();
    }

    @Override
    public Disaster getDisasterById(Long id) {
        return disasterRepository.findById(id).orElse(null);
    }

    @Override
    public String updateDisaster(Long id, DisasterRequest request) {

        Disaster disaster = disasterRepository.findById(id).orElse(null);

        if (disaster == null) {
            return "Disaster Not Found";
        }

        disaster.setDisasterType(request.getDisasterType());
        disaster.setLocation(request.getLocation());
        disaster.setSeverity(request.getSeverity());
        disaster.setDescription(request.getDescription());
        disaster.setStatus(request.getStatus());

        disasterRepository.save(disaster);

        return "Disaster Updated Successfully";
    }

    @Override
    public String deleteDisaster(Long id) {

        if (!disasterRepository.existsById(id)) {
            return "Disaster Not Found";
        }

        disasterRepository.deleteById(id);

        return "Disaster Deleted Successfully";
    }
}