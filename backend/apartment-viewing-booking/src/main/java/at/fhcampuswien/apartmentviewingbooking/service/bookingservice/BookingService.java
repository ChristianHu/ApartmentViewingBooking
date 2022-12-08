package at.fhcampuswien.apartmentviewingbooking.service.bookingservice;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.model.flatBookingTime.FlatBookingTime;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserEntity;
import at.fhcampuswien.apartmentviewingbooking.repository.BookingRepository;
import at.fhcampuswien.apartmentviewingbooking.service.FlatBookingTimesService.FlatBookingTimesService;
import at.fhcampuswien.apartmentviewingbooking.service.flatservice.FlatService;
import at.fhcampuswien.apartmentviewingbooking.service.userservice.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final FlatService flatService;
    private final UserService userService;
    private final FlatBookingTimesService flatBookingTimesService;

    public BookingService(BookingRepository bookingRepository, FlatService flatService, UserService userService, FlatBookingTimesService flatBookingTimesService) {
        this.bookingRepository = bookingRepository;
        this.flatService = flatService;
        this.userService = userService;
        this.flatBookingTimesService = flatBookingTimesService;
    }

    public Optional<Booking> createBooking(long userId, long flatId, String bookingTime) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime localDateTime = LocalDateTime.parse(bookingTime, formatter);

        Optional<Booking> result = Optional.empty();
        Booking booking = new Booking();


        Optional<UserEntity> userEntity = userService.getUserById(userId);
        Optional<Flat> flatEntity = flatService.getFlatByID(flatId);


        if (userEntity.isPresent() && flatEntity.isPresent()) {
            Optional<FlatBookingTime> flatBookingTimeEntity = flatBookingTimesService.getFBTbyFlatAndDateTime(flatEntity.get(), localDateTime);
            if (flatBookingTimeEntity.isPresent() && !flatBookingTimeEntity.get().isAlreadyBooked()) {
                    booking.setFlat(flatEntity.get());
                    booking.setUser(userEntity.get());

                    booking.setStartRentingDate(localDateTime);

                    bookingRepository.save(booking);

                    result = Optional.of(booking);

                    flatBookingTimesService.bookingTime(flatId, localDateTime);
            }
        }
        return result;
    }

    public Optional<Booking> getBookingByID(long id) {
        return bookingRepository.findById(id);
    }

    public Optional<Booking> getBookingByFlat(long flatID) {

        Optional<Flat> flat = flatService.getFlatByID(flatID);

        if (flat.isPresent()) {

            return bookingRepository.findByFlat(flat.get());
        } else {
           return Optional.empty();
        }
    }

    public Optional<Booking> getBookingByUser(long userID) {

        Optional<UserEntity> user = userService.getUserById(userID);

        if (user.isPresent()) {

            return bookingRepository.findByUser(user.get());
        } else {
            return Optional.empty();
        }
    }

    public Optional<List<Booking>> getALLBookingsByUser(long userID) {

        Optional<UserEntity> user = userService.getUserById(userID);
        if (user.isEmpty()) {
            return Optional.empty();
        }

        List<Booking> allByUser = bookingRepository.findAllByUser(user.get());
        if (allByUser.isEmpty()) {
            return Optional.empty();
        }

        return Optional.of(allByUser);
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
