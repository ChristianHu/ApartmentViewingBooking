package at.fhcampuswien.apartmentviewingbooking.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/apartment/booking")
public class BookingController {

    @PostMapping("/user/{userId}/flat/{flatId}")
    public ResponseEntity<?> bookFlat(@PathVariable long userId, @PathVariable long flatId) {
        //TODO
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/user/{userID}")
    public ResponseEntity<?> getBookingByUser(@PathVariable long userId) {
        //TODO
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/flat/{flatID}")
    public ResponseEntity<?> getBookingByFlat(@PathVariable long flatID) {
        //TODO
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/user/{userId}/flat/{flatId}")
    public ResponseEntity<?> deleteBooking(@PathVariable long userId, @PathVariable long flatId) {
        //TODO
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }


}
