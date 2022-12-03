package at.fhcampuswien.apartmentviewingbooking.model.image;

import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Builder
@Data
@ToString
@Entity
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "flatImages")
@ApiModel(description = "All details about the flat images.")
public class FlatImage {

    @Id
    @Column(name = "flatImage_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image", unique = false, nullable = false, length = 100000)
    private byte[] image;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "flat_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Flat flat;
}
