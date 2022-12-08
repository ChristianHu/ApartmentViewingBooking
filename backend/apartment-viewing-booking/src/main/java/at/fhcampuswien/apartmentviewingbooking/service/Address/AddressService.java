package at.fhcampuswien.apartmentviewingbooking.service.Address;

import at.fhcampuswien.apartmentviewingbooking.model.address.Address;
import at.fhcampuswien.apartmentviewingbooking.model.address.AddressRequest;
import at.fhcampuswien.apartmentviewingbooking.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {
    private AddressRepository addressRepository;

    @Autowired
    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }


    public Address createAddress(AddressRequest addressRequest) {

        Address address = new Address();
        address.setCity(addressRequest.getCity());
        address.setBuildingNumber(addressRequest.getBuildingNumber());
        address.setCountry(addressRequest.getCountry());
        address.setFlatNumber(addressRequest.getFlatNumber());
        address.setRiseNumber(addressRequest.getRiseNumber());
        address.setState(addressRequest.getState());
        address.setStreet(addressRequest.getStreet());
        address.setZipCode(addressRequest.getZipCode());


        return addressRepository.save(address);


    }
}
