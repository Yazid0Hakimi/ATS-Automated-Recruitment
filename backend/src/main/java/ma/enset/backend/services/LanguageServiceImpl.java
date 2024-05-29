package ma.enset.backend.services;

import ma.enset.backend.entities.CandidateSkill;
import ma.enset.backend.entities.Language;
import ma.enset.backend.repositories.LanguageRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class LanguageServiceImpl implements LanguageService {
    private LanguageRepository languageRepository;

    public LanguageServiceImpl(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    @Override
    public Language saveLanguage(Language language) {
        return languageRepository.save(language);
    }

    @Override
    public Language updateLanguage(Long id, Language language) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if (optionalLanguage.isPresent()) {
            Language existingLanguage = optionalLanguage.get();
            // Update all other attributes
            existingLanguage.setName(language.getName());
            existingLanguage.setCandidate(language.getCandidate());
            existingLanguage.setCandidate(language.getCandidate());

            return languageRepository.save(existingLanguage);
        } else {
            throw new RuntimeException("Language not found with id " + id);
        }
    }

    @Override
    public void deleteLanguage(Long id) {
        languageRepository.deleteById(id);
    }

    @Override
    public Language getLanguageById(Long id) {
        return languageRepository.findById(id).orElse(null);
    }

    @Override
    public List<Language> getAllLanguage() {
        return languageRepository.findAll();
    }

    @Override
    public List<Language> getLanguageByCandidate(Long candidateId) {
        return languageRepository.findByCandidateId(candidateId);
    }
}
