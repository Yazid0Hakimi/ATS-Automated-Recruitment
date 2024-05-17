package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CandidateRepository extends JpaRepository<Candidate , Integer> {

    @Query("SELECT COUNT(c.id) FROM Candidate c")
    long countCandidates();
}
