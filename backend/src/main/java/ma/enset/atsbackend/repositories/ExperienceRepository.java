package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Experience;
import ma.enset.atsbackend.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExperienceRepository extends JpaRepository<Experience, Integer> {
}
