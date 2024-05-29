package ma.enset.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Application {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Date appliedAt;
    private ApplicationStatus status;
    @ManyToOne
    @JsonIgnoreProperties("applications")
    private Candidate candidate;
    @ManyToOne
    @JsonIgnoreProperties("applications")
    private Job job;
}
