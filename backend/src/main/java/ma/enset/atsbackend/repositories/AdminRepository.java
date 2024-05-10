package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.AtsAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<AtsAdmin, Integer> {
}
