package com.example.backend.controller;

import com.example.backend.dto.NgoRequest;
import com.example.backend.entity.Ngo;
import com.example.backend.service.NgoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ngos")
@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://honest-blessing-production-2f17.up.railway.app"
})
public class NgoController {

    private final NgoService ngoService;

    public NgoController(NgoService ngoService) {
        this.ngoService = ngoService;
    }

    @PostMapping
    public String addNgo(@RequestBody NgoRequest request) {
        return ngoService.addNgo(request);
    }

    @GetMapping
    public List<Ngo> getAllNgos() {
        return ngoService.getAllNgos();
    }

    @GetMapping("/{id}")
    public Ngo getNgoById(@PathVariable Long id) {
        return ngoService.getNgoById(id);
    }

    @PutMapping("/{id}")
    public String updateNgo(@PathVariable Long id,
                            @RequestBody NgoRequest request) {
        return ngoService.updateNgo(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteNgo(@PathVariable Long id) {
        return ngoService.deleteNgo(id);
    }
}