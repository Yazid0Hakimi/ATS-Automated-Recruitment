package ma.enset.atsbackend;

import ma.enset.atsbackend.entities.Candidate;
import ma.enset.atsbackend.entities.Company;
import ma.enset.atsbackend.entities.Job;
import ma.enset.atsbackend.service.CandidateService;
import ma.enset.atsbackend.service.CompanyService;
import ma.enset.atsbackend.service.JobService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class AtsBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AtsBackendApplication.class, args);
    }

        @Bean
    public CommandLineRunner commandLineRunner(JobService jobService,
                                               CandidateService candidateService,
                                               CompanyService companyService) {
        return args -> {
            // Create and save 5 job instances
            for (int i = 0; i < 5; i++) {
                Job job = new Job();
//                job.setId(i + 1); // Id starts from 1
                job.setDate(new Date());
                job.setDescription("Description for job " + (i + 1));
                job.setImage("Image URL for job " + (i + 1));
                job.setJobTitle("Job Title " + (i + 1));
                job.setEnterpriseName("Enterprise Name " + (i + 1));
                job.setWorkTime("Work Time for job " + (i + 1));
                job.setCity("City for job " + (i + 1));
                job.setRecruiterId("Recruiter ID for job " + (i + 1));
                job.setSalaire("Salary for job " + (i + 1)); // Additional field
                job.setJobDomaine("Job Domain for job " + (i + 1)); // Additional field

                jobService.saveJob(job);
            }

            // Create and save 5 candidate instances

        };
    }
}
