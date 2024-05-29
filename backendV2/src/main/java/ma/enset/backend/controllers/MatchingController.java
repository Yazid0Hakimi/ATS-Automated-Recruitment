package ma.enset.backend.controllers;

import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.ChatSession;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.ResponseHandler;
import ma.enset.backend.dtos.CandidateApplicationDTO;
import ma.enset.backend.entities.Candidate;
import ma.enset.backend.entities.CandidateSkill;
import ma.enset.backend.entities.Job;
import ma.enset.backend.entities.JobSkill;
import ma.enset.backend.repositories.CandidateRepository;
import ma.enset.backend.repositories.JobRepository;
import ma.enset.backend.services.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class MatchingController {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping("/score")
    public String getScore(@RequestParam int jobId) {
        String projectId = "556765874052";
        String location = "us-central1";
        String modelName = "gemini-1.0-pro-002";

        try {
            Job job = jobRepository.findById((long) jobId).orElseThrow(() -> new RuntimeException("Job not found"));

            List<Integer> candidateIds = jobApplicationService.getCandidatesByJobId((long) jobId)
                    .stream().map(CandidateApplicationDTO::getId).toList();

            List<Map<String, Object>> jobSkills = new ArrayList<>();

            for (JobSkill jobSkill : job.getJobSkills()) {
                Map<String, Object> skillMap = new HashMap<>();
                skillMap.put("skills", jobSkill.getName());
                skillMap.put("level", jobSkill.getLevel());
                jobSkills.add(skillMap);
            }

            List<List<Map<String, Object>>> allCandidateSkills = new ArrayList<>();
            for (Integer candidateId : candidateIds) {
                List<Map<String, Object>> candidateSkills = new ArrayList<>();
                Candidate candidate = candidateRepository.findById(Long.valueOf(candidateId)).orElse(null);

                if (candidate != null) {
                    for (CandidateSkill skill : candidate.getSkills()) {
                        Map<String, Object> skillMap = new HashMap<>();
                        skillMap.put("skills", skill.getName());
                        skillMap.put("level", skill.getLevel());
                        candidateSkills.add(skillMap);
                    }
                    allCandidateSkills.add(candidateSkills);
                }
            }

            String promptText = "Considering the following job skills: "
                    + jobSkills + "\n"
                    + "and the skills of each candidate: "
                    + allCandidateSkills
                    + "\n"
                    + "Identify the candidate with the most relevant skills that closely match the job requirements. Calculate a matching score (0-100) for each candidate based on how closely their skills match the job requirements. Higher score indicates a better fit. and give me a table with json response with the candidate id and the matching score with no other conclusion or expalanation." +
                    "\n" +
                    "i want the response to be like " +
                    "\n" +
                    "[\n" +
                    "  {\n" +
                    "    \"candidate\": 1,\n" +
                    "    \"matchingScore\": 7\n" +
                    "  },\n" +
                    "  {\n" +
                    "    \"candidate\": 2,\n" +
                    "    \"matchingScore\": 4\n" +
                    "  },\n" +
                    "  {\n" +
                    "    \"candidate\": 3,\n" +
                    "    \"matchingScore\": 2\n" +
                    "  }\n" +
                    "]\n" +
                    "remember just Table with json response with the candidate id and the matching score with no other conclusion or expalanation what so ever."
                    ;

            System.out.println(promptText);

            return chatDiscussion(projectId, location, modelName,promptText);
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    public static String chatDiscussion(String projectId, String location, String modelName , String prompt)
            throws IOException {
        try (VertexAI vertexAI = new VertexAI(projectId, location)) {
            GenerateContentResponse response;

            GenerativeModel model = new GenerativeModel(modelName, vertexAI);
            ChatSession chatSession = new ChatSession(model);

            response = chatSession.sendMessage(prompt);
            return ResponseHandler.getText(response);
        }
    }
}

