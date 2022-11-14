package at.fhcampuswien.apartmentviewingbooking.repository;

import at.fhcampuswien.apartmentviewingbooking.model.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
    Optional<UserEntity> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);

}
