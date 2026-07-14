package com.inventory.smartinventory.controller;


import com.inventory.smartinventory.dto.AuthResponse;
import com.inventory.smartinventory.dto.LoginRequest;
import com.inventory.smartinventory.dto.RegisterRequest;
import com.inventory.smartinventory.entity.User;
import com.inventory.smartinventory.security.JwtService;
import com.inventory.smartinventory.service.AuthService;


import jakarta.validation.Valid;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;



@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {



    private final AuthService authService;

    private final JwtService jwtService;



    public AuthController(
            AuthService authService,
            JwtService jwtService
    ){

        this.authService = authService;

        this.jwtService = jwtService;

    }







    // Register User

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @Valid @RequestBody RegisterRequest request
    ){


        try{


            User savedUser = authService.register(request);


            return ResponseEntity.ok(savedUser);


        }
        catch(RuntimeException e){


            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());


        }


    }









    // Login User

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @Valid @RequestBody LoginRequest request
    ){


        try{


            User user = authService.login(request);



            String token = jwtService.generateToken(
                    user.getEmail()
            );





            return ResponseEntity.ok(

                    new AuthResponse(

                            token,

                            user.getName(),

                            user.getEmail(),

                            user.getRole()

                    )

            );



        }
        catch(RuntimeException e){


            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());


        }


    }










    // Get All Users

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){


        return ResponseEntity.ok(

                authService.getAllUsers()

        );


    }



}