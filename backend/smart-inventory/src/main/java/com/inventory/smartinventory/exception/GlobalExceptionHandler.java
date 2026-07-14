package com.inventory.smartinventory.exception;


import com.inventory.smartinventory.dto.ApiResponse;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;



@RestControllerAdvice
public class GlobalExceptionHandler {



    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse<String>> handleResourceNotFound(
            ResourceNotFoundException exception
    ){


        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)

                .body(

                        new ApiResponse<>(

                                false,

                                exception.getMessage(),

                                null

                        )

                );


    }






    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiResponse<String>> handleRuntimeException(
            RuntimeException exception
    ){


        return ResponseEntity

                .status(HttpStatus.BAD_REQUEST)

                .body(

                        new ApiResponse<>(

                                false,

                                exception.getMessage(),

                                null

                        )

                );


    }



}