package at.fhcampuswien.apartmentviewingbooking.controller;

import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.model.flat.FlatRequest;
import at.fhcampuswien.apartmentviewingbooking.model.flatBookingTime.FlatBookingTime;
import at.fhcampuswien.apartmentviewingbooking.service.flatService.FlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/apartment/flats")
public class FlatController {

    private FlatService flatService;

    @Autowired
    public FlatController(FlatService flatService) {
        this.flatService = flatService;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Flat>> getAllFlats() {
        try {


            List<Flat> flats = flatService.getAllFlats();

            return new ResponseEntity<>(flats, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("\n Error:\n");
            System.out.println(e);

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(path = "/{flatId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Flat> getFlat(@PathVariable long flatId) {
        try {


            Optional<Flat> flat = flatService.getFlatByID(flatId);

            return flat.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
        } catch (Exception e) {
            System.out.println("\n Error:\n");
            System.out.println(e);

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(path = "/getBookingTimesForFlat{flatId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<FlatBookingTime>> getFlatBookingTimes(@PathVariable long flatId) {
        Optional<List<FlatBookingTime>> flat = flatService.getFlatBookingTimesByID(flatId);

        return flat.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }


    @PostMapping(path = "/createFlat")
    public ResponseEntity<Flat> createFlat(@RequestBody FlatRequest flatRequest) {


        try {
            return new ResponseEntity<Flat>(flatService.createFlat(flatRequest), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("\n Error:\n");
            System.out.println(e);

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
