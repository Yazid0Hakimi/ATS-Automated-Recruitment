package ma.enset.backend.services;

import ma.enset.backend.entities.*;
import ma.enset.backend.repositories.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CandidateServiceImpl implements CandidateService {
    private CandidateRepository candidateRepository;
    private EducationRepository educationRepository;
    private ExperienceRepository experienceRepository;
    private CandidateSkillRepository skillRepository;
    private LanguageRepository languageRepository;

    public CandidateServiceImpl(CandidateRepository candidateRepository, EducationRepository educationRepository, ExperienceRepository experienceRepository, CandidateSkillRepository skillRepository, LanguageRepository languageRepository) {
        this.candidateRepository = candidateRepository;
        this.educationRepository = educationRepository;
        this.experienceRepository = experienceRepository;
        this.skillRepository = skillRepository;
        this.languageRepository = languageRepository;
    }

    @Override
    public Candidate saveCandidate(Candidate candidate) {
        Candidate savedCandidate = candidateRepository.save(candidate);

        // Set candidate_id for each education and save
        List<Education> educations = candidate.getEducation();
        if (educations != null) {
            educations.forEach(education -> {
                education.setCandidate(savedCandidate);
                educationRepository.save(education);
            });
        }

        // Set candidate_id for each experience and save
        List<Experience> experiences = candidate.getExperiences();
        if (experiences != null) {
            experiences.forEach(experience -> {
                experience.setCandidate(savedCandidate);
                experienceRepository.save(experience);
            });
        }

        // Set candidate_id for each skill and save
        List<CandidateSkill> skills = candidate.getSkills();
        if (skills != null) {
            skills.forEach(skill -> {
                skill.setCandidate(savedCandidate);
                skillRepository.save(skill);
            });
        }

        // Set candidate_id for each language and save
        List<Language> languages = candidate.getLanguages();
        if (languages != null) {
            languages.forEach(language -> {
                language.setCandidate(savedCandidate);
                languageRepository.save(language);
            });
        }

        return savedCandidate;
    }

    @Override
    public Candidate getCandidateById(Long id) {
        return candidateRepository.findById(id).orElse(null);
    }

    @Override
    public List<Candidate> getCandidates() {
        return candidateRepository.findAll();
    }

    @Override
    public Candidate updateCandidate(Long id, Candidate candidate) {
        Optional<Candidate> existingCandidate = candidateRepository.findById(id);
        if (existingCandidate.isPresent()) {
            Candidate updatedCandidate = existingCandidate.get();

            // Update only the basic information
            updatedCandidate.setFirstName(candidate.getFirstName());
            updatedCandidate.setLastName(candidate.getLastName());
            updatedCandidate.setEmail(candidate.getEmail());
            updatedCandidate.setPassword(candidate.getPassword());
            updatedCandidate.setAddress(candidate.getAddress());
            updatedCandidate.setPhone(candidate.getPhone());
            updatedCandidate.setGender(candidate.getGender());
            updatedCandidate.setCity(candidate.getCity());
            updatedCandidate.setProfilePic(candidate.getProfilePic());
            updatedCandidate.setBio(candidate.getBio());

            // Save and return the updated candidate
            return candidateRepository.save(updatedCandidate);
        } else {
            throw new RuntimeException("Candidate not found with id " + id);
        }
    }

    @Override
    public void deleteCandidate(Long id) {
        candidateRepository.deleteById(id);
    }

    @Override
    public Long countCandidates() {
        return candidateRepository.count();
    }
}
