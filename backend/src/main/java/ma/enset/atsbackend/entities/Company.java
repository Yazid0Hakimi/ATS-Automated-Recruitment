package ma.enset.atsbackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String password;
    private String logo;
    private String phone;
    private String description;
    private String city;
    private String industry;
    private String website;


    @OneToMany(mappedBy = "company", fetch = FetchType.LAZY)
    private List<Job> jobs;
}
