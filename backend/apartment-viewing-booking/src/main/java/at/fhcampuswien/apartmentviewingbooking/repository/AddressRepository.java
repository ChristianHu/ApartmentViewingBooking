package at.fhcampuswien.apartmentviewingbooking.repository;

import at.fhcampuswien.apartmentviewingbooking.model.address.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
}
