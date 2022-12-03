package at.fhcampuswien.apartmentviewingbooking.model.user;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import at.fhcampuswien.apartmentviewingbooking.model.comment.Comment;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@ToString
@Data
@Entity
@Table(name = "users")
@ApiModel(description = "All details about the users.")
public class UserEntity implements Serializable {

    @Serial
    private static final long serialVersionUID = 4591151865180299846L;

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 50)
    private String firstName;
    @Column(nullable = false, length = 50)
    private String lastName;
    @Column(nullable = false, length = 20)
    private String username;
    @Email(message = "Email is not valid", regexp = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])")
    @Column(nullable = false, length = 120, unique = true)
    private String email;
    @Column(nullable = false)
    private int age;
    @Column(nullable = false)
    private String encryptedPassword;
    @Column(nullable = false)
    private String securityAnswerOne;
    @Column(nullable = false)
    private String securityAnswerTwo;
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Booking> bookings;
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Comment> comments;


}
