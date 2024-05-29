package ma.enset.backend.repositories;

import ma.enset.backend.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    @Query("SELECT j FROM Job j ORDER BY j.postedAt DESC")
    List<Job> findTop6ByOrderByPostedAtDesc();
}
