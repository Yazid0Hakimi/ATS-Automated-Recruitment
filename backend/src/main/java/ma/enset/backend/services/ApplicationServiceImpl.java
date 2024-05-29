package ma.enset.backend.services;

import ma.enset.backend.entities.Application;
import ma.enset.backend.entities.ApplicationStatus;
import ma.enset.backend.entities.Candidate;
import ma.enset.backend.entities.Job;
import ma.enset.backend.repositories.ApplicationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ApplicationServiceImpl implements ApplicationService {
    private ApplicationRepository applicationRepository;

    public ApplicationServiceImpl(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @Override
    public Application applyForJob(Candidate candidate, Job job) {
        Application application = new Application();
        application.setCandidate(candidate);
        application.setJob(job);
        application.setAppliedAt(new Date());
        application.setStatus(ApplicationStatus.PENDING); // Set initial status
        return applicationRepository.save(application);
    }

    @Override
    public Application updateApplicationStatus(Long id, ApplicationStatus newStatus) {
        Optional<Application> optionalApplication = applicationRepository.findById(id);
        if (optionalApplication.isPresent()) {
            Application application = optionalApplication.get();
            application.setStatus(newStatus);
            return applicationRepository.save(application);
        } else {
            throw new RuntimeException("Application not found with id " + id);
        }
    }

    @Override
    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }

    @Override
    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id).orElse(null);
    }

    @Override
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    @Override
    public List<Application> getApplicationsByCandidate(Candidate candidate) {
        return applicationRepository.findByCandidate(candidate);
    }

    @Override
    public List<Application> getApplicationsByJob(Job job) {
        return applicationRepository.findByJob(job);
    }
}
