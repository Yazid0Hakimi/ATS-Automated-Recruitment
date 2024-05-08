package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Integer> {
}
