package com.company.aismart.controller;

import com.company.aismart.model.User;
import com.company.aismart.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // ✅ PUBLIC HEALTH CHECK
    @GetMapping("/health")
    public String health() {
        return "User API is working 🚀";
    }

    // ✅ ADMIN: GET ALL USERS
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // ✅ ADMIN: CREATE USER
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
