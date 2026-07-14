package com.inventory.smartinventory.service;


import com.inventory.smartinventory.entity.Product;
import com.inventory.smartinventory.exception.ResourceNotFoundException;
import com.inventory.smartinventory.repository.ProductRepository;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;


import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class ProductService {



    private static final Logger logger =
            LoggerFactory.getLogger(ProductService.class);



    private final ProductRepository productRepository;





    public ProductService(ProductRepository productRepository) {

        this.productRepository = productRepository;

    }









    // Get All Products
    public List<Product> getAllProducts() {


        logger.info("Fetching all products");


        return productRepository.findAll();


    }









    // Pagination & Sorting
    public Page<Product> getProductsWithPagination(

            int page,

            int size,

            String sortBy,

            String direction

    ) {



        logger.info(
                "Fetching products page {}",
                page
        );



        Sort sort = direction.equalsIgnoreCase("desc")

                ? Sort.by(sortBy).descending()

                : Sort.by(sortBy).ascending();





        Pageable pageable =

                PageRequest.of(
                        page,
                        size,
                        sort
                );




        return productRepository.findAll(pageable);


    }









    // Get Product By ID
    public Product getProductById(Long id) {



        logger.info(
                "Fetching product with id {}",
                id
        );



        return productRepository.findById(id)

                .orElseThrow(() ->

                        new ResourceNotFoundException(

                                "Product not found with id : " + id

                        )

                );


    }









    // Add Product
    public Product saveProduct(Product product) {



        logger.info(
                "Saving product {}",
                product.getName()
        );



        updateStockStatus(product);



        return productRepository.save(product);


    }









    // Update Product
    public Product updateProduct(

            Long id,

            Product product

    ) {



        logger.info(
                "Updating product {}",
                id
        );



        Product existingProduct =

                productRepository.findById(id)

                        .orElseThrow(() ->

                                new ResourceNotFoundException(

                                        "Product not found with id : " + id

                                )

                        );






        existingProduct.setName(
                product.getName()
        );



        existingProduct.setDescription(
                product.getDescription()
        );



        existingProduct.setCategory(
                product.getCategory()
        );



        existingProduct.setPrice(
                product.getPrice()
        );



        existingProduct.setQuantity(
                product.getQuantity()
        );





        updateStockStatus(existingProduct);




        return productRepository.save(existingProduct);


    }









    // Automatic Stock Status
    private void updateStockStatus(Product product) {



        if(product.getQuantity() == null ||

                product.getQuantity() <= 0) {



            product.setStockStatus(
                    "OUT_OF_STOCK"
            );


        }

        else if(product.getQuantity() <= 5) {



            product.setStockStatus(
                    "LOW_STOCK"
            );


        }

        else {



            product.setStockStatus(
                    "IN_STOCK"
            );


        }


    }









    // Delete Product
    public void deleteProduct(Long id) {



        logger.info(
                "Deleting product {}",
                id
        );



        Product product =

                productRepository.findById(id)

                        .orElseThrow(() ->

                                new ResourceNotFoundException(

                                        "Product not found with id : " + id

                                )

                        );



        productRepository.delete(product);


    }









    // Search Products
    public List<Product> searchProducts(

            String keyword

    ) {



        logger.info(
                "Searching products {}",
                keyword
        );



        return productRepository
                .findByNameContainingIgnoreCase(keyword);


    }









    // Count Low Stock Products
    public long countLowStockProducts() {



        return productRepository

                .countByQuantityLessThanEqual(5);


    }



}