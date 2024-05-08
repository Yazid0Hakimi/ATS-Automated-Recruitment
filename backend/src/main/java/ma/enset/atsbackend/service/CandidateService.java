package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Candidate;
import ma.enset.atsbackend.entities.Job;
import org.springframework.stereotype.Service;

import java.util.List;
public interface CandidateService {

    // Method to save a new candidate
    Candidate saveCandidate(Candidate candidate);

    // Method to update an existing candidate
    Candidate updateCandidate(Candidate candidate);

    // Method to delete a candidate by ID
    void deleteCandidate(String id);

    // Method to retrieve a candidate by ID
    Candidate getCandidateById(String id);

    // Method to apply to a job
    void applyToJob(String candidateId, String jobId);

    // Method to remove job application
    void removeApply(String candidateId, String jobId);

}
