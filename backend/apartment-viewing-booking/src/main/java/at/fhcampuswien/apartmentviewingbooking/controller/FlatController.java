package at.fhcampuswien.apartmentviewingbooking.controller;

import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
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
        List<Flat> flats =flatService.getAllFlats();

        return new ResponseEntity<>(flats,HttpStatus.OK);
    }

    @GetMapping(path = "/{flatId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Flat> getFlat(@PathVariable long flatId) {
        Optional<Flat> flat = flatService.getFlatByID(flatId);

        return flat.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }
}
