package at.fhcampuswien.apartmentviewingbooking.service.flatService;

import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.repository.FlatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlatService {

    private FlatRepository flatRepository;

    @Autowired
    public FlatService(FlatRepository flatRepository) {
        this.flatRepository = flatRepository;
    }

    public Optional<Flat> getFlatByID(long flatId) {
        return flatRepository.findById(flatId);
    }

    public List<Flat> getAllFlats(){
        return flatRepository.findAll();
    }
}
