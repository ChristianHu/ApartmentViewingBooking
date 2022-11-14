package at.fhcampuswien.apartmentviewingbooking.model.user;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@EqualsAndHashCode
@ToString
public class UserRequestModel {
    @NotNull(message = "First name cannot be null")
    @Size(min = 2, message = "First name must not be less than two characters")
    private String firstName;

    @NotNull(message = "Last name cannot be null")
    @Size(min = 2, message = "Last name must not be less than two characters")
    private String lastName;

    @NotNull(message = "Password cannot be null")
    @Size(min = 8, max = 16, message = "Password must be equal or greater than eight characters and less than 16 characters")
    private String password;

    @NotNull(message = "Last name cannot be null")
    @Size(min = 3, message = "Username must not be less than three characters")
    private String username;


    @NotNull(message = "Email cannot be null")
    @Email(message = "Email is not valid", regexp = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])")
    private String email;

    @NotNull(message = "Age cannot be null")
    @Size(min = 18, max = 99, message = "Age must be between 18 and 99")
    private int age;

    @NotNull(message = "security answer one cannot be null")
    private String securityAnswerOne;

    @NotNull(message = "security answer two cannot be null")
    private String securityAnswerTwo;
}
