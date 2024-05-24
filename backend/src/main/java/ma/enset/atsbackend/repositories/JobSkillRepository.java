package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.JobSkills;
import ma.enset.atsbackend.entities.Skills;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobSkillRepository extends JpaRepository<JobSkills, Integer> {
}
