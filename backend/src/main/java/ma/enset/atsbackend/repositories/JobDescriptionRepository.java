package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.JobDescription;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobDescriptionRepository extends MongoRepository<JobDescription, String> {
}
