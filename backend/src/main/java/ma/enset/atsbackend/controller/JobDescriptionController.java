package ma.enset.atsbackend.controller;

import lombok.AllArgsConstructor;
import ma.enset.atsbackend.entities.Job;
import ma.enset.atsbackend.service.JobService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")

public class JobDescriptionController {
    JobService jobService;

    public JobDescriptionController(JobService jobService) {
        this.jobService = jobService;
    }
    @GetMapping("/")
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
        return  jobService.saveJob(job);
    }

    // Update an existing job
//    @PutMapping("/jobs/{id}")
//    public Job updateJob(@PathVariable int id, @RequestBody Job job) {
//
//        return ResponseEntity.ok(updatedJob);
//    }

    // Delete a job by ID
    @DeleteMapping("/jobs/{id}")
    public void deleteJob(@PathVariable int id) {
        jobService.deleteJob(id);

    }
}
