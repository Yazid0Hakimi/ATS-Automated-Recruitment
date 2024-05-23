package ma.enset.atsbackend;

import ma.enset.atsbackend.entities.*;
import ma.enset.atsbackend.repositories.CandidateRepository;
import ma.enset.atsbackend.repositories.JobApplicationRepository;
import ma.enset.atsbackend.repositories.JobRepository;
import ma.enset.atsbackend.service.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Collections;
import java.util.Date;
import java.util.List;

@SpringBootApplication
public class AtsBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AtsBackendApplication.class, args);
    }


}


