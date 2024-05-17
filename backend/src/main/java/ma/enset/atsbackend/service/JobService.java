package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Job;
import org.springframework.stereotype.Service;

import java.util.List;
public interface JobService {

    // Method to create a new job
    Job saveJob(Job job);

    // Method to retrieve all jobs
    List<Job> getAllJobs();

    // Method to retrieve a job by ID
    Job getJobById(int id);

    // Method to update an existing job
    Job updateJob(Job job);

    // Method to delete a job by ID
    void deleteJob(int id);

    Job getJobsWithCompany( int id);

    Long countJobs();

    List<Job> LastJobs();
}
