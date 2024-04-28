package ma.enset.atsbackend;

import ma.enset.atsbackend.entities.*;
import ma.enset.atsbackend.repositories.ApplicationRepository;
import ma.enset.atsbackend.repositories.CandidateRepository;
import ma.enset.atsbackend.repositories.JobDescriptionRepository;
import ma.enset.atsbackend.repositories.RecruiterRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.*;

@SpringBootApplication
public class AtsBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AtsBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(RecruiterRepository recruiterRepository,CandidateRepository candidateRepository, JobDescriptionRepository jobDescriptionRepository, ApplicationRepository applicationRepository) {
        return args -> {
            // Create and save users
            List<Candidate> candidates = new ArrayList<>();
            List<Recruiter> recruiters = new ArrayList<>();


            for (int i = 0; i < 10; i++) {
                Candidate candidate = new Candidate();
                candidate.setId(UUID.randomUUID().toString()); // Generating UUID
                candidate.setFirstName("UserFirstName" + i);
                candidate.setLastName("UserLastName" + i);
                candidate.setEmail("user" + i + "@example.com");
                candidate.setAddress("UserAddress" + i);
                candidate.setPhone("123-456-789" + i);
                candidate.setRole(Role.CANDIDATE);
                candidate.setSkills(Arrays.asList("Java", "Spring"));
                candidate.setLanguages(Arrays.asList("English", "French"));
                candidates.add(candidate);

                Recruiter recruiter = new Recruiter();
                recruiter.setId(UUID.randomUUID().toString()); // Generating UUID
                recruiter.setFirstName("UserFirstName" + i);
                recruiter.setLastName("UserLastName" + i);
                recruiter.setEmail("user" + i + "@example.com");
                recruiter.setAddress("UserAddress" + i);
                recruiter.setPhone("123-456-789" + i);
                recruiter.setRole(Role.RECRUITER);
                recruiter.setCompanyDescription("a leading tech company dedicated to leveraging data-driven insights " + i);
                recruiters.add(recruiter);
            }

            candidateRepository.saveAll(candidates); // Save candidates using candidateRepository
            recruiterRepository.saveAll(recruiters); // Save recruiters using recruiterRepository

            // Find one user by ID and display it
              Candidate foundCandidate = candidateRepository.findById(candidates.get(0).getId()).orElse(null);
                System.out.println("found Candidate: " + foundCandidate);
            // Find all users and display them
            List<Recruiter> allUsers = recruiterRepository.findAll();
            System.out.println("All users:");
            allUsers.forEach(System.out::println);

            // Create and save job descriptions
            List<JobDescription> jobDescriptions = new ArrayList<>();
            for (int i = 0; i < 10; i++) {
                JobDescription jobDescription = new JobDescription();
                jobDescription.setDate(new Date());
                jobDescription.setDescription("Description for job " + i);
                jobDescription.setImage("Image URL for job " + i);
                jobDescription.setJobTitle("Job Title " + i);
                jobDescription.setEntrepriseName("Company " + i);
                jobDescription.setWorkTime("Full-time");
                jobDescription.setCity("City " + i);
                jobDescription.setRecruiterId("recruiterId" + i);
                jobDescription.setApplicationIds(Arrays.asList("applicationId1", "applicationId2"));
                jobDescriptions.add(jobDescription);
            }
            jobDescriptionRepository.saveAll(jobDescriptions);

            // Find one job description by ID and display it
            JobDescription foundJobDescription = jobDescriptionRepository.findById(jobDescriptions.get(0).getId()).orElse(null);
            System.out.println("Found job description: " + foundJobDescription);

            // Find all job descriptions and display them
            List<JobDescription> allJobDescriptions = jobDescriptionRepository.findAll();
            System.out.println("All job descriptions:");
            allJobDescriptions.forEach(System.out::println);

            // Create and save applications
            List<Application> applications = new ArrayList<>();
            for (int i = 0; i < 10; i++) {
                Application application = new Application();
                application.setJobDescriptionId("jobDescriptionId" + i);
                application.setUserId("userId" + i);
                application.setRecruterId("recruiterId" + i);
                application.setDate(new Date());
                applications.add(application);
            }
            applicationRepository.saveAll(applications);

            // Find one application by ID and display it
            Application foundApplication = applicationRepository.findById(applications.get(0).getId()).orElse(null);
            System.out.println("Found application: " + foundApplication);

            // Find all applications and display them
            List<Application> allApplications = applicationRepository.findAll();
            System.out.println("All applications:");
            allApplications.forEach(System.out::println);
        };
    }


}
