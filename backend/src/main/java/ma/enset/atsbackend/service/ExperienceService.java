package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Experience;

import java.util.List;

public interface ExperienceService {

    // Create
    Experience saveExperience(Experience experience);

    // Read
    Experience getExperienceById(int id);

    List<Experience> getAllExperiences();

    // Update
    Experience updateExperience(int id, Experience experience);

    // Delete
    void deleteExperience(int id);
}
