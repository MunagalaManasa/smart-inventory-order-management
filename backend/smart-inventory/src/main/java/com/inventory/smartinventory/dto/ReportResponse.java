package com.inventory.smartinventory.dto;

public class ReportResponse {

    private long totalProducts;
    private long totalOrders;
    private long totalStock;
    private long lowStockProducts;
    private double inventoryValue;

    public ReportResponse() {
    }

    public ReportResponse(long totalProducts,
                          long totalOrders,
                          long totalStock,
                          long lowStockProducts,
                          double inventoryValue) {
        this.totalProducts = totalProducts;
        this.totalOrders = totalOrders;
        this.totalStock = totalStock;
        this.lowStockProducts = lowStockProducts;
        this.inventoryValue = inventoryValue;
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

    public double getInventoryValue() {
        return inventoryValue;
    }

    public void setInventoryValue(double inventoryValue) {
        this.inventoryValue = inventoryValue;
    }
}