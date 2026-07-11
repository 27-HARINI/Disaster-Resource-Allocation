package com.example.backend.service.impl;

import com.example.backend.dto.ResourceRequest;
import com.example.backend.entity.Resource;
import com.example.backend.repository.ResourceRepository;
import com.example.backend.service.ResourceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResourceServiceImpl implements ResourceService {

    private final ResourceRepository resourceRepository;

    public ResourceServiceImpl(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    @Override
    public String addResource(ResourceRequest request) {

        Resource resource = new Resource();

        resource.setResourceName(request.getResourceName());
        resource.setResourceType(request.getResourceType());
        resource.setQuantity(request.getQuantity());
        resource.setAvailableQuantity(request.getAvailableQuantity());
        resource.setLocation(request.getLocation());
        resource.setStatus(request.getStatus());

        resourceRepository.save(resource);

        return "Resource Added Successfully";
    }

    @Override
    public List<Resource> getAllResources() {
        return resourceRepository.findAll();
    }

    @Override
    public Resource getResourceById(Long id) {
        return resourceRepository.findById(id).orElse(null);
    }

    @Override
    public String updateResource(Long id, ResourceRequest request) {

        Resource resource = resourceRepository.findById(id).orElse(null);

        if (resource == null) {
            return "Resource Not Found";
        }

        resource.setResourceName(request.getResourceName());
        resource.setResourceType(request.getResourceType());
        resource.setQuantity(request.getQuantity());
        resource.setAvailableQuantity(request.getAvailableQuantity());
        resource.setLocation(request.getLocation());
        resource.setStatus(request.getStatus());

        resourceRepository.save(resource);

        return "Resource Updated Successfully";
    }

    @Override
    public String deleteResource(Long id) {

        if (!resourceRepository.existsById(id)) {
            return "Resource Not Found";
        }

        resourceRepository.deleteById(id);

        return "Resource Deleted Successfully";
    }
}