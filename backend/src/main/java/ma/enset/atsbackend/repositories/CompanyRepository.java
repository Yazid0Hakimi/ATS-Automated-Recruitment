package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Integer> {
    Company getCompanyById(int id);
}
