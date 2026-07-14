package com.inventory.smartinventory.dto;

import com.inventory.smartinventory.entity.Product;

import java.util.List;

public class InventoryReportResponse {

    private long totalProducts;
    private long totalOrders;
    private long totalStock;
    private long lowStockProducts;
    private long outOfStockProducts;

    private double inventoryValue;

    private List<Product> topStockProducts;
    private List<Product> lowStockList;

    public InventoryReportResponse() {
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

    public long getOutOfStockProducts() {
        return outOfStockProducts;
    }

    public void setOutOfStockProducts(long outOfStockProducts) {
        this.outOfStockProducts = outOfStockProducts;
    }

    public double getInventoryValue() {
        return inventoryValue;
    }

    public void setInventoryValue(double inventoryValue) {
        this.inventoryValue = inventoryValue;
    }

    public List<Product> getTopStockProducts() {
        return topStockProducts;
    }

    public void setTopStockProducts(List<Product> topStockProducts) {
        this.topStockProducts = topStockProducts;
    }

    public List<Product> getLowStockList() {
        return lowStockList;
    }

    public void setLowStockList(List<Product> lowStockList) {
        this.lowStockList = lowStockList;
    }
}