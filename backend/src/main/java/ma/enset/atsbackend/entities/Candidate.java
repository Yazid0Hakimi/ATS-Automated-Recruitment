package ma.enset.atsbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data @AllArgsConstructor @NoArgsConstructor
@Document(collection = "candidates")
public class Candidate{
    @Id
    private UUID id;
    private String firstName;
    private String lastName;
    private String email;
    private String bio;
    private String password;
    private String phone;
    private String profilePicture;
    private List<String> skills; // List of skills
    private List<String> languages; // List of languages
    private List<Education> education; // List of languages
    private List<Experience> experience; // List of languages
}
