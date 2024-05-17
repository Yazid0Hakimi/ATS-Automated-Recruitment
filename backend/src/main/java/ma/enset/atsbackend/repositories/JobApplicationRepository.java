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


//    @Query("SELECT ja.job.id  FROM JobApplication ja WHERE ja.candidate.id = :candidateId")
//    List<Long> findJobIdsByCandidateId(@Param("candidateId") Long candidateId);
//
//    @Query("SELECT ja.candidate.id FROM JobApplication ja WHERE ja.job.id = :jobId")
//    List<Long> findCandidateIdsByJobId(@Param("jobId") Long jobId);

//    @Query("SELECT c , ja.application_date FROM Candidate c JOIN JobApplication ja ON c.id = ja.candidate.id WHERE ja.id = :jobId")
//    List<Candidate> findCandidatesByJobId(@Param("jobId") Long jobId);

    @Query(value = "SELECT c.id, c.first_name, c.last_name, c.phone, c.gender, ja.application_date " +
            "FROM candidates c JOIN job_application ja ON c.id = ja.candidate_id WHERE ja.job_id = :jobId", nativeQuery = true)
    List<Object[]> findCandidatesByJobId(@Param("jobId") Long jobId);


    @Query(value = "SELECT j.id, j.date, j.enterprise_name, j.job_domaine, j.company_id, j.job_title, ja.application_date, c.name " +
            "FROM job j " +
            "JOIN job_application ja ON j.id = ja.job_id " +
            "LEFT JOIN company c ON j.company_id = c.id " +
            "WHERE ja.candidate_id = :candidateId", nativeQuery = true)
//    @Query(value = "select * from candidates", nativeQuery = true)
    List<Object[]> findJobByCandidateId(@Param("candidateId") Long candidateId);

}
