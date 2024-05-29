package ma.enset.atsbackend.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import ma.enset.atsbackend.entities.*;

import java.util.List;

@Data
public class CandidateDTO extends AtsUser {
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
    private List<Skills> skills;
    private List<Languages> languages;

}
