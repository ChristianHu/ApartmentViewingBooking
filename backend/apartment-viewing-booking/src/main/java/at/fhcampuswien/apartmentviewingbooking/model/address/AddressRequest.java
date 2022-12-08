package at.fhcampuswien.apartmentviewingbooking.model.address;

import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Builder
@Data
@EqualsAndHashCode
@ToString
@ApiModel(description = "All details about the Addres requests.")
public class AddressRequest {
    private String street;
    private String buildingNumber;
    private String riseNumber;
    private String flatNumber;
    private String zipCode;
    private String city;
    private String state;
    private String country;
}
