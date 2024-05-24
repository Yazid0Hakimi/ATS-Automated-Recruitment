package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.CandidateSkills;
import ma.enset.atsbackend.entities.Skills;
import ma.enset.atsbackend.repositories.CandidateSkillRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateSkillServiceImpl implements CandidateSkillService {
    CandidateSkillRepository candidateSkillRepository;

    public CandidateSkillServiceImpl(CandidateSkillRepository skillRepository) {
        this.candidateSkillRepository = skillRepository;
    }

    @Override
    public Skills saveCandidateSkill(Skills skill) {
        return null;
    }

    @Override
    public Skills getCandidateSkillById(int id) {
        return null;
    }

    @Override
    public List<CandidateSkills> getAllCandidateSkills() {
        return candidateSkillRepository.findAll();
    }

    @Override
    public Skills updateCandidateSkill(int id, Skills skill) {
        return null;
    }

    @Override
    public void deleteCandidateSkill(int id) {

    }
}
