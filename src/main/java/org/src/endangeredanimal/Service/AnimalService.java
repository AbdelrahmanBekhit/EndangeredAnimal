package org.src.endangeredanimal.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.PostConstruct;

import Controller.AnimalDBConnector;
import DTO.Animal;

@Service
public class AnimalService {
    final private AnimalDBConnector dbController = new AnimalDBConnector();

    @RestController
    public class AnimalController {

        @GetMapping("/CallAnimal")
        public ResponseEntity<List<Map<String,String>>> getAnimalData(@RequestParam String country) {
            List<Animal> animals = dbController.getAllAnimalsByCountry(country);
            
            List<Map<String, String>> animalDictList = animals.stream().map(animal -> Map.of(
                "name", animal.getName(),
                "region", animal.getRegion(),
                "country", animal.getCountry(),
                "location", animal.getLocation(),
                "predictedExtinction", animal.getPredictedExtinction()
            )).collect(Collectors.toList());

            return ResponseEntity.ok(animalDictList);
        }
    }

    @PostConstruct
    public void init() {
        String filePath = "general_files/machine_learning.csv";
        if (dbController.isAnimalTableEmpty()){
            importDataFromCSV(filePath);
        }
    }

    private void addAnimal(String name, String region, String country, String location, String predictedExtinction) {
        dbController.addAnimal(name, region, country, location, predictedExtinction);
    }

    private void importDataFromCSV(String filePath) {
        try (CSVReader csvReader = new CSVReader(new FileReader(filePath))) {
            String[] data;
            while ((data = csvReader.readNext()) != null) {
                String name = data[0];
                String region = data[1];
                String country = data[2];
                String location = data[3];
                String predictedExtinction = data[4];

                // Add the animal to the database
                addAnimal(name, region, country, location, predictedExtinction);
            }
        } catch (IOException | CsvValidationException e) {
            e.printStackTrace();
        }
    }
}