package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.JobSkills;
import ma.enset.atsbackend.entities.Skills;
import ma.enset.atsbackend.repositories.JobSkillRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class JobSkillServiceImpl implements JobSkillService {
    JobSkillRepository jobSkillRepository;

    public JobSkillServiceImpl(JobSkillRepository skillRepository) {
        this.jobSkillRepository = skillRepository;
    }



    @Override
    public Skills saveJobSkill(JobSkills jobSkills) {
        return null;
    }

    @Override
    public Skills getJobSkillById(int id) {
        return null;
    }

    @Override
    public List<JobSkills> getAllJobSkills() {
        return jobSkillRepository.findAll();
    }

    @Override
    public Skills updateJobSkill(int id, Skills skill) {
        return null;
    }

    @Override
    public void deleteJobSkill(int id) {

    }
}
