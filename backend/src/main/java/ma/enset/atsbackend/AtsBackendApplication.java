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

                jobService.saveJob(job);
            }

            // Create and save 5 candidate instances
            for (int i = 0; i < 5; i++) {
                Candidate candidate = new Candidate();
//                candidate.setId(i + 1); // Generate candidate ID
                candidate.setFirstName("Candidate First Name " + (i + 1));
                candidate.setLastName("Candidate Last Name " + (i + 1));
                candidate.setPassword("Password for candidate " + (i + 1));
                candidate.setEmail("candidate" + (i + 1) + "@example.com");
                candidate.setAddress("Address for candidate " + (i + 1));
                candidate.setPhone("Phone number for candidate " + (i + 1));
                candidate.setGender("Gender for candidate " + (i + 1));
                candidate.setCity("City for candidate " + (i + 1));
                candidate.setProfilePic("Profile picture URL for candidate " + (i + 1));
                candidate.setBio("Bio for candidate " + (i + 1));

                candidateService.saveCandidate(candidate);
            }

            // Create and save 5 company instances
            for (int i = 0; i < 5; i++) {
                Company company = new Company();
//                company.setId(i + 1); // Generate company ID
                company.setName("Company Name " + (i + 1));
                company.setEmail("company" + (i + 1) + "@example.com");
                company.setPassword("Password for company " + (i + 1));
                company.setLogo("Logo URL for company " + (i + 1));
                company.setPhone("Phone number for company " + (i + 1));
                company.setDescription("Description for company " + (i + 1));
                company.setCity("City for company " + (i + 1));
                company.setIndustry("Industry for company " + (i + 1));
                company.setWebsite("Website URL for company " + (i + 1));

                companyService.saveCompany(company);
            }
        };
    }
}
