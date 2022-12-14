package at.fhcampuswien.apartmentviewingbooking.service.commentService;

import at.fhcampuswien.apartmentviewingbooking.model.comment.Comment;
import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserEntity;
import at.fhcampuswien.apartmentviewingbooking.repository.CommentRepository;
import at.fhcampuswien.apartmentviewingbooking.service.flatservice.FlatService;
import at.fhcampuswien.apartmentviewingbooking.service.userservice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    private final FlatService flatService;
    private final UserService userService;

    public CommentService(CommentRepository commentRepository, FlatService flatService, UserService userService) {
        this.commentRepository = commentRepository;
        this.flatService = flatService;
        this.userService = userService;
    }

    public Optional<Comment> createComment(long userId, long flatId, int rating, String text) {
        Comment comment = new Comment();

        Optional<UserEntity> userEntity = userService.getUserById(userId);
        Optional<Flat> flatEntity = flatService.getFlatByID(flatId);

        if (userEntity.isPresent() && flatEntity.isPresent()) {
            comment.setFlat(flatEntity.get());
            comment.setUser(userEntity.get());

            comment.setText(text);
            comment.setRating(rating);

            commentRepository.save(comment);

            return Optional.of(comment);

        } else {
           return Optional.empty();
        }
    }


    public List<Comment> getAllCommendsFromFlat(long flatID) {
        List<Comment> result;
        Optional<Flat> flat = flatService.getFlatByID(flatID);
        if (flat.isPresent()) {
            result = commentRepository.findAllByFlat(flat.get());
        } else {
            result = null;
        }
        return result;
    }


}
