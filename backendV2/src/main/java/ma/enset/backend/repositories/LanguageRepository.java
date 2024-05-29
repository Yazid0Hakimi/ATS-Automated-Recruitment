package ma.enset.backend.repositories;

import ma.enset.backend.entities.Language;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LanguageRepository extends JpaRepository<Language, Long> {
    List<Language> findByCandidateId(Long candidateId);
}
