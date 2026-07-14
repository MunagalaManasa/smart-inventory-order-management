package com.inventory.smartinventory.dto;

import com.inventory.smartinventory.entity.Order;
import com.inventory.smartinventory.entity.Product;

import java.util.List;

public class DashboardResponse {

    private long totalProducts;
    private long totalOrders;
    private long totalStock;
    private long lowStockProducts;

    private List<Order> recentOrders;
    private List<Product> recentProducts;
    private List<Product> lowStockList;


    public DashboardResponse() {
    }


    public long getTotalProducts() {
        return totalProducts;
    }

    public void setTotalProducts(long totalProducts) {
        this.totalProducts = totalProducts;
    }


    public long getTotalOrders() {
        return totalOrders;
    }

    public void setTotalOrders(long totalOrders) {
        this.totalOrders = totalOrders;
    }


    public long getTotalStock() {
        return totalStock;
    }

    public void setTotalStock(long totalStock) {
        this.totalStock = totalStock;
    }


    public long getLowStockProducts() {
        return lowStockProducts;
    }

    public void setLowStockProducts(long lowStockProducts) {
        this.lowStockProducts = lowStockProducts;
    }


    public List<Order> getRecentOrders() {
        return recentOrders;
    }

    public void setRecentOrders(List<Order> recentOrders) {
        this.recentOrders = recentOrders;
    }


    public List<Product> getRecentProducts() {
        return recentProducts;
    }

    public void setRecentProducts(List<Product> recentProducts) {
        this.recentProducts = recentProducts;
    }


    public List<Product> getLowStockList() {
        return lowStockList;
    }

    public void setLowStockList(List<Product> lowStockList) {
        this.lowStockList = lowStockList;
    }


    // Constructor for DashboardService
    public DashboardResponse(
            long totalProducts,
            long totalOrders,
            long totalStock,
            long lowStockProducts,
            List<Order> recentOrders,
            List<Product> recentProducts,
            List<Product> lowStockList
    ) {
        this.totalProducts = totalProducts;
        this.totalOrders = totalOrders;
        this.totalStock = totalStock;
        this.lowStockProducts = lowStockProducts;
        this.recentOrders = recentOrders;
        this.recentProducts = recentProducts;
        this.lowStockList = lowStockList;
    }
}