package ma.enset.backend.services;

import ma.enset.backend.dtos.CandidateApplicationDTO;
import ma.enset.backend.dtos.JobApplicationDTO;
import ma.enset.backend.entities.Job;

import java.util.List;

public interface JobApplicationService {
    List<CandidateApplicationDTO> getCandidatesByJobId(Long jobId);

    List<JobApplicationDTO> getJobsByCandidateId(Long candidateId);

    List<Job> findAll();
}
