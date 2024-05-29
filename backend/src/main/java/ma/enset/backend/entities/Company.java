package ma.enset.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Company {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String password;
    private String logo;
    private String phone;
    private String description;
    private String city;
    private String industry;
    private String website;
    private CompanyStatus status;
    @OneToMany(mappedBy = "company")
    @JsonIgnoreProperties("company")
    private List<Job> jobs;
}
