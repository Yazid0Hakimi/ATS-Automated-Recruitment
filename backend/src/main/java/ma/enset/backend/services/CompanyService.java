package ma.enset.backend.services;

import ma.enset.backend.entities.Company;

import java.util.List;

public interface CompanyService {
    Company saveCompany(Company company);
    Company updateCompany(Long id, Company company);
    void deleteCompany(Long id);
    Company getCompanyById(Long id);
    List<Company> getAllCompanies();
    Long countCompanies();
}
