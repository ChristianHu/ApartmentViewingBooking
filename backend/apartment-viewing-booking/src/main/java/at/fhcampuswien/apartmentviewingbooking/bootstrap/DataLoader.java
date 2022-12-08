package at.fhcampuswien.apartmentviewingbooking.bootstrap;

import at.fhcampuswien.apartmentviewingbooking.model.address.AddressRequest;
import at.fhcampuswien.apartmentviewingbooking.model.flat.FlatRequest;
import at.fhcampuswien.apartmentviewingbooking.model.flatBookingTime.FlatBookingTime;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserDto;
import at.fhcampuswien.apartmentviewingbooking.service.FlatBookingTimesService.FlatBookingTimesService;
import at.fhcampuswien.apartmentviewingbooking.service.flatservice.FlatService;
import at.fhcampuswien.apartmentviewingbooking.service.userservice.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class DataLoader implements CommandLineRunner {

    private static final String PASSWORD = "test12345678";
    private static final String ENCRYPTED_PASSWORD = "$2a$12$0FK2MEuS8lqNinn9K0hYquoDJUwO3YnTmy.XvtpouOF0sxnphtOTK";

    private final UserService userService;
    private final FlatService flatService;
    private final FlatBookingTimesService flatBookingTimesService;

    private static FlatRequest flat1, flat2, flat3, flat4, flat5, flat6, flat7, flat8, flat9, flat10;
    private static DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

    public DataLoader(UserService userService, FlatService flatService, FlatBookingTimesService flatBookingTimesService) {
        this.userService = userService;
        this.flatService = flatService;
        this.flatBookingTimesService = flatBookingTimesService;
    }

    @Override
    public void run(String... args) {
        loadUsers();
        loadAddresses();
    }


    private void loadUsers() {
        UserDto userDto1 = UserDto.builder()
                .firstName("Mohammad")
                .lastName("Alsalkini")
                .username("malsalkini")
                .email("eng.salkini@hotmail.com")
                .password(PASSWORD)
                .encryptedPassword(ENCRYPTED_PASSWORD)
                .age(32)
                .securityAnswerOne("answer1")
                .securityAnswerTwo("answer2")
                .build();
        userService.createUser(userDto1);
    }

    private void loadAddresses() {
        AddressRequest address1 = AddressRequest.builder()
                .buildingNumber("1")
                .city("Vienna")
                .country("Austria")
                .flatNumber("4")
                .riseNumber("2")
                .state("Vienna")
                .street("linke-bahn")
                .zipCode("1234")
                .build();
        flat1 = FlatRequest.builder()
                .description("nothing")
                .price(1000)
                .size(68)
                .numberOfRooms(2)
                .address(address1)
                .build();

        AddressRequest address2 = AddressRequest.builder()
                .buildingNumber("3")
                .city("Linz")
                .country("Austria")
                .flatNumber("5")
                .riseNumber("4")
                .state("Upper Austria")
                .street("Friedhofstrasse")
                .zipCode("4321")
                .build();
        flat2 = FlatRequest.builder()
                .description("Beautiful house with big balcony!")
                .price(1500)
                .size(90)
                .numberOfRooms(4)
                .address(address2)
                .build();

        AddressRequest address3 = AddressRequest.builder()
                .buildingNumber("5")
                .city("Graz")
                .country("Austria")
                .flatNumber("7")
                .riseNumber("6")
                .state("Styria")
                .street("Grazer Strasse")
                .zipCode("5678")
                .build();
        flat3 = FlatRequest.builder()
                .description("Modern apartment with great view!")
                .price(1200)
                .size(75)
                .numberOfRooms(3)
                .address(address3)
                .build();

        AddressRequest address4 = AddressRequest.builder()
                .buildingNumber("7")
                .city("Klagenfurt")
                .country("Austria")
                .flatNumber("9")
                .riseNumber("8")
                .state("Carinthia")
                .street("Rudolfstrasse")
                .zipCode("8765")
                .build();
        flat4 = FlatRequest.builder()
                .description("Spacious flat with garden!")
                .price(1500)
                .size(65)
                .numberOfRooms(2)
                .address(address4)
                .build();

        AddressRequest address5 = AddressRequest.builder()
                .buildingNumber("9")
                .city("Innsbruck")
                .country("Austria")
                .flatNumber("11")
                .riseNumber("10")
                .state("Tyrol")
                .street("Innsbrucker Strasse")
                .zipCode("7654")
                .build();
        flat5 = FlatRequest.builder()
                .description("Spacious flat with big bedroom!")
                .price(1400)
                .size(85)
                .numberOfRooms(3)
                .address(address5)
                .build();

        AddressRequest address6 = AddressRequest.builder()
                .buildingNumber("11")
                .city("Dornbirn")
                .country("Austria")
                .flatNumber("13")
                .riseNumber("12")
                .state("Vorarlberg")
                .street("Dornbirner Strasse")
                .zipCode("5432")
                .build();
        flat6 = FlatRequest.builder()
                .description("Quiet flat with spacious balcony!")
                .price(1000)
                .size(75)
                .numberOfRooms(3)
                .address(address6)
                .build();

        AddressRequest address7 = AddressRequest.builder()
                .buildingNumber("1")
                .city("Salzburg")
                .country("Austria")
                .flatNumber("15")
                .riseNumber("14")
                .state("Salzburg")
                .street("Salzburger Strasse")
                .zipCode("3210")
                .build();
        flat7 = FlatRequest.builder()
                .description("Nice flat with modern kitchen!")
                .price(1200)
                .size(80)
                .numberOfRooms(3)
                .address(address7)
                .build();

        AddressRequest address8 = AddressRequest.builder()
                .buildingNumber("15")
                .city("St. Pölten")
                .country("Austria")
                .flatNumber("17")
                .riseNumber("16")
                .state("Lower Austria")
                .street("St. Pöltener Strasse")
                .zipCode("2109")
                .build();
        flat8 = FlatRequest.builder()
                .description("Bright flat with garden!")
                .price(1300)
                .size(75)
                .numberOfRooms(3)
                .address(address8)
                .build();

        AddressRequest address9 = AddressRequest.builder()
                .buildingNumber("17")
                .city("Wels")
                .country("Austria")
                .flatNumber("19")
                .riseNumber("18")
                .state("Upper Austria")
                .street("Welser Strasse")
                .zipCode("1098")
                .build();
        flat9 = FlatRequest.builder()
                .description("Nice flat with big windows!")
                .price(1100)
                .size(70)
                .numberOfRooms(2)
                .address(address9)
                .build();

        AddressRequest address10 = AddressRequest.builder()
                .buildingNumber("19")
                .city("Bregenz")
                .country("Austria")
                .flatNumber("21")
                .riseNumber("20")
                .state("Vorarlberg")
                .street("Bregenzer Strasse")
                .zipCode("1234")
                .build();
        flat10 = FlatRequest.builder()
                .description("Spacious flat with big balcony!")
                .price(1000)
                .size(85)
                .numberOfRooms(4)
                .address(address10)
                .build();


        flatService.createFlat(flat1);
        flatService.createFlat(flat2);
        flatService.createFlat(flat3);
        flatService.createFlat(flat4);
        flatService.createFlat(flat5);
        flatService.createFlat(flat6);
        flatService.createFlat(flat7);
        flatService.createFlat(flat8);
        flatService.createFlat(flat9);
        flatService.createFlat(flat10);
    }
}


