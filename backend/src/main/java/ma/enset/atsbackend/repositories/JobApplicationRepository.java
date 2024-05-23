package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.dtos.CandidateApplicationDTO;
import ma.enset.atsbackend.entities.Candidate;
import ma.enset.atsbackend.entities.Job;
import ma.enset.atsbackend.entities.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {

    @Query(value = "SELECT c.id, c.first_name, c.last_name, c.phone, c.gender, ja.application_date " +
            "FROM candidates c JOIN job_application ja ON c.id = ja.candidate_id WHERE ja.job_id = :jobId", nativeQuery = true)
    List<Object[]> findCandidatesByJobId(@Param("jobId") Long jobId);


    @Query(value = "SELECT j.id, j.date, j.job_domaine, j.job_title, ja.application_date, c.name, " +
            "c.id AS company_id, c.city, c.description, c.email, c.industry, c.logo, c.name AS company_name, " +
            "c.password, c.phone, c.website " +
            "FROM job j " +
            "JOIN job_application ja ON j.id = ja.job_id " +
            "LEFT JOIN company c ON j.company_id = c.id " +
            "WHERE ja.candidate_id = :candidateId", nativeQuery = true)
    List<Object[]> findJobByCandidateId(@Param("candidateId") Long candidateId);

}
