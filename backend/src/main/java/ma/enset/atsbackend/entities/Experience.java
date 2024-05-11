package ma.enset.atsbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Experience {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String company;
    private Date startDate;
    private Date endDate;
    private String city;

    @ManyToOne
    @JsonIgnore
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

    private Candidate candidate;
}
