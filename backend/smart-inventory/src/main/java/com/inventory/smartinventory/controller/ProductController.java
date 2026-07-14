package com.inventory.smartinventory.controller;


import com.inventory.smartinventory.dto.ApiResponse;
import com.inventory.smartinventory.entity.Product;
import com.inventory.smartinventory.service.ProductService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;

import org.springframework.http.ResponseEntity;

import org.springframework.security.access.prepost.PreAuthorize;

import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {



    @Autowired
    private ProductService productService;






    // Get All Products
    @GetMapping
    public ResponseEntity<ApiResponse<List<Product>>> getAllProducts() {


        List<Product> products =
                productService.getAllProducts();



        return ResponseEntity.ok(

                new ApiResponse<>(

                        true,

                        "Products fetched successfully",

                        products

                )

        );

    }








    // Pagination
    @GetMapping("/page")
    public ResponseEntity<Page<Product>> getProductsWithPagination(


            @RequestParam(defaultValue = "0") int page,


            @RequestParam(defaultValue = "5") int size,


            @RequestParam(defaultValue = "id") String sortBy,


            @RequestParam(defaultValue = "asc") String direction


    ) {



        return ResponseEntity.ok(

                productService.getProductsWithPagination(

                        page,

                        size,

                        sortBy,

                        direction

                )

        );


    }









    // Search Product
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<Product>>> searchProducts(


            @RequestParam String keyword


    ) {



        List<Product> products =

                productService.searchProducts(keyword);




        return ResponseEntity.ok(

                new ApiResponse<>(

                        true,

                        "Products fetched successfully",

                        products

                )

        );


    }









    // Get Product By ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Product>> getProductById(


            @PathVariable Long id


    ) {



        Product product =

                productService.getProductById(id);




        return ResponseEntity.ok(

                new ApiResponse<>(

                        true,

                        "Product fetched successfully",

                        product

                )

        );


    }









    // ADD PRODUCT - ADMIN ONLY

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Product>> saveProduct(


            @Valid @RequestBody Product product


    ) {



        Product savedProduct =

                productService.saveProduct(product);




        return ResponseEntity.ok(

                new ApiResponse<>(

                        true,

                        "Product added successfully",

                        savedProduct

                )

        );


    }









    // UPDATE PRODUCT - ADMIN ONLY

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Product>> updateProduct(


            @PathVariable Long id,


            @Valid @RequestBody Product product


    ) {



        Product updatedProduct =

                productService.updateProduct(id, product);




        return ResponseEntity.ok(

                new ApiResponse<>(

                        true,

                        "Product updated successfully",

                        updatedProduct

                )

        );


    }









    // DELETE PRODUCT - ADMIN ONLY

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<String>> deleteProduct(


            @PathVariable Long id


    ) {



        productService.deleteProduct(id);




        return ResponseEntity.ok(

                new ApiResponse<>(

                        true,

                        "Product deleted successfully",

                        "Product deleted successfully"

                )

        );


    }


}