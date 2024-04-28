package ma.enset.atsbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor
@Document(collection = "recruiter")
public class Recruiter {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private String phone;
    private Role role; // 'recruiter' or 'candidate' or 'admin'
    private String companyDescription; // 'recruiter' or 'candidate' or 'admin'
}
