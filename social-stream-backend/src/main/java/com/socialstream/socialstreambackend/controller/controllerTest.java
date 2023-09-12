package com.socialstream.socialstreambackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class controllerTest {
    @GetMapping("/")
    public  String getTest(){
        return "test";
    }
}
