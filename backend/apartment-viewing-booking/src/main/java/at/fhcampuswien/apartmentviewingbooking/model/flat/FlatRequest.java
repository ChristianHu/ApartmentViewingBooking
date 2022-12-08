package at.fhcampuswien.apartmentviewingbooking.model.flat;

import at.fhcampuswien.apartmentviewingbooking.model.address.AddressRequest;
import io.swagger.annotations.ApiModel;
import lombok.*;

@Builder
@Setter
@Getter
@EqualsAndHashCode
@ApiModel(description = "All details about the flat requests.")
public class FlatRequest {

    private double size;
    private double price;
    private String description;
    private AddressRequest address;
    private double numberOfRooms;

}
