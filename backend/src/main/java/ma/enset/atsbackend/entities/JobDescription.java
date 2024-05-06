package ma.enset.atsbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Document(collection = "jobDescriptions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobDescription {
    @Id
    private UUID id;
    private Date date;
    private String description;
    private List<String> requirements;
    private String jobTitle;
    private String JobType; // full time parte time .....
    private String JobLocation ; //  remote hybrid ...
    private String city; // job city
    private Double salaryRangeMin;
    private Double salaryRangeMax;
    private String jobDomaine;


    private Company company; // Id of the recruiter who posted the job

    private List<String> applicationIds; // Ids of applications received for this job
}
