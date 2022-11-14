package at.fhcampuswien.apartmentviewingbooking.model.user;


import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import at.fhcampuswien.apartmentviewingbooking.model.comment.Comment;
import lombok.*;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class UserDto implements Serializable {

    @Serial
    private static final long serialVersionUID = -3689788622855269036L;
    private long id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String encryptedPassword;
    private String email;
    private int age;
    private String securityAnswerOne;
    private String securityAnswerTwo;
    private List<Comment> comments;
    private List<Booking> bookings;
}
