package ma.enset.backend.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import ma.enset.backend.entities.Company;

import java.util.Date;

@Data
public class JobApplicationDTO {
    private Integer jobId;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy/MM/dd")
    private Date jobDate;
    private String jobDomaine;
    private String jobTitle;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy/MM/dd")
    private Date applicationDate;
    private Company company;

    public JobApplicationDTO(Integer jobId, Date jobDate, String jobDomaine, String jobTitle, Date applicationDate, Company company) {
        this.jobId = jobId;
        this.jobDate = jobDate;
        this.jobDomaine = jobDomaine;
        this.jobTitle = jobTitle;
        this.applicationDate = applicationDate;
        this.company = company;
    }
}
