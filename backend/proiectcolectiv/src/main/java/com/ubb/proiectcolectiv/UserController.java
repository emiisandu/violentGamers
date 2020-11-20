package com.ubb.proiectcolectiv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("register")
    public String createUser(@RequestParam String username, @RequestParam String password, @RequestParam String firstName, @RequestParam String lastName, @RequestParam String email){
        System.out.println(username);
        User user = new User(username, password, firstName, lastName, email);
        userRepository.save(user);
        System.out.println(user.getPassword());
        return userRepository.findByName(username) + " Succes! ";
    }

    @GetMapping("log")
    public List<User> getUsers(){
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("login")
    public boolean getUser(@RequestParam String username, @RequestParam String password) {
        return userRepository.findUserPassMatch(username, password) != null;
    }
}
