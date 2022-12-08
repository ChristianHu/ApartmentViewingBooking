package at.fhcampuswien.apartmentviewingbooking.controller;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import at.fhcampuswien.apartmentviewingbooking.service.bookingservice.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
    public ResponseEntity<Booking> bookFlat(@PathVariable long userId, @PathVariable long flatId, @RequestBody String bookingTime) {

        Optional<Booking> booking = bookingService.createBooking(userId, flatId, bookingTime);

       if (booking.isEmpty()) {
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }

       return new ResponseEntity<>(booking.get(), HttpStatus.CREATED);
    }

    @GetMapping("{bookingId}")
    public ResponseEntity<Booking> getBookingByID(@PathVariable long bookingId) {
        Optional<Booking> booking = bookingService.getBookingByID(bookingId);

        if (booking.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(booking.get(), HttpStatus.FOUND);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Map<Long, Booking>> getALLBookingsByUser(@PathVariable long userId) {
        Optional<List<Booking>> bookings = bookingService.getALLBookingsByUser(userId);

        if (bookings.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        Map<Long, Booking> mapBookings = new HashMap<>();

        for (Booking booking : bookings.get()) {
            mapBookings.put(booking.getFlat().getId(), booking);
        }

        return new ResponseEntity<>(mapBookings, HttpStatus.OK);
    }

    @GetMapping("/flat/{flatID}")
    public ResponseEntity<Booking> getBookingByFlat(@PathVariable long flatID) {
        Optional<Booking> booking = bookingService.getBookingByFlat(flatID);

        if (booking.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(booking.get(), HttpStatus.OK);
    }

    @DeleteMapping("/user/{bookingId}")
    public ResponseEntity<Boolean> deleteBooking(@PathVariable long bookingId) {

        boolean resultOfDelite = bookingService.deleteBooking(bookingId);

        return resultOfDelite ? new ResponseEntity<>(HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
