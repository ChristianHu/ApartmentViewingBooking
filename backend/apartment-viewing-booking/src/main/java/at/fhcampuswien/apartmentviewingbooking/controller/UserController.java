package at.fhcampuswien.apartmentviewingbooking.controller;

import at.fhcampuswien.apartmentviewingbooking.model.user.UserDto;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserRequestModel;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserResponseModel;
import at.fhcampuswien.apartmentviewingbooking.service.userservice.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/apartment/users")
public class UserController {

    private final UserService userService;
    private final ModelMapper modelMapper;

    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UserResponseModel>> retrieveAllUsers(@RequestParam(value = "page", defaultValue = "1") int page, @RequestParam(value = "limit", defaultValue = "50") int limit, @RequestParam(value = "sort", defaultValue = "desc", required = false) String sort) {
        List<UserResponseModel> users = userService.retrieveAllUsers().stream().map(userDto -> modelMapper.map(userDto, UserResponseModel.class)).collect(Collectors.toList());
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping(path = "/{userId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserResponseModel> retrieveUser(@PathVariable long userId) {
        UserDto userDto = userService.retrieveUser(userId);
        if (userDto != null) {
            UserResponseModel returnedUserInfo = modelMapper.map(userDto, UserResponseModel.class);
            return new ResponseEntity<>(returnedUserInfo, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserResponseModel> createUser(@Valid @RequestBody UserRequestModel userDetails) {
        UserDto userDto = modelMapper.map(userDetails, UserDto.class);
        UserDto createdUser = userService.createUser(userDto);

        UserResponseModel returnedUserInfo = modelMapper.map(createdUser, UserResponseModel.class);
        return new ResponseEntity<>(returnedUserInfo, HttpStatus.CREATED);
    }

    @PutMapping(path = "/{userId}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserResponseModel> updateUser(@PathVariable long userId, @Valid @RequestBody UserRequestModel updatedUser) {
        UserDto userDto = userService.retrieveUser(userId);
        if (userDto != null) {
            UserDto updatedUserDto = modelMapper.map(updatedUser, UserDto.class);
            userService.updateUser(updatedUserDto);
            UserResponseModel returnedUserInfo = modelMapper.map(updatedUserDto, UserResponseModel.class);
            return new ResponseEntity<>(returnedUserInfo, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping(path = "/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable long userId) {
        boolean isUserDeleted = userService.deleteUser(userId);
        return isUserDeleted ? new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

