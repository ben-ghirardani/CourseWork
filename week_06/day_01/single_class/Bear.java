import java.util.*;

class Bear{
  private String name;
  private int age;
  private double weight;
  private char gender;
  private ArrayList<Edible> belly;


  public Bear(String name, int age, double weight, char gender){
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
    this.belly = new ArrayList<Edible>();
  }

  public String getName(){
    return this.name;
  }

  public void setName(String newName){
    this.name = newName;
  }
  public int getAge(){
    return this.age;
  }

  public double getWeight(){
    return this.weight;
  }

  public boolean readyToHibernate(){
    if(this.weight > 80) return true;
    else return false;
  }

  public int foodCount() {
    return this.belly.size();
  }

  public void eat(Edible food) {
   this.belly.add(food);
  }


  public void sleep() {
    this.belly.clear();
  }

  public Edible throwUp() {
    if(foodCount() > 0) {
      return belly.remove(0);
    }
    return null;
  }

}