package ma.enset.atsbackend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;
@Data
@Entity
@Table(name = "candidates")
public class Candidate extends AtsUser{
    private String address;
    private String phone;
    private String gender;
    private String city;
    private String profilePic;
    private String bio;

}
