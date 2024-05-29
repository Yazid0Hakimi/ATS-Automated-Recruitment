package ma.enset.backend.controllers;

import ma.enset.backend.dtos.ApplicationRequest;
import ma.enset.backend.entities.Application;
import ma.enset.backend.entities.ApplicationStatus;
import ma.enset.backend.entities.Candidate;
import ma.enset.backend.entities.Job;
import ma.enset.backend.services.ApplicationService;
import ma.enset.backend.services.CandidateService;
import ma.enset.backend.services.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
@CrossOrigin("*")
public class ApplicationController {
    private ApplicationService applicationService;
    private CandidateService candidateService;
    private JobService jobService;

    public ApplicationController(ApplicationService applicationService, CandidateService candidateService, JobService jobService) {
        this.applicationService = applicationService;
        this.candidateService = candidateService;
        this.jobService = jobService;
    }

    @GetMapping("/{id}")
    public Object getApplicationById(@PathVariable Long id) {
        return applicationService.getApplicationById(id);
    }

    @GetMapping("/all")
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @GetMapping("/candidate/{id}")
    public List<Application> getApplicationsByCandidate(@PathVariable Long id) {
        Candidate candidate = candidateService.getCandidateById(id);
        return applicationService.getApplicationsByCandidate(candidate);
    }

    @GetMapping("/job/{id}")
    public List<Application> getApplicationsByJob(@PathVariable Long id) {
        Job job = jobService.getJobById(id);
        return applicationService.getApplicationsByJob(job);
    }

    @PostMapping("/apply")
    public Application applyForJob(@RequestBody ApplicationRequest request) {
        Candidate candidate = candidateService.getCandidateById(request.getCandidateId());
        Job job = jobService.getJobById(request.getJobId());
        return applicationService.applyForJob(candidate, job);
    }

    @PutMapping("/{id}")
    public Application updateApplicationStatus(@PathVariable Long id, @RequestBody ApplicationStatus newStatus) {
        return applicationService.updateApplicationStatus(id, newStatus);
    }

    @DeleteMapping("/{id}")
    public void deleteApplication(@PathVariable Long id) {
        applicationService.deleteApplication(id);
    }
}
