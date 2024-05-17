package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Candidate;
import ma.enset.atsbackend.repositories.CandidateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateServiceImpl implements CandidateService {
    CandidateRepository candidateRepositories;

    public CandidateServiceImpl(CandidateRepository candidateRepositories) {
        this.candidateRepositories = candidateRepositories;
    }

    @Override
    public List<Candidate> getAllCandidates() {
        return candidateRepositories.findAll();
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
    public void deleteCandidate(int id) {

    }

    @Override
    public Candidate getCandidateById(int id) {
        return candidateRepositories.getReferenceById(id);
    }

    @Override
    public void applyToJob(String candidateId, int jobId) {

    }

    @Override
    public void removeApply(String candidateId, int jobId) {

    }

    @Override
    public double countCandidateswithcount() {
        return candidateRepositories.countCandidates();
    }

//    @Override
//    public double countCandidateswithfunction() {
//        return candidateRepositories.countCandidateById();
//    }

}
