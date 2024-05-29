package ma.enset.backend.controllers;

import ma.enset.backend.entities.Language;
import ma.enset.backend.services.LanguageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/languages")
@CrossOrigin("*")
public class LanguageController {
    private LanguageService languageService;

    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @GetMapping("/{id}")
    public Language getLanguageById(@PathVariable Long id) {
        return languageService.getLanguageById(id);
    }

    @GetMapping("/candidate/{candidateId}")
    public List<Language> getLanguageByCandidate(@PathVariable Long candidateId) {
        return languageService.getLanguageByCandidate(candidateId);
    }

    @PostMapping
    public Language saveLanguage(@RequestBody Language language) {
        return languageService.saveLanguage(language);
    }

    @PutMapping("/{id}")
    public Language updateLanguage(@PathVariable Long id, @RequestBody Language language) {
        return languageService.updateLanguage(id, language);
    }

    @DeleteMapping("/{id}")
    public void deleteLanguage(@PathVariable Long id) {
        languageService.deleteLanguage(id);
    }
}
