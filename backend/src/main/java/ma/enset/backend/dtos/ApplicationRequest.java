package ma.enset.backend.dtos;

import lombok.Data;

@Data
public class ApplicationRequest {
    private Long candidateId;
    private Long jobId;
}
