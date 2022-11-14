package at.fhcampuswien.apartmentviewingbooking.model.image;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import lombok.*;

import javax.persistence.*;

@Builder
@Data
@ToString
@Entity
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "codeImages")
public class CodeImage {
    @Id
    @Column(name = "codeImage_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image", unique = false, nullable = false, length = 100000)
    private byte[] image;

    @OneToOne(mappedBy = "codeImage")
    private Booking booking;

}
