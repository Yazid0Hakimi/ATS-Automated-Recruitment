package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Candidate;
import ma.enset.atsbackend.repositories.CandidateRepository;
import org.springframework.stereotype.Service;

@Service
public class CandidateServiceImpl implements CandidateService {
    CandidateRepository candidateRepositories;

    public CandidateServiceImpl(CandidateRepository candidateRepositories) {
        this.candidateRepositories = candidateRepositories;
    }

    @Override
    public Candidate saveCandidate(Candidate candidate) {
        candidateRepositories.save(candidate);
        return candidate;
    }

    @Override
    public Candidate updateCandidate(Candidate candidate) {
        return null;
    }

    @Override
    public void deleteCandidate(String id) {

    }

    @Override
    public Candidate getCandidateById(String id) {
        return null;
    }

    @Override
    public void applyToJob(String candidateId, String jobId) {

    }

    @Override
    public void removeApply(String candidateId, String jobId) {

    }

}
