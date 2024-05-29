package ma.enset.backend.services;

import ma.enset.backend.entities.Application;
import ma.enset.backend.entities.ApplicationStatus;
import ma.enset.backend.entities.Candidate;
import ma.enset.backend.entities.Job;

import java.util.List;

public interface ApplicationService {
    Application applyForJob(Candidate candidate, Job job);
    Application updateApplicationStatus(Long id, ApplicationStatus newStatus);
    void deleteApplication(Long id);
    Application getApplicationById(Long id);
    List<Application> getAllApplications();
    List<Application> getApplicationsByCandidate(Candidate candidate);
    List<Application> getApplicationsByJob(Job job);
}
