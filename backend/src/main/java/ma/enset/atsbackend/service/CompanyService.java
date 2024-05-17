package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Company;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CompanyService {

    // Method to register a new company
    Company saveCompany(Company company);

    // Method to update company information
    Company updateCompany(Company company);

    // Method to delete a company by ID
    void deleteCompany(int id);

    // Method to retrieve a company by ID
    Company getCompanyById(int id);

    // Method to retrieve all companies
    List<Company> getAllCompanies();

    Long countCompanies();
}
