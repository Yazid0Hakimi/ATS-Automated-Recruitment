package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Candidate;
import ma.enset.atsbackend.entities.Job;
import org.springframework.stereotype.Service;

import java.util.List;
public interface CandidateService {

    List<Candidate> getAllCandidates();

    // Method to save a new candidate
    Candidate saveCandidate(Candidate candidate);

    // Method to update an existing candidate
    Candidate updateCandidate(Candidate candidate);

    // Method to delete a candidate by ID
    void deleteCandidate(int id);

    // Method to retrieve a candidate by ID
    Candidate getCandidateById(int id);

    // Method to apply to a job
    void applyToJob(String candidateId, int jobId);

    // Method to remove job application
    void removeApply(String candidateId, int jobId);


    double countCandidateswithcount();

//    double countCandidateswithfunction();
}
