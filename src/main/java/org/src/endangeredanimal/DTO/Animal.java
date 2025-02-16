package DTO;

public class Animal {
    //Atributes
    private int id;
    private String name;
    private String region;
    private String country;
    private String location;
    private String threat;
    private String predictedExtinction;
    private String description;
    private String imageLink;

    //Constructor
    public Animal() {}

    public Animal(int id, String name, String region, String country, String location, String threat, String predictedExtinction) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.country = country;
        this.location = location;
        this.threat = threat;
        this.predictedExtinction = predictedExtinction;
    }

    public Animal(int id, String name, String region, String country, String location, String threat, String predictedExtinction, String description) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.country = country;
        this.location = location;
        this.threat = threat;
        this.predictedExtinction = predictedExtinction;
        this.description = description;
    }

    public Animal(int id, String name, String region, String country, String location, String threat, String predictedExtinction, String description, String imageLink) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.country = country;
        this.location = location;
        this.threat = threat;
        this.predictedExtinction = predictedExtinction;
        this.description = description;
        this.imageLink = imageLink;
    }

    //Getters
    public final int getId() {return id;}
    public final String getName() {return name;}
    public final String getRegion() {return region;}
    public final String getCountry() {return country;}
    public final String getLocation() {return location;}
    public final String getThreat() {return threat;}
    public final String getPredictedExtinction() {return predictedExtinction;}
    public final String getDescription() {return description;}
    public final String getImageLink() {return imageLink;}

    //Setters
    public final void setId(final int id) {this.id = id;}
    public final void setName(final String name) {this.name = name;}
    public final void setRegion(final String region) {this.region = region;}
    public final void setCountry(final String country) {this.country = country;}
    public final void setLocation(final String location) {this.location = location;}
    public final void setThreat(final String threat) {this.threat = threat;}
    public final void setPredictedExtinction(final String predictedExtinction) {this.predictedExtinction = predictedExtinction;}
    public final void setDescription(final String description) {this.description = description;}
    public final void setImageLink(final String imageLink) {this.imageLink = imageLink;}

}
