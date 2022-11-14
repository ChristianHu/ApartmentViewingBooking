package at.fhcampuswien.apartmentviewingbooking.service.userservice;

import at.fhcampuswien.apartmentviewingbooking.model.user.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    UserDto createUser(UserDto userDetails);

    UserDto retrieveUser(long id);

    UserDto updateUser(UserDto userDto);

    boolean deleteUser(long id);

    List<UserDto> retrieveAllUsers();

    UserDto getUserDetailsByEmail(String email);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
}
