package ma.enset.atsbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "applications")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Application {
    @Id
    private String id;
    private String jobDescriptionId;
    private String userId;
    private String recruterId;
    private Date date;
}