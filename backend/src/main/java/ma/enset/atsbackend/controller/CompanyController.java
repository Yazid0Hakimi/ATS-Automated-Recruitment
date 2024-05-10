package ma.enset.atsbackend.controller;

import ma.enset.atsbackend.entities.Company;
import ma.enset.atsbackend.service.CompanyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    // Get all companies
    @GetMapping("/companies")
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    // Get company by ID
    @GetMapping("/companies/{id}")
    public Company getCompanyById(@PathVariable int id) {
        return companyService.getCompanyById(id);
    }

    // Create a new company
    @PostMapping("/companies")
    public Company createCompany(@RequestBody Company company) {
        return companyService.saveCompany(company);
    }

    // Update an existing company
    @PutMapping("/companies/{id}")
    public Company updateCompany(@PathVariable int id, @RequestBody Company company) {
        company.setId(id);
        return companyService.saveCompany(company);
    }

    // Delete a company by ID
    @DeleteMapping("/companies/{id}")
    public void deleteCompany(@PathVariable int id) {
        companyService.deleteCompany(id);
    }
}
