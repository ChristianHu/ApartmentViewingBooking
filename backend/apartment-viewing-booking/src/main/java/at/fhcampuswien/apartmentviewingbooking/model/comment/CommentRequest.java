package at.fhcampuswien.apartmentviewingbooking.model.comment;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@EqualsAndHashCode
@ToString
public class CommentRequest {
    private String text;
    private int rating;
    private long flatId;
    private long userId;
}
