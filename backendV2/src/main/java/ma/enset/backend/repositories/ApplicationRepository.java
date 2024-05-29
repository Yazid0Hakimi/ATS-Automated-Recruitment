package ma.enset.backend.repositories;

import ma.enset.backend.entities.Application;
import ma.enset.backend.entities.Candidate;
import ma.enset.backend.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByCandidate(Candidate candidate);
    List<Application> findByJob(Job job);
}
