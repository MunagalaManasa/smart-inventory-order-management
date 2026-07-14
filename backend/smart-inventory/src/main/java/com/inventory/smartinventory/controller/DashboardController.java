package com.inventory.smartinventory.controller;

import com.inventory.smartinventory.dto.DashboardResponse;
import com.inventory.smartinventory.service.DashboardService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    private static final Logger logger =
            LoggerFactory.getLogger(DashboardController.class);

    private final DashboardService dashboardService;


    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }


    @GetMapping
    public DashboardResponse getDashboard() {

        logger.info("Fetching dashboard data");

        return dashboardService.getDashboardData();
    }
}