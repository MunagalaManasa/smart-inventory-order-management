package com.inventory.smartinventory.repository;

import com.inventory.smartinventory.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Search products by name
    List<Product> findByNameContainingIgnoreCase(String name);
    List<Product> findTop5ByOrderByIdDesc();

    List<Product> findByQuantityLessThanEqual(Integer quantity);

    // Count low stock products
    long countByQuantityLessThanEqual(Integer quantity);

}