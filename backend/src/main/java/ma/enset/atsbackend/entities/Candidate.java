package ma.enset.atsbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name = "candidates")
@JsonIgnoreProperties({"jobApplications"})
public class Candidate extends AtsUser {
    private String address;
    private String phone;
    private String gender;
    private String city;
    private String profilePic;
    private String bio;

    @OneToMany(mappedBy = "candidate", fetch = FetchType.EAGER)
    private List<Education> educationList;

    @OneToMany(mappedBy = "candidate", fetch = FetchType.EAGER)
    private List<Experience> experienceList;

    @OneToMany(mappedBy = "candidate", fetch = FetchType.EAGER)
    private List<Languages> languagesList;

    @OneToMany(mappedBy = "candidate", fetch = FetchType.EAGER)
    private List<CandidateSkills> skillsList;

    @OneToMany(mappedBy = "candidate", fetch = FetchType.EAGER)
    private List<JobApplication> jobApplications;
}
