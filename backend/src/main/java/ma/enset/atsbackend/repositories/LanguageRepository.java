package ma.enset.atsbackend.repositories;

import ma.enset.atsbackend.entities.Languages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LanguageRepository extends JpaRepository<Languages, Integer> {
}
