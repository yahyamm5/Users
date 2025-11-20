package com.example.Users;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/v1/User")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @GetMapping()
    public ResponseEntity<List<Users>> getAllUsers(){
        return new ResponseEntity<List<Users>>(usersService.allUsers(), HttpStatus.OK);
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<List<Users>> getUserByUsernames(@PathVariable String username) {
        return new ResponseEntity<List<Users>>(usersService.findByUsername(username), HttpStatus.OK);

    }

    @PostMapping("/create")
    public ResponseEntity<Users> createUser(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Users>(usersService.CreateNewUser(payload.get("username"), payload.get("email"), payload.get("password")), HttpStatus.CREATED);
    }
}
