package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Skills;
import ma.enset.atsbackend.repositories.SkillRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillServiceImpl implements SkillService {

    private final SkillRepository skillRepository;

    public SkillServiceImpl(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    @Override
    public Skills saveSkill(Skills skill) {
        return skillRepository.save(skill);
    }

    @Override
    public Skills getSkillById(int id) {
        Optional<Skills> optionalSkill = skillRepository.findById(id);
        return optionalSkill.orElse(null);
    }

    @Override
    public List<Skills> getAllSkills() {
        return skillRepository.findAll();
    }

    @Override
    public Skills updateSkill(int id, Skills skill) {
        if (skillRepository.existsById(id)) {
            skill.setId(id);
            return skillRepository.save(skill);
        }
        return null;
    }

    @Override
    public void deleteSkill(int id) {
        skillRepository.deleteById(id);
    }
}
