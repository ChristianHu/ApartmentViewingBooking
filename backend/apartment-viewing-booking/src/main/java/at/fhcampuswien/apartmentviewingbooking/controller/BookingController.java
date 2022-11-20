package at.fhcampuswien.apartmentviewingbooking.controller;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import at.fhcampuswien.apartmentviewingbooking.service.bookingservice.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/apartment/booking")
public class BookingController {

    private BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/user/{userId}/flat/{flatId}")
    public ResponseEntity<?> bookFlat(@PathVariable long userId, @PathVariable long flatId) {
        ResponseEntity<?> response;
        Optional<Booking> booking = bookingService.createBooking(userId, flatId);

        if (booking.isPresent()) {
            response = new ResponseEntity<>(booking.get(), HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return response;
    }

    @GetMapping("{bookingId}")
    public ResponseEntity<?> getBookingByID(@PathVariable long bookingId) {
        ResponseEntity<?> response;
        Optional<Booking> booking = bookingService.getBookingByID(bookingId);

        if (booking.isPresent()) {
            response = new ResponseEntity<>(booking.get(), HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return response;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<?>> getALLBookingsByUser(@PathVariable long userId) {
        List<Booking> bookings = bookingService.getALLBookingsByUser(userId);

        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/flat/{flatID}")
    public ResponseEntity<?> getBookingByFlat(@PathVariable long flatID) {
        ResponseEntity<?> response;
        Optional<Booking> booking = bookingService.getBookingByFlat(flatID);

        if (booking.isPresent()) {
            response = new ResponseEntity<>(booking.get(), HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return response;
    }

    @DeleteMapping("/user/{bookingId}")
    public ResponseEntity<?> deleteBooking(@PathVariable long bookingId) {

        boolean resultOfDelite = bookingService.deleteBooking(bookingId);

        return resultOfDelite ? new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
