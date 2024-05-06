package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.JobDescription;

import java.util.List;

public interface JobDescriptionService {

    List<JobDescription> findJobDesc();
}
