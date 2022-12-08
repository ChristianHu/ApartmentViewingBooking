package at.fhcampuswien.apartmentviewingbooking.model.address;

import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import io.swagger.annotations.ApiModel;
import lombok.*;

import javax.persistence.*;

@Builder
@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Table(name = "addresses")
@ApiModel(description = "All details about the Address.")
public class Address {

    @Id
    @Column(name = "address_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String street;
    private String buildingNumber;
    private String riseNumber;
    private String flatNumber;
    private String zipCode;
    private String city;
    private String state;
    private String country;
//    @OneToOne(mappedBy = "address")
//    private Flat flat;
}
