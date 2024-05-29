package ma.enset.backend.services;

import ma.enset.backend.entities.Admin;
import ma.enset.backend.repositories.AdminRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    private AdminRepository adminRepository;

    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public Admin getAdminById(Long id) {
        return adminRepository.findById(id).orElse(null);
    }

    @Override
    public Admin updateAdmin(Long id, Admin admin) {
        Optional<Admin> existingAdmin = adminRepository.findById(id);
        if (existingAdmin.isPresent()) {
            Admin savedAdmin = existingAdmin.get();
            // Set all attributes from the provided admin object
            savedAdmin.setFirstName(admin.getFirstName());
            savedAdmin.setLastName(admin.getLastName());
            savedAdmin.setEmail(admin.getEmail());
            savedAdmin.setPassword(admin.getPassword());
            // Save and return the updated admin
            return adminRepository.save(savedAdmin);
        } else {
            throw new RuntimeException("Admin not found with id " + id);
        }
    }

    @Override
    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }

    @Override
    public List<Admin> getAdmins() {
        return adminRepository.findAll();
    }
}
