package ma.enset.atsbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.enset.atsbackend.dtos.JobDTO;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"candidate", "job"})
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIgnoreProperties("candidate")
    @JoinColumn(name = "candidate_id")
    private Candidate candidate;

    @ManyToOne
    @JsonIgnoreProperties("job")
    @JoinColumn(name = "job_id")
    private Job job;

    @Temporal(TemporalType.TIMESTAMP)
    private Date applicationDate;
}
