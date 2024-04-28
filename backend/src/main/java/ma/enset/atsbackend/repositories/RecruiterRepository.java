package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Recruiter;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecruiterRepository extends MongoRepository<Recruiter, String> {
}
