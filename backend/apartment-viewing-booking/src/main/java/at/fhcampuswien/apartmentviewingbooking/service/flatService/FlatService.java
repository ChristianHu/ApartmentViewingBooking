package at.fhcampuswien.apartmentviewingbooking.service.flatservice;

import at.fhcampuswien.apartmentviewingbooking.model.address.Address;
import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.model.flat.FlatRequest;
import at.fhcampuswien.apartmentviewingbooking.model.flatBookingTime.FlatBookingTime;
import at.fhcampuswien.apartmentviewingbooking.repository.FlatRepository;
import at.fhcampuswien.apartmentviewingbooking.service.Address.AddressService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlatService {

    private final FlatRepository flatRepository;

    private final AddressService addressService;

    public FlatService(FlatRepository flatRepository, AddressService addressService) {
        this.flatRepository = flatRepository;
        this.addressService = addressService;
    }

    public Optional<Flat> getFlatByID(long flatId) {
        return flatRepository.findById(flatId);
    }

    public List<Flat> getAllFlats() {
        return flatRepository.findAll();
    }


    public Optional<List<FlatBookingTime>> getFlatBookingTimesByID(long flatId) {
        Optional<List<FlatBookingTime>> result = null;
        Optional<Flat> optionalFlat = flatRepository.findById(flatId);

        if (optionalFlat.isPresent()) {
            result = Optional.ofNullable(optionalFlat.get().getAvaiableBookingTimes());
        }

        return result;
    }


    public Flat createFlat(FlatRequest flatRequest) {
        Flat flat = new Flat();
        flat.setSize(flatRequest.getSize());
        flat.setPrice(flatRequest.getPrice());
        flat.setDescription(flatRequest.getDescription());
        flat.setNumberOfRooms(flatRequest.getNumberOfRooms());

        System.out.println();
        System.out.println(flatRequest.getAddress());

        try {
            Address address = addressService.createAddress(flatRequest.getAddress());

        } catch (Exception e) {
            e.printStackTrace();
        }

        return flatRepository.save(flat);
    }

}
