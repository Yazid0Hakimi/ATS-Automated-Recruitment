package ma.enset.atsbackend.service;

import ma.enset.atsbackend.dtos.CandidateApplicationDTO;
import ma.enset.atsbackend.dtos.JobApplicationDTO;
import ma.enset.atsbackend.entities.Candidate;
import ma.enset.atsbackend.entities.Job;
import ma.enset.atsbackend.entities.JobApplication;

import java.util.List;

public interface JobApplicationService {
    List<CandidateApplicationDTO> getCandidatesByJobId(Long jobId);

    List<JobApplicationDTO> getJobsByCandidateId(Long candidateId);

    List<JobApplication> findAll();
}
