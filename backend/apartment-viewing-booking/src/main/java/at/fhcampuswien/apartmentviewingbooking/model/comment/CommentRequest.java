package at.fhcampuswien.apartmentviewingbooking.model.comment;


import io.swagger.annotations.ApiModel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode
@ToString
@ApiModel(description = "All details about the comment requests.")
public class CommentRequest {
    private String text;
    private int rating;
    private long flatId;
    private long userId;
}
