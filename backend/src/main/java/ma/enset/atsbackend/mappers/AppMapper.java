package ma.enset.atsbackend.mappers;

import ma.enset.atsbackend.dtos.CandidateDTO;
import ma.enset.atsbackend.dtos.JobDTO;
import ma.enset.atsbackend.entities.Candidate;
import ma.enset.atsbackend.entities.Job;

public class AppMapper {
    private JobDTO convertToJobDTO(Job job) {
        JobDTO jobDTO = new JobDTO();
        jobDTO.setId(job.getId());
        jobDTO.setDate(job.getDate());
        jobDTO.setDescription(job.getDescription());
        jobDTO.setImage(job.getImage());
        jobDTO.setJobTitle(job.getJobTitle());
        jobDTO.setEnterpriseName(job.getEnterpriseName());
        jobDTO.setWorkTime(job.getWorkTime());
        jobDTO.setCity(job.getCity());
        jobDTO.setRecruiterId(job.getRecruiterId());
        jobDTO.setSalaire(job.getSalaire());
        jobDTO.setJobDomaine(job.getJobDomaine());
        jobDTO.setRequiredSkills(job.getRequiredSkills());
        jobDTO.setCompany(job.getCompany());
        return jobDTO;
    }

    private CandidateDTO convertToCandidateDTO(Candidate candidate) {
        CandidateDTO candidateDTO = new CandidateDTO();
        candidateDTO.setId(candidate.getId());
        candidateDTO.setAddress(candidate.getAddress());
        candidateDTO.setPhone(candidate.getPhone());
        candidateDTO.setGender(candidate.getGender());
        candidateDTO.setCity(candidate.getCity());
        candidateDTO.setProfilePic(candidate.getProfilePic());
        candidateDTO.setBio(candidate.getBio());
        candidateDTO.setEducationList(candidate.getEducationList());
        candidateDTO.setExperienceList(candidate.getExperienceList());
        candidateDTO.setLanguagesList(candidate.getLanguagesList());
        candidateDTO.setSkillsList(candidate.getSkillsList());
        return candidateDTO;
    }
}
