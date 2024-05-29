package ma.enset.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name = "candidate")
@NoArgsConstructor
@AllArgsConstructor
public class Candidate extends User{
    private String address;
    private String phone;
    private String gender;
    private String city;
    private String profilePic;
    private String bio;
    @OneToMany(mappedBy = "candidate")
    @JsonIgnoreProperties("candidate")
    private List<Experience> experiences;
    @OneToMany(mappedBy = "candidate")
    @JsonIgnoreProperties("candidate")
    private List<Education> education;
    @OneToMany(mappedBy = "candidate")
    @JsonIgnoreProperties("candidate")
    private List<CandidateSkill> skills;
    @OneToMany(mappedBy = "candidate")
    @JsonIgnoreProperties("candidate")
    private List<Language> languages;
    @OneToMany(mappedBy = "candidate")
    @JsonIgnoreProperties("candidate")
    private List<Application> applications;
}
