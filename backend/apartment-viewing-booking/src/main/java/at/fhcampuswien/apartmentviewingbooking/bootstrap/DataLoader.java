package at.fhcampuswien.apartmentviewingbooking.bootstrap;

import at.fhcampuswien.apartmentviewingbooking.model.user.UserDto;
import at.fhcampuswien.apartmentviewingbooking.service.userservice.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private static final String PASSWORD = "test12345678";
    private static final String ENCRYPTED_PASSWORD = "$2a$12$0FK2MEuS8lqNinn9K0hYquoDJUwO3YnTmy.XvtpouOF0sxnphtOTK";

    private final UserService userService;

    public DataLoader(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void run(String... args) {
        loadUsers();
    }


    private void loadUsers() {
        UserDto userDto1 = UserDto.builder()
                .firstName("Mohammad")
                .lastName("Alsalkini")
                .username("malsalkini")
                .email("eng.salkini@hotmail.com")
                .password(PASSWORD)
                .encryptedPassword(ENCRYPTED_PASSWORD)
                .age(32)
                .securityAnswerOne("answer1")
                .securityAnswerTwo("answer2")
                .build();
        userService.createUser(userDto1);
    }
}


