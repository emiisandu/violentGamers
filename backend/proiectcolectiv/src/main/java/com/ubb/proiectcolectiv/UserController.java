package com.ubb.proiectcolectiv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("register")
    public String createUser(@RequestBody User user){
        userRepository.save(user);
        return userRepository.findByName(user.getUsername()) + " Succes! ";
    }
//    @PostMapping("register")
//    //cu @RequestBody
//    public String createUser(@RequestParam String username, @RequestParam String password, @RequestParam String firstName, @RequestParam String lastName, @RequestParam String email){
//        System.out.println(username);
//        User user = new User(username, password, firstName, lastName, email);
//        userRepository.save(user);
//        System.out.println(user.getPassword());
//        return userRepository.findByName(username) + " Succes! ";
//    }

    @GetMapping("log")
    public List<User> getUsers(){
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("login")
    public boolean getUser(@RequestParam String email, @RequestParam String password) {
        System.out.println("Login Reached!");
        return userRepository.findDistinctByEmailAndPassword(email, password) != null;
    }
    @GetMapping("getNameByEmail")
    public String getName(@RequestParam String email) {
        System.out.println("Get Name Reached!");
        System.out.println(userRepository.findDistinctByEmail(email));
        return userRepository.findDistinctByEmail(email);
    }
}
