package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Candidate;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CandidateRepository extends MongoRepository<Candidate, String> {
}
