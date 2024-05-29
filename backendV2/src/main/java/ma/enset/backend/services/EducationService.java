package ma.enset.backend.services;


import ma.enset.backend.entities.Education;

import java.util.List;

public interface EducationService {
    Education saveEducation(Education Education);
    Education updateEducation(Long id, Education education);
    void deleteEducation(Long id);
    Education getEducationById(Long id);
    List<Education> getAllEducations();
    List<Education> getEducationsByCandidate(Long candidateId);
}
