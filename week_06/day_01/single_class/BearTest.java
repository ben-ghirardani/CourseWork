import static org.junit.Assert.*;
import org.junit.*;

public class BearTest {

  Bear bear;
  Salmon salmon;
  Human human;

  @Before
  public void before(){
    bear = new Bear("Baloo", 25, 95.62, 'm');
    salmon = new Salmon();
  }

  @Test
  public void hasName(){
  assertEquals("Baloo", bear.getName() );
  }

  @Test
  public void hasAge(){
    assertEquals(25, bear.getAge());
  }

  @Test
  public void hasWeight(){
    assertEquals(95.62, bear.getWeight(), 0.01);
  }

  @Test
  public void readyToHibernateIfGreaterThan80(){
    assertEquals(true, bear.readyToHibernate());
  }
  
  @Test
  public void notReadyToHibernateIfLessThan80(){
    Bear thinBear = new Bear("Sheila", 30, 20.05, 'f');
    assertEquals(false, thinBear.readyToHibernate());
  }

  @Test
  public void bellyStartsEmpty(){
    assertEquals(0, bear.foodCount());
  }

  @Test
  public void canEat(){
    bear.eat(salmon);
    bear.eat(human);
    assertEquals(2, bear.foodCount());
  }


  @Test
  public void shouldEmptyBellyAfterSleeping(){
    bear.eat(salmon);
    bear.sleep();
    assertEquals(0, bear.foodCount());
  }

  @Test
  public void canThrowUp(){
    bear.eat(salmon);
    Edible edibleFood = bear.throwUp();
    assertNotNull(edibleFood);
  }

  public void canGetOriginalHuman(){
    bear.eat(human);
    Human edibleFood = (Human) bear.throwUp();
    assertEquals("Ni Hao", edibleFood.speak());
  }


}