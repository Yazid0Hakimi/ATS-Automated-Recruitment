package ma.enset.atsbackend.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import ma.enset.atsbackend.entities.*;

import java.util.List;

@Data
public class CandidateDTO extends AtsUser {
    private String address;
    private String phone;
    private String gender;
    private String city;
    private String profilePic;
    private String bio;

    private List<Education> educationList;

    private List<Experience> experienceList;

    private List<Languages> languagesList;

    private List<Skills> skillsList;

}
