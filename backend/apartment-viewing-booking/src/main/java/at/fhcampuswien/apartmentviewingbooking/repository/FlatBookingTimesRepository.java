package at.fhcampuswien.apartmentviewingbooking.repository;

import at.fhcampuswien.apartmentviewingbooking.model.comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlatBookingTimesRepository extends JpaRepository<FlatBookingTimesRepository, Long> {

}
