package com.company.aismart.service;

import com.company.aismart.model.User;
import java.util.List;

public interface UserService {
    User createUser(User user);
    List<User> getAllUsers();
}
