package at.fhcampuswien.apartmentviewingbooking.model.user;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginRequestModel {

    private String username;
    private String password;
}
