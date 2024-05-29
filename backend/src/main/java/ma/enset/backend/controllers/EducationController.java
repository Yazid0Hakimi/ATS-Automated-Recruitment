package ma.enset.backend.controllers;

import ma.enset.backend.entities.Education;
import ma.enset.backend.services.EducationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/educations")
@CrossOrigin("*")
public class EducationController {
    private EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @GetMapping("/{id}")
    public Object getEducationById(@PathVariable Long id) {
        return educationService.getEducationById(id);
    }

    @GetMapping("/candidate/{candidateId}")
    public List<Education> getEducationsByCandidate(@PathVariable Long candidateId) {
        return educationService.getEducationsByCandidate(candidateId);
    }

    @PostMapping
    public Education saveEducation(@RequestBody Education education) {
        return educationService.saveEducation(education);
    }

    @PutMapping("/{id}")
    public Education updateEducation(@PathVariable Long id, @RequestBody Education education) {
        return educationService.updateEducation(id, education);
    }

    @DeleteMapping("/{id}")
    public void deleteEducation(@PathVariable Long id) {
        educationService.deleteEducation(id);
    }
}
