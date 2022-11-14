package at.fhcampuswien.apartmentviewingbooking.model.user;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.List;

@Data
@EqualsAndHashCode
@ToString
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
