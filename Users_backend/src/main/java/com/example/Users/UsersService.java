package com.example.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    private MongoTemplate mongoTemplate;

    public List<Users> allUsers(){
        System.out.println(usersRepository.findAll().toString());
        return usersRepository.findAll();
    }

    public List<Users> findByUsername(String username) {
        System.out.println(usersRepository.findUserByUsername(username));
        return usersRepository.findUserByUsername(username);
    }

    public Users CreateNewUser(String username,String email,String password) {

        return usersRepository.insert(new Users(username,email,password));

    }
}
