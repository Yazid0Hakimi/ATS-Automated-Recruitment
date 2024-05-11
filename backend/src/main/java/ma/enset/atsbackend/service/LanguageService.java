package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Languages;

import java.util.List;

public interface LanguageService {

    // Create
    Languages saveLanguage(Languages language);

    // Read
    Languages getLanguageById(int id);

    List<Languages> getAllLanguages();

    // Update
    Languages updateLanguage(int id, Languages language);

    // Delete
    void deleteLanguage(int id);
}
