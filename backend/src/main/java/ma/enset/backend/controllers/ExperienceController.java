package ma.enset.backend.controllers;

import ma.enset.backend.entities.Experience;
import ma.enset.backend.services.ExperienceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/experiences")
@CrossOrigin("*")
public class ExperienceController {
    private ExperienceService experienceService;

    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @PostMapping
    public Experience saveExperience(@RequestBody Experience experience) {
        return experienceService.saveExperience(experience);
    }

    @PutMapping("/{id}")
    public Experience updateExperience(@PathVariable Long id, @RequestBody Experience experience) {
        return experienceService.updateExperience(id, experience);
    }

    @DeleteMapping("/{id}")
    public void deleteExperience(@PathVariable Long id) {
        experienceService.deleteExperience(id);
    }

    @GetMapping("/{id}")
    public Experience getExperienceById(@PathVariable Long id) {
        return experienceService.getExperienceById(id);
    }

    @GetMapping
    public List<Experience> getAllExperiences() {
        return experienceService.getAllExperiences();
    }

    @GetMapping("/candidate/{candidateId}")
    public List<Experience> getExperiencesByCandidate(@PathVariable Long candidateId) {
        return experienceService.getExperiencesByCandidate(candidateId);
    }
}
