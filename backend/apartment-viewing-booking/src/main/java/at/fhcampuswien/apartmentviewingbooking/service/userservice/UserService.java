package at.fhcampuswien.apartmentviewingbooking.service.userservice;

import at.fhcampuswien.apartmentviewingbooking.model.user.UserDto;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;
import java.util.Optional;

public interface UserService extends UserDetailsService {
    UserDto createUser(UserDto userDetails);

    UserDto retrieveUser(long id);

    UserDto updateUser(UserDto userDto);

    boolean deleteUser(long id);

    List<UserDto> retrieveAllUsers();

    UserDto getUserDetailsByEmail(String email);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    public Optional<UserEntity> getUserById(long userId);
}
