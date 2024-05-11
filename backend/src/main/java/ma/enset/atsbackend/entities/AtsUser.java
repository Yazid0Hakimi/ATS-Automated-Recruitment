package ma.enset.atsbackend.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class AtsUser {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Integer id;
    private String firstName;
    private String lastName;
    private String password;
    private String email;
}
