package com.example.backend.repository;

import com.example.backend.entity.Ngo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NgoRepository extends JpaRepository<Ngo, Long> {
}