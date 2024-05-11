package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Education;
import ma.enset.atsbackend.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EducationRepository extends JpaRepository<Education, Integer> {
}
