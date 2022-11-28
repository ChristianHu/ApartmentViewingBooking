package at.fhcampuswien.apartmentviewingbooking.controller;

import at.fhcampuswien.apartmentviewingbooking.model.booking.Booking;
import at.fhcampuswien.apartmentviewingbooking.model.comment.Comment;
import at.fhcampuswien.apartmentviewingbooking.model.comment.CommentRequest;
import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.service.commentService.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/apartment/comments")
public class CommentController {
    private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService){
        this.commentService = commentService;
    }

    @PostMapping("/user/{userId}/flat/{flatId}/rating/{rating}/text/{text}")
    public ResponseEntity<?> createComment(@PathVariable long userId, @PathVariable long flatId, @PathVariable int rating, @PathVariable String text) {
        ResponseEntity<?> response;
        Optional<Comment> comment = commentService.createComment(userId, flatId, rating, text);

        if (comment.isPresent()) {
            response = new ResponseEntity<>(comment.get(), HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return response;
    }



    @PostMapping()
    public ResponseEntity<?> createComment2(@Valid @RequestBody CommentRequest commentRequest) {
        ResponseEntity<?> response;
        Optional<Comment> comment = commentService.createComment(commentRequest.getUserId(), commentRequest.getFlatId(), commentRequest.getRating(), commentRequest.getText());

        if (comment.isPresent()) {
            response = new ResponseEntity<>(comment.get(), HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return response;
    }

    @GetMapping("/flat/{flatID}")
    public ResponseEntity<List<?>> getALLCommentsFromFlat(@PathVariable long flatID) {
        List<Comment> comments =commentService.getAllCommendsFromFlat(flatID);

        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

}
