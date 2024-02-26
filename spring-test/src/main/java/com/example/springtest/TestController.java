package com.example.springtest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/students")
public class TestController {

    @Value("${message.welcome}")
    private String welcomeMessage;


    @GetMapping
    public List<Student> test(){
        return Arrays.asList(
                new Student(1, "prabesh", new Department(1, "d1"), "image1"),
                new Student(2, "prabin", new Department(2, "d2"), "image2"),
                new Student(3, "rajes", new Department(3,  "d3"), "image3")
        );

    }

    @GetMapping("/no")
    public String noTest(){
        return welcomeMessage;
    }
}
