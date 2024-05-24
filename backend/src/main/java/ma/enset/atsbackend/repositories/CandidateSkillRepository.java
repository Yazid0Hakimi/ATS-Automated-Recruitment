package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.CandidateSkills;
import ma.enset.atsbackend.entities.Skills;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateSkillRepository extends JpaRepository<CandidateSkills, Integer> {
}
