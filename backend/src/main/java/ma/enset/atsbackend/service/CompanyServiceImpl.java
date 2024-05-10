package ma.enset.atsbackend.service;

import ma.enset.atsbackend.entities.Company;
import ma.enset.atsbackend.repositories.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CompanyServiceImpl implements CompanyService {
    CompanyRepository companyRepositories;

    public CompanyServiceImpl(CompanyRepository companyRepositories) {
        this.companyRepositories = companyRepositories;
    }

    @Override
    public Company saveCompany(Company company) {
        companyRepositories.save(company);
        return company;
    }

    @Override
    public Company updateCompany(Company company) {
        return null;
    }

    @Override
    public void deleteCompany(int id) {

    }

    @Override
    public Company getCompanyById(int id) {
        return null;
    }

    @Override
    public List<Company> getAllCompanies() {
        return null;
    }
}
