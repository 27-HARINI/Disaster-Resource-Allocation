package com.example.backend.service;

import com.example.backend.dto.DisasterRequest;
import com.example.backend.entity.Disaster;

import java.util.List;

public interface DisasterService {

    String addDisaster(DisasterRequest request);

    List<Disaster> getAllDisasters();

    Disaster getDisasterById(Long id);

    String updateDisaster(Long id, DisasterRequest request);

    String deleteDisaster(Long id);

}