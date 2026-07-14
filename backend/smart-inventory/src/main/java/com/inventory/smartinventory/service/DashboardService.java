package com.inventory.smartinventory.service;

import com.inventory.smartinventory.dto.DashboardResponse;
import com.inventory.smartinventory.entity.Product;
import com.inventory.smartinventory.repository.ProductRepository;
import com.inventory.smartinventory.repository.OrderRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {


    private final ProductRepository productRepository;
    private final OrderRepository orderRepository;



    public DashboardService(
            ProductRepository productRepository,
            OrderRepository orderRepository
    ) {

        this.productRepository = productRepository;
        this.orderRepository = orderRepository;

    }




    public DashboardResponse getDashboardData() {


        List<Product> products = productRepository.findAll();



        long totalProducts = products.size();



        long totalStock = products.stream()
                .mapToLong(Product::getQuantity)
                .sum();



        List<Product> lowStockList = products.stream()
                .filter(product -> product.getQuantity() < 10)
                .toList();



        long lowStockProducts = lowStockList.size();




        DashboardResponse response = new DashboardResponse();



        response.setTotalProducts(totalProducts);

        response.setTotalOrders(orderRepository.count());

        response.setTotalStock(totalStock);

        response.setLowStockProducts(lowStockProducts);



        // Recent Products
        response.setRecentProducts(
                products.stream()
                        .limit(5)
                        .toList()
        );



        // Recent Orders
        response.setRecentOrders(
                orderRepository.findAll()
                        .stream()
                        .limit(5)
                        .toList()
        );



        // Low Stock Products
        response.setLowStockList(lowStockList);



        return response;

    }

}