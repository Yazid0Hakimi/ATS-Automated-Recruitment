package ma.enset.atsbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;


@Data @AllArgsConstructor @NoArgsConstructor
@Document(collection = "Companies")
public class Company {
    @Id
    private UUID id;
    private String email;
    private String password;
    private String Logo;
    private String phone;
    private String domain;
    private String website;
    private String companyDescription; // 'recruiter' or 'candidate' or 'admin'
    private String HeadcarterCity;

}
