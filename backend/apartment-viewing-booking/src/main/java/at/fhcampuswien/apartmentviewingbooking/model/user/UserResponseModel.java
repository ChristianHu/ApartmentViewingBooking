package at.fhcampuswien.apartmentviewingbooking.model.user;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@EqualsAndHashCode
public class UserResponseModel {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String username;
    private int age;
    private String securityAnswerOne;
    private String securityAnswerTwo;
    private List<Booking> bookings;
}
