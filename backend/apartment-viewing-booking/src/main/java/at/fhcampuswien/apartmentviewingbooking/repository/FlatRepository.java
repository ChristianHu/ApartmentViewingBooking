package at.fhcampuswien.apartmentviewingbooking.repository;

import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlatRepository extends JpaRepository<Flat, Long> {
}
