package ma.enset.atsbackend.service;

import ma.enset.atsbackend.dtos.CandidateApplicationDTO;
import ma.enset.atsbackend.dtos.JobApplicationDTO;
import ma.enset.atsbackend.entities.JobApplication;
import ma.enset.atsbackend.repositories.CandidateRepository;
import ma.enset.atsbackend.repositories.JobApplicationRepository;
import ma.enset.atsbackend.repositories.JobRepository;
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
    public List<JobApplication> findAll() {
        return jobApplicationRepository.findAll();
    }

    private JobApplicationDTO mapToJobApplicationDTO(Object[] result) {
        return new JobApplicationDTO(
                (Integer) result[0],
                (Date) result[1],
                (String) result[2],
                (String) result[3],
                (Integer) result[4],
                (String) result[5],
                (Date) result[6],
                (String) result[7] // This can be null if there's no matching company
        );
    }

}
