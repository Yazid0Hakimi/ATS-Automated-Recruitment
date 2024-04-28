package ma.enset.atsbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "jobDescriptions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobDescription {
    @Id
    private String id;
    private Date date;
    private String description;
    private String image;
    private String jobTitle;
    private String entrepriseName;
    private String workTime;
    private String city;
    private String recruiterId; // Id of the recruiter who posted the job
    private List<String> applicationIds; // Ids of applications received for this job
}
