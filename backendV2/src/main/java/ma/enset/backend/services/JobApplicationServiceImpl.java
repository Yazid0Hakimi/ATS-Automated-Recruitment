package ma.enset.backend.services;


import ma.enset.backend.dtos.CandidateApplicationDTO;
import ma.enset.backend.dtos.JobApplicationDTO;
import ma.enset.backend.entities.Company;
import ma.enset.backend.entities.Job;
import ma.enset.backend.repositories.CandidateRepository;
import ma.enset.backend.repositories.JobApplicationRepository;
import ma.enset.backend.repositories.JobRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service

public class JobApplicationServiceImpl implements JobApplicationService {
    JobApplicationRepository jobApplicationRepository;
    JobRepository jobRepository;
    CandidateRepository candidateRepository;

    public JobApplicationServiceImpl(JobApplicationRepository jobApplicationRepository, JobRepository jobRepository, CandidateRepository candidateRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
        this.jobRepository = jobRepository;
        this.candidateRepository = candidateRepository;
    }

    @Override
    public List<CandidateApplicationDTO> getCandidatesByJobId(Long jobId) {
        List<Object[]> results = jobApplicationRepository.findCandidatesByJobId(jobId);
        return results.stream().map(this::mapToCandidateApplicationDTO).collect(Collectors.toList());
    }

    private CandidateApplicationDTO mapToCandidateApplicationDTO(Object[] result) {
        return new CandidateApplicationDTO(
                (Integer) result[0],
                (String) result[1],
                (String) result[2],
                (String) result[3],
                (String) result[4],
                (Date) result[5]
        );
    }

    @Override
    public List<JobApplicationDTO> getJobsByCandidateId(Long candidateId) {
        List<Object[]> results = jobApplicationRepository.findJobByCandidateId(candidateId);
        return results.stream().map(this::mapToJobApplicationDTO).collect(Collectors.toList());
    }

    @Override
    public List<Job> findAll() {
        return jobApplicationRepository.findAll();
    }

    private JobApplicationDTO mapToJobApplicationDTO(Object[] result) {
        Company company = new Company();
        company.setId((Integer) result[6]); // Assuming company id is at index 6
        company.setCity((String) result[7]);
        company.setDescription((String) result[8]);
        company.setEmail((String) result[9]);
        company.setIndustry((String) result[10]);
        company.setLogo((String) result[11]);
        company.setName((String) result[12]);
        company.setPassword((String) result[13]);
        company.setPhone((String) result[14]);
        company.setWebsite((String) result[15]);

        return new JobApplicationDTO(
                (Integer) result[0],             // job id
                (Date) result[1],             // job date
                (String) result[2],           // job domain
                (String) result[3],           // job title
                (Date) result[4],             // application date
                company
        );
    }
}
