package at.fhcampuswien.apartmentviewingbooking.service.FlatBookingTimesService;

import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.model.flatBookingTime.FlatBookingTime;
import at.fhcampuswien.apartmentviewingbooking.repository.FlatBookingTimesRepository;
import at.fhcampuswien.apartmentviewingbooking.service.flatservice.FlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class FlatBookingTimesService {

    private FlatBookingTimesRepository flatBookingTimesRepository;
    private FlatService flatService;

    @Autowired
    public FlatBookingTimesService(FlatBookingTimesRepository flatBookingTimesRepository, FlatService flatService) {
        this.flatBookingTimesRepository = flatBookingTimesRepository;
        this.flatService = flatService;
    }

    public Optional<FlatBookingTime> bookingTime(long flatId, LocalDateTime localDateTime) {

        Optional<Flat> flat = flatService.getFlatByID(flatId);
        Optional<FlatBookingTime> flatBookingTime = null;
        if (flat.isPresent()) {
            List<FlatBookingTime> flatBookingTimes = flatBookingTimesRepository.findAllByFlat(flat.get());

            for (FlatBookingTime fbt : flatBookingTimes) {
                if (fbt.getBookingDate().equals(localDateTime)) {
                    fbt.setAlreadyBooked(true);
                    flatBookingTimesRepository.delete(fbt);
                    flatBookingTimesRepository.save(fbt);
                    flatBookingTime = Optional.of(fbt);
                }
            }
        }
        return flatBookingTime;
    }

    public  Optional<FlatBookingTime> getFBTbyFlatAndDateTime(Flat flat,LocalDateTime localDateTime){
        return flatBookingTimesRepository.findByFlatAndBookingDate(flat,localDateTime);
    }


}

