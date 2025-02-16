package DTO;

public class Animal {
    //Atributes
    private int id;
    private String name;
    private String region;
    private String country;
    private String predictedExtinction;
    private String description;
    private String imageLink;

    //Constructor
    public Animal() {}

    public Animal(int id, String name, String region, String country, String predictedExtinction) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.country = country;
        this.predictedExtinction = predictedExtinction;
    }

    public Animal(int id, String name, String region, String country, String predictedExtinction, String description) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.country = country;
        this.predictedExtinction = predictedExtinction;
        this.description = description;
    }

    public Animal(int id, String name, String region, String country, String predictedExtinction, String description, String imageLink) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.country = country;
        this.predictedExtinction = predictedExtinction;
        this.description = description;
        this.imageLink = imageLink;
    }

    //Getters
    public final int getId() {return this.id;}
    public final String getName() {return this.name;}
    public final String getRegion() {return this.region;}
    public final String getCountry() {return this.country;}
    public final String getPredictedExtinction() {return this.predictedExtinction;}
    public final String getDescription() {return this.description;}
    public final String getImageLink() {return this.imageLink;}

    //Setters
    public final void setId(final int id) {this.id = id;}
    public final void setName(final String name) {this.name = name;}
    public final void setRegion(final String region) {this.region = region;}
    public final void setCountry(final String country) {this.country = country;}
    public final void setPredictedExtinction(final String predictedExtinction) {this.predictedExtinction = predictedExtinction;}
    public final void setDescription(final String description) {this.description = description;}
    public final void setImageLink(final String imageLink) {this.imageLink = imageLink;}

}
