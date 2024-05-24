package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.CandidateSkills;
import ma.enset.atsbackend.entities.Skills;

import java.util.List;

public interface CandidateSkillService {

    // Create
    Skills saveCandidateSkill(Skills skill);

    // Read
    Skills getCandidateSkillById(int id);

    List<CandidateSkills> getAllCandidateSkills();

    // Update
    Skills updateCandidateSkill(int id, Skills skill);

    // Delete
    void deleteCandidateSkill(int id);
}
