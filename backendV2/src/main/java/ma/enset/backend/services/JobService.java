package ma.enset.backend.services;

import ma.enset.backend.entities.Job;

import java.util.List;

public interface JobService {
    Job saveJob(Job job);
    List<Job> getAllJobs();
    Job getJobById(Long id);
    Job updateJob(Long id, Job job);
    void deleteJob(Long id);
    Long countJobs();
    List<Job> LastJobs();
}
