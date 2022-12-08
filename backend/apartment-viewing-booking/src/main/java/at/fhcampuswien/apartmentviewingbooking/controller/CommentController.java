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

    @PostMapping()
    public ResponseEntity<Comment> createComment(@Valid @RequestBody CommentRequest commentRequest) {
        Optional<Comment> comment = commentService.createComment(commentRequest.getUserId(), commentRequest.getFlatId(), commentRequest.getRating(), commentRequest.getText());
        if (comment.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(comment.get(), HttpStatus.CREATED);
    }

    @GetMapping("/flat/{flatID}")
    public ResponseEntity<List<Comment>> getALLCommentsFromFlat(@PathVariable long flatID) {
        List<Comment> comments =commentService.getAllCommendsFromFlat(flatID);

        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

}
