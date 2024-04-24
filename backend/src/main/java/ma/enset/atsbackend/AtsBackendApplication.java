package ma.enset.atsbackend;

import ma.enset.atsbackend.entities.Test;
import ma.enset.atsbackend.repositories.TestRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AtsBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AtsBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(TestRepository testRepository) {
        return args -> {
            System.out.println("test1");
            Test test = new Test("12211221" , "name2");
            testRepository.save(test);
            System.out.println("test2");
        };
    }
}
