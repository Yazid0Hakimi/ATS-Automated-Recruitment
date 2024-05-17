package ma.enset.atsbackend.controller;


import ma.enset.atsbackend.dtos.CandidateApplicationDTO;
import ma.enset.atsbackend.dtos.JobApplicationDTO;
import ma.enset.atsbackend.service.JobApplicationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class JobApplicationController {
    private JobApplicationService jobApplicationService;

    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }
    @GetMapping("/candidatesByJobId/{jobId}")
    public List<CandidateApplicationDTO> getCandidates(@PathVariable(name = "jobId") Long jobId) {
        return jobApplicationService.getCandidatesByJobId(jobId);
    }
    @GetMapping("/jobsByCandidateId/{candidateId}")
    public List<JobApplicationDTO> getJobs(@PathVariable(name = "candidateId") Long candidateId) {
        return jobApplicationService.getJobsByCandidateId(candidateId);
    }


}
