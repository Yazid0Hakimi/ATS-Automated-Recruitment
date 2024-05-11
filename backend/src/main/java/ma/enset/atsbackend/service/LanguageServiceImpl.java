package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Languages;
import ma.enset.atsbackend.repositories.LanguageRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LanguageServiceImpl implements LanguageService {

    private final LanguageRepository languageRepository;

    public LanguageServiceImpl(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    @Override
    public Languages saveLanguage(Languages language) {
        return languageRepository.save(language);
    }

    @Override
    public Languages getLanguageById(int id) {
        Optional<Languages> optionalLanguage = languageRepository.findById(id);
        return optionalLanguage.orElse(null);
    }

    @Override
    public List<Languages> getAllLanguages() {
        return languageRepository.findAll();
    }

    @Override
    public Languages updateLanguage(int id, Languages language) {
        if (languageRepository.existsById(id)) {
            language.setId(id);
            return languageRepository.save(language);
        }
        return null;
    }

    @Override
    public void deleteLanguage(int id) {
        languageRepository.deleteById(id);
    }
}
