package ma.enset.atsbackend.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import ma.enset.atsbackend.entities.Company;
import ma.enset.atsbackend.entities.Skills;

import java.util.Date;
import java.util.List;

@Data
public class JobApplicationDTO {

    private Integer jobId;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy/MM/dd")
    private Date jobDate;
    private String enterpriseName;
    private String jobDomaine;
    private Integer companyId;
    private String jobTitle;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy/MM/dd")
    private Date applicationDate;
    private String companyName;

    public JobApplicationDTO(Integer jobId, Date jobDate, String enterpriseName, String jobDomaine, Integer companyId, String jobTitle, Date applicationDate, String companyName) {
        this.jobId = jobId;
        this.jobDate = jobDate;
        this.enterpriseName = enterpriseName;
        this.jobDomaine = jobDomaine;
        this.companyId = companyId;
        this.jobTitle = jobTitle;
        this.applicationDate = applicationDate;
        this.companyName = companyName;
    }


}
