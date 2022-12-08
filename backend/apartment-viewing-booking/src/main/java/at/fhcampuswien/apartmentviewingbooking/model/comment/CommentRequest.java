package at.fhcampuswien.apartmentviewingbooking.model.comment;


import io.swagger.annotations.ApiModel;
import lombok.*;

@Setter
@Getter
@EqualsAndHashCode
@ApiModel(description = "All details about the comment requests.")
public class CommentRequest {
    private String text;
    private int rating;
    private long flatId;
    private long userId;
}
