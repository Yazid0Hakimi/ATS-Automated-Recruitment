package ma.enset.atsbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.UUID;

@Document(collection = "applications")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Application {
    @Id
    private UUID id;
    private String jobDescriptionId;
    private String userId;
    private String company;
    private Date date;
    private status status;// enum type for pending accept reject

}
