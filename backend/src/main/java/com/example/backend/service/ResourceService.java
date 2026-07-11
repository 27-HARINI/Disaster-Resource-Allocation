package com.example.backend.service;

import com.example.backend.dto.ResourceRequest;
import com.example.backend.entity.Resource;

import java.util.List;

public interface ResourceService {

    String addResource(ResourceRequest request);

    List<Resource> getAllResources();

    Resource getResourceById(Long id);

    String updateResource(Long id, ResourceRequest request);

    String deleteResource(Long id);
}