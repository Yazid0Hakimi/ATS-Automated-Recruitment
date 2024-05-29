package ma.enset.backend.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import ma.enset.backend.entities.CandidateSkill;
import ma.enset.backend.entities.Education;
import ma.enset.backend.entities.Experience;
import ma.enset.backend.entities.User;
import org.apache.commons.codec.language.bm.Languages;

import java.util.List;

@Data
public class CandidateDTO extends User {
    private String firstName;
    private String lastName;
    private String password;
    private String email;
    private String address;
    private String phone;
    private String gender;
    private String city;
    private String profilePic;
    private String bio;

    private List<Experience> experiences;
    private List<Education> educations;
    private List<CandidateSkill> skills;
    private List<Languages> languages;

}
