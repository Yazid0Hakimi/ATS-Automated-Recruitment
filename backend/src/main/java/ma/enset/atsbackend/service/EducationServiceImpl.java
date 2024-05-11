package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Education;
import ma.enset.atsbackend.repositories.EducationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EducationServiceImpl implements EducationService {

    private final EducationRepository educationRepository;

    public EducationServiceImpl(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    @Override
    public Education saveEducation(Education education) {
        return educationRepository.save(education);
    }

    @Override
    public Education getEducationById(int id) {
        Optional<Education> optionalEducation = educationRepository.findById(id);
        return optionalEducation.orElse(null);
    }

    @Override
    public List<Education> getAllEducations() {
        return educationRepository.findAll();
    }

    @Override
    public Education updateEducation(int id, Education education) {
        if (educationRepository.existsById(id)) {
            education.setId(id);
            return educationRepository.save(education);
        }
        return null;
    }

    @Override
    public void deleteEducation(int id) {
        educationRepository.deleteById(id);
    }
}
