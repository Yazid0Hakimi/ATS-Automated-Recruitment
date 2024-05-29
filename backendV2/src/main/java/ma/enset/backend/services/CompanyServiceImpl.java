package ma.enset.backend.services;

import ma.enset.backend.entities.Company;
import ma.enset.backend.repositories.CompanyRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CompanyServiceImpl implements CompanyService {
    private CompanyRepository companyRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public Company updateCompany(Long id, Company company) {
        Optional<Company> optionalExistingCompany = companyRepository.findById(id);
        if (optionalExistingCompany.isPresent()) {
            Company existingCompany = optionalExistingCompany.get();
            existingCompany.setName(company.getName());
            existingCompany.setEmail(company.getEmail());
            existingCompany.setPassword(company.getPassword());
            existingCompany.setLogo(company.getLogo());
            existingCompany.setPhone(company.getPhone());
            existingCompany.setDescription(company.getDescription());
            existingCompany.setCity(company.getCity());
            existingCompany.setIndustry(company.getIndustry());
            existingCompany.setWebsite(company.getWebsite());
            existingCompany.setStatus(company.getStatus());

            return companyRepository.save(existingCompany);
        } else {
            throw new RuntimeException("Company not found with id " + id);
        }
    }

    @Override
    public void deleteCompany(Long id) {
        companyRepository.deleteById(id);
    }

    @Override
    public Company getCompanyById(Long id) {
        return companyRepository.findById(id).orElse(null);
    }

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Long countCompanies() {
        return companyRepository.count();
    }
}
