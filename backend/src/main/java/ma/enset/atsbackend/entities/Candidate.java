package ma.enset.atsbackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "candidates")
public class Candidate extends AtsUser {
    private String address;
    private String phone;
    private String gender;
    private String city;
    private String profilePic;
    private String bio;

    @OneToMany(mappedBy = "candidate", fetch = FetchType.LAZY)
    private List<Education> educationList;

    @OneToMany(mappedBy = "candidate", fetch = FetchType.LAZY)
    private List<Experience> experienceList;

    @ManyToMany(mappedBy = "candidate", fetch = FetchType.LAZY)
    private List<Languages> languagesList;

    @ManyToMany(mappedBy = "candidate", fetch = FetchType.LAZY)
    private List<Skills> skillsList;
}
