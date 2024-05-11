package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Experience;
import ma.enset.atsbackend.repositories.ExperienceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExperienceServiceImpl implements ExperienceService {

    private final ExperienceRepository experienceRepository;

    public ExperienceServiceImpl(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    @Override
    public Experience saveExperience(Experience experience) {
        if (experience.getId() != 0 || experienceRepository.existsById(experience.getId())) {
            throw new IllegalArgumentException("Experience ID must be null or 0 for save operation.");
        }
        return experienceRepository.save(experience);
    }

    @Override
    public Experience getExperienceById(int id) {
        Optional<Experience> optionalExperience = experienceRepository.findById(id);
        return optionalExperience.orElse(null);
    }

    @Override
    public List<Experience> getAllExperiences() {
        return experienceRepository.findAll();
    }

    @Override
    public Experience updateExperience(int id, Experience experience) {
        if (!experienceRepository.existsById(id)) {
            throw new IllegalArgumentException("Experience with ID " + id + " does not exist.");
        }
        experience.setId(id);
        return experienceRepository.save(experience);
    }

    @Override
    public void deleteExperience(int id) {
        if (!experienceRepository.existsById(id)) {
            throw new IllegalArgumentException("Experience with ID " + id + " does not exist.");
        }
        experienceRepository.deleteById(id);
    }
}
