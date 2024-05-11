package ma.enset.atsbackend;

import ma.enset.atsbackend.entities.*;
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

    @Bean
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
                job.setEnterpriseName("Enterprise Name " + (i + 1));
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
                job.setEnterpriseName("Enterprise Name " + (i + 1));
                job.setWorkTime("Work Time for job " + (i + 1));
                job.setCity("City for job " + (i + 1));
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

                // Assuming you have candidate instances created already
                // Fetch a candidate from the database to set as the owner of the education
                // For demonstration purposes, let's assume we fetch a candidate with ID = 1
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
}
