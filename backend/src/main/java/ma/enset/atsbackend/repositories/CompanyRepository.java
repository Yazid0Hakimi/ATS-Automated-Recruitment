package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CompanyRepository extends JpaRepository<Company, Integer> {
    Company getCompanyById(int id);

    @Query("SELECT COUNT(c.id) FROM Company c")
    long countCompanies();

}
