package com.inventory.smartinventory.service;


import com.inventory.smartinventory.dto.LoginRequest;
import com.inventory.smartinventory.dto.RegisterRequest;
import com.inventory.smartinventory.entity.User;
import com.inventory.smartinventory.repository.UserRepository;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class AuthService {


    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;



    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {

        this.userRepository = userRepository;

        this.passwordEncoder = passwordEncoder;

    }







    // Register User

    public User register(RegisterRequest request) {



        if(userRepository.existsByEmail(request.getEmail())) {


            throw new RuntimeException(
                    "Email already exists"
            );


        }





        User user = new User();



        user.setName(
                request.getName()
        );


        user.setEmail(
                request.getEmail()
        );



        user.setPassword(

                passwordEncoder.encode(
                        request.getPassword()
                )

        );



        // Database stores USER only

        user.setRole(
                "USER"
        );



        return userRepository.save(user);


    }










    // Login User

    public User login(LoginRequest request) {



        User user = userRepository.findByEmail(

                        request.getEmail()

                )
                .orElseThrow(() ->

                        new RuntimeException(
                                "User not found"
                        )

                );







        if(!passwordEncoder.matches(

                request.getPassword(),

                user.getPassword()

        )) {


            throw new RuntimeException(
                    "Invalid password"
            );


        }






        return user;


    }











    // Get All Users

    public List<User> getAllUsers(){


        return userRepository.findAll();


    }



}