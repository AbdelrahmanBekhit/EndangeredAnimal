package org.src.endangeredanimal.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;

import Controller.AnimalDBConnector;
import DTO.Animal;

@Service
public class AnimalService {
    final private AnimalDBConnector dbController = new AnimalDBConnector();

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