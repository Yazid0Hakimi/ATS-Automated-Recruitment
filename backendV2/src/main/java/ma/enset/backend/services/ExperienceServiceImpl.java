package ma.enset.backend.services;

import ma.enset.backend.entities.Experience;
import ma.enset.backend.repositories.ExperienceRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ExperienceServiceImpl implements ExperienceService {
    private ExperienceRepository experienceRepository;

    public ExperienceServiceImpl(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    @Override
    public Experience saveExperience(Experience experience) {
        return experienceRepository.save(experience);
    }

    @Override
    public Experience updateExperience(Long id, Experience experience) {
        Optional<Experience> optionalExperience = experienceRepository.findById(id);
        if (optionalExperience.isPresent()) {
            Experience existingExperience = optionalExperience.get();
            // Update all other attributes
            existingExperience.setTitle(experience.getTitle());
            existingExperience.setCompany(experience.getCompany());
            existingExperience.setCity(experience.getCity());
            existingExperience.setStartDate(experience.getStartDate());
            existingExperience.setEndDate(experience.getEndDate());
            existingExperience.setCandidate(experience.getCandidate());

            return experienceRepository.save(existingExperience);
        } else {
            throw new RuntimeException("Experience not found with id " + id);
        }
    }

    @Override
    public void deleteExperience(Long id) {
        experienceRepository.deleteById(id);
    }

    @Override
    public Experience getExperienceById(Long id) {
        return experienceRepository.findById(id).orElse(null);
    }

    @Override
    public List<Experience> getAllExperiences() {
        return experienceRepository.findAll();
    }

    @Override
    public List<Experience> getExperiencesByCandidate(Long candidateId) {
        return experienceRepository.findByCandidateId(candidateId);
    }
}
