package com.ubb.proiectcolectiv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("User")
    public String createUser(@RequestParam String name){
        userRepository.save(new User(name, "parola2"));
        return userRepository.findByName(name) + "Succes!";
    }

    @GetMapping("User")
    public List<User> getUsers(){
        return (List<User>) userRepository.findAll();
    }

}
