package com.inventory.smartinventory.controller;

import com.inventory.smartinventory.dto.ApiResponse;
import com.inventory.smartinventory.entity.Category;
import com.inventory.smartinventory.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    // Get all categories
    @GetMapping
    public ResponseEntity<ApiResponse<List<Category>>> getAllCategories() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Categories fetched successfully",
                        categoryService.getAllCategories()
                )
        );
    }

    // Get category by ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Category>> getCategoryById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Category fetched successfully",
                        categoryService.getCategoryById(id)
                )
        );
    }

    // Add category
    @PostMapping
    public ResponseEntity<ApiResponse<Category>> saveCategory(
            @RequestBody Category category) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Category added successfully",
                        categoryService.saveCategory(category)
                )
        );
    }

    // Update category
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Category>> updateCategory(
            @PathVariable Long id,
            @RequestBody Category category) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Category updated successfully",
                        categoryService.updateCategory(id, category)
                )
        );
    }

    // Delete category
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteCategory(
            @PathVariable Long id) {

        categoryService.deleteCategory(id);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        true,
                        "Category deleted successfully",
                        "Category deleted successfully."
                )
        );
    }
}