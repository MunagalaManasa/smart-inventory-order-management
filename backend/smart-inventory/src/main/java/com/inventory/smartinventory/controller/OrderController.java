package com.inventory.smartinventory.controller;

import com.inventory.smartinventory.dto.ApiResponse;
import com.inventory.smartinventory.entity.Order;
import com.inventory.smartinventory.service.OrderService;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    // ===============================
    // Create Order
    // ===============================
    @PostMapping
    public ResponseEntity<ApiResponse<Order>> createOrder(
            @Valid @RequestBody Order order) {

        Order savedOrder = orderService.createOrder(order);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Order created successfully",
                        savedOrder
                )
        );
    }

    // ===============================
    // Get All Orders
    // ===============================
    @GetMapping
    public ResponseEntity<ApiResponse<List<Order>>> getAllOrders() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Orders fetched successfully",
                        orderService.getAllOrders()
                )
        );
    }

    // ===============================
    // Get Order By ID
    // ===============================
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Order>> getOrderById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Order fetched successfully",
                        orderService.getOrderById(id)
                )
        );
    }

    // ===============================
    // Update Order
    // ===============================
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Order>> updateOrder(
            @PathVariable Long id,
            @Valid @RequestBody Order order) {

        Order updatedOrder = orderService.updateOrder(id, order);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Order updated successfully",
                        updatedOrder
                )
        );
    }

    // ===============================
    // Delete Order
    // ===============================
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteOrder(
            @PathVariable Long id) {

        orderService.deleteOrder(id);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Order deleted successfully",
                        "Order deleted successfully"
                )
        );
    }

}