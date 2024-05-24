package ma.enset.atsbackend.controller;

import ma.enset.atsbackend.entities.CandidateSkills;
import ma.enset.atsbackend.entities.JobSkills;
import ma.enset.atsbackend.service.CandidateSkillService;
import ma.enset.atsbackend.service.JobSkillService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class SkillsController {
    private final CandidateSkillService candidateSkillService;
    private final JobSkillService jobSkillService;

    public SkillsController(CandidateSkillService candidateSkillService, JobSkillService jobSkillService) {
        this.candidateSkillService = candidateSkillService;
        this.jobSkillService = jobSkillService;
    }
    // Get all candidates
    @GetMapping("/candidateSkills")
    public List<CandidateSkills> getAllCandidates() {
        return candidateSkillService.getAllCandidateSkills();
    }

    // Get candidate by ID
    @GetMapping("/jobSkills")
    public List<JobSkills> getCandidateById() {
        return  jobSkillService.getAllJobSkills();
    }
}
