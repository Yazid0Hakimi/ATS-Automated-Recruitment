package ma.enset.atsbackend.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.enset.atsbackend.entities.Company;
import ma.enset.atsbackend.entities.JobApplication;
import ma.enset.atsbackend.entities.Skills;

import java.util.Date;
import java.util.List;

@Data
public class JobDTO {
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

    private List<Skills> requiredSkills;

    private Company company;

}
