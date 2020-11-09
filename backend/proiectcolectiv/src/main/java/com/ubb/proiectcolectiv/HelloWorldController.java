package com.ubb.proiectcolectiv;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @RequestMapping(method= RequestMethod.GET, path="/")
    public String helloWorld(){
        return "hello world";
    }

    @PostMapping(path = "/test-post")
    public String testMethod(@RequestBody User user) {
        return user.getUsername();
    }

}

