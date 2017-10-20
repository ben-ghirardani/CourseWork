package com.example.user.tddintro;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 * Created by user on 07/08/2017.
 */

public class RobotTest {

    @Test
    public void testRobotSetup() {
        Robot robot = new Robot("C3PO", "Gold");
        assertEquals("C3PO", robot.getName());
        assertEquals("Gold", robot.getColour());
    }

    @Test
    public void testRobotBattery() {
        Robot robot = new Robot("C3PO", "Gold");
        assertEquals(100.0, robot.getBatteryLevel(), 0.01);
    }

    @Test
    public void testRobotCanMakeDrink() {
        Robot robot = new Robot("C3PO", "Gold");
        assertEquals("I am making tea", robot.makeDrink("tea"));
        assertEquals(90.0, robot.getBatteryLevel(), 0.01);
    }

    @Test
    public void testRobotCanWashDishes() {
        Robot robot = new Robot("C3PO", "Gold");
        assertEquals("I am washing the dishes", robot.washTheDishes());
        assertEquals(70.0, robot.getBatteryLevel(), 0.01);
    }

    @Test
    public void testRobotCanDust() {
        Robot robot = new Robot("C3PO", "Gold");
        assertEquals("I am dusting", robot.doTheDusting());
    }

    @Test
    public void testRobotCanRecharge() {
        Robot robot = new Robot("C3PO", "Gold");
        assertEquals(100.0, robot.getBatteryLevel(), 0.01);
    }
}
