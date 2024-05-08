package ma.enset.atsbackend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Experience {
    @Id
    private int id;
    private String title;
    private String company;
    private Date startDate;
    private Date endDate;
    private String city;
}
