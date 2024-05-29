package ma.enset.backend.services;

import ma.enset.backend.entities.Education;
import ma.enset.backend.entities.Experience;
import ma.enset.backend.repositories.EducationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EducationServiceImpl implements EducationService {

    private EducationRepository educationRepository;

    public EducationServiceImpl(EducationRepository educationRepository) {
        this.educationRepository = educationRepository;
    }

    @Override
    public Education saveEducation(Education Education) {
        return educationRepository.save(Education);
    }

    @Override
    public Education updateEducation(Long id, Education education) {
        Optional<Education> existingEducationOpt = educationRepository.findById(id);
        if (existingEducationOpt.isPresent()) {
            Education existingEducation = existingEducationOpt.get();
            existingEducation.setSchool(education.getSchool());
            existingEducation.setDiploma(education.getDiploma());
            existingEducation.setSpeciality(education.getSpeciality());
            existingEducation.setStartDate(education.getStartDate());
            existingEducation.setEndDate(education.getEndDate());
            existingEducation.setCandidate(education.getCandidate());
            return educationRepository.save(existingEducation);
        } else {
            return null;
        }
    }

    @Override
    public void deleteEducation(Long id) {
        educationRepository.deleteById(id);
    }

    @Override
    public Education getEducationById(Long id) {
        return educationRepository.findById(id).orElse(null);
    }

    @Override
    public List<Education> getAllEducations() {
        return educationRepository.findAll();
    }

    @Override
    public List<Education> getEducationsByCandidate(Long candidateId) {
        return educationRepository.findByCandidateId(candidateId);
    }
}
