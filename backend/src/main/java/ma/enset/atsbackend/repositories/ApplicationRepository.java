package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Application;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApplicationRepository extends MongoRepository<Application, String> {
}
