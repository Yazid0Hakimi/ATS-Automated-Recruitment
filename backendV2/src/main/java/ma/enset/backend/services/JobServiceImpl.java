package ma.enset.backend.services;

import ma.enset.backend.entities.Job;
import ma.enset.backend.entities.JobSkill;
import ma.enset.backend.repositories.JobRepository;
import ma.enset.backend.repositories.JobSkillRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class JobServiceImpl implements JobService {
    private JobRepository jobRepository;
    private JobSkillRepository jobSkillRepository;

    public JobServiceImpl(JobRepository jobRepository, JobSkillRepository jobSkillRepository) {
        this.jobRepository = jobRepository;
        this.jobSkillRepository = jobSkillRepository;
    }

    @Override
    public Job saveJob(Job job) {
        // Save the job to get the generated ID
        Job savedJob = jobRepository.save(job);

        // Set the job ID for each job skill and save them
        List<JobSkill> jobSkills = job.getJobSkills();
        if (jobSkills != null) {
            jobSkills.forEach(jobSkill -> {
                jobSkill.setJob(savedJob);
                jobSkillRepository.save(jobSkill);
            });
        }

        return savedJob;
    }

    @Override
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @Override
    public Job getJobById(Long id) {
        return jobRepository.findById(id).orElse(null);
    }

    @Override
    public Job updateJob(Long id, Job job) {
        Optional<Job> existingJobOptional = jobRepository.findById(id);
        if (existingJobOptional.isPresent()) {
            Job existingJob = existingJobOptional.get();
            // Update existingJob with data from job
            existingJob.setTitle(job.getTitle());
            existingJob.setDescription(job.getDescription());
            existingJob.setCity(job.getCity());
            existingJob.setPostedAt(job.getPostedAt());
            existingJob.setJobType(job.getJobType());
            existingJob.setJobDomain(job.getJobDomain());
            existingJob.setSalary(job.getSalary());
            existingJob.setCompany(job.getCompany());

            // Save the updated job
            return jobRepository.save(existingJob);
        } else {
            throw new RuntimeException("Job not found with id " + id);
        }
    }

    @Override
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

    @Override
    public List<Job> getJobsByCompany(Long companyId) {
        return jobRepository.findByCompanyId(companyId);
    }

    @Override
    public Long countJobs() {
        return jobRepository.count();
    }

    @Override
    public List<Job> LastJobs() {
        return jobRepository.findTop6ByOrderByPostedAtDesc();
    }
}
