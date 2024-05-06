package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Company;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CompanyRepository extends MongoRepository<Company, String> {
}
