package at.fhcampuswien.apartmentviewingbooking.service.bookingservice;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserEntity;
import at.fhcampuswien.apartmentviewingbooking.repository.BookingRepository;
import at.fhcampuswien.apartmentviewingbooking.service.flatService.FlatService;
import at.fhcampuswien.apartmentviewingbooking.service.userservice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private BookingRepository bookingRepository;
    private FlatService flatService;
    private UserService userService;

    @Autowired
    public BookingService(BookingRepository bookingRepository, FlatService flatService, UserService userService) {
        this.bookingRepository = bookingRepository;
        this.flatService = flatService;
        this.userService = userService;
    }

    public Optional<Booking> createBooking(long userId, long flatId) {
        Optional<Booking> result;
        Booking booking = new Booking();

        Optional<UserEntity> userEntity = userService.getUserById(userId);
        Optional<Flat> flatEntity = flatService.getFlatByID(flatId);

        if (userEntity.isPresent() && flatEntity.isPresent()) {
            booking.setFlat(flatEntity.get());
            booking.setUser(userEntity.get());

            bookingRepository.save(booking);

            result = Optional.of(booking);

        } else {
            result = null;
        }
        return result;
    }

    public Optional<Booking> getBookingByID(long id) {
        return bookingRepository.findById(id);
    }

    public Optional<Booking> getBookingByFlat(long flatID) {
        Optional<Booking> result;

        Optional<Flat> flat = flatService.getFlatByID(flatID);

        if (flat.isPresent()) {

            result = bookingRepository.findByFlat(flat.get());
        } else {
            result = null;
        }

        return result;
    }

    public Optional<Booking> getBookingByUser(long userID) {
        Optional<Booking> result;

        Optional<UserEntity> user = userService.getUserById(userID);

        if (user.isPresent()) {

            result = bookingRepository.findByUser(user.get());
        } else {
            result = null;
        }

        return result;
    }

    public List<Booking> getALLBookingsByUser(long userID) {
        List<Booking> result;

        Optional<UserEntity> user = userService.getUserById(userID);

        if (user.isPresent()) {

            result = bookingRepository.findAllByUser(user.get());
        } else {
            result = null;
        }

        return result;
    }

    public boolean deleteBooking(long id) {
        boolean result;

        Optional<Booking> booking = bookingRepository.findById(id);

        if (booking.isPresent()) {
            bookingRepository.delete(booking.get());
            result = true;
        } else {
            result = false;
        }
        return result;
    }


}
