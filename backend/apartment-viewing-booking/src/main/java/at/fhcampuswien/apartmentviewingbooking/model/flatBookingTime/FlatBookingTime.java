package at.fhcampuswien.apartmentviewingbooking.model.flatBookingTime;


import at.fhcampuswien.apartmentviewingbooking.model.flat.Flat;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.FutureOrPresent;
import java.time.LocalDateTime;

@Builder
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "FlatBookingTimes")
@ApiModel(description = "An booking date for the flat.")
public class FlatBookingTime {
    @Id
    @Column(name = "flatBookingTime_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "flat_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Flat flat;

    @FutureOrPresent
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm", shape = JsonFormat.Shape.STRING)
    private LocalDateTime bookingDate;

    private boolean isAlreadyBooked;
}
