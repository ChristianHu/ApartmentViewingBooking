package at.fhcampuswien.apartmentviewingbooking.controller;

import at.fhcampuswien.apartmentviewingbooking.model.comment.Comment;
import at.fhcampuswien.apartmentviewingbooking.model.comment.CommentRequest;
import at.fhcampuswien.apartmentviewingbooking.service.commentService.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/apartment/comments")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService){
        this.commentService = commentService;
    }

    @PostMapping("/user/{userId}/flat/{flatId}/rating/{rating}/text/{text}")
    public ResponseEntity<Comment> createComment(@PathVariable long userId, @PathVariable long flatId, @PathVariable int rating, @PathVariable String text) {
        Optional<Comment> comment = commentService.createComment(userId, flatId, rating, text);

        return comment.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }



    @PostMapping()
    public ResponseEntity<Comment> createComment2(@Valid @RequestBody CommentRequest commentRequest) {
        Optional<Comment> comment = commentService.createComment(commentRequest.getUserId(), commentRequest.getFlatId(), commentRequest.getRating(), commentRequest.getText());

        return comment.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @GetMapping("/flat/{flatID}")
    public ResponseEntity<List<Comment>> getALLCommentsFromFlat(@PathVariable long flatID) {
        List<Comment> comments =commentService.getAllCommendsFromFlat(flatID);

        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

}
