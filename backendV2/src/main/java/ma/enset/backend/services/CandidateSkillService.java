package ma.enset.backend.services;


import ma.enset.backend.entities.CandidateSkill;

import java.util.List;

public interface CandidateSkillService {
    CandidateSkill saveCandidateSkill(CandidateSkill candidateSkill);
    CandidateSkill updateCandidateSkill(Long id, CandidateSkill candidateSkill);
    void deleteCandidateSkill(Long id);
    CandidateSkill getCandidateSkillById(Long id);
    List<CandidateSkill> getAllCandidateSkills();
    List<CandidateSkill> getCandidateSkillsByCandidate(Long candidateId);
}
