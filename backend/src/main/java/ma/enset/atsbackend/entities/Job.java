package ma.enset.atsbackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.UUID;

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
    private String JobDomaine;
    @ManyToMany
    private List<Skills> requiredSkills;

    @ManyToOne
    private Company company;

}
