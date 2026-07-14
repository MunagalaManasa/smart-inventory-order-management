package com.inventory.smartinventory.controller;

import com.inventory.smartinventory.dto.ApiResponse;
import com.inventory.smartinventory.dto.InventoryReportResponse;
import com.inventory.smartinventory.service.ReportService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reports")
@CrossOrigin(origins = "*")
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    @GetMapping("/inventory")
    public ResponseEntity<ApiResponse<InventoryReportResponse>> getInventoryReport() {

        InventoryReportResponse report = reportService.getInventoryReport();

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Inventory report generated successfully",
                        report
                )
        );
    }
}