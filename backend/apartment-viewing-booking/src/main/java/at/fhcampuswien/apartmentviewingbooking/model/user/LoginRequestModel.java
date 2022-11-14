package at.fhcampuswien.apartmentviewingbooking.model.user;

import lombok.Data;

@Data
public class LoginRequestModel {

    private String username;
    private String password;
}
