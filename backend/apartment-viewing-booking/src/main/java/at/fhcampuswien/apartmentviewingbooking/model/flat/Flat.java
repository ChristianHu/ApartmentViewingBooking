package at.fhcampuswien.apartmentviewingbooking.model.flat;

import at.fhcampuswien.apartmentviewingbooking.model.address.Address;
import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import at.fhcampuswien.apartmentviewingbooking.model.comment.Comment;
import at.fhcampuswien.apartmentviewingbooking.model.flatBookingTime.FlatBookingTime;
import at.fhcampuswien.apartmentviewingbooking.model.image.FlatImage;
import io.swagger.annotations.ApiModel;
import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Builder
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "flats")
@ApiModel(description = "All details about the flats.")
public class Flat implements Serializable {

    @Serial
    private static final long serialVersionUID = 668956139953104079L;

    @Id
    @Column(name = "flat_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double size;
    private double price;
    private double numberOfRooms;
    private String description;
    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(mappedBy = "flat")
    private List<FlatImage> images;
    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(mappedBy = "flat")
    private List<Booking> bookings;
    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(mappedBy = "flat")
    private List<Comment> comments;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "flat_id", referencedColumnName = "address_id")
    private Address address;

    @LazyCollection(LazyCollectionOption.FALSE)
    @OneToMany(mappedBy = "flat")
    private List<FlatBookingTime> avaiableBookingTimes;
}
