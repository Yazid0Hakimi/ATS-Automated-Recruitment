package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Skills;

import java.util.List;

public interface SkillService {

    // Create
    Skills saveSkill(Skills skill);

    // Read
    Skills getSkillById(int id);

    List<Skills> getAllSkills();

    // Update
    Skills updateSkill(int id, Skills skill);

    // Delete
    void deleteSkill(int id);
}
