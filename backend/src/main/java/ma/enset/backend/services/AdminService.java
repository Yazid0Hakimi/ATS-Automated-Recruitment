package ma.enset.backend.services;

import ma.enset.backend.entities.Admin;

import java.util.List;

public interface AdminService {
    Admin saveAdmin(Admin admin);
    Admin getAdminById(Long id);
    Admin updateAdmin(Long id, Admin admin);
    void deleteAdmin(Long id);
    List<Admin> getAdmins();
}
