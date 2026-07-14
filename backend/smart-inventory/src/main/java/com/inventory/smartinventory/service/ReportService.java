package com.inventory.smartinventory.service;

import com.inventory.smartinventory.dto.InventoryReportResponse;
import com.inventory.smartinventory.entity.Product;
import com.inventory.smartinventory.repository.OrderRepository;
import com.inventory.smartinventory.repository.ProductRepository;

import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class ReportService {

    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;

    public ReportService(ProductRepository productRepository,
                         OrderRepository orderRepository) {

        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    public InventoryReportResponse getInventoryReport() {

        List<Product> products = productRepository.findAll();

        long totalProducts = products.size();

        long totalOrders = orderRepository.count();

        long totalStock = products.stream()
                .mapToLong(Product::getQuantity)
                .sum();

        long lowStockProducts = products.stream()
                .filter(product -> product.getQuantity() <= 5)
                .count();

        long outOfStockProducts = products.stream()
                .filter(product -> product.getQuantity() == 0)
                .count();

        double inventoryValue = products.stream()
                .mapToDouble(product ->
                        product.getPrice() * product.getQuantity())
                .sum();

        List<Product> topStockProducts = products.stream()
                .sorted(Comparator.comparing(Product::getQuantity).reversed())
                .limit(5)
                .toList();

        List<Product> lowStockList = products.stream()
                .filter(product -> product.getQuantity() <= 5)
                .toList();

        InventoryReportResponse response = new InventoryReportResponse();

        response.setTotalProducts(totalProducts);
        response.setTotalOrders(totalOrders);
        response.setTotalStock(totalStock);
        response.setLowStockProducts(lowStockProducts);
        response.setOutOfStockProducts(outOfStockProducts);
        response.setInventoryValue(inventoryValue);
        response.setTopStockProducts(topStockProducts);
        response.setLowStockList(lowStockList);

        return response;
    }
}