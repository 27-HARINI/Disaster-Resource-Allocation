package com.example.backend.service;

import com.example.backend.dto.NgoRequest;
import com.example.backend.entity.Ngo;

import java.util.List;

public interface NgoService {

    String addNgo(NgoRequest request);

    List<Ngo> getAllNgos();

    Ngo getNgoById(Long id);

    String updateNgo(Long id, NgoRequest request);

    String deleteNgo(Long id);
}