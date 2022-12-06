package at.fhcampuswien.apartmentviewingbooking.model.flat;

import at.fhcampuswien.apartmentviewingbooking.model.address.Address;
import at.fhcampuswien.apartmentviewingbooking.model.address.AddressRequest;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode
@ToString
@ApiModel(description = "All details about the flat requests.")
public class FlatRequest {

    private double size;
    private double price;
    private String description;
    private AddressRequest address;

}
