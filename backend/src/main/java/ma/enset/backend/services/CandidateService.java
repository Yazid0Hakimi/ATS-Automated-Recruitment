package ma.enset.backend.services;

import ma.enset.backend.entities.Candidate;

import java.util.List;

public interface CandidateService {
    Candidate saveCandidate(Candidate candidate);
    Candidate getCandidateById(Long id);
    List<Candidate> getCandidates();
    Candidate updateCandidate(Long id, Candidate candidate);
    void deleteCandidate(Long id);
    Long countCandidates();
}
