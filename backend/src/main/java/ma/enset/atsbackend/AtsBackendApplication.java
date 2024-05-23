package ma.enset.atsbackend;

import ma.enset.atsbackend.entities.*;
import ma.enset.atsbackend.repositories.CandidateRepository;
import ma.enset.atsbackend.repositories.JobApplicationRepository;
import ma.enset.atsbackend.repositories.JobRepository;
import ma.enset.atsbackend.service.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Collections;
import java.util.Date;
import java.util.List;

@SpringBootApplication
public class AtsBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AtsBackendApplication.class, args);
    }

//    @Bean
    public CommandLineRunner commandLineRunner(JobService jobService,
                                               CandidateService candidateService,
                                               CompanyService companyService,
                                               EducationService educationService,
                                               ExperienceService experienceService,
                                               LanguageService languagesService,
                                               SkillService skillsService
    ) {
        return args -> {
// 5 candidates
            for (int i = 0; i < 5; i++) {
                Candidate candidate = new Candidate();
                candidate.setFirstName("Candidate_FirstName_" + (i + 1));
                candidate.setLastName("Candidate_LastName_" + (i + 1));
                candidate.setEmail("candidate" + (i + 1) + "@example.com");
                candidate.setPassword("password" + (i + 1));
                candidate.setAddress("Address_" + (i + 1));
                candidate.setPhone("Phone_" + (i + 1));
                candidate.setGender("Gender_" + (i + 1));
                candidate.setCity("City_" + (i + 1));
                candidate.setProfilePic("ProfilePic_URL_" + (i + 1));
                candidate.setBio("Bio_" + (i + 1));

                // Save the candidate
                candidateService.saveCandidate(candidate);
            }
            //5 companies
            for (int i = 0; i < 5; i++) {
                Company company = new Company();
                company.setName("Company " + (i + 1));
                company.setEmail("email" + (i + 1) + "@example.com");
                company.setPassword("password" + (i + 1));
                company.setLogo("Logo URL for company " + (i + 1));
                company.setPhone("Phone number for company " + (i + 1));
                company.setDescription("Description for company " + (i + 1));
                company.setCity("City for company " + (i + 1));
                company.setIndustry("Industry for company " + (i + 1));
                company.setWebsite("Website for company " + (i + 1));

                companyService.saveCompany(company);
            }

            // Create and save 5 job instances
            for (int i = 0; i < 5; i++) {
                Job job = new Job();
//                job.setId(i + 1); // Id starts from 1
                job.setDate(new Date());
                job.setDescription("Description for job " + (i + 1));
                job.setImage("Image URL for job " + (i + 1));
                job.setJobTitle("Job Title " + (i + 1));
//                job.setEnterpriseName("Enterprise Name " + (i + 1));
                job.setWorkTime("Work Time for job " + (i + 1));
                job.setCity("City for job " + (i + 1));
                job.setRecruiterId("Recruiter ID for job " + (i + 1));
                job.setSalaire("Salary for job " + (i + 1)); // Additional field
                job.setJobDomaine("Job Domain for job " + (i + 1)); // Additional field

//                job.se("Job Domain for job " + (i + 1)); // Additional field

                jobService.saveJob(job);
            }

            // Create and save 5 job instances
            for (int i = 0; i < 5; i++) {
                Job job = new Job();
                job.setDate(new Date());
                job.setDescription("Description for job " + (i + 1));
                job.setImage("Image URL for job " + (i + 1));
                job.setJobTitle("Job Title " + (i + 1));
//                job.setEnterpriseName("Enterprise Name " + (i + 1));
                job.setWorkTime("Work Time for job " + (i + 1));
                job.setCity("City for job " + (i + 1));
                job.setCompany(companyService.getCompanyById(1)); // Assuming you have a company with ID 1
                job.setRecruiterId("Recruiter ID for job " + (i + 1));
                job.setSalaire("Salary for job " + (i + 1)); // Additional field
                job.setJobDomaine("Job Domain for job " + (i + 1)); // Additional field

                jobService.saveJob(job);
            }
            for (int i = 0; i < 2; i++) {
                Education education = new Education();
                education.setSchool("School " + (i + 1));
                education.setDiploma("Diploma " + (i + 1));
                education.setSpeciality("Speciality " + (i + 1));
                education.setStartDate(new Date());
                education.setEndDate(new Date());

                Candidate candidate = candidateService.getCandidateById(1); // Adjust this according to your implementation
                education.setCandidate(candidate);

                educationService.saveEducation(education);
            }

            // 5 languages
            for (int i = 0; i < 5; i++) {
                Languages languages = new Languages();
                languages.setName("Language " + (i + 1));

                // Assuming you have associations to set here
                List<Candidate> candidateList = candidateService.getAllCandidates(); // Adjust this according to your implementation
                languages.setCandidate(candidateList);

                languagesService.saveLanguage(languages);
            }
            // 5 skills
            for (int i = 0; i < 5; i++) {
                Skills skills = new Skills();
                skills.setName("Skill " + (i + 1));

                // Assuming you have associations to set here
                List<Candidate> candidateList = candidateService.getAllCandidates(); // Adjust this according to your implementation
                skills.setCandidate(candidateList);

                skillsService.saveSkill(skills);
            }
            // 5 candidates
            for (int i = 0; i < 5; i++) {
                Candidate candidate = new Candidate();
                candidate.setFirstName("firstName " + (i + 1));
                candidate.setLastName("LastName " + (i + 1));
                candidate.setEmail("email" + (i + 1) + "@example.com");
                candidate.setPassword("password" + (i + 1));
                candidate.setAddress("Address " + (i + 1));
                candidate.setPhone("Phone " + (i + 1));
                candidate.setGender("Gender " + (i + 1));
                candidate.setCity("City " + (i + 1));
                candidate.setProfilePic("ProfilePic " + (i + 1));
                candidate.setBio("Bio " + (i + 1));

                // Assuming you have associations to set here
                List<Education> educationList = educationService.getAllEducations(); // Adjust this according to your implementation
                candidate.setEducationList(educationList);

                List<Experience> experienceList = experienceService.getAllExperiences(); // Adjust this according to your implementation
                candidate.setExperienceList(experienceList);

                List<Languages> languagesList = languagesService.getAllLanguages(); // Adjust this according to your implementation

                candidate.setLanguagesList(languagesList);

                List<Skills> skillsList = skillsService.getAllSkills(); // Adjust this according to your implementation
                candidate.setSkillsList(skillsList);

                candidateService.saveCandidate(candidate);
            }
            Candidate candidate = new Candidate();
            candidate.setFirstName("hamid");
            candidate.setLastName("hmed");
            candidate.setEmail("email@example.com");
            candidate.setPassword("password");
            candidate.setAddress("Address");
            candidate.setPhone("Phone");
            candidate.setGender("Gender");
            candidate.setCity("City");
            candidate.setProfilePic("ProfilePic");
            candidate.setBio("Bio");

    // Assuming you have associations to set here
            List<Education> educationList = educationService.getAllEducations();
            if (!educationList.isEmpty()) {
                candidate.setEducationList(Collections.singletonList(educationList.get(0)));
            }

            List<Experience> experienceList = experienceService.getAllExperiences();
            if (!experienceList.isEmpty()) {
                candidate.setExperienceList(Collections.singletonList(experienceList.get(0)));
            }

            List<Languages> languagesList = languagesService.getAllLanguages();
            if (!languagesList.isEmpty()) {
                candidate.setLanguagesList(Collections.singletonList(languagesList.get(0)));
            }

            List<Skills> skillsList = skillsService.getAllSkills();
            if (!skillsList.isEmpty()) {
                candidate.setSkillsList(Collections.singletonList(skillsList.get(0)));
            }

            candidateService.saveCandidate(candidate);

        };
    }

//        @Bean
    public CommandLineRunner commandLineRunner2(JobApplicationRepository jobApplicationRepository,
                                                CandidateRepository candidateRepository,
                                                JobRepository jobRepository,
                                                CompanyService companyService,
                                                JobApplicationService jobApplicationService) {
        return args -> {
            // Create candidates
            Candidate candidate1 = new Candidate();
            candidate1.setAddress("123 Street");
            candidate1.setPhone("123456789");
            candidate1.setGender("Male");
            candidate1.setCity("City1");
            candidate1.setProfilePic("profilePic.jpg");
            candidate1.setBio("Bio of candidate 1");
            candidateRepository.save(candidate1);

            // Create jobs
            Job job1 = new Job();
            job1.setDate(new Date());
            job1.setDescription("Job 1 Description");
            job1.setImage("job1.jpg");
            job1.setJobTitle("Job 1 Title");
//            job1.setEnterpriseName("Enterprise 1");
            job1.setCompany(companyService.getCompanyById(1));

            job1.setWorkTime("Full-time");
            job1.setCity("City 1");
            job1.setRecruiterId("Recruiter 1");
            job1.setSalaire("50000");

            job1.setJobDomaine("IT");
            jobRepository.save(job1);

            Job job2 = new Job();
            job2.setDate(new Date());
            job2.setDescription("Job 2 Description");
            job2.setImage("job2.jpg");
            job2.setJobTitle("Job 2 Title");
//            job2.setEnterpriseName("Enterprise 2");
            job2.setWorkTime("Part-time");
            job2.setCity("City 2");
            job2.setCompany(companyService.getCompanyById(1));

            job2.setRecruiterId("Recruiter 2");
            job2.setSalaire("60000");
            job2.setJobDomaine("Finance");
            jobRepository.save(job2);

            // Create job applications
            JobApplication jobApplication1 = new JobApplication();
            jobApplication1.setCandidate(candidate1);
            jobApplication1.setJob(job1);
            jobApplication1.setApplicationDate(new Date());
            jobApplicationRepository.save(jobApplication1);

            JobApplication jobApplication2 = new JobApplication();
            jobApplication2.setCandidate(candidate1);
            jobApplication2.setJob(job2);
            jobApplication2.setApplicationDate(new Date());
            jobApplicationRepository.save(jobApplication2);

//            List<Job> jobs = jobApplicationRepository.findJobsByCandidateId(Long.valueOf(candidate1.getId()));
//            List<Candidate> candidates = jobApplicationRepository.findCandidatesByJobId((long) job1.getId());


//            List<Long> Jobids = jobApplicationRepository.findJobIdsByCandidateId(113L);
//            List<Long> candidateIds = jobApplicationRepository.findCandidateIdsByJobId(33L);

//            List<Candidate> Jobids = jobApplicationService.findCandidateByJobId(113L);
//            List<Job> candidateIds = jobApplicationService.getJobsByCandidateId(113L);
////
//            System.out.println("################jobs and candidates#################");
////            jobs.forEach(System.out::println);
//            Jobids.forEach(System.out::println);
//            candidateIds.forEach(System.out::println);


//            List<Candidate> jobIds = jobApplicationService.findCandidateByJobId(113L);
//            List<Job> candidateIds = jobApplicationService.getJobsByCandidateId(113L);

//            System.out.println("################jobs and candidates#################");
//// Print the first element of jobIds list
//            System.out.println(jobIds.get(0));
//// Print the first element of candidateIds list
//            System.out.println(candidateIds.get(0));


        };
    }

//@Bean
    CommandLineRunner initData(JobApplicationRepository jobApplicationRepository,
                               CandidateService candidateService,
                               JobService jobService,
                               CompanyService companyService,
                               JobApplicationService jobApplicationService) {
        return args -> {
            // Create Candidates
            Candidate candidate1 = new Candidate();
            candidate1.setFirstName("John");
            candidate1.setLastName("Doe");
            candidate1.setPhone("123456789");
            candidate1.setGender("Male");

            Candidate candidate2 = new Candidate();
            candidate2.setFirstName("Jane");
            candidate2.setLastName("Smith");
            candidate2.setPhone("987654321");
            candidate2.setGender("Female");

            Candidate candidate3 = new Candidate();
            candidate3.setFirstName("Alice");
            candidate3.setLastName("Johnson");
            candidate3.setPhone("456123789");
            candidate3.setGender("Female");

            candidate1 = candidateService.saveCandidate(candidate1);
            candidate2 = candidateService.saveCandidate(candidate2);
            candidate3 = candidateService.saveCandidate(candidate3);

            // Create Jobs
            Job job1 = new Job();
            job1.setDate(new Date());
//            job1.setEnterpriseName("Enterprise1");
            job1.setJobDomaine("IT");
            job1.setCompany(companyService.getCompanyById(1)); // Assuming you have a company with ID 1
            job1.setJobTitle("Software Engineer");

            Job job2 = new Job();
            job2.setDate(new Date());
//            job2.setEnterpriseName("Enterprise2");
            job2.setJobDomaine("Finance");
            job2.setCompany(companyService.getCompanyById(2)); // Assuming you have a company with ID 2
            job2.setJobTitle("Financial Analyst");

            Job job3 = new Job();
            job3.setDate(new Date());
//            job3.setEnterpriseName("Enterprise3");
            job3.setJobDomaine("Marketing");
            job3.setCompany(companyService.getCompanyById(1)); // Assuming you have a company with ID 3
            job3.setJobTitle("Marketing Manager");

            job1 = jobService.saveJob(job1);
            job2 = jobService.saveJob(job2);
            job3 = jobService.saveJob(job3);

            // Create Job Applications
            JobApplication jobApplication1 = new JobApplication();
            jobApplication1.setCandidate(candidate1);
            jobApplication1.setJob(job1);
            jobApplication1.setApplicationDate(new Date());

            JobApplication jobApplication2 = new JobApplication();
            jobApplication2.setCandidate(candidate2);
            jobApplication2.setJob(job2);
            jobApplication2.setApplicationDate(new Date());

            JobApplication jobApplication3 = new JobApplication();
            jobApplication3.setCandidate(candidate3);
            jobApplication3.setJob(job3);
            jobApplication3.setApplicationDate(new Date());

            jobApplicationRepository.save(jobApplication1);
            jobApplicationRepository.save(jobApplication2);
            jobApplicationRepository.save(jobApplication3);

            // Assign job applications to candidates and jobs
            List<JobApplication> jobApplications = jobApplicationService.findAll();
            candidate1.setJobApplications(jobApplications);
            candidate2.setJobApplications(jobApplications);
            candidate3.setJobApplications(jobApplications);

            job1.setJobApplications(jobApplications);
            job2.setJobApplications(jobApplications);
            job3.setJobApplications(jobApplications);

            candidateService.saveCandidate(candidate1);
            candidateService.saveCandidate(candidate2);
            candidateService.saveCandidate(candidate3);

            jobService.saveJob(job1);
            jobService.saveJob(job2);
            jobService.saveJob(job3);
        };
    }

}


