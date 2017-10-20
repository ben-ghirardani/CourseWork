import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class VehicleTest {
  Car car;
  Motorbike motorbike;

  @Before
  public void before(){
    car = new Car(4);
    motorbike = new Motorbike();
  }


  @Test
  public void carCanStartEngine(){
    assertEquals("Vrm! I am Car!", car.startEngine());
  }

  @Test
  public void motorbikeCanStartEngine(){
    assertEquals("Vrm!", motorbike.startEngine());
  }


}