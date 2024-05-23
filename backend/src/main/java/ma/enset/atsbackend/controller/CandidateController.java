package ma.enset.atsbackend.controller;

import ma.enset.atsbackend.entities.Candidate;
import ma.enset.atsbackend.service.CandidateService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin("*")
public class CandidateController {
    private final CandidateService candidateService;

    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    // Get all candidates
    @GetMapping("/candidates")
    public List<Candidate> getAllCandidates() {
        return candidateService.getAllCandidates();
    }

    // Get candidate by ID
    @GetMapping("/candidates/{id}")
    public Candidate getCandidateById(@PathVariable int id) {
        return candidateService.getCandidateById(id);
    }

    // Create a new candidate
    @PostMapping("/candidates")
    public Candidate createCandidate(@RequestBody Candidate candidate) {
        return candidateService.saveCandidate(candidate);
    }

    // Update an existing candidate
    @PutMapping("/candidates/{id}")
    public Candidate updateCandidate(@PathVariable int id, @RequestBody Candidate candidate) {
        candidate.setId(id);
        return candidateService.saveCandidate(candidate);
    }

    // Delete a candidate by ID
    @DeleteMapping("/candidates/{id}")
    public void deleteCandidate(@PathVariable int id) {
        candidateService.deleteCandidate(id);
    }


    @PostMapping("/candidatesCount")
    public double count() {
        return candidateService.countCandidateswithcount();
    }
}
