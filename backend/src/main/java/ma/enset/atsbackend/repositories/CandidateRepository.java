package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Candidate , String> {
}
