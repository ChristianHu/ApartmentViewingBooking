package at.fhcampuswien.apartmentviewingbooking.repository;

import at.fhcampuswien.apartmentviewingbooking.model.comment.Comment;
import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.model.flatBookingTime.FlatBookingTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface FlatBookingTimesRepository extends JpaRepository<FlatBookingTime, Long> {

    List<FlatBookingTime> findAllByFlat(Flat flat);
    Optional<FlatBookingTime> findByFlatAndBookingDate(Flat flat, LocalDateTime bookingDate);
}
