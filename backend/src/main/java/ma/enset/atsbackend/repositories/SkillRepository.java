package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Skills;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skills, Integer> {
}