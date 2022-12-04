package at.fhcampuswien.apartmentviewingbooking.model.booking;

import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.model.image.CodeImage;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotNull;
import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Builder
@ToString
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "bookings")
@ApiModel(description = "All details about the Bookings.")
public class Booking implements Serializable {

    @Serial
    private static final long serialVersionUID = 7666233528166201612L;

    @Id
    @Column(name = "booking_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @FutureOrPresent
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ssZ", shape = JsonFormat.Shape.STRING)
    private LocalDateTime startRentingDate;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "booking_id", referencedColumnName = "codeImage_id")
    private CodeImage codeImage;


    @NotNull(message = "Unknown User")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flat_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Flat flat;
}

