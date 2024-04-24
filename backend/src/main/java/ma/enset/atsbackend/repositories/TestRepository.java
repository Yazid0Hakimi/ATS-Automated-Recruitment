package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Test;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestRepository extends MongoRepository<Test, String> {

}
