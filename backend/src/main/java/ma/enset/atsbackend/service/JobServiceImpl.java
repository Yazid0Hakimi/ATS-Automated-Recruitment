package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Job;
import ma.enset.atsbackend.repositories.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobServiceImpl implements JobService {
    JobRepository jobRepositories;

    public JobServiceImpl(JobRepository jobRepositories) {
        this.jobRepositories = jobRepositories;
    }

    @Override
    public Job saveJob(Job job) {
        return jobRepositories.save(job);
    }

    @Override
    public List<Job> getAllJobs() {
        return jobRepositories.findAll();
    }

    @Override
    public Job getJobById(int id) {
        return null;
    }

    @Override
    public Job updateJob(Job job) {
        // Check if the job exists
//        if (jobRepositories.existsById(job.getId())) {
//            // If exists, save the updated job
//            return jobRepositories.save(job);
//        } else {
//            // If not exists, return null or throw an exception
        return null;
//        }
    }

    @Override
    public void deleteJob(int id) {
        jobRepositories.deleteById(id);
    }
}
