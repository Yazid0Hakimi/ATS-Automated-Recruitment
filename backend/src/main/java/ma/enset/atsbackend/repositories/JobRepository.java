package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Integer> {
    @Query("SELECT COUNT(j.id) FROM Job j")
    long countJobs();

    List<Job> findTop6ByOrderByDateDesc();
}
