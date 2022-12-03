package at.fhcampuswien.apartmentviewingbooking.controller;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import at.fhcampuswien.apartmentviewingbooking.service.bookingservice.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/apartment/bookings")
public class BookingController {

    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/user/{userId}/flat/{flatId}")
    public ResponseEntity<Booking> bookFlat(@PathVariable long userId, @PathVariable long flatId) {
        Optional<Booking> booking = bookingService.createBooking(userId, flatId);

        return booking.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @GetMapping("{bookingId}")
    public ResponseEntity<Booking> getBookingByID(@PathVariable long bookingId) {
        Optional<Booking> booking = bookingService.getBookingByID(bookingId);

        return booking.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Booking>> getALLBookingsByUser(@PathVariable long userId) {
        List<Booking> bookings = bookingService.getALLBookingsByUser(userId);

        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/flat/{flatID}")
    public ResponseEntity<Booking> getBookingByFlat(@PathVariable long flatID) {
        Optional<Booking> booking = bookingService.getBookingByFlat(flatID);

        return booking.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @DeleteMapping("/user/{bookingId}")
    public ResponseEntity<Boolean> deleteBooking(@PathVariable long bookingId) {

        boolean resultOfDelite = bookingService.deleteBooking(bookingId);

        return resultOfDelite ? new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
