package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Education;
import ma.enset.atsbackend.entities.Job;

import java.util.List;

public interface EducationService {


    Education saveEducation(Education education);

    Education getEducationById(int id);

    List<Education> getAllEducations();

    Education updateEducation(int id, Education education);

    void deleteEducation(int id);
}
