package ma.enset.backend.services;

import ma.enset.backend.entities.Experience;

import java.util.List;

public interface ExperienceService {
    Experience saveExperience(Experience experience);
    Experience updateExperience(Long id, Experience experience);
    void deleteExperience(Long id);
    Experience getExperienceById(Long id);
    List<Experience> getAllExperiences();
    List<Experience> getExperiencesByCandidate(Long candidateId);
}
