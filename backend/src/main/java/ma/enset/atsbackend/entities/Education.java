package ma.enset.atsbackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int id;
    private String school;
    private String diploma;
    private String speciality;
    private Date startDate;
    private Date endDate;

    @ManyToOne
    private Candidate candidate;
}
