package org.src.endangeredanimal.Controller;

import java.util.ArrayList;
import java.util.List;
import java.sql.*;
import java.util.ArrayList;

import org.src.endangeredanimal.DTO.Animal;

public class AnimalDBConnector{
    private Connection connection;

    public AnimalDBConnector() {
        try {
            String url = "jdbc:mysql://localhost:3306/endangeredanimals";
            String user = "root";
            String password = "password";

            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(url, user, password);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public AnimalDBConnector(Connection connection) {
        this.connection = connection;
    }

    // Utility function to add new entry to a table if not exists and get the ID
    private int addEntryAndGetId(String table, String column, String value) {
        // Check if the entry exists first
        String existingValue = getEntryIfExists(table, column, value);
        if (existingValue != null) {
            return Integer.parseInt(existingValue);  // Return the existing ID if entry is found
        } else {
            String insertQuery = "INSERT INTO " + table + " (" + column + ") VALUES (?)";
            try (PreparedStatement insertStmt = connection.prepareStatement(insertQuery, Statement.RETURN_GENERATED_KEYS)) {
                insertStmt.setString(1, value);
                insertStmt.executeUpdate();
                ResultSet generatedKeys = insertStmt.getGeneratedKeys();
                if (generatedKeys.next()) {
                    return generatedKeys.getInt(1);  // Return the generated ID of the new entry
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return -1;
    }

    // Add animal, checking and adding regions, countries, and locations
    public void addAnimal(String name, String region, String country, String location, String threat, String predictedExtinction) {
        int regionId = addEntryAndGetId("region", "name", region);
        int countryId = addEntryAndGetId("country", "name", region);
        int locationId = addEntryAndGetId("location", "name", region);

        String query = "INSERT INTO animal (name, region_id, country_id, location_id, threat, predicted_extinction) " +
                    "VALUES (?, ?, ?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, name);
            statement.setInt(2, regionId);
            statement.setInt(3, countryId);
            statement.setInt(4, locationId);
            statement.setString(5, threat);
            statement.setString(6, predictedExtinction);
            statement.executeUpdate();
            System.out.println("Animal added successfully.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Update animal details
    public void updateAnimal(int id, String name, String region, String country, String location, String threat, String predictedExtinction) {
        int regionId = addEntryAndGetId("region", "name", region);
        int countryId = addEntryAndGetId("country", "name", region);
        int locationId = addEntryAndGetId("location", "name", region);

        String query = "UPDATE animal SET name = ?, region_id = ?, country_id = ?, location_id = ?, " +
                       "threat = ?, predicted_extinction = ? WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, name);
            statement.setInt(2, regionId);
            statement.setInt(3, countryId);
            statement.setInt(4, locationId);
            statement.setString(5, threat);
            statement.setString(6, predictedExtinction);
            statement.setInt(7, id);
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Animal updated successfully.");
            } else {
                System.out.println("Animal with ID " + id + " not found.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Delete an animal
    public void deleteAnimal(int id) {
        String query = "DELETE FROM animal WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, id);
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Animal deleted successfully.");
            } else {
                System.out.println("Animal with ID " + id + " not found.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Animal> getAnimalByName(String animalName) {
        // Use the LIKE operator with wildcard to allow partial matching
        String query = "SELECT * FROM animal WHERE name LIKE ?";
        List<Animal> animalDetails = new ArrayList<>();
        
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            // Add % before and after the animalName to match partial strings
            statement.setString(1, "%" + animalName + "%");
            
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Animal animal = new Animal();
                animal.setName(resultSet.getString("name"));
                animal.setRegion(getRegionById(resultSet.getInt("region_id")));
                animal.setCountry(getCountryById(resultSet.getInt("country_id")));
                animal.setLocation(getLocationById(resultSet.getInt("location_id")));
                animal.setThreat(resultSet.getString("threat"));
                animal.setPredictedExtinction(resultSet.getString("predicted_extinction"));
                animalDetails.add(animal);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return animalDetails;
    }

    public List<Animal> getAllAnimalsByCountry(String country) {
        String countryQuery = "SELECT id FROM country WHERE country = ?";
        String animalQuery = "SELECT * FROM animal WHERE country_id = ?";
        List<Animal> animals = new ArrayList<>();
        
        try (PreparedStatement countryStatement = connection.prepareStatement(countryQuery)) {
            countryStatement.setString(1, country);
            ResultSet countryResultSet = countryStatement.executeQuery();
            
            if (countryResultSet.next()) {
                int countryId = countryResultSet.getInt("id");
                
                try (PreparedStatement animalStatement = connection.prepareStatement(animalQuery)) {
                    animalStatement.setInt(1, countryId);
                    ResultSet animalResultSet = animalStatement.executeQuery();
                    
                    while (animalResultSet.next()) {
                        Animal animal = new Animal();
                        animal.setName(animalResultSet.getString("name"));
                        animal.setRegion(getRegionById(animalResultSet.getInt("region_id")));
                        animal.setCountry(country);
                        animal.setLocation(getLocationById(animalResultSet.getInt("location_id")));
                        animal.setThreat(animalResultSet.getString("threat"));
                        animal.setPredictedExtinction(animalResultSet.getString("predicted_extinction"));
                        animals.add(animal);
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        
        return animals;
    }

    public List<Animal> getAllAnimalsByRegion(String region) {
        String query = "SELECT * FROM animal WHERE region_id = (SELECT id FROM region WHERE name = ?)";
        List<Animal> animals = new ArrayList<>();
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, region);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Animal animal = new Animal();
                animal.setName(resultSet.getString("name"));
                animal.setRegion(region);
                animal.setCountry(getCountryById(resultSet.getInt("country_id")));
                animal.setLocation(getLocationById(resultSet.getInt("location_id")));
                animal.setThreat(resultSet.getString("threat"));
                animal.setPredictedExtinction(resultSet.getString("predicted_extinction"));
                animals.add(animal);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return animals;
    }

    public List<Animal> getAllAnimalsByLocation(String location) {
        String query = "SELECT * FROM animal WHERE location_id = (SELECT id FROM location WHERE name = ?)";
        List<Animal> animals = new ArrayList<>();
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, location);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Animal animal = new Animal();
                animal.setName(resultSet.getString("name"));
                animal.setRegion(getRegionById(resultSet.getInt("region_id")));
                animal.setCountry(getCountryById(resultSet.getInt("country_id")));
                animal.setLocation(location);
                animal.setThreat(resultSet.getString("threat"));
                animal.setPredictedExtinction(resultSet.getString("predicted_extinction"));
                animals.add(animal);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return animals;
    }

    private String getRegionById(int regionId) {
        String query = "SELECT region FROM region WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, regionId);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                return resultSet.getString("region");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    private String getCountryById(int countryId) {
        String query = "SELECT country FROM country WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, countryId);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                return resultSet.getString("country");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    private String getLocationById(int locationId) {
        String query = "SELECT location FROM location WHERE id = ?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, locationId);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                return resultSet.getString("location");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public boolean isAnimalTableEmpty() {
        String query = "SELECT COUNT(*) AS rowCount FROM animal";
        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query)) {

            if (resultSet.next()) {
                int rowCount = resultSet.getInt("rowCount");
                return rowCount == 0;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return true;
    }

    private String getEntryIfExists(String table, String column, String value) {
        String query = "SELECT " + column + " FROM " + table + " WHERE " + column + " = ?";
        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, value);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return rs.getString(column);  // Return the value if found
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;  // Return null if no entry found
    }

    public Connection getConnection() {
        return connection;
    }

    public void close() {
        try {
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
