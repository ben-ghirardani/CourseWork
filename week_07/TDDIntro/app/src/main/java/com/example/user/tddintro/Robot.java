package com.example.user.tddintro;

/**
 * Created by user on 07/08/2017.
 */

public class Robot {

    private String name;
    private String colour;
    private double battery;

    public Robot(String name, String colour) {
        this.name = name;
        this.colour = colour;
        this.battery = 100.0;
    }


    public String getName() {
        return this.name;
    }

    public String getColour() {
        return this.colour;
    }

    public double getBatteryLevel() {
        return this.battery;
    }

    public String makeDrink(String drinkName) {
        this.battery -= 10.0;
        return "I am making " + drinkName;
    }

    public String washTheDishes() {
        this.battery -= 30.0;
        return "I am washing the dishes";
    }

    public String doTheDusting() {
        return "I am dusting";
    }

    public double rechargeBattery() {
        this.battery = 100.0;
        return this.battery;
    }
}
