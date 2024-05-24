package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.JobSkills;
import ma.enset.atsbackend.entities.Skills;

import java.util.List;

public interface JobSkillService {

    // Create
    Skills saveJobSkill(JobSkills jobSkills);
    // Read
    Skills getJobSkillById(int id);

    List<JobSkills> getAllJobSkills();

    // Update
    Skills updateJobSkill(int id, Skills skill);

    // Delete
    void deleteJobSkill(int id);
}
