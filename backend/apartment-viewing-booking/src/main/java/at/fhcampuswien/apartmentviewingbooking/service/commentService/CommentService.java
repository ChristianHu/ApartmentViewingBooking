package at.fhcampuswien.apartmentviewingbooking.service.commentService;

import at.fhcampuswien.apartmentviewingbooking.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository){
        this.commentRepository=commentRepository;
    }


}
