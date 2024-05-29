package ma.enset.backend.repositories;

import ma.enset.backend.entities.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {
    List<Experience> findByCandidateId(Long candidateId);
}
