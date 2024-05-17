package ma.enset.atsbackend.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import ma.enset.atsbackend.entities.*;

import java.util.Date;
import java.util.List;

@Data
public class CandidateApplicationDTO {
    private Integer id;
    private String firstName;
    private String lastName;
    private String phone;
    private String gender;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy/MM/dd")
    private Date application_date;

    public CandidateApplicationDTO(Integer id, String firstName, String lastName, String phone, String gender, Date application_date) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.gender = gender;
        this.application_date = application_date;
    }
}


