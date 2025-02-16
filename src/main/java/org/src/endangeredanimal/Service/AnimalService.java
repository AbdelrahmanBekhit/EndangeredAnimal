package org.src.endangeredanimal.Service;

import java.io.FileReader;
import java.io.IOException;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

import org.src.endangeredanimal.Controller.AnimalDBConnector;

import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
public class AnimalService {
    final private AnimalDBConnector dbController = new AnimalDBConnector();

    @PostConstruct
    public void init() {
        String filePath = "general_files/machine_learning.csv";
        importDataFromCSV(filePath);
    }

    private void addAnimal(String name, String region, String country, String location, String threat, String predictedExtinction) {
        dbController.addAnimal(name, region, country, location, threat, predictedExtinction);
    }

    private void importDataFromCSV(String filePath) {
        try (CSVReader csvReader = new CSVReader(new FileReader(filePath))) {
            String[] data;
            while ((data = csvReader.readNext()) != null) {
                String name = data[0];
                String region = data[1];
                String country = data[2];
                String location = data[3];
                String threat = data[4];
                String predictedExtinction = data[5];

                // Add the animal to the database
                addAnimal(name, region, country, location, threat, predictedExtinction);
            }
        } catch (IOException | CsvValidationException e) {
            e.printStackTrace();
        }
    }
}