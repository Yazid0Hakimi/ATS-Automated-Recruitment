package ma.enset.backend.services;

import ma.enset.backend.entities.Language;

import java.util.List;

public interface LanguageService {
    Language saveLanguage(Language language);
    Language updateLanguage(Long id, Language language);
    void deleteLanguage(Long id);
    Language getLanguageById(Long id);
    List<Language> getAllLanguage();
    List<Language> getLanguageByCandidate(Long candidateId);
}
