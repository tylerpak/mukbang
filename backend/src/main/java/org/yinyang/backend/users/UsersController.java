package org.yinyang.backend.users;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/save")
    public ResponseEntity<Users> createUser(@RequestBody CreateUserRequest request) {
        return ResponseEntity.ok(usersService.save(request.email()));
    }

}
