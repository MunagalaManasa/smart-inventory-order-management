package com.inventory.smartinventory.repository;

import com.inventory.smartinventory.entity.Order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    // Get latest 5 orders
    List<Order> findTop5ByOrderByIdDesc();

}