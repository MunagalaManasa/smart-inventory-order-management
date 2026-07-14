package com.inventory.smartinventory.service;


import com.inventory.smartinventory.entity.Order;
import com.inventory.smartinventory.entity.Product;
import com.inventory.smartinventory.exception.ResourceNotFoundException;
import com.inventory.smartinventory.repository.OrderRepository;
import com.inventory.smartinventory.repository.ProductRepository;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class OrderService {



    private static final Logger logger =
            LoggerFactory.getLogger(OrderService.class);



    private final OrderRepository orderRepository;

    private final ProductRepository productRepository;





    public OrderService(
            OrderRepository orderRepository,
            ProductRepository productRepository
    ) {

        this.orderRepository = orderRepository;

        this.productRepository = productRepository;

    }









    // Create Order
    public Order createOrder(Order order) {



        logger.info(
                "Creating order for customer {}",
                order.getCustomerName()
        );



        Product product =

                productRepository.findById(order.getProductId())

                        .orElseThrow(() ->

                                new ResourceNotFoundException(
                                        "Product not found"
                                )

                        );






        if(product.getQuantity() < order.getQuantity()) {


            throw new RuntimeException(
                    "Insufficient stock"
            );


        }







        int remainingQuantity =

                product.getQuantity()
                        - order.getQuantity();





        product.setQuantity(
                remainingQuantity
        );




        updateStockStatus(product);



        productRepository.save(product);







        order.setProductName(
                product.getName()
        );



        order.setTotalPrice(
                product.getPrice() * order.getQuantity()
        );


        if (order.getStatus() == null || order.getStatus().isBlank()) {

            order.setStatus("PENDING");

        }





        return orderRepository.save(order);


    }









    // Get All Orders
    public List<Order> getAllOrders(){


        return orderRepository.findAll();


    }









    // Get Order By ID
    public Order getOrderById(Long id){



        return orderRepository.findById(id)

                .orElseThrow(() ->

                        new ResourceNotFoundException(

                                "Order not found with id : " + id

                        )

                );


    }









    // Update Order
    public Order updateOrder(

            Long id,

            Order order

    ){



        Order existingOrder =

                getOrderById(id);







        Product product =

                productRepository.findById(order.getProductId())

                        .orElseThrow(() ->

                                new ResourceNotFoundException(

                                        "Product not found"

                                )

                        );







        existingOrder.setCustomerName(

                order.getCustomerName()

        );





        existingOrder.setProductId(

                product.getId()

        );





        existingOrder.setProductName(

                product.getName()

        );





        existingOrder.setQuantity(

                order.getQuantity()

        );





        existingOrder.setTotalPrice(

                product.getPrice()
                        * order.getQuantity()

        );




        existingOrder.setStatus(

                order.getStatus()

        );



        return orderRepository.save(existingOrder);


    }









    // Delete Order and Restore Stock
    public void deleteOrder(Long id){





        Order existingOrder =

                getOrderById(id);








        Product product =

                productRepository.findById(
                                existingOrder.getProductId()
                        )

                        .orElseThrow(() ->

                                new ResourceNotFoundException(

                                        "Product not found"

                                )

                        );








        // Restore stock
        int updatedQuantity =

                product.getQuantity()
                        + existingOrder.getQuantity();





        product.setQuantity(
                updatedQuantity
        );







        updateStockStatus(product);




        productRepository.save(product);






        orderRepository.delete(existingOrder);



    }









    // Update Stock Status
    private void updateStockStatus(Product product){



        if(product.getQuantity() <= 0){


            product.setStockStatus(
                    "OUT_OF_STOCK"
            );


        }

        else if(product.getQuantity() <= 5){


            product.setStockStatus(
                    "LOW_STOCK"
            );


        }

        else{


            product.setStockStatus(
                    "IN_STOCK"
            );


        }


    }



}