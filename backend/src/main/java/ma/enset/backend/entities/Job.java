package ma.enset.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Job {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String description;
    private String city;
    private Date postedAt;
    private String jobType;
    private String jobDomain;
    private double salary;
    @ManyToOne
    @JsonIgnoreProperties("jobs")
    private Company company;
    @OneToMany(mappedBy = "job")
    @JsonIgnoreProperties("job")
    private List<JobSkill> jobSkills;
    @OneToMany(mappedBy = "job")
    @JsonIgnoreProperties("job")
    private List<Application> applications;
}
