package com.example.backend.controller;

import com.example.backend.dto.ResourceRequest;
import com.example.backend.entity.Resource;
import com.example.backend.service.ResourceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
@CrossOrigin(origins = "http://localhost:3000")
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @PostMapping
    public String addResource(@RequestBody ResourceRequest request) {
        return resourceService.addResource(request);
    }

    @GetMapping
    public List<Resource> getAllResources() {
        return resourceService.getAllResources();
    }

    @GetMapping("/{id}")
    public Resource getResourceById(@PathVariable Long id) {
        return resourceService.getResourceById(id);
    }

    @PutMapping("/{id}")
    public String updateResource(@PathVariable Long id,
                                 @RequestBody ResourceRequest request) {
        return resourceService.updateResource(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteResource(@PathVariable Long id) {
        return resourceService.deleteResource(id);
    }
}