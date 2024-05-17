package ma.enset.atsbackend.controller;

import ma.enset.atsbackend.entities.Job;
import ma.enset.atsbackend.service.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")

public class JobController {
    JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/jobs")
    public List<Job> getJobs() {
        return jobService.getAllJobs();
    }

    // Get job by ID
    @GetMapping("/jobs/{id}")
    public Job getJobById(@PathVariable int id) {
        return jobService.getJobById(id);
    }

    // Create a new job
    @PostMapping("/jobs")
    public Job createJob(@RequestBody Job job) {
        return jobService.saveJob(job);
    }

    // Update an existing job
    @PutMapping("/jobs/{id}")
    public Job updateJob(@PathVariable int id, @RequestBody Job job) {
        job.setId(id);
        return jobService.saveJob(job);
    }

    // Delete a job by ID
    @DeleteMapping("/jobs/{id}")
    public void deleteJob(@PathVariable int id) {
        jobService.deleteJob(id);
    }

    @PostMapping("/jobsCount")
    public double count() {
        return jobService.countJobs();
    }

    @GetMapping("/Lastjobs")
    public List<Job> getLastJobs() {
        return jobService.LastJobs();
    }


}
