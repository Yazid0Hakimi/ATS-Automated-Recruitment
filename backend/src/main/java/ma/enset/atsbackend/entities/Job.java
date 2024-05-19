package ma.enset.atsbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Date date;
    private String description;
    private String image;
    private String jobTitle;
    private String enterpriseName;
    private String workTime;
    private String city;
    private String recruiterId;
    private String salaire;
    private String jobDomaine;

    @ManyToMany (fetch = FetchType.EAGER)
    private List<Skills> requiredSkills;

    @ManyToOne
    private Company company;

    @OneToMany(mappedBy = "job", fetch = FetchType.EAGER)
//    @JsonIgnoreProperties("jobApplications")
    private List<JobApplication> jobApplications;

}
