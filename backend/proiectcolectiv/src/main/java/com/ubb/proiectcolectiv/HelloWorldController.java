package com.ubb.proiectcolectiv;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @RequestMapping(method= RequestMethod.GET, path="/")
    public String helloWorld(){
        return "hello world";
    }
}
