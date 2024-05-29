package ma.enset.backend.controllers;

import ma.enset.backend.entities.CandidateSkill;
import ma.enset.backend.services.CandidateSkillService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/candidateSkills")
@CrossOrigin("*")
public class CandidateSkillController {
    private CandidateSkillService candidateSkillService;

    public CandidateSkillController(CandidateSkillService candidateSkillService) {
        this.candidateSkillService = candidateSkillService;
    }

    @GetMapping("{id}")
    public Object getCandidateSkillById(Long id) {
        return candidateSkillService.getCandidateSkillById(id);
    }

    @GetMapping("/candidate/{candidateId}")
    public Object getCandidateSkillsByCandidate(Long candidateId) {
        return candidateSkillService.getCandidateSkillsByCandidate(candidateId);
    }

    @PostMapping
    public CandidateSkill saveCandidateSkill(@RequestBody CandidateSkill candidateSkill) {
        return candidateSkillService.saveCandidateSkill(candidateSkill);
    }

    @PutMapping("/{id}")
    public CandidateSkill updateCandidateSkill(@PathVariable Long id, @RequestBody CandidateSkill candidateSkill) {
        return candidateSkillService.updateCandidateSkill(id, candidateSkill);
    }

    @DeleteMapping("/{id}")
    public void deleteCandidateSkill(@PathVariable Long id) {
        candidateSkillService.deleteCandidateSkill(id);
    }
}
