package ma.enset.atsbackend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Education {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String school;
    private String diploma;
    private String speciality;
    private Date startDate;
    private Date endDate;
}
