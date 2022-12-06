package at.fhcampuswien.apartmentviewingbooking.service.flatService;

import at.fhcampuswien.apartmentviewingbooking.model.address.Address;
import at.fhcampuswien.apartmentviewingbooking.model.address.AddressRequest;
import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.model.flat.FlatRequest;
import at.fhcampuswien.apartmentviewingbooking.model.flatBookingTime.FlatBookingTime;
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


    public Optional<List<FlatBookingTime>> getFlatBookingTimesByID(long flatId) {
        Optional<List<FlatBookingTime>> result = null;
        Optional<Flat> optionalFlat =flatRepository.findById(flatId);

        if(optionalFlat.isPresent()){
            result = Optional.ofNullable(optionalFlat.get().getAvaiableBookingTimes());
        }

        return result;
    }


    public Flat createFlat(FlatRequest flatRequest){
        Flat flat = new Flat();
        flat.setSize(flatRequest.getSize());
        flat.setPrice(flatRequest.getPrice());
        flat.setDescription(flatRequest.getDescription());

        AddressRequest addressRequest =flatRequest.getAddress();

        Address address=new Address();
        address.setCity(addressRequest.getCity());
        address.setBuildingNumber(addressRequest.getBuildingNumber());
        address.setCountry(addressRequest.getCountry());
        address.setFlatNumber(addressRequest.getFlatNumber());
        address.setRiseNumber(addressRequest.getRiseNumber());
        address.setState(addressRequest.getState());
        address.setStreet(addressRequest.getStreet());

        flat.setAddress(address);

        return flatRepository.save(flat);
    }

}
