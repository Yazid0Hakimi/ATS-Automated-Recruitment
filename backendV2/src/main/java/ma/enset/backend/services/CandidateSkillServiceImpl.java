package ma.enset.backend.services;

import ma.enset.backend.entities.CandidateSkill;
import ma.enset.backend.entities.Experience;
import ma.enset.backend.repositories.CandidateSkillRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CandidateSkillServiceImpl implements CandidateSkillService {
    private CandidateSkillRepository candidateSkillRepository;

    public CandidateSkillServiceImpl(CandidateSkillRepository candidateSkillRepository) {
        this.candidateSkillRepository = candidateSkillRepository;
    }

    @Override
    public CandidateSkill saveCandidateSkill(CandidateSkill candidateSkill) {
        return candidateSkillRepository.save(candidateSkill);
    }

    @Override
    public CandidateSkill updateCandidateSkill(Long id, CandidateSkill candidateSkill) {
        Optional<CandidateSkill> optionalCandidateSkill = candidateSkillRepository.findById(id);
        if (optionalCandidateSkill.isPresent()) {
            CandidateSkill existingSkill = optionalCandidateSkill.get();
            // Update all other attributes
            existingSkill.setName(candidateSkill.getName());
            existingSkill.setCandidate(candidateSkill.getCandidate());
            existingSkill.setCandidate(candidateSkill.getCandidate());

            return candidateSkillRepository.save(existingSkill);
        } else {
            throw new RuntimeException("Candidate Skill not found with id " + id);
        }
    }

    @Override
    public void deleteCandidateSkill(Long id) {
        candidateSkillRepository.deleteById(id);
    }

    @Override
    public CandidateSkill getCandidateSkillById(Long id) {
        return candidateSkillRepository.findById(id).orElse(null);
    }

    @Override
    public List<CandidateSkill> getAllCandidateSkills() {
        return candidateSkillRepository.findAll();
    }

    @Override
    public List<CandidateSkill> getCandidateSkillsByCandidate(Long candidateId) {
        return candidateSkillRepository.findByCandidateId(candidateId);
    }
}
